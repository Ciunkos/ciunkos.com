import React, { useRef } from 'react'

import { fdeShare as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { Credit, pick } from './Figure'
import { useEntrance, useTween } from './hooks'

const DOTS = Array.from({ length: 100 }, (_, index) => index)

/* 100 dots, one per percent of open engineering roles; the FDE ones are filled blue.
   2.3% rounds to two dots. Below: three sources that measured the growth differently. */
const FdeShare = () => {
  const lang = useLang()
  const frame = useRef(null)
  const shown = useTween(useEntrance(frame), 1200)
  const fdeDots = Math.round((data.fde / data.total) * 100)

  return (
    <Figure
      ref={frame}
      name="fde-share"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      readout={pick(data.readout, lang)}
      sources={data.sources}
    >
      <div
        className="VizWaffle"
        role="img"
        aria-label={pick(data.readout, lang)}
      >
        {DOTS.map(index => (
          <span
            key={index}
            className={index < fdeDots ? 'fde' : undefined}
            style={{ opacity: index / 100 <= shown ? 1 : 0.12 }}
          />
        ))}
      </div>
      <p className="VizTilesTitle">{pick(data.growthTitle, lang)}</p>
      <ul className="VizTiles">
        {data.growth.map(tile => (
          <li key={tile.value}>
            <strong>{(lang === 'pl' && tile.valuePl) || tile.value}</strong>
            <span>
              <Credit sources={[tile.source]} />, {pick(tile.label, lang)}
            </span>
          </li>
        ))}
      </ul>
    </Figure>
  )
}

export default FdeShare
