import cover from './cover.jpg'
import shareImage from './share.jpg'
import source from './index.md'
import images from './images'

// ./images/<file-name>.jpg in the markdown points at the built (hashed) image;
// the auto-index names each import in camelCase (supportTimeline for support-timeline.jpg)
const kebab = name => name.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)
const markdown = Object.entries(images).reduce(
  (text, [name, url]) => text.split(`./images/${kebab(name)}.jpg`).join(url),
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
  name: "Node.js 26 is LTS: what's new since Node.js 24 and how to upgrade",
  slug: 'node-js-26-lts-whats-new-and-how-to-upgrade',
  date: '2026-10-30',
  updated: '2026-10-30',
  bylineLabel: 'Written, edited and reviewed by',
  authors: [
    { id: 'przemyslaw', role: 'Edited and reviewed' },
    {
      id: 'claude',
      role: 'Researched, tested and drafted',
      description:
        'AI model by Anthropic. Researched the Node.js release notes, changelogs and docs, tested the code samples on Node.js 26.13.0 and drafted the text.'
    }
  ],
  cover,
  shareImage,
  markdown,
  metaDescription:
    "Node.js 26 is LTS until April 2029. What's new since Node.js 24, including Temporal, and how to fix each breaking change when you upgrade.",
  description:
    'Node.js 26 replaced 24 as the LTS line in October 2026 and is supported until April 2029. It turns on Temporal, adds new JavaScript from V8 14.6 and removes APIs deprecated for years. Here is what you gain, what breaks on the way up from Node.js 24, and how to fix each break.',
  readingTime: readingTime(markdown)
}
