import React, { useRef, useState } from 'react'

import { pay as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, useEntrance, useTween, useWidth } from './hooks'

// dollars for the English post, złoty for the Polish one
const money = (value, lang) => {
  if (lang !== 'pl') return `$${formatNumber(Math.round(value / 1000), lang)}k`
  if (value >= 1e6) {
    return `${formatNumber(Math.round(value / 1e4) / 100, lang)} mln zł`
  }
  return `${formatNumber(Math.round(value / 1000), lang)} tys. zł`
}

/* Range bars on one money axis: each ad's published low to high per year, grouped by
   country. A single reported number (a median, my own price) is a dot. Everything is shown
   in one currency so the two countries can be compared. */
const Pay = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const [active, setActive] = useState(null)
  const grow = useTween(useEntrance(frame), 900)

  const target = lang === 'pl' ? 'pln' : 'usd'
  const convert = (value, currency) => {
    if (currency === target) return value
    return target === 'pln' ? value * data.rate : value / data.rate
  }
  const max = target === 'pln' ? 1400000 : 350000
  const tickStep = target === 'pln' ? 400000 : 100000

  const compact = width < 540
  const labelWidth = compact ? 0 : 196
  const rowHeight = compact ? 52 : 36
  const headHeight = 30
  const barHeight = 14
  const axisHeight = 26
  const left = labelWidth + 8
  const right = width - 14
  const x = value => left + (value / max) * (right - left)
  const ticks = []
  for (let tick = 0; tick <= max; tick += tickStep) ticks.push(tick)

  // lay the groups out top to bottom: a heading, then its rows
  const tops = data.groups.map((group, index) =>
    data.groups
      .slice(0, index)
      .reduce((sum, g) => sum + headHeight + g.rows.length * rowHeight, 0)
  )
  const groups = data.groups.map((group, index) => ({
    ...group,
    top: tops[index],
    rows: group.rows.map((row, rowIndex) => {
      const low = convert(row.point || row.low, group.currency)
      const high = convert(row.point || row.high, group.currency)
      const text = row.point
        ? money(low, lang)
        : `${money(low, lang)} – ${money(high, lang)}`
      return {
        ...row,
        y: tops[index] + headHeight + rowIndex * rowHeight,
        low,
        high,
        text,
        key: `${group.id}-${row.id}`
      }
    })
  }))
  const height =
    tops[tops.length - 1] +
    headHeight +
    data.groups[data.groups.length - 1].rows.length * rowHeight +
    axisHeight
  const rows = groups.flatMap(group => group.rows)
  const activeRow = rows.find(row => row.key === active)
  const describe = row =>
    `${pick(row.label, lang)}: ${row.text}, ${pick(row.detail, lang)}`

  return (
    <Figure
      ref={frame}
      name="pay"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      sources={data.sources}
      readout={activeRow ? describe(activeRow) : ''}
    >
      <svg
        className="VizSvg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={`${pick(data.title, lang)}. ${pick(data.subtitle, lang)}`}
      >
        {ticks.map(tick => (
          <g key={tick}>
            <line
              className={tick === 0 ? 'VizZero' : 'VizGrid'}
              x1={x(tick)}
              x2={x(tick)}
              y1={0}
              y2={height - axisHeight}
            />
            <text
              className="VizTick"
              x={x(tick)}
              y={height - 8}
              textAnchor={tick === 0 ? 'start' : 'middle'}
            >
              {tick === 0 ? '0' : money(tick, lang)}
            </text>
          </g>
        ))}
        {groups.map(group => (
          <text
            key={group.id}
            className="VizGroup"
            x={compact ? 0 : labelWidth}
            y={group.top + headHeight / 2 + 2}
            textAnchor={compact ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {pick(group.name, lang)}
          </text>
        ))}
        {rows.map(row => {
          const barY = row.y + (compact ? 26 : (rowHeight - barHeight) / 2)
          const from = x(row.low * grow)
          const to = x(row.high * grow)
          const flip = to > right - 150
          const dimmed = active !== null && active !== row.key
          // on a phone the value shares the label's line, at the right edge
          const beside = flip
            ? from - (row.point ? 14 : 8)
            : to + (row.point ? 14 : 8)
          const valueX = compact ? right : beside
          const valueAnchor = compact || flip ? 'end' : 'start'
          return (
            <g
              key={row.key}
              className={`VizRow${dimmed ? ' dim' : ''}`}
              tabIndex={0}
              role="listitem"
              aria-label={describe(row)}
              onPointerEnter={() => setActive(row.key)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(row.key)}
              onBlur={() => setActive(null)}
            >
              <rect
                className="VizHit"
                x={0}
                y={row.y}
                width={width}
                height={rowHeight}
              />
              <text
                className={`VizLabel${row.lead ? ' lead' : ''}`}
                x={compact ? 0 : labelWidth}
                y={compact ? row.y + 16 : barY + barHeight / 2}
                textAnchor={compact ? 'start' : 'end'}
                dominantBaseline={compact ? 'auto' : 'central'}
              >
                {pick(row.label, lang)}
              </text>
              {row.point ? (
                <circle
                  className={`VizDot ${row.lead ? 'down' : 'neutral'}`}
                  cx={to}
                  cy={barY + barHeight / 2}
                  r={7}
                />
              ) : (
                <rect
                  className="VizBar up"
                  x={from}
                  y={barY}
                  width={Math.max(6, to - from)}
                  height={barHeight}
                  rx={4}
                />
              )}
              <text
                className="VizValue"
                x={valueX}
                y={compact ? row.y + 16 : barY + barHeight / 2}
                textAnchor={valueAnchor}
                dominantBaseline={compact ? 'auto' : 'central'}
              >
                {row.text}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export default Pay
