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
  date: '2017-06-01',
  updated: '2026-11-02',
  cover,
  markdown,
  metaDescription:
    'Treat data like code: import JSON, text, CSV, spreadsheets and images as ES modules with webpack, load them asynchronously and share them on npm.',
  description:
    'Treat data like code: keep JSON, text, CSV, spreadsheets and images in your repository and import them as ES modules. Webpack loaders parse them at build time, so you skip the fetching and parsing code and use ordinary language features to filter them and create new views. Data and code deserve equal treatment!',
  readingTime: readingTime(markdown)
}
