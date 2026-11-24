import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import test from 'node:test'

// Checks the prerendered pages, so it runs after `npm run build`.
const dist = new URL('../dist/', import.meta.url)
const pages = existsSync(dist)
  ? readdirSync(dist).filter(name => name.endsWith('.html'))
  : []

const nodes = html =>
  [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)]
    .map(([, json]) => JSON.parse(json))
    .flatMap(block => block['@graph'] || [block])

// schema.org: author and contributor take a Person or an Organization only
const isAgent = value =>
  (Object.keys(value).length === 1 && value['@id']) ||
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
