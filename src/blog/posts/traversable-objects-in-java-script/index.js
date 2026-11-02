import cover from './cover.jpg'
import markdown from './index.md'

const sum = (a, b) => a + b
const readingTime = str =>
  Math.round(
    str
      .split(' ')
      .map(() => 1)
      .reduce(sum, 0) / 200.0
  )

export default {
  name: 'Traversable Objects in JavaScript',
  slug: 'traversable-objects-in-java-script',
  date: '2017-06-01',
  updated: '2026-11-02',
  cover,
  markdown,
  metaDescription:
    'JavaScript objects work as dictionaries, yet have no map, filter or reduce. A common interface to process them like arrays, with post-fix notation and monads.',
  description:
    'JavaScript objects are often used as dictionaries, yet they have no `map`, `filter` or `reduce` like arrays do. Many libraries add helper functions, but most lack the common interface that makes arrays easy to process. This post builds that interface for objects: mapping, filtering and reducing with the same callback signature as arrays.',
  readingTime: readingTime(markdown)
}
