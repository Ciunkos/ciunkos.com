import cover from './cover.jpg'
import markdown from './index.md'
import images from './images'

const sum = (a, b) => a + b
const readingTime = str =>
  Math.round(
    str
      .split(' ')
      .map(() => 1)
      .reduce(sum, 0) / 200.0
  )

const escapeRegExp = str => str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&')

const markdownWithAssets = Object.entries(
  images
).reduce((source, [, value]) => {
  const hashLessImageRegex = /\/(.*?)\.(.*?)(.png|.jpg)$/gi
  const hashLessImage = value.replace(hashLessImageRegex, '$1$3')
  const regex = new RegExp(`./images/${escapeRegExp(hashLessImage)}`, 'gi')
  const replaced = source.replace(regex, value)
  return replaced
}, markdown)

export default {
  name: 'Creating contact forms with nodemailer and React',
  slug: 'creating-contact-forms-with-nodemailer-and-react',
  cover,
  markdown: markdownWithAssets,
  description:
    'Creating a contact form is a very common requested feature, almost every site has one. Creating the HTML form is easy, however there must be some back-end code to transfer those messages. I will show you how to create simple form and wire that up to send contact form submission to your Gmail account.',
  readingTime: readingTime(markdown)
}
