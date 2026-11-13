import React, { useRef, useState } from 'react'

import { pay as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, track, useEntrance, useTween, useWidth } from './hooks'

const money = (value, unit, lang) => {
  if (unit === 'usd') return `$${formatNumber(Math.round(value / 1000), lang)}k`
  const thousands = formatNumber(Math.round(value / 100) / 10, lang)
  return `${thousands}${lang === 'pl' ? ' tys. zł' : 'k zł'}`
}

/* Range bars: each ad's published low to high on one money axis. A single reported number
   (a median, my own price) is a dot. Two views because dollars a year and złoty a month
   don't belong on one axis. */
const Pay = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const [viewId, setViewId] = useState(lang === 'pl' ? 'pl' : 'us')
  const [active, setActive] = useState(null)
  const grow = useTween(useEntrance(frame), 900)
  const view = data.views.find(item => item.id === viewId)

  const compact = width < 540
  const labelWidth = compact ? 0 : 196
  const rowHeight = compact ? 52 : 38
  const barHeight = 14
  const top = 6
  const axisHeight = 26
  const height = top + view.rows.length * rowHeight + axisHeight
  const left = labelWidth + 8
  const right = width - 14
  const x = value => left + (value / view.max) * (right - left)
  const tickStep = view.unit === 'usd' ? 100000 : 20000
  const ticks = []
  for (let tick = 0; tick <= view.max; tick += tickStep) ticks.push(tick)

  const rangeText = row =>
    row.point
      ? money(row.point, view.unit, lang)
      : `${money(row.low, view.unit, lang)} – ${money(row.high, view.unit, lang)}`
  const activeRow = view.rows.find(row => row.id === active)

  const readout = activeRow
    ? `${pick(activeRow.label, lang)}: ${rangeText(activeRow)}. ${pick(activeRow.detail, lang)}.`
    : pick(data.hint, lang)

  const choose = id => {
    setViewId(id)
    setActive(null)
    track('chart_interaction', { chart: 'pay', action: id })
  }

  return (
    <Figure
      ref={frame}
      name="pay"
      title={pick(data.title, lang)}
      subtitle={pick(view.subtitle, lang)}
      controls={
        <div role="radiogroup" aria-label={pick(data.title, lang)}>
          {data.views.map(item => (
            <button
              key={item.id}
              type="button"
              role="radio"
              className="VizButton"
              aria-checked={item.id === viewId}
              onClick={() => choose(item.id)}
            >
              {pick(item.tab, lang)}
            </button>
          ))}
        </div>
      }
      readout={readout}
      table={{
        head: pick(data.tableHead, lang),
        rows: view.rows.map(row => [
          pick(row.label, lang),
          money(row.low || row.point, view.unit, lang),
          money(row.high || row.point, view.unit, lang)
        ])
      }}
      sources={view.sources}
      note={pick(view.note, lang)}
    >
      <svg
        className="VizSvg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={`${pick(data.title, lang)}. ${pick(view.subtitle, lang)}`}
      >
        {ticks.map(tick => (
          <g key={tick}>
            <line
              className={tick === 0 ? 'VizZero' : 'VizGrid'}
              x1={x(tick)}
              x2={x(tick)}
              y1={top}
              y2={height - axisHeight}
            />
            <text
              className="VizTick"
              x={x(tick)}
              y={height - 8}
              textAnchor={tick === 0 ? 'start' : 'middle'}
            >
              {tick === 0 ? '0' : money(tick, view.unit, lang)}
            </text>
          </g>
        ))}
        {view.rows.map((row, index) => {
          const y = top + index * rowHeight + (compact ? 28 : 12)
          const low = row.point || row.low
          const high = row.point || row.high
          const from = x(low * grow)
          const to = x(high * grow)
          const dimmed = active !== null && active !== row.id
          return (
            <g
              key={`${view.id}-${row.id}`}
              className={`VizRow${dimmed ? ' dim' : ''}`}
              tabIndex={0}
              role="listitem"
              aria-label={`${pick(row.label, lang)}: ${rangeText(row)}. ${pick(
                row.detail,
                lang
              )}`}
              onPointerEnter={() => setActive(row.id)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(row.id)}
              onBlur={() => setActive(null)}
            >
              <rect
                className="VizHit"
                x={0}
                y={top + index * rowHeight}
                width={width}
                height={rowHeight}
              />
              <text
                className={`VizLabel${row.lead ? ' lead' : ''}`}
                x={compact ? 0 : labelWidth}
                y={compact ? y - 8 : y + barHeight / 2}
                textAnchor={compact ? 'start' : 'end'}
                dominantBaseline={compact ? 'auto' : 'central'}
              >
                {pick(row.label, lang)}
              </text>
              {row.point ? (
                <circle
                  className={`VizDot ${row.lead ? 'down' : 'neutral'}`}
                  cx={to}
                  cy={y + barHeight / 2}
                  r={7}
                />
              ) : (
                <rect
                  className="VizBar up"
                  x={from}
                  y={y}
                  width={Math.max(6, to - from)}
                  height={barHeight}
                  rx={4}
                />
              )}
              <text
                className="VizValue"
                x={
                  to > right - 120
                    ? from - (row.point ? 14 : 8)
                    : to + (row.point ? 14 : 8)
                }
                y={y + barHeight / 2}
                textAnchor={to > right - 120 ? 'end' : 'start'}
                dominantBaseline="central"
              >
                {rangeText(row)}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export default Pay
