import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const robots = readFileSync(
  new URL('../src/www/robots.txt', import.meta.url),
  'utf8'
)

// Share and sign-in redirects are linked from thousands of pages; crawling them only wastes budget.
test('robots.txt keeps crawlers out of redirect-only endpoints', () => {
  for (const path of ['/korpo-tlumacz/dalej', '/codewarriors/auth/']) {
    assert.match(robots, new RegExp(`^Disallow: ${path}$`, 'm'))
  }
})

test('robots.txt allows everything else', () => {
  assert.doesNotMatch(robots, /^Disallow: \/$/m)
})
