/* vendor-posthog.mjs: the self-hosted PostHog SDK for every site on ciunkos.com.

   Builds scripts/posthog/entry.ts (a lean SDK: only the parts these sites use) with the locked
   esbuild into src/www/vendor/posthog/<id>/posthog.js, served at
   https://ciunkos.com/vendor/posthog/<id>/posthog.js and loaded with an SRI hash.

   Inputs, all pinned:
   - posthog-js from npm (the version locked in package-lock.json, tarball checked by npm ci
     against the lockfile sha512; package.json keeps a ^ range, .npmrc min-release-age=7): the prebuilt rrweb recorder and the dependencies' ESM builds.
   - PostHog's TypeScript source at the commit tagged posthog-js@<version>, fetched with git
     (content-addressed, so the commit SHA in versions.json pins every byte). The npm package
     only ships pre-minified bundles, which esbuild can't tree-shake.
   - esbuild, locked in package-lock.json.

   Every vendored build stays in the repo: a Pages deploy replaces all files, and the Workers
   of the other repos may still point at an older build until they redeploy.
   versions.json lists each build (id <version>-<sha256 prefix>) with its commit and SRI hash; src/utils/posthog-sdk.mjs holds
   the current one and is copied to ~/<repo>/src/shared/posthog-sdk.mjs by check-posthog-copies.mjs.

   node scripts/vendor-posthog.mjs           build and vendor the pinned version
   node scripts/vendor-posthog.mjs --check   verify the pin, files and hashes (no network)
   add --rebuild to --check to rebuild and require byte-identical output (reproducible build)
   add --dist to --check to also verify dist/vendor/posthog (webpack must not rewrite it) */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  rmSync
} from 'node:fs'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const VENDOR = join(ROOT, 'src/www/vendor/posthog')
const MANIFEST = join(VENDOR, 'versions.json')
const MODULE = join(ROOT, 'src/utils/posthog-sdk.mjs')
const ENTRY = join(ROOT, 'scripts/posthog/entry.ts')
const REPO = 'https://github.com/PostHog/posthog-js.git'
const SOURCES = join(ROOT, 'node_modules/.cache/posthog-js-src')
const args = new Set(process.argv.slice(2))
const check = args.has('--check')

const fail = message => {
  console.error(`vendor-posthog: ${message}`)
  process.exit(1)
}
const readJson = file => JSON.parse(readFileSync(file, 'utf8'))
const sri = buffer =>
  `sha384-${createHash('sha384').update(buffer).digest('base64')}`
const git = (cwd, ...gitArgs) =>
  execFileSync('git', gitArgs, { cwd, encoding: 'utf8' }).trim()

const pkg = readJson(join(ROOT, 'package.json'))
/* The pin is the locked version: package.json keeps a ^ range and npm (min-release-age=7 in
   .npmrc) resolves it; npm ci then installs exactly what package-lock.json records. */
const range = pkg.devDependencies?.['posthog-js']
const pin = readJson(join(ROOT, 'package-lock.json')).packages?.[
  'node_modules/posthog-js'
]?.version
if (!range) fail('package.json has no posthog-js devDependency')
if (!/^\d+\.\d+\.\d+$/.test(pin || ''))
  fail(
    `package-lock.json has no posthog-js version (found ${pin}); run npm install`
  )

const manifest = existsSync(MANIFEST)
  ? readJson(MANIFEST)
  : { current: null, versions: {} }

/* The commit tagged posthog-js@<version>; a tag that moved after vendoring is an error. */
const resolveCommit = version => {
  const out = execFileSync(
    'git',
    [
      'ls-remote',
      REPO,
      `refs/tags/posthog-js@${version}`,
      `refs/tags/posthog-js@${version}^{}`
    ],
    { encoding: 'utf8' }
  )
  const refs = Object.fromEntries(
    out
      .trim()
      .split('\n')
      .filter(Boolean)
      .map(line => line.split('\t').reverse())
  )
  const commit =
    refs[`refs/tags/posthog-js@${version}^{}`] ||
    refs[`refs/tags/posthog-js@${version}`]
  if (!/^[0-9a-f]{40}$/.test(commit || ''))
    fail(`no tag posthog-js@${version} in ${REPO}`)
  return commit
}

/* Sparse, shallow checkout of packages/browser at that exact commit. */
const checkout = (commit, version) => {
  const dir = join(SOURCES, commit)
  if (!existsSync(join(dir, '.git'))) {
    rmSync(dir, { recursive: true, force: true })
    mkdirSync(dir, { recursive: true })
    git(dir, 'init', '-q')
    git(dir, 'remote', 'add', 'origin', REPO)
    git(dir, 'config', 'core.sparseCheckout', 'true')
    writeFileSync(
      join(dir, '.git/info/sparse-checkout'),
      'packages/browser/src/\npackages/browser/package.json\n'
    )
    git(
      dir,
      'fetch',
      '-q',
      '--depth',
      '1',
      '--filter=blob:none',
      'origin',
      commit
    )
    git(dir, 'checkout', '-q', 'FETCH_HEAD')
  }
  if (git(dir, 'rev-parse', 'HEAD') !== commit)
    fail(`${dir} is not at ${commit}`)
  if (git(dir, 'status', '--porcelain')) fail(`${dir} has local changes`)
  const sourceVersion = readJson(
    join(dir, 'packages/browser/package.json')
  ).version
  if (sourceVersion !== version)
    fail(
      `source at ${commit} is posthog-js ${sourceVersion}, expected ${version}`
    )
  return join(dir, 'packages/browser/src')
}

const build = async (version, commit) => {
  const installed = readJson(
    join(ROOT, 'node_modules/posthog-js/package.json')
  ).version
  if (installed !== version)
    fail(
      `node_modules has posthog-js ${installed}, pin is ${version}; run npm ci`
    )
  const src = checkout(commit, version)
  const esbuild = await import('esbuild')
  const result = await esbuild.build({
    entryPoints: [ENTRY],
    bundle: true,
    minify: true,
    format: 'iife',
    target: 'es2018',
    legalComments: 'none',
    charset: 'utf8',
    define: { 'process.env.NODE_ENV': '"production"' },
    mainFields: ['module', 'main'],
    alias: { 'posthog-src': src },
    nodePaths: [join(ROOT, 'node_modules')],
    write: false,
    logLevel: 'error'
  })
  const bytes = Buffer.from(result.outputFiles[0].contents)
  const text = bytes.toString('utf8')
  if (
    text.includes('createElement("script")') ||
    text.includes("createElement('script')")
  )
    fail(
      'the bundle can create <script> elements; review the entry before vendoring'
    )
  if (/loadExternalDependency\s*=|loadSiteApp\s*=/.test(text))
    fail(
      'the bundle defines an external script loader; review the entry before vendoring'
    )
  if (!text.includes(`"${version}"`))
    fail(`the bundle does not carry LIB_VERSION ${version}`)
  return { bytes, esbuild: esbuild.version }
}

const licenses = () =>
  [
    'posthog-js',
    '@posthog/core',
    '@posthog/browser-common',
    '@posthog/types',
    'web-vitals',
    'fflate'
  ]
    .map(name => {
      const dir = join(ROOT, 'node_modules', name)
      const file = readdirSync(dir).find(f => /^licen[cs]e/i.test(f))
      const { version } = readJson(join(dir, 'package.json'))
      return file
        ? `${name}@${version}\n\n${readFileSync(
            join(dir, file),
            'utf8'
          ).trim()}\n`
        : `${name}@${version}: see its package.json license field\n`
    })
    .join(`\n${'-'.repeat(72)}\n\n`)

const moduleText = ({ version, src, integrity }) =>
  `/* GENERATED by ciunkos.com/scripts/vendor-posthog.mjs. Do not edit.
   Copies in other repos (src/shared/posthog-sdk.mjs) are synced with
   ciunkos.com/scripts/check-posthog-copies.mjs --fix. */
export const POSTHOG_SDK = ${JSON.stringify(
    { version, src, integrity },
    null,
    2
  ).replace(/"([a-z]+)":/g, '$1:')}
`

/* Builds are keyed by an id, not by the posthog-js version alone: <version>-<first 8 hex of
   sha256>. The served path is immutable for a year, so a rebuild of the same version from
   different inputs (a transitive dependency moved) must get a new URL, or cached copies would
   fail the SRI check. Older ids stay for Workers that still point at them. */
const fileOf = entry => join(ROOT, 'src/www', entry.src)
const builtOf = entry => join(ROOT, 'dist', entry.src)
const versionOf = (id, entry) => entry.version || id
const current = () => manifest.versions[manifest.current]

if (!check) {
  const known = Object.entries(manifest.versions).find(
    ([id, entry]) => versionOf(id, entry) === pin
  )?.[1]
  const commit = known?.commit || resolveCommit(pin)
  const remote = resolveCommit(pin)
  if (remote !== commit)
    fail(
      `tag posthog-js@${pin} moved from ${commit} to ${remote}; investigate before vendoring`
    )
  const { bytes, esbuild } = await build(pin, commit)
  const id = `${pin}-${createHash('sha256').update(bytes).digest('hex').slice(0, 8)}`
  const dir = join(VENDOR, id)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'posthog.js'), bytes)
  writeFileSync(join(dir, 'LICENSE.txt'), licenses())
  manifest.versions[id] = {
    version: pin,
    src: `/vendor/posthog/${id}/posthog.js`,
    integrity: sri(bytes),
    commit,
    esbuild,
    entry: 'scripts/posthog/entry.ts',
    vendored:
      manifest.versions[id]?.vendored || new Date().toISOString().slice(0, 10)
  }
  manifest.current = id
  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`)
  writeFileSync(MODULE, moduleText({ version: pin, ...current() }))
  const gzip = (await import('node:zlib')).gzipSync(bytes, { level: 9 }).length
  console.log(
    `vendored posthog-js ${pin} as ${id} (${commit.slice(0, 7)}): ${
      current().src
    }, ${bytes.length} B, ${gzip} B gzip, ${current().integrity}`
  )
}

/* Check (also runs after vendoring): every listed build is on disk with its hash,
   the current one is the locked version, and the module matches it. */
if (!current() || versionOf(manifest.current, current()) !== pin)
  fail(
    `versions.json current is ${manifest.current}, locked posthog-js is ${pin}; run node scripts/vendor-posthog.mjs`
  )
for (const entry of Object.values(manifest.versions)) {
  const file = fileOf(entry)
  if (!existsSync(file)) fail(`missing ${file}`)
  if (sri(readFileSync(file)) !== entry.integrity)
    fail(`${file} does not match its integrity in versions.json`)
  const built = builtOf(entry)
  if (
    args.has('--dist') &&
    (!existsSync(built) || sri(readFileSync(built)) !== entry.integrity)
  )
    fail(
      `${built} is missing or was rewritten by the build; browsers would reject it`
    )
}
const expected = moduleText({ version: pin, ...current() })
if (!existsSync(MODULE) || readFileSync(MODULE, 'utf8') !== expected)
  fail(
    'src/utils/posthog-sdk.mjs is out of date; run node scripts/vendor-posthog.mjs'
  )
if (check && args.has('--rebuild')) {
  const { bytes } = await build(pin, current().commit)
  if (sri(bytes) !== current().integrity)
    fail(
      `rebuilding ${manifest.current} gives ${sri(bytes)}, vendored file is ${
        current().integrity
      }; the inputs changed, so run node scripts/vendor-posthog.mjs for a new build id`
    )
  console.log(`rebuild of ${manifest.current} is byte-identical`)
}
if (check)
  console.log(
    `posthog-js ${pin} vendored as ${manifest.current} and verified (${
      Object.keys(manifest.versions).length
    } build(s) kept)`
  )
