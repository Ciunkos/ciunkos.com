import { chatgptLogo, claudeLogo, profilePicture } from 'assets'
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
    name: 'Claude',
    avatar: claudeLogo,
    bylineAvatarOnly: true,
    description: 'AI model by Anthropic.',
    jsonLd: {
      '@type': 'SoftwareApplication',
      name: 'Claude',
      creator: { '@type': 'Organization', name: 'Anthropic' }
    },
    links: [{ name: 'Website', href: 'https://www.anthropic.com/claude' }]
  },
  chatgpt: {
    name: 'ChatGPT',
    // Official Blossom mark from https://openai.com/brand/.
    avatar: chatgptLogo,
    bylineAvatarOnly: true,
    description: 'AI assistant by OpenAI.',
    jsonLd: {
      '@type': 'SoftwareApplication',
      name: 'ChatGPT',
      creator: { '@type': 'Organization', name: 'OpenAI' }
    },
    links: [{ name: 'Website', href: 'https://chatgpt.com/' }]
  }
}

const defaultAuthors = [{ id: 'przemyslaw', role: 'Author' }]

export const postAuthors = post =>
  (post.authors || defaultAuthors).map(({ id, ...perPost }) => ({
    ...authors[id],
    id,
    ...perPost
  }))

export default authors
