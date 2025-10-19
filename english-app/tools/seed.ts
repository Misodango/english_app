import { readFileSync } from "fs";
import { resolve } from "path";
import { initializeApp, cert, deleteApp, App } from "firebase-admin/app";
import { getFirestore, Firestore, WriteBatch } from "firebase-admin/firestore";

type SeedOptions = {
  sourceCredential: string;
  targetCredential: string;
  collection: string;
  batchSize: number;
  merge: boolean;
  truncate: boolean;
  dryRun: boolean;
};

type ParsedArgs = Record<string, string | boolean>;

const DEFAULT_BATCH_SIZE = 400;

function parseArgs(): SeedOptions {
  const rawArgs = process.argv.slice(2);
  const parsed: ParsedArgs = {};

  for (let i = 0; i < rawArgs.length; i++) {
    const current = rawArgs[i];
    const next = rawArgs[i + 1];
    if (current.startsWith("--")) {
      const key = current.replace(/^--/, "");
      if (typeof next !== "undefined" && !next.startsWith("--")) {
        parsed[key] = next;
        i++;
      } else {
        parsed[key] = true;
      }
    }
  }

  const sourceCredential = String(parsed.source ?? parsed.from ?? "");
  const targetCredential = String(parsed.target ?? parsed.to ?? "");
  const collection = String(parsed.collection ?? "analyzedSentences");
  const batchSize = Number(parsed.batchSize ?? DEFAULT_BATCH_SIZE);
  const merge = Boolean(parsed.merge ?? false);
  const truncate = Boolean(parsed.truncate ?? false);
  const dryRun = Boolean(parsed["dry-run"] ?? parsed.dryrun ?? parsed.dry ?? false);

  if (!sourceCredential || !targetCredential) {
    console.error(
      "Usage: ts-node tools/seed.ts --source <source-service-account.json> --target <target-service-account.json> [--collection analyzedSentences] [--batch-size 400] [--merge] [--truncate] [--dry-run]"
    );
    process.exit(1);
  }

  if (Number.isNaN(batchSize) || batchSize <= 0 || batchSize > 500) {
    console.error("`--batch-size` must be a number between 1 and 500.");
    process.exit(1);
  }

  return {
    sourceCredential,
    targetCredential,
    collection,
    batchSize,
    merge,
    truncate,
    dryRun,
  };
}

function loadServiceAccount(filePath: string) {
  const resolvedPath = resolve(process.cwd(), filePath);
  try {
    const raw = readFileSync(resolvedPath, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Failed to read service account at ${resolvedPath}`);
    throw error;
  }
}

async function deleteCollection(db: Firestore, collection: string, batchSize: number) {
  const snapshot = await db.collection(collection).get();
  if (snapshot.empty) {
    return;
  }

  let batch = db.batch();
  let counter = 0;
  for (const doc of snapshot.docs) {
    batch.delete(doc.ref);
    counter++;
    if (counter === batchSize) {
      await batch.commit();
      batch = db.batch();
      counter = 0;
    }
  }

  if (counter > 0) {
    await batch.commit();
  }
}

async function copyCollection(
  sourceDb: Firestore,
  targetDb: Firestore,
  options: SeedOptions
) {
  const snapshot = await sourceDb.collection(options.collection).get();

  if (snapshot.empty) {
    console.warn(`No documents found in source collection "${options.collection}".`);
    return;
  }

  console.log(`Found ${snapshot.size} documents in "${options.collection}".`);

  if (options.dryRun) {
    console.log("Dry run enabled. No writes will be performed.");
    return;
  }

  if (options.truncate) {
    console.log(`Truncating target collection "${options.collection}" before copy...`);
    await deleteCollection(targetDb, options.collection, options.batchSize);
  }

  let batch: WriteBatch = targetDb.batch();
  let counter = 0;
  let total = 0;

  for (const doc of snapshot.docs) {
    const targetRef = targetDb.collection(options.collection).doc(doc.id);

    if (options.merge) {
      batch.set(targetRef, doc.data(), { merge: true });
    } else {
      batch.set(targetRef, doc.data());
    }

    counter++;
    total++;

    if (counter === options.batchSize) {
      await batch.commit();
      console.log(`Committed batch (${total}/${snapshot.size}).`);
      batch = targetDb.batch();
      counter = 0;
    }
  }

  if (counter > 0) {
    await batch.commit();
    console.log(`Committed final batch (${total}/${snapshot.size}).`);
  }

  console.log(
    `Copied ${total} document(s) from "${options.collection}" to the target project.`
  );
}

async function main() {
  const options = parseArgs();

  const sourceCredentials = loadServiceAccount(options.sourceCredential);
  const targetCredentials = loadServiceAccount(options.targetCredential);

  let sourceApp: App | undefined;
  let targetApp: App | undefined;

  try {
    sourceApp = initializeApp(
      { credential: cert(sourceCredentials) },
      "source"
    );
    targetApp = initializeApp(
      { credential: cert(targetCredentials) },
      "target"
    );

    const sourceDb = getFirestore(sourceApp);
    const targetDb = getFirestore(targetApp);

    await copyCollection(sourceDb, targetDb, options);
  } catch (error) {
    console.error("Failed to seed Firestore:", error);
    process.exitCode = 1;
  } finally {
    if (sourceApp) {
      await deleteApp(sourceApp);
    }
    if (targetApp) {
      await deleteApp(targetApp);
    }
  }
}

void main();
