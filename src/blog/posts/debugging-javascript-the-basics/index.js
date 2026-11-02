import cover from './cover.jpg'
import markdown from './index.md'
import pasueOnExceptions from './pause-on-exceptions.png'

const sum = (a, b) => a + b
const readingTime = str =>
  Math.round(
    str
      .split(' ')
      .map(() => 1)
      .reduce(sum, 0) / 200.0
  )

const markdownWithAssets = markdown.replace(
  './pause-on-exceptions.png',
  pasueOnExceptions
)

export default {
  name: 'Debugging JavaScript - The Basics',
  slug: 'debugging-javascript-the-basics',
  date: '2017-06-01',
  updated: '2026-11-02',
  cover,
  markdown: markdownWithAssets,
  metaDescription:
    'The basics of debugging JavaScript: console.log tricks, tapping into method chains and breakpoints in DevTools, set with debugger or in the sources view.',
  description:
    'Debugging JavaScript starts with three tools: `console.log`, tapping into method chains, and breakpoints in the browser DevTools, set with the `debugger` statement or in the Sources view. JavaScript trades static type safety for dynamic freedom, so knowing these tools well matters. Let’s explore what each one does and bravely fight nasty bugs!',
  readingTime: readingTime(markdownWithAssets)
}
