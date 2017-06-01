import { photo1466096115517bceecbfb6fde } from 'assets/backgrounds'
import markdown from './index.md'

const sum = (a, b) => a + b
const readingTime = str => Math.round(str.split(' ').map(() => 1).reduce(sum, 0) / 200.0)

export default {
    name: 'Creating contact forms with nodemailer and React',
    slug: 'creating-contact-forms-with-nodemailer-and-react',
    cover: photo1466096115517bceecbfb6fde,
    markdown,
    description: "Creating a contact form is a very common requested feature, almost every site has one. Creating the HTML form is easy, however there must be some back-end code to transfer those messages. I will show you how to create simple form and wire that up to send contact form submission to your Gmail account.",
    readingTime: readingTime(markdown)
}
