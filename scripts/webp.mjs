/* WebP twins of the section covers (the large background images, LCP on most pages), saved next to
   each JPEG and picked up by scripts/cover-loader.cjs. Same size as the JPEG, quality 70 (the photos are noisy; at 80 some came out larger than the JPEG).
   Usage: node scripts/webp.mjs [file.jpg ...] (no arguments: all covers under src/).
   Uses sharp from a tool repo (SHARP_REPO=~/hire by default), this repo stays without native modules. */
import { homedir } from 'node:os'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { statSync } from 'node:fs'

const repo = process.env.SHARP_REPO || join(homedir(), 'hire')
const sharp = createRequire(join(repo, 'package.json'))('sharp')

const covers = process.argv.slice(2).length
  ? process.argv.slice(2)
  : execFileSync('git', ['ls-files', 'src'], { encoding: 'utf-8' })
      .split('\n')
      .filter(
        file =>
          /(\/cover|background|\/covers\/[^/]+)\.jpg$/.test(file) &&
          !file.includes('/drafts/')
      )

for (const file of covers) {
  const out = file.replace(/\.jpg$/, '.webp')
  await sharp(file).webp({ quality: 70, effort: 6 }).toFile(out)
  const kb = f => Math.round(statSync(f).size / 1024)
  console.log(`${out}\t${kb(file)} KB -> ${kb(out)} KB`)
}
