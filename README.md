# [ciunkos.com](https://ciunkos.com/)

This is my blog and home page.

## Installation

```sh
npm install
```

Running development server:

```sh
npm start
```

Server is located at http://localhost:3000

Running tests:

```sh
npm test
```

## Building

Change `buildPath` in webpack.config.js, then:

```sh
npm run build
```

## PostHog SDK (self-hosted, pinned, lean)

Every site on ciunkos.com loads PostHog from `/vendor/posthog/<build>/posthog.js` (build = `<version>-<sha256 prefix>`) with an SRI
hash, never from PostHog. The Workers' `/ph/*` proxies only pass events and JSON config.

The file is built by `scripts/vendor-posthog.mjs` from `scripts/posthog/entry.ts`: PostHog's
TypeScript source at the commit tagged `posthog-js@<version>` (pinned in `versions.json`), bundled
and tree-shaken with the pinned esbuild. It keeps only what the sites use (click autocapture,
pageviews, web vitals, exceptions, session replay) and has no external script loader, so it can't
fetch more code. Same queue contract as PostHog's `array.js` snippet.

- `posthog-js` is pinned exactly in `package.json`. Dependabot proposes updates weekly, 7 days
  after release. On its PR, `.github/workflows/vendor-posthog.yml` builds and commits the new
  `src/www/vendor/posthog/<build>/`, `versions.json` and `src/utils/posthog-sdk.mjs`.
- Manually: `npm ci --ignore-scripts && npm run vendor:posthog`.
- `node scripts/vendor-posthog.mjs --check --rebuild` proves the vendored file is reproducible.
- Old versions stay in `src/www/vendor/posthog/` until no Worker points at them.
- After the Pages deploy, sync the copies in the other repos and deploy them:
  `node scripts/check-posthog-copies.mjs --fix`.
