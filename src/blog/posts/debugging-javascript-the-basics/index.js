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
  cover,
  markdown: markdownWithAssets,
  description:
    'When it comes to debug a JavaScript code the first thing is to cry in despair because of the lack of proper tools. It is kind of trade-off between wild dynamic programming vs more static and type safe code. Let’s explore what we can do about it and bravely fight nasty bugs!',
  readingTime: readingTime(markdownWithAssets)
}
