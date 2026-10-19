/* Renders the /apps symbol icons (src/apps/toolIcons.js) into favicon files for each tool's own site:
   <out>/<id>/favicon.svg (rounded square), favicon-32.png (transparent corners) and apple-touch-icon.png
   (180 × 180, full square: iOS rounds the corners itself). Usage: node scripts/tool-icons.mjs <out-dir>
   Uses a current Playwright from a tool repo (this repo's is too old to have its browser installed):
   PLAYWRIGHT_REPO=~/signature-desk by default. */
import { homedir } from 'node:os'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { ICONS, S } from '../src/apps/toolIcons.js'

const out = process.argv[2]
const repo = process.env.PLAYWRIGHT_REPO || join(homedir(), 'signature-desk')
const { chromium } = await import(
  join(repo, 'node_modules/@playwright/test/index.mjs')
)
const svg = (colour, symbol, rx) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="${rx}" fill="${colour}"/><g transform="translate(5 5) scale(0.9167)" ${S.replace(
    /'/g,
    '"'
  )}>${symbol.replace(/'/g, '"')}</g></svg>`
const browser = await chromium.launch()
const page = await browser.newPage()
async function png(markup, size, file) {
  await page.setViewportSize({ width: size, height: size })
  await page.setContent(
    `<html><body style="margin:0;background:transparent">${markup.replace(
      'width="32" height="32"',
      `width="${size}" height="${size}"`
    )}</body></html>`
  )
  writeFileSync(
    file,
    await page.locator('svg').screenshot({ omitBackground: true })
  )
}
for (const [id, [colour, symbol]] of Object.entries(ICONS)) {
  const dir = join(out, id)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'favicon.svg'), svg(colour, symbol, 8) + '\n')
  await png(svg(colour, symbol, 8), 32, join(dir, 'favicon-32.png'))
  await png(svg(colour, symbol, 0), 180, join(dir, 'apple-touch-icon.png'))
}
await browser.close()
console.log('icons:', Object.keys(ICONS).length)
