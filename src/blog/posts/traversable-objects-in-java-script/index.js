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
  cover,
  markdown,
  metaDescription:
    'JavaScript objects work as dictionaries, yet have no map, filter or reduce. A common interface to process them like arrays, with post-fix notation and monads.',
  description:
    'Objects in JavaScript are commonly used as dictionary data structure and by that there is strong need to process them in the functional way. However, there are no easy way to map, filter and reduce them like arrays. Therefore many great libraries come with many helper functions, but most of them lack common interface with ease of processing arrays.',
  readingTime: readingTime(markdown)
}
