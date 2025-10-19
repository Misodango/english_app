# Firebase 移行 & 環境分離プラン

このメモは Firebase Hosting への移行と、本番／ステージング環境の振る舞い差分を整理して実装するためのチェックリストです。

## 実装側 TODO（今回対応）

- [x] `VUE_APP_ENABLE_SETTINGS` フラグを導入し、`false` のときは `/settings` ルートや関連 UI を隠す。
- [x] `VUE_APP_ENABLE_SETTINGS` の値をステージング／本番ビルドで出し分けられるよう GitHub Actions を更新する。
- [x] フラグ値の例を `.env.example` に追記して、ローカル開発で明示的に制御できるようにする。
- [x] `.firebaserc` とデプロイスクリプトを更新し、`staging` プロジェクトを明示的に指定できるようにする。
- [x] GitHub Actions でステージング用 Firebase プロジェクト ID と API キー群を読み込む。

### Firebase プロジェクトを複数扱うときのメモ

- `.firebaserc` の `projects` に任意のキー（例: `production`, `staging`）を追加し、それぞれの Firebase プロジェクト ID を割り当てれば 1 リポジトリで複数プロジェクトを切り替えられる。
- `firebase.json` の Hosting `target` はプロジェクト横断で再利用できるので、`firebase target:apply hosting staging <staging-site-id>` のようにプロジェクトごとに接続を張る。
- CLI では `firebase deploy --project staging --only hosting:staging` のように `--project` オプションで明示的に使い分けると安全。
- CI ではサービスアカウント JSON の `project_id` または `FIREBASE_PROJECT_ID` を環境ごとに設定し、`FirebaseExtended/action-hosting-deploy` の `projectId` に詰めれば自動で正しいプロジェクトにデプロイされる。
- プロジェクト内で「アプリを追加」しても Firestore や Authentication は共有のため、環境ごとにデータを分離したい場合はプロジェクトを分けるか、データベース側でプレフィックス管理などの運用ルールを設ける必要がある。

## 今後の実装候補

- [ ] 管理専用アプリ（仮称: `english-app-admin`）のエントリーポイントを切り出し、Firebase Hosting の `admin` ターゲットにデプロイできるようにする。

## Firebase コンソール／CLI で必要な設定

- [x] ステージング用 Firebase プロジェクト (`stg-english-app-pbl`) を作成。
- [ ] ステージングプロジェクトで Hosting サイトを作成（例: `stg-english-app-pbl`）し、`firebase target:apply hosting staging <staging-site-id>` でターゲットを割り当て。
- [ ] 管理用アプリを公開する追加 Hosting サイト (`english-app-pbl-admin` など) を作成し、`firebase target:apply hosting admin <admin-site-id>` で割り当て。
- [ ] GitHub Secrets に本番用 (`FIREBASE_SERVICE_ACCOUNT_ENGLISH_APP_PBL`) とステージング用 (`FIREBASE_SERVICE_ACCOUNT_STG_ENGLISH_APP_PBL`) のサービスアカウント JSON を登録。
- [ ] GitHub Secrets に `VUE_APP_FIREBASE_*_PROD` / `VUE_APP_FIREBASE_*_STG` などビルド時に必要なキーを登録。
- [ ] （任意）Firebase Auth で管理者ロールを設定し、管理アプリのみアクセス可能なルール案を検討。

### Bigtable / Firestore 等のデータ分離

- 本番は `english-app-pbl`、ステージングは `stg-english-app-pbl` の Firestore を利用する。環境ごとに `VUE_APP_FIREBASE_*` を切り替えればクライアント側で参照先が分かれる。
- ローカルでステージング値を使いたい場合は `.env.staging` を用意し、`vue-cli-service build --mode staging` を利用するか、環境変数をシェル側でエクスポートする。
