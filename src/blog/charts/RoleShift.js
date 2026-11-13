import React, { useRef, useState } from 'react'

import { roleShift as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, track, useEntrance, useTween, useWidth } from './hooks'

const CUT_MAX = 105
const TRUE_MAX = 385
const MIN = -62

const percent = (value, lang) =>
  `${value > 0 ? '+' : '−'}${formatNumber(Math.abs(value), lang)}%`

/* Diverging bars: titles that grew go right, titles that shrank go left. The FDE bar is
   4.6x, so it is cut at the edge until the reader asks for the real scale; then the axis
   stretches and every other bar shrinks next to it. */
const RoleShift = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const [trueScale, setTrueScale] = useState(false)
  const [active, setActive] = useState(null)
  const stretch = useTween(trueScale ? 1 : 0, 900)
  const grow = useTween(useEntrance(frame), 900)

  const compact = width < 540
  const labelWidth = compact ? 0 : 214
  const padRight = 14
  const rowHeight = compact ? 52 : 32
  const barHeight = compact ? 16 : 18
  const top = 8
  const axisHeight = 26
  const height = top + data.rows.length * rowHeight + 8 + axisHeight

  const max = CUT_MAX + (TRUE_MAX - CUT_MAX) * stretch
  const plotLeft = labelWidth + 8
  const plotRight = width - padRight
  const x = value =>
    plotLeft + ((value - MIN) / (max - MIN)) * (plotRight - plotLeft)
  const zero = x(0)
  const step = max > 220 ? 100 : 50
  // −50 on the shrinking side, then 0 and every `step` up to the end of the axis
  const ticks = [-50]
  for (let tick = 0; tick <= max; tick += step) ticks.push(tick)

  const rows = data.rows.map((row, index) => {
    const y =
      top + index * rowHeight + (compact ? 27 : (rowHeight - barHeight) / 2)
    const shown = row.value * grow
    const end = Math.min(x(shown), plotRight)
    const cut = x(shown) > plotRight + 0.5
    return { ...row, index, y, end, cut, label: pick(row.label, lang) }
  })

  const describe = row =>
    pick(row.value > 0 ? data.grew : data.shrank, lang)(
      row.label,
      `${formatNumber(Math.abs(row.value), lang)}%${
        row.suffix ? row.suffix.replace('.', lang === 'pl' ? ',' : '.') : ''
      }`
    )

  const toggle = () => {
    setTrueScale(value => !value)
    track('chart_interaction', { chart: 'role-shift', action: 'scale' })
  }

  return (
    <Figure
      ref={frame}
      name="role-shift"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      controls={
        <button
          type="button"
          className="VizButton"
          aria-pressed={trueScale}
          onClick={toggle}
        >
          {pick(trueScale ? data.showCut : data.showTrue, lang)}
        </button>
      }
      readout={
        active === null
          ? pick(data.hint, lang)
          : describe(rows.find(row => row.id === active))
      }
      table={{
        head: pick(data.tableHead, lang),
        rows: rows.map(row => [row.label, percent(row.value, lang)])
      }}
      sources={data.sources}
      note={pick(data.note, lang)}
    >
      <svg
        className="VizSvg"
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={`${pick(data.title, lang)} ${pick(data.subtitle, lang)}`}
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
              textAnchor="middle"
            >
              {tick === 0 ? '0' : percent(tick, lang)}
            </text>
          </g>
        ))}
        {rows.map(row => {
          const positive = row.value > 0
          const barX = positive ? zero + 1 : row.end
          const barWidth = Math.max(
            0,
            positive ? row.end - zero - 1 : zero - 1 - row.end
          )
          const dimmed = active !== null && active !== row.id
          const valueText = `${percent(row.value, lang)}${
            row.suffix ? row.suffix.replace('.', lang === 'pl' ? ',' : '.') : ''
          }`
          // the value sits past the bar's end; on the cut bar it moves inside
          const inside = row.cut || (positive && row.end > plotRight - 96)
          const outsideX = positive ? row.end + 6 : zero + 7
          const valueX = inside ? row.end - (row.cut ? 44 : 8) : outsideX
          return (
            <g
              key={row.id}
              className={`VizRow${dimmed ? ' dim' : ''}`}
              tabIndex={0}
              role="listitem"
              aria-label={describe(row)}
              onPointerEnter={() => setActive(row.id)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(row.id)}
              onBlur={() => setActive(null)}
            >
              <rect
                className="VizHit"
                x={0}
                y={top + row.index * rowHeight}
                width={width}
                height={rowHeight}
              />
              <text
                className={`VizLabel${row.lead ? ' lead' : ''}`}
                x={compact ? 0 : labelWidth}
                y={compact ? row.y - 7 : row.y + barHeight / 2}
                textAnchor={compact ? 'start' : 'end'}
                dominantBaseline={compact ? 'auto' : 'central'}
              >
                {row.label}
              </text>
              <rect
                className={positive ? 'VizBar up' : 'VizBar down'}
                x={barX}
                y={row.y}
                width={barWidth}
                height={barHeight}
                rx={3}
              />
              {row.cut && (
                <path
                  className="VizBreak"
                  d={`M${plotRight - 40} ${row.y + barHeight + 3} l10 ${-barHeight - 6}`}
                />
              )}
              <text
                className={`VizValue${inside ? ' inside' : ''}`}
                x={valueX}
                y={row.y + barHeight / 2}
                textAnchor={inside ? 'end' : 'start'}
                dominantBaseline="central"
              >
                {valueText}
              </text>
            </g>
          )
        })}
      </svg>
    </Figure>
  )
}

export default RoleShift
