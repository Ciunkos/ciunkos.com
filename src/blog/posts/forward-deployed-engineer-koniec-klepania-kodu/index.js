// the Polish version of forward-deployed-engineer-coding-is-dead: the same cover, figures
// and data (../forward-deployed-engineer-coding-is-dead/data.js), its own text and share card
import cover from '../forward-deployed-engineer-coding-is-dead/cover.jpg'
import shareImage from './share.jpg'
import source from './index.md'

const readingTime = text =>
  Math.round(text.replace(/```chart[^`]*```/g, '').split(/\s+/).length / 200)

export default {
  name: 'Koniec klepania kodu. Niech żyje Forward Deployed Engineer.',
  metaTitle:
    'Forward Deployed Engineer (FDE): kto to jest, ile zarabia i czemu ubywa ofert dla programistów',
  slug: 'forward-deployed-engineer-koniec-klepania-kodu',
  lang: 'pl',
  alternate: 'forward-deployed-engineer-coding-is-dead',
  date: '2026-11-13',
  updated: '2026-11-13',
  bylineLabel: 'Napisali i sprawdzili',
  authors: [
    {
      id: 'przemyslaw',
      role: 'Opinie, wywiad i redakcja',
      description:
        'Senior full-stack z Wrocławia, 15+ lat dostarczania oprogramowania, w drodze do roli Forward Deployed Engineera. Opinie i historia w tym wpisie są jego i pochodzą z nagranego wywiadu.'
    },
    {
      id: 'claude',
      role: 'Research, szkic i wykresy',
      description:
        'Model AI od Anthropic. Sprawdził liczby w źródłach, napisał szkic na podstawie wywiadu z Przemysławem i zbudował interaktywne wykresy.'
    }
  ],
  cover,
  coverPosition: '86% 50%',
  shareImage,
  markdown: source,
  metaDescription:
    'Kim jest Forward Deployed Engineer (FDE), ile zarabia i czemu ofert dla front-endu i mobile ubyło w 2026 o połowę. Pisze full-stack, który został bez klientów.',
  description:
    'Ofert dla front-endu i mobile ubyło w rok prawie o połowę, a ofert dla Forward Deployed Engineerów przybyło 4,6 raza. Jestem full-stackiem bez klienta od listopada. Piszę, czym jest rola FDE, ile płaci i jak się do niej przygotować.',
  readingTime: readingTime(source)
}
