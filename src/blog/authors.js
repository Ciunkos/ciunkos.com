import { claudeLogo, profilePicture } from 'assets'
import social from 'social/data'

/* People (and models) shown in post bylines. A post lists them in `authors` as
   { id, role, description? }, where description says what they did on that post;
   posts without the field were written by Przemysław alone. */
const authors = {
  przemyslaw: {
    name: 'Przemysław Zalewski',
    avatar: profilePicture,
    description:
      'Senior full-stack engineer from Wrocław, 15+ years shipping software with TypeScript, React and Node.js.',
    // the Person node from the home page, so search engines merge the two
    jsonLd: { '@id': 'https://ciunkos.com/#person' },
    links: [
      { name: 'LinkedIn', href: social.linkedIn.url },
      { name: 'GitHub', href: social.gitHub.url },
      { name: 'Website', href: 'https://ciunkos.com' }
    ]
  },
  claude: {
    name: 'Claude Opus 5.5',
    avatar: claudeLogo,
    description: 'AI model by Anthropic.',
    jsonLd: {
      '@type': 'SoftwareApplication',
      name: 'Claude Opus 5.5',
      creator: { '@type': 'Organization', name: 'Anthropic' }
    },
    links: [{ name: 'Website', href: 'https://www.anthropic.com/claude' }]
  }
}

const defaultAuthors = [{ id: 'przemyslaw', role: 'Written by' }]

export const postAuthors = post =>
  (post.authors || defaultAuthors).map(({ id, ...perPost }) => ({
    ...authors[id],
    id,
    ...perPost
  }))

export default authors
