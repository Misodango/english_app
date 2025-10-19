# Firebase 移行 & 環境分離プラン

このメモは Firebase Hosting への移行と、本番／ステージング環境の振る舞い差分を整理して実装するためのチェックリストです。

## 実装側 TODO（今回対応）

- [x] `VUE_APP_ENABLE_SETTINGS` フラグを導入し、`false` のときは `/settings` ルートや関連 UI を隠す。
- [x] `VUE_APP_ENABLE_SETTINGS` の値をステージング／本番ビルドで出し分けられるよう GitHub Actions を更新する。
- [x] フラグ値の例を `.env.example` に追記して、ローカル開発で明示的に制御できるようにする。

## 今後の実装候補

- [ ] 管理専用アプリ（仮称: `english-app-admin`）のエントリーポイントを切り出し、Firebase Hosting の `admin` ターゲットにデプロイできるようにする。

## Firebase コンソール／CLI で必要な設定

- [ ] Firebase Hosting にステージング用サイト (`english-app-pbl-staging` など) を作成。
- [ ] `firebase target:apply hosting staging <staging-site-id>` でステージングターゲットを割り当て。
- [ ] 管理用アプリを公開する追加 Hosting サイト (`english-app-pbl-admin` など) を作成し、`firebase target:apply hosting admin <admin-site-id>` で割り当て。
- [ ] GitHub Secrets `FIREBASE_SERVICE_ACCOUNT_ENGLISH_APP_PBL` に Hosting（本番／ステージング／管理）へデプロイ可能なサービスアカウント JSON を設定。
- [ ] （任意）Firebase Auth で管理者ロールを設定し、管理アプリのみアクセス可能なルール案を検討。
