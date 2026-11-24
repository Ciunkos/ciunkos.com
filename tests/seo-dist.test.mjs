import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import test from 'node:test'

// Checks the prerendered pages, so it runs after `npm run build`.
const dist = new URL('../dist/', import.meta.url)
const pages = existsSync(dist)
  ? readdirSync(dist).filter(
      name => name.endsWith('.html') && name !== '404.html'
    )
  : []

const decode = s =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
const field = (html, re) => decode(html.match(re)?.[1] ?? '')

test(
  'dist has prerendered pages',
  { skip: pages.length === 0 && 'run npm run build first' },
  () => {
    assert.ok(pages.length > 0)
  }
)

for (const name of pages) {
  test(`${name}: title 30-70 and description 110-160 characters`, () => {
    const html = readFileSync(new URL(name, dist), 'utf8')
    const title = field(html, /<title[^>]*>([^<]*)<\/title>/)
    const tag = html.match(/<meta[^>]*name="description"[^>]*>/)?.[0] ?? ''
    const description = field(tag, /content="([^"]*)"/)
    assert.ok(
      title.length >= 30 && title.length <= 70,
      `title ${title.length}: ${title}`
    )
    assert.ok(
      description.length >= 110 && description.length <= 160,
      `description ${description.length}: ${description}`
    )
  })
}
