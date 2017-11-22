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
  name: 'Data as code modules',
  slug: 'data-as-code-modules',
  cover,
  markdown,
  description:
    'What would happen if you begin treating data and other assets like you threat the code? It would allow you to consume the data and without the mess of parsing, fetching and other annoyances. You would be able to use common programming features to filter and create new views. Data and code deserve equal treatment!',
  readingTime: readingTime(markdown)
}
