import cover from './cover.jpg'
import shareImage from './share.jpg'
import source from './index.md'

// the figures are ```chart blocks, which carry no words to read
const readingTime = text =>
  Math.round(text.replace(/```chart[^`]*```/g, '').split(/\s+/).length / 200)

export default {
  name: 'Coding is dead. Long live the Forward Deployed Engineer.',
  // search results get the plain version of the headline
  metaTitle:
    'Forward Deployed Engineer (FDE): the role, the pay and why coding jobs are shrinking',
  slug: 'forward-deployed-engineer-coding-is-dead',
  lang: 'en',
  // the Polish version of this post
  alternate: 'forward-deployed-engineer-koniec-klepania-kodu',
  date: '2026-11-13',
  updated: '2026-11-13',
  bylineLabel: 'Written, researched and reviewed by',
  authors: [
    {
      id: 'przemyslaw',
      role: 'Opinions, interview and review',
      description:
        'Senior full-stack engineer from Wrocław, 15+ years shipping software, now moving into Forward Deployed Engineer work. The opinions and the story in this post are his, taken from a recorded interview.'
    },
    {
      id: 'claude',
      role: 'Fact-checked, drafted and built the figures',
      description:
        'AI model by Anthropic. Checked the figures against their sources, drafted the text from Przemysław’s interview and built the interactive figures.'
    },
    {
      id: 'chatgpt',
      role: 'Interviewed and researched',
      description:
        'AI assistant by OpenAI. Ran the voice interview with Przemysław that this post is built on and wrote the deep-research reports behind it.'
    }
  ],
  cover,
  // phones show only part of the width; keep the chart's zero line and the face in view
  coverPosition: '86% 50%',
  shareImage,
  markdown: source,
  metaDescription:
    'What a Forward Deployed Engineer (FDE) does, what the role pays and why front-end and mobile openings halved in 2026, from a full-stack developer who lost his clients.',
  description:
    'Open roles for front-end and mobile engineers nearly halved in a year, while Forward Deployed Engineer openings grew 4.6 times. I am a full-stack developer who has had no client since November. Here is what the FDE role is, what it pays and how to get ready.',
  readingTime: readingTime(source)
}
