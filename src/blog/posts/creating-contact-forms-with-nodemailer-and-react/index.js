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

const markdownWithAssets = Object.entries(images).reduce(
  (source, [, value]) => {
    const hashLessImageRegex = /\/(.*?)\.(.*?)(.png|.jpg)$/gi
    const hashLessImage = value.replace(hashLessImageRegex, '$1$3')
    const regex = new RegExp(`./images/${escapeRegExp(hashLessImage)}`, 'gi')
    const replaced = source.replace(regex, value)
    return replaced
  },
  markdown
)

export default {
  name: 'Creating contact forms with nodemailer and React',
  slug: 'creating-contact-forms-with-nodemailer-and-react',
  date: '2017-06-01',
  updated: '2026-11-02',
  cover,
  markdown: markdownWithAssets,
  metaDescription:
    'Build a contact form in React and send each submission to your Gmail account with nodemailer and OAuth2, from registering the app to handling the form.',
  description:
    'A contact form needs two parts: the HTML form and back-end code that delivers each message. This guide builds the form in React and sends every submission to your Gmail inbox with nodemailer and OAuth2, from registering the app in Google Cloud to handling the form on the server.',
  readingTime: readingTime(markdown)
}
