import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import test from 'node:test'

// Checks the prerendered pages: `npm run test:dist` after `npm run build` (CI runs it after the build step).
const dist = new URL('../../dist/', import.meta.url)
if (!existsSync(dist)) throw new Error('dist/ is missing: run npm run build first')
const pages = readdirSync(dist).filter(name => name.endsWith('.html'))

const nodes = html =>
  [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)]
    .map(([, json]) => JSON.parse(json))
    .flatMap(block => block['@graph'] || [block])

// schema.org: author and contributor take a Person or an Organization only;
// a bare reference must point at the site's canonical Person or Organization node
const isAgent = value =>
  (Object.keys(value).length === 1 &&
    /^https:\/\/ciunkos\.com\/#(person|organization|business)$/.test(value['@id'])) ||
  ['Person', 'Organization'].includes(value['@type'])

for (const name of pages) {
  test(`${name}: authors and contributors are people or organizations`, () => {
    for (const node of nodes(readFileSync(new URL(name, dist), 'utf8'))) {
      for (const key of ['author', 'contributor']) {
        for (const value of [node[key] ?? []].flat()) {
          assert.ok(isAgent(value), `${node['@type']}.${key}: ${JSON.stringify(value)}`)
        }
      }
    }
  })
}
