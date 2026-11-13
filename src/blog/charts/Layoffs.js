import React, { useRef, useState } from 'react'

import { layoffs as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, useEntrance, useTween, useWidth } from './hooks'

// one column per month; the last month is unfinished, so it is drawn hollow
const Layoffs = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const [active, setActive] = useState(null)
  const grow = useTween(useEntrance(frame), 900)

  const months = pick(data.months, lang)
  const height = 240
  const left = 4
  const right = width - 4
  const top = 28
  const bottom = height - 28
  const max = 1300
  const band = (right - left) / data.values.length
  const barWidth = Math.min(46, band * 0.7)
  const y = value => bottom - (value / max) * (bottom - top)
  const describe = index =>
    pick(data.describe, lang)(
      months[index],
      formatNumber(data.values[index], lang)
    )

  return (
    <Figure
      ref={frame}
      name="layoffs"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      sources={data.sources}
      readout={active === null ? pick(data.hint, lang) : describe(active)}
    >
      <svg
        className="VizSvg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={`${pick(data.title, lang)}. ${pick(data.hint, lang)}`}
      >
        <line
          className="VizZero"
          x1={left}
          x2={right}
          y1={bottom}
          y2={bottom}
        />
        {data.values.map((value, index) => {
          const centre = left + band * (index + 0.5)
          const barTop = y(value * grow)
          const partial = index === data.partial
          const dimmed = active !== null && active !== index
          return (
            <g
              // the months never reorder
              // eslint-disable-next-line @eslint-react/no-array-index-key
              key={index}
              className={`VizRow${dimmed ? ' dim' : ''}`}
              tabIndex={0}
              role="listitem"
              aria-label={describe(index)}
              onPointerEnter={() => setActive(index)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(null)}
            >
              <rect
                className="VizHit"
                x={centre - band / 2}
                y={0}
                width={band}
                height={height}
              />
              <rect
                className={partial ? 'VizBar partial' : 'VizBar down'}
                x={centre - barWidth / 2}
                y={Math.min(barTop, bottom - 3)}
                width={barWidth}
                height={Math.max(2, bottom - 1 - barTop)}
                rx={3}
              />
              {(width >= 540 || value >= 700) && (
                <text
                  className="VizValue"
                  x={centre}
                  y={barTop - 8}
                  textAnchor="middle"
                >
                  {formatNumber(Math.round(value * grow), lang)}
                </text>
              )}
              <text
                className={width < 540 ? 'VizTick small' : 'VizTick'}
                x={centre}
                y={height - 8}
                textAnchor="middle"
              >
                {months[index]}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export default Layoffs
