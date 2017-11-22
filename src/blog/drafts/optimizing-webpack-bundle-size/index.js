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
  name: 'Optimizing Webpack bundle size',
  slug: 'optimizing-webpack-bundle-size',
  cover,
  markdown,
  description:
    'Have you ever been tired of setting up development enviroment before you could write just a simple "Hello World!" program in a new discovered language? Fear no more! Most programming languages comes with REPL (read-eval-print-loop) tools and so do the JavaScript.',
  readingTime: readingTime(markdown)
}
