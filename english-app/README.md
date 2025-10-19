# english-app

## Project setup
```
yarn install
```

### Environment variables
- Copy `.env.example` to `.env` and fill in project-specific values.
- Use `VUE_APP_ENABLE_SETTINGS` to toggle the `/settings` route (set to `false` for staging builds).

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase hosting

| Environment | Command | Notes |
|-------------|---------|-------|
| Staging | `yarn deploy:staging` | Deploys to the `staging` hosting target. |
| Production | `yarn deploy:production` | Deploys to the `production` hosting target. |

Before the first deployment make sure you have:

1. Logged in with `firebase login`.
2. Created a dedicated staging site (for example `firebase hosting:sites:create english-app-pbl-staging`).
3. Applied the site IDs to the hosting targets with `firebase target:apply hosting staging <your-staging-site-id>`.

Both targets read the build output in `dist`, so run `yarn build` (or let the deploy scripts do it for you) whenever you need fresh artifacts.
