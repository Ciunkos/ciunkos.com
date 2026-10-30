import cover from './cover.jpg'
import source from './index.md'
import images from './images'

// ./images/<name>.jpg in the markdown points at the built (hashed) image
const markdown = Object.entries(images).reduce(
  (text, [name, url]) => text.split(`./images/${name}.jpg`).join(url),
  source
)

const sum = (a, b) => a + b
const readingTime = str =>
  Math.round(
    str
      .split(' ')
      .map(() => 1)
      .reduce(sum, 0) / 200.0
  )

export default {
  name: "Node.js 26 is LTS: what's new since Node 24 and how to upgrade",
  slug: 'node-js-26-lts-whats-new-and-how-to-migrate',
  date: '2026-10-30',
  updated: '2026-10-30',
  authors: [
    { id: 'przemyslaw', role: 'Written by' },
    {
      id: 'claude',
      role: 'Co-authored by',
      description:
        'AI model by Anthropic. Researched the Node.js release notes and changelogs, ran every code sample on Node.js 26.13.0 and drafted the text.'
    }
  ],
  cover,
  markdown,
  metaDescription:
    'Node.js 26 is LTS until April 2029. What changed since Node 24, from Temporal to built-in debounce, and how to fix every breaking change when you upgrade.',
  description:
    'Node.js 24 just went into Maintenance, and Node.js 26 is the new LTS. JavaScript finally gets a date API that behaves, a few npm packages become built-ins, and some long-deprecated APIs are gone. What changed, what can break when you upgrade, and the one-line fix for each break.',
  readingTime: readingTime(markdown)
}
