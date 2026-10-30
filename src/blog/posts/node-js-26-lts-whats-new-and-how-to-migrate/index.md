On 20 October 2026, Node.js 24 moved into Maintenance. Eight days later, Node.js 26 took its place as the [Long Term Support](https://ciunkos.com/glossary/lts-and-end-of-life) line. If you run Node in production, 26 is now the version new projects should start on, and the one your existing apps will land on over the next year.

> [!WARNING]
> I'm not involved in the Node.js project. This post summarizes the official release notes, changelogs and docs, and links to them throughout.

This release is bigger than the version number suggests. JavaScript finally gets a date API you can trust, and several helpers you install from npm today move into Node itself. This migration guide covers what changed since Node.js 24, what can break when you upgrade, and how to fix each break, usually with a single command.

> TL;DR: Node.js 26.13.0 'Lithium' became the Active LTS release on 28 October 2026 and is supported until 30 April 2029. It turns on the Temporal date API by default, ships V8 14.6 and adds built-in `debounce`, `throttle` and UUIDv7. Most apps upgrade with a version bump and a rebuild of native addons.

## Release schedule {#schedule}

[Node.js 26.13.0 'Lithium'](https://nodejs.org/en/blog/release/v26.13.0) is the same code as 26.12.1 with the [LTS](https://ciunkos.com/glossary/lts-and-end-of-life) label switched on. If you've been testing on 26 already, nothing new will surprise you. You can check which line you're on:

```javascript
console.log(process.version, process.release.lts)
// v26.13.0 Lithium
```

The [Node.js release schedule](https://github.com/nodejs/Release) puts every recent line here:

- Node.js 26 is Active LTS until 20 October 2027, then gets maintenance fixes until its end of life on 30 April 2029.
- Node.js 24 has been in Maintenance since 20 October 2026, which means security and critical bug fixes only, until 30 April 2028.
- Node.js 25, the short-lived odd release in between, reached end of life in June 2026.

You have a year and a half before Node.js 24 stops getting security patches, so nobody needs to upgrade tonight. But staying on 24 means waiting for Temporal, `using` cleanup and the new permission flags. And since 26 includes everything that shipped in 25, the jump covers two releases' worth of changes.

## Temporal is here {#temporal}

![After 31 years of new Date(), JavaScript gets a real date and time API](./images/temporal.jpg)

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) has been JavaScript's most apologized-for API since 1995. It's mutable, so passing a date into a function can change it behind your back. It only knows two time zones, UTC and whatever the server happens to run in. And it can't represent a plain calendar date, like a birthday, without inventing a time of day and a time zone you never asked for.

[Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) fixes all three. Its values are immutable, it takes time zones by name, and it has separate types for separate ideas: `PlainDate` for a calendar day, `ZonedDateTime` for a moment in a specific place, `Duration` for a span of time. In Node.js 26 it's a global, on by default:

```javascript
const release = Temporal.PlainDate.from('2026-10-28')
const endOfLife = Temporal.PlainDate.from('2029-04-30')

release.until(endOfLife, { largestUnit: 'years' }).toString()
// 'P2Y6M2D' - 2 years, 6 months and 2 days

const meeting = Temporal.ZonedDateTime.from('2026-10-30T15:00[Europe/Warsaw]')
meeting.withTimeZone('America/Los_Angeles').toPlainTime().toString()
// '07:00:00'

Temporal.Duration.from({ hours: 1, minutes: 90 })
  .round({ largestUnit: 'hours' })
  .toString()
// 'PT2H30M'
```

Node.js itself has started using it. Since 26.2.0, [file stats](https://nodejs.org/docs/latest-v26.x/api/fs.html#class-fsstats) come with `Temporal.Instant` fields next to the old `Date` ones:

```javascript
import { statSync } from 'node:fs'

const { mtimeInstant } = statSync('package.json')
mtimeInstant instanceof Temporal.Instant // true
```

If your app pulls in `date-fns`, `dayjs` or `luxon` only for time zones and date math, try Temporal first. On the server, you may not need the dependency anymore. The [Temporal cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html) has recipes for the common cases.

## What's new since Node.js 24 {#whats-new}

Node.js 26 ships V8 14.6 (Node.js 24 had 13.6) and [Undici](https://github.com/nodejs/undici) 8 behind the built-in [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch), with npm still on version 11. I've left out features that were backported to Node.js 24 along the way, like stable [TypeScript type stripping](https://nodejs.org/docs/latest-v26.x/api/typescript.html#type-stripping) and the portable [compile cache](https://nodejs.org/docs/latest-v26.x/api/module.html#module-compile-cache). Everything below is new to you if you're coming from 24.

### New in V8 14.6 {#v8}

You've written this loop a hundred times: look up a key, check whether it's there, set a default, then update it. V8 14.6 gives `Map` and `WeakMap` a method for exactly that, [`getOrInsert()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsert):

```javascript
const hits = new Map()
for (const path of ['/', '/blog', '/']) {
  hits.set(path, hits.getOrInsert(path, 0) + 1)
}
// Map(2) { '/' => 2, '/blog' => 1 }

const postsByAuthor = new Map()
for (const post of posts) {
  postsByAuthor.getOrInsertComputed(post.author, () => []).push(post)
}
```

[`getOrInsertComputed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed) only calls the factory when the key is missing, so you don't build an empty array on every iteration.

[`Iterator.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/concat) stitches several iterables into one lazy iterator. Nothing is copied, and you can chain the [iterator helpers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) straight onto it:

```javascript
function* drafts() {
  yield 'draft-1'
}

Iterator.concat(['a', 'b'], drafts())
  .map(name => name.toUpperCase())
  .toArray()
// ['A', 'B', 'DRAFT-1']
```

And `Uint8Array` can now convert to and from base64 and hex on its own, with [`fromBase64()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64) and [`toHex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex). That matters for code shared between the browser and the server, where `Buffer` doesn't exist on one side:

```javascript
const bytes = Uint8Array.fromBase64('SGVsbG8sIE5vZGUgMjY=')
new TextDecoder().decode(bytes) // 'Hello, Node 26'
bytes.toHex() // '48656c6c6f2c...'
new Uint8Array([1, 255]).toBase64() // 'Af8='
```

The V8 upgrade also made [`JSON.stringify` faster](https://v8.dev/blog/json-stringify) for plain objects. You don't have to change any code to get that one.

### debounce, throttle and UUIDv7 {#helpers}

Three helpers you probably install from npm today now ship with Node.js: [debounce](https://developer.mozilla.org/en-US/docs/Glossary/Debounce) and [throttle](https://developer.mozilla.org/en-US/docs/Glossary/Throttle) in `node:util`, and [UUIDv7](https://nodejs.org/docs/latest-v26.x/api/crypto.html#cryptorandomuuidv7options) in `node:crypto`:

```javascript
import { debounce, throttle } from 'node:util'
import { randomUUIDv7 } from 'node:crypto'

// each call returns a promise for the result of the last call
const save = debounce(async text => api.save(text), 500)

// time-ordered UUIDs, so new rows sort to the end of a database index
randomUUIDv7() // '01a18c3b-414f-76ff-9865-53facb82bd1e'
```

Unlike the [lodash version](https://lodash.com/docs/#debounce), the Node.js debounced function returns a promise. It also has a `leading` option, `cancel()` and `flush()`, and accepts an `AbortSignal`. Read the [`util.debounce()`](https://nodejs.org/docs/latest-v26.x/api/util.html#utildebouncefn-wait-options) and [`util.throttle()`](https://nodejs.org/docs/latest-v26.x/api/util.html#utilthrottlefn-limit-interval-options) docs before you swap them in.

UUIDv7 deserves a closer look if you use UUIDs as primary keys. A random v4 UUID lands somewhere in the middle of the index on every insert. A [v7 UUID](https://www.rfc-editor.org/rfc/rfc9562.html#name-uuid-version-7) starts with a timestamp, so new rows go to the end, the cheapest place to insert into a B-tree index.

Two smaller additions: [`util.styleText()`](https://nodejs.org/docs/latest-v26.x/api/util.html#utilstyletextformat-text-options) accepts hex colors (`styleText('#ff8800', 'warning')`), and `node:zlib` can read and write ZIP archives with [`ZipFile`](https://nodejs.org/docs/latest-v26.x/api/zlib.html#class-zlibzipfile) and `ZipBuffer`.

### Cleanup with using {#using}

An exception that skips a `close()` call leaks a server or a database handle, and leaked handles are a classic reason a test run hangs. Node.js 26 supports [`using`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/using) and [`await using`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/await_using) across its APIs. Servers, SQLite databases and statements, and module hooks close themselves when the block ends, even if it ends with an error:

```javascript
import { createServer } from 'node:http'
import { Database } from 'node:sqlite'

{
  using db = new Database(':memory:')
  db.exec('create table posts (title text)')
  // db.close() runs here, even if exec() threw
}

{
  await using server = createServer(handler)
  await new Promise(resolve => server.listen(3000, resolve))
  await runTests()
  // the server closes here
}
```

In 26.11.0, [`node:sqlite`](https://nodejs.org/docs/latest-v26.x/api/sqlite.html) renamed `DatabaseSync` to `Database` and `StatementSync` to `Statement`. The old names still work as deprecated aliases.

Incoming HTTP requests also got [`req.signal`](https://nodejs.org/docs/latest-v26.x/api/http.html#messagesignal), an [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that fires when the client disconnects. Pass it to `fetch()` or a database query, and work for a user who already closed the tab stops on its own.

### Web Storage {#web-storage}

[`localStorage` and `sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) no longer need a flag. `sessionStorage` lives in memory for the life of the process. `localStorage` persists to a file you choose:

```bash
node --localstorage-file=./storage.db app.js
```

```javascript
localStorage.setItem('theme', 'dark')
localStorage.getItem('theme') // 'dark', and still 'dark' after a restart
```

[`ErrorEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent) is a global now, and an experimental Web Worker API sits behind `--experimental-web-worker` for code that has to run in both environments. One catch with `localStorage` on the server is covered in [the breaking changes](#localstorage).

### Permission model {#permissions}

The [permission model](https://nodejs.org/docs/latest-v26.x/api/permissions.html) can now restrict network access with `--allow-net` and the inspector with `--allow-inspector`. The friendliest addition is [`--permission-audit`](https://nodejs.org/docs/latest-v26.x/api/cli.html#--permission-audit). It logs everything that would be denied without blocking anything, so you can learn what your app needs before you enforce it:

```bash
# see what would be denied, without breaking anything
node --permission-audit app.js

# then lock it down
node --permission --allow-fs-read=./ --allow-net app.js
```

Since 26.3.0, a process running under the permission model can also give up permissions at runtime with `process.permission.drop()`. Read your config files at startup, drop file system access, and a later bug can't read anything else from disk.

### Tooling and experiments {#tooling}

- `node --test --test-randomize` runs tests in random order, which exposes tests that only pass because another test ran first. The [test runner](https://nodejs.org/docs/latest-v26.x/api/test.html) can also mark tests as expected to fail, and `context.log()` writes into the test report.
- `node --build-sea=sea-config.json` builds a [single executable application](https://nodejs.org/docs/latest-v26.x/api/single-executable-applications.html) in one step, and SEA now supports ESM entry points.
- [`--process-timeout=30s`](https://nodejs.org/docs/latest-v26.x/api/cli.html#--process-timeoutduration) stops a process that is still running after 30 seconds with exit code 124, like `timeout(1)`, and first prints which handles kept it alive. Handy for scripts and CI jobs that finish their work and then hang.
- [Subpath imports](https://nodejs.org/docs/latest-v26.x/api/packages.html#subpath-imports) can start with `#/`, so `#/utils/date.js` can map straight onto your `src` folder.
- Alpine Linux moved to tier 2 support in 26.11.0, and nodejs.org now publishes an official `linux-x64-musl` build next to the glibc ones.
- Behind experimental flags: [`node:ffi`](https://nodejs.org/docs/latest-v26.x/api/ffi.html) for calling native libraries without writing a C++ addon, `node:vfs` for virtual file systems, `node:bench` for benchmarks, and an iterable streams API.

## Breaking changes {#breaking-changes}

Most applications upgrade without touching their code. The common breaks when upgrading from Node.js 24 to 26 are a missing `libatomic` on slim Linux images, Corepack no longer being bundled, native addons that need a rebuild, and removed APIs like `SlowBuffer`. They're listed from most to least likely to hit you, each with the error you'll see.

### libatomic on Linux {#libatomic}

Since Node.js 25, the official Linux binaries link against `libatomic`. The official [`node:26` Docker images](https://github.com/nodejs/docker-node) (Debian slim and Alpine) already install it. Custom images, distroless setups and machines where you unpack the tarball yourself may not, and there `node` exits before running a line of your code:

```text
node: error while loading shared libraries: libatomic.so.1: cannot open shared object file: No such file or directory
```

Install it in your image:

```bash
# Debian, Ubuntu
apt-get install -y libatomic1

# Fedora, RHEL
dnf install -y libatomic

# Alpine
apk add libatomic
```

### Corepack is gone {#corepack}

Node.js 25 stopped shipping [Corepack](https://github.com/nodejs/corepack). If your CI or Dockerfile runs `corepack enable` to get pnpm or Yarn, the command no longer exists. Install it from npm first:

```bash
npm install --global corepack
corepack enable
```

Or skip Corepack and install the package manager directly with `npm install --global pnpm`.

### Native addons {#native-addons}

The native module ABI (`NODE_MODULE_VERSION`) moved from 137 in Node.js 24 to 147, per the [ABI version registry](https://github.com/nodejs/node/blob/main/doc/abi_version_registry.json). An addon built for 24 fails to load with a message like this:

```text
was compiled against a different Node.js version using
NODE_MODULE_VERSION 137. This version of Node.js requires
NODE_MODULE_VERSION 147.
```

Delete `node_modules` and install again, or rebuild in place:

```bash
npm rebuild
```

If a package has no build for Node.js 26 yet, update it. If it's abandoned, look for a pure JavaScript or WebAssembly replacement.

### Removed APIs {#removed-apis}

These were [deprecated](https://nodejs.org/docs/latest-v26.x/api/deprecations.html) for years and are now gone. Each has a one-line fix, and most have an [official codemod](https://github.com/nodejs/userland-migrations) that makes the change for you.

Start with the `fs` access constants, because this one fails silently. `fs.R_OK`, `fs.W_OK` and `fs.X_OK` are now `undefined`, and `fs.accessSync(file, undefined)` only checks that the file exists. A permission check that used them still passes on Node.js 26, even for a read-only file. Move to [`fs.constants`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0176):

```javascript
// before: on Node.js 26 this passes even if the file is read-only
fs.accessSync(file, fs.W_OK)
// after
fs.accessSync(file, fs.constants.W_OK)
```

```bash
npx codemod@latest @nodejs/fs-access-mode-constants
```

[`SlowBuffer`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0030) is gone, and code using it throws `TypeError: SlowBuffer is not a constructor`. Use `Buffer.allocUnsafeSlow()`:

```bash
npx codemod@latest @nodejs/slow-buffer-to-buffer-alloc-unsafe-slow
```

The [`recursive` option of `fs.rmdir()`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0147) now throws `The property 'options.recursive' is no longer supported`. Use `fs.rm()`:

```javascript
// before
fs.rmdirSync(dir, { recursive: true })
// after
fs.rmSync(dir, { recursive: true, force: true })
```

```bash
npx codemod@latest @nodejs/rmdir
```

The [internal `_stream_*` modules](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0193), like `_stream_readable` and `_stream_writable`, are gone too. You'll rarely find these in your own code. When you see `Cannot find module '_stream_readable'`, an old dependency needs an update:

```javascript
// before
const Readable = require('_stream_readable')
// after
const { Readable } = require('node:stream')
```

[`response.writeHeader()`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0063) was never documented, but old code still calls it, and it now throws `res.writeHeader is not a function`. Use `response.writeHead()`.

Also removed: `assert.CallTracker` (use `mock.fn()` from `node:test`), the `multipleResolves` process event, `assert.fail()` with more than one argument, the callback of `worker.terminate()` (it returns a promise) and creating `node:repl` classes without `new`.

### TypeScript flag removed {#typescript}

Running `.ts` files directly still works, because type stripping is stable. What's gone is the flag that also transformed enums, namespaces and parameter properties:

```text
$ node --experimental-transform-types app.ts
node: bad option: --experimental-transform-types
```

Without it, Node.js rejects that syntax with `ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`. You have two ways out. Replace enums with plain objects and turn on [`erasableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly) in `tsconfig.json`, so the compiler flags anything Node.js can't strip. Or compile with `tsc`, `tsx` or `esbuild` before running.

```typescript
// before
enum Status {
  Draft,
  Published
}

// after
const Status = { Draft: 0, Published: 1 } as const
type Status = typeof Status[keyof typeof Status]
```

### module.register() {#module-register}

Custom loaders registered with `module.register()` still work, but every run now prints [`DEP0205`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0205). The replacement, [`module.registerHooks()`](https://nodejs.org/docs/latest-v26.x/api/module.html#moduleregisterhooksoptions), runs synchronously on the main thread and handles both `import` and `require()`:

```javascript
import { registerHooks } from 'node:module'

registerHooks({
  resolve(specifier, context, nextResolve) {
    return nextResolve(specifier, context)
  },
  load(url, context, nextLoad) {
    return nextLoad(url, context)
  }
})
```

If the loader comes from a tool like `tsx` or your test runner, updating the tool is usually enough.

### localStorage on the server {#localstorage}

With Web Storage on by default, `globalThis` has a [`localStorage`](https://nodejs.org/docs/latest-v26.x/api/globals.html#localstorage) property on the server. Unless you pass `--localstorage-file`, its value is `undefined`, and Node.js prints a warning that `localStorage is not available`. Code that detects the browser by checking for the property now takes the wrong branch:

```javascript
// breaks on Node.js 26: the property exists, but the value is undefined
if ('localStorage' in globalThis) {
  localStorage.getItem('token')
}

// works
if (typeof window !== 'undefined') {
  localStorage.getItem('token')
}
```

Check your test setup too, whether it mocks `localStorage` with something like `jest-localstorage-mock` or runs tests in a jsdom environment. If you don't want Web Storage on the server at all, run Node.js with `--no-experimental-webstorage`.

### Smaller changes {#smaller-changes}

- `assert.deepStrictEqual()` and `util.isDeepStrictEqual()` now fail when comparing two different promises, and treat two invalid dates as equal.
- `crypto.createHash('shake256')` without an `outputLength` prints a [`DEP0198`](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0198) deprecation warning, so pass the length explicitly.
- Passing a Web Crypto `CryptoKey` to `node:crypto` functions like `createHmac()` or `sign()` is [deprecated](https://nodejs.org/docs/latest-v26.x/api/deprecations.html#DEP0203) and will throw in a future version.
- AES-GCM decryption with an authentication tag shorter than 16 bytes needs an explicit `authTagLength`.
- In `node:test` module mocks, `defaultExport` and `namedExports` merged into a single `exports` option, and the [`@nodejs/mock-module-exports`](https://github.com/nodejs/userland-migrations/tree/main/recipes/mock-module-exports) codemod updates your tests for you.
- Building Node.js from source needs GCC 13.2 and Python 3.10 or newer, and Power 8 and z13 CPUs are no longer supported.
- The project has warned that macOS universal binaries, with Intel and Apple Silicon in one file, may not last for the whole life of Node.js 26 as Apple drops Intel support.

## Upgrade checklist {#checklist}

1. Bump the version everywhere it's pinned: `.nvmrc`, `.node-version`, the `engines` field in `package.json`, your Dockerfile (`FROM node:26`) and the CI matrix.
2. If you use TypeScript, bump `@types/node` to 26 and use TypeScript 6 or newer with `"lib": ["esnext"]`, which includes the Temporal types.
3. Install [`libatomic`](#libatomic) on Linux machines and images that lack it.
4. Replace `corepack enable` with a [global install](#corepack), if you use Corepack.
5. Delete `node_modules`, install again, and let [native addons](#native-addons) rebuild.
6. Run the official codemods for the [removed APIs](#removed-apis), and search for `fs.R_OK`, `fs.W_OK` and `fs.X_OK` by hand, since those fail silently.
7. Run your tests with `node --throw-deprecation`, so every deprecation fails loudly instead of scrolling past in the logs.
8. Deploy to staging and watch for `DeprecationWarning` and `ExperimentalWarning` before you go to production.

For most codebases, that's an afternoon: a version bump, a rebuild and a couple of updated dependencies. In return, you get security support until 30 April 2029.

## FAQ {#faq}

### Is Node.js 26 an LTS release? {#faq-lts}

Yes. Node.js 26 became the Active LTS release with version 26.13.0 'Lithium' on 28 October 2026. It stays in Active LTS until 20 October 2027 and receives maintenance fixes until its end of life on 30 April 2029.

### When does Node.js 24 reach end of life? {#faq-node-24-eol}

Node.js 24 moved to Maintenance on 20 October 2026 and reaches end of life on 30 April 2028. Until then it gets security and critical bug fixes only, with no new features.

### Should I upgrade from Node.js 24 to 26 now? {#faq-upgrade-now}

Start new projects on Node.js 26 today. For existing apps, plan the upgrade within the next few months rather than waiting for April 2028. Most apps only need a version bump, rebuilt native addons and a check for removed APIs such as `fs.R_OK`, `SlowBuffer` and the `recursive` option of `fs.rmdir()`.

### Is Temporal available in Node.js 26 without a flag? {#faq-temporal}

Yes. Temporal is enabled by default in Node.js 26 and available as a global, with no flag or import needed. File stats also expose `Temporal.Instant` fields, such as `mtimeInstant`, since 26.2.0.

### What breaks when upgrading from Node.js 24 to 26? {#faq-breaking}

The most common breaks are a missing `libatomic` library on slim Linux images, Corepack no longer being bundled, native addons that need a rebuild for `NODE_MODULE_VERSION` 147, removed APIs like `SlowBuffer` and `fs.R_OK`, and the removed `--experimental-transform-types` flag for TypeScript.

### Do I need to rebuild native modules for Node.js 26? {#faq-native-modules}

Yes. Node.js 26 uses `NODE_MODULE_VERSION` 147, while Node.js 24 used 137, so addons compiled for 24 won't load. Run `npm rebuild` or reinstall your dependencies, and update any package that has no Node.js 26 build yet.

## Need a hand? {#hire}

Upgrading a large or long-lived Node.js codebase is where these changes pile up: native addons, custom loaders, old dependencies on removed internals, and a CI matrix with five places to bump. That's the kind of work I take on for clients. If you'd rather hand it off, [see how I work](https://ciunkos.com/hire-me).

## Sources {#sources}

- [Node.js 26.13.0 'Lithium' (LTS) release](https://nodejs.org/en/blog/release/v26.13.0)
- [Node.js 26.0.0 release](https://nodejs.org/en/blog/release/v26.0.0)
- [Node.js 25.0.0 release](https://nodejs.org/en/blog/release/v25.0.0)
- [Node.js 26 changelog](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V26.md)
- [Deprecated APIs](https://nodejs.org/docs/latest-v26.x/api/deprecations.html)
- [Official codemods](https://github.com/nodejs/userland-migrations)
- [Temporal documentation](https://tc39.es/proposal-temporal/docs/)
