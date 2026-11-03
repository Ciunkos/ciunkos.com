/* check-posthog-copies.mjs: every repo under ~ that serves pages on ciunkos.com keeps a copy of
   src/utils/posthog-sdk.mjs at src/shared/posthog-sdk.mjs (src + SRI of the self-hosted SDK).
   Copies must match this repo's file, and every build they point at (src) must still be vendored here.
   node scripts/check-posthog-copies.mjs [--fix] */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

const HOME = homedir()
const ROOT = new URL('..', import.meta.url).pathname
const original = readFileSync(join(ROOT, 'src/utils/posthog-sdk.mjs'), 'utf8')
const { versions } = JSON.parse(
  readFileSync(join(ROOT, 'src/www/vendor/posthog/versions.json'), 'utf8')
)
const vendored = new Set(Object.values(versions).map(entry => entry.src))
const fix = process.argv.includes('--fix')
let ok = 0
let drift = 0
let missing = 0
for (const repo of readdirSync(HOME)) {
  const file = join(HOME, repo, 'src/shared/posthog-sdk.mjs')
  if (repo === 'ciunkos.com' || !existsSync(file)) continue
  const copy = readFileSync(file, 'utf8')
  const version = /src: "([^"]+)"/.exec(copy)?.[1]
  if (!vendored.has(version)) {
    missing += 1
    console.log(`NOT VENDORED ${file} points at ${version}`)
  }
  if (copy === original) {
    ok += 1
  } else {
    drift += 1
    console.log(`${fix ? 'FIXED' : 'DRIFT'} ${file} (${version})`)
    if (fix) writeFileSync(file, original)
  }
}
console.log(`copies in sync: ${ok}, drifted: ${drift}`)
if (missing || (drift && !fix)) process.exit(1)
