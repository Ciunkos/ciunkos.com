import React, { useRef, useState } from 'react'

import { poland as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, useEntrance, useTween, useWidth } from './hooks'

// one column per year, then three numbers about how crowded each ad is
const Poland = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const [active, setActive] = useState(null)
  const grow = useTween(useEntrance(frame), 900)

  const height = 230
  const left = 8
  const right = width - 8
  const top = 26
  const bottom = height - 30
  const max = 180000
  const band = (right - left) / data.years.length
  const barWidth = Math.min(96, band * 0.62)
  const y = value => bottom - (value / max) * (bottom - top)

  const describe = row =>
    pick(data.describe, lang)(row.year, formatNumber(row.value, lang))
  const readout = active === null ? pick(data.hint, lang) : describe(active)

  return (
    <Figure
      ref={frame}
      name="poland"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      readout={readout}
      table={{
        head: pick(data.tableHead, lang),
        rows: data.years.map(row => [
          String(row.year),
          formatNumber(row.value, lang)
        ])
      }}
      sources={data.sources}
    >
      <svg
        className="VizSvg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={`${pick(data.subtitle, lang)}. ${pick(data.hint, lang)}`}
      >
        <line
          className="VizZero"
          x1={left}
          x2={right}
          y1={bottom}
          y2={bottom}
        />
        {data.years.map((row, index) => {
          const centre = left + band * (index + 0.5)
          const barTop = y(row.value * grow)
          const dimmed = active !== null && active.year !== row.year
          return (
            <g
              key={row.year}
              className={`VizRow${dimmed ? ' dim' : ''}`}
              tabIndex={0}
              role="listitem"
              aria-label={pick(data.describe, lang)(
                row.year,
                formatNumber(row.value, lang)
              )}
              onPointerEnter={() => setActive(row)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(row)}
              onBlur={() => setActive(null)}
            >
              <rect
                className="VizHit"
                x={centre - band / 2}
                y={top - 20}
                width={band}
                height={height - top + 20}
              />
              <rect
                className="VizBar up"
                x={centre - barWidth / 2}
                y={barTop}
                width={barWidth}
                height={Math.max(0, bottom - 1 - barTop)}
                rx={3}
              />
              <text
                className="VizValue"
                x={centre}
                y={barTop - 8}
                textAnchor="middle"
              >
                {formatNumber(Math.round((row.value * grow) / 1000), lang)}
                {lang === 'pl' ? ' tys.' : 'k'}
              </text>
              <text
                className="VizTick"
                x={centre}
                y={height - 8}
                textAnchor="middle"
              >
                {row.year}
              </text>
            </g>
          )
        })}
      </svg>
      <ul className="VizTiles">
        {data.tiles.map(tile => (
          <li key={tile.value}>
            <strong>{(lang === 'pl' && tile.valuePl) || tile.value}</strong>
            <span>{pick(tile.label, lang)}</span>
          </li>
        ))}
      </ul>
    </Figure>
  )
}

export default Poland
