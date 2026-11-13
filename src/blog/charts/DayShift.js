import React, { useRef, useState } from 'react'

import { dayShift as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { useEntrance, useTween } from './hooks'

/* Two bars of 100%, one per kind of working day, cut into the same five parts in the same
   order and colours. Parts keep a 2px gap; the legend names them. */
const DayShift = () => {
  const lang = useLang()
  const frame = useRef(null)
  const [active, setActive] = useState(null)
  const grow = useTween(useEntrance(frame), 900)

  return (
    <Figure
      ref={frame}
      name="day-shift"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      readout={
        active
          ? pick(data.describe, lang)(active.day, active.part, active.value)
          : pick(data.hint, lang)
      }
    >
      <ul className="VizLegend">
        {data.parts.map(part => (
          <li key={part.id}>
            <span className={`VizSwatch ${part.id}`} />
            {pick(part.label, lang)}
          </li>
        ))}
      </ul>
      {data.days.map(day => (
        <div className="VizStack" key={day.id}>
          <p>{pick(day.label, lang)}</p>
          <div className="VizStackBar" style={{ width: `${grow * 100}%` }}>
            {data.parts
              .filter(part => day.values[part.id] > 0)
              .map(part => {
                const value = day.values[part.id]
                const item = {
                  day: pick(day.label, lang),
                  part: pick(part.label, lang),
                  value
                }
                return (
                  <button
                    type="button"
                    key={part.id}
                    className={`VizSegment ${part.id}`}
                    style={{ flexGrow: value }}
                    aria-label={pick(data.describe, lang)(
                      item.day,
                      item.part,
                      value
                    )}
                    onPointerEnter={() => setActive(item)}
                    onPointerLeave={() => setActive(null)}
                    onFocus={() => setActive(item)}
                    onBlur={() => setActive(null)}
                  >
                    {value >= 10 && `${value}%`}
                  </button>
                )
              })}
          </div>
        </div>
      ))}
    </Figure>
  )
}

export default DayShift
