/* Lean PostHog browser SDK for every site on ciunkos.com, built by scripts/vendor-posthog.mjs
   from PostHog's TypeScript source at the commit tagged posthog-js@<version> ('posthog-src/…'),
   so esbuild can tree-shake it. The npm package only ships pre-minified bundles that don't shake.

   Included, matching the project's remote config and what the sites call:
   click autocapture, $pageview/$pageleave, web vitals, exceptions, session replay.
   The rrweb recorder (no player) is PostHog's prebuilt dist/lazy-recorder.js from the npm
   package: the rrweb fork it is built from is not published on npm.
   Left out: feature flags, surveys, toolbar, site apps, web experiments, product tours,
   conversations, logs, metrics, tracing headers, heatmaps, dead clicks, WebMCP and the
   external script loader, so nothing in this file can fetch more code.

   Same contract as PostHog's array.js: init_from_snippet replaces the window.posthog stub
   and replays its queue. */
import { PostHog, init_from_snippet } from 'posthog-src/posthog-core'
import { BrowserAutocapture } from 'posthog-src/browser-autocapture'
import { WebVitalsAutocapture } from 'posthog-src/extensions/web-vitals'
import { ExceptionObserver } from 'posthog-src/extensions/exception-autocapture'
import { PostHogExceptions } from 'posthog-src/posthog-exceptions'
import { SessionRecording } from 'posthog-src/extensions/replay/session-recording'
/* What PostHog's CDN would lazy-load, registered on window.__PosthogExtensions__ up front. */
import 'posthog-src/entrypoints/web-vitals'
import 'posthog-src/entrypoints/exception-autocapture'
import 'posthog-js/dist/lazy-recorder.js'

PostHog.__defaultExtensionClasses = {
  autocapture: BrowserAutocapture,
  webVitalsAutocapture: WebVitalsAutocapture,
  exceptionObserver: ExceptionObserver,
  exceptions: PostHogExceptions,
  sessionRecording: SessionRecording
}
init_from_snippet()
