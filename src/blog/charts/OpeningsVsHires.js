import React, { useRef } from 'react'

import { openingsVsHires as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { useEntrance, useTween, useWidth } from './hooks'

/* Two lines from the same starting point: job ads go up, hiring goes down. Both are indexed
   to 100 so they share one axis. */
const OpeningsVsHires = () => {
  const lang = useLang()
  const frame = useRef(null)
  const width = useWidth(frame)
  const grow = useTween(useEntrance(frame), 1100)

  const height = 250
  const left = 62
  const right = width - (width < 540 ? 118 : 150)
  const top = 22
  const bottom = height - 34
  const min = 70
  const max = 150
  const y = value => bottom - ((value - min) / (max - min)) * (bottom - top)
  const ticks = [80, 100, 120, 140]

  return (
    <Figure
      ref={frame}
      name="openings-vs-hires"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      readout={pick(data.readout, lang)}
      table={{
        head: pick(data.tableHead, lang),
        rows: data.series.map(series => [
          pick(series.label, lang),
          '100',
          String(series.value)
        ])
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
        aria-label={`${pick(data.title, lang)}. ${pick(data.readout, lang)}`}
      >
        {ticks.map(tick => (
          <g key={tick}>
            <line
              className={tick === 100 ? 'VizBase' : 'VizGrid'}
              x1={left}
              x2={right}
              y1={y(tick)}
              y2={y(tick)}
            />
            <text
              className="VizTick"
              x={left - 10}
              y={y(tick)}
              textAnchor="end"
              dominantBaseline="central"
            >
              {tick}
            </text>
          </g>
        ))}
        <text className="VizTick" x={left} y={height - 10} textAnchor="start">
          {pick(data.start, lang)}
        </text>
        <text className="VizTick" x={right} y={height - 10} textAnchor="end">
          {pick(data.end, lang)}
        </text>
        {data.series.map(series => {
          const endX = left + (right - left) * grow
          const endY = y(100 + (series.value - 100) * grow)
          const change = series.value - 100
          return (
            <g key={series.id}>
              <line
                className={`VizLine ${series.tone}`}
                x1={left}
                y1={y(100)}
                x2={endX}
                y2={endY}
              />
              <circle
                className={`VizDot ${series.tone}`}
                cx={endX}
                cy={endY}
                r={5}
              />
              <text
                className="VizValue"
                x={endX + 12}
                y={endY - 8}
                dominantBaseline="central"
              >
                {`${change > 0 ? '+' : '−'}${Math.abs(change)}%`}
              </text>
              <text x={endX + 12} y={endY + 10} dominantBaseline="central">
                {pick(series.label, lang)}
              </text>
            </g>
          )
        })}
        <circle className="VizDot base" cx={left} cy={y(100)} r={5} />
      </svg>
    </Figure>
  )
}

export default OpeningsVsHires
