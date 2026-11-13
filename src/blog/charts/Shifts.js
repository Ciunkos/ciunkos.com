import React from 'react'

import { shifts as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'

// a vertical timeline: it reads the same on a phone and needs no interaction
const Shifts = () => {
  const lang = useLang()
  return (
    <Figure
      name="shifts"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
    >
      <ol className="VizTimeline">
        {data.items.map(item => (
          <li
            key={item.year}
            className={
              [item.me && 'me', item.now && 'now', item.next && 'next']
                .filter(Boolean)
                .join(' ') || undefined
            }
          >
            <span className="VizYear">{item.year}</span>
            <strong>{pick(item.name, lang)}</strong>
            <span>{pick(item.text, lang)}</span>
          </li>
        ))}
      </ol>
    </Figure>
  )
}

export default Shifts
