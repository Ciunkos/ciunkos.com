import React, { useId, useState } from 'react'

import { roi as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { formatNumber, track } from './hooks'

const Slider = ({ label, value, min, max, step = 1, suffix, onChange }) => {
  const id = useId()
  return (
    <div className="VizField">
      <label htmlFor={id}>{label}</label>
      <output htmlFor={id}>
        {value}
        {suffix}
      </output>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
    </div>
  )
}

/* Four sliders, one sum: what the work done by hand costs a year, what part of it a system
   could take over, and how that compares with the price of two days of discovery. */
const Roi = () => {
  const lang = useLang()
  const [currency, setCurrency] = useState(lang === 'pl' ? 'pln' : 'usd')
  const [people, setPeople] = useState(3)
  const [hours, setHours] = useState(10)
  const [hourly, setHourly] = useState(data.currencies[currency].hourly)
  const [share, setShare] = useState(50)
  const [touched, setTouched] = useState(false)

  const unit = data.currencies[currency]
  const cost = people * hours * data.weeks * hourly
  const saved = (cost * share) / 100
  // a year of that saving spread over the working days in it
  const perDay = saved / (data.weeks * 5)
  const payback =
    perDay > 0 ? Math.max(1, Math.ceil(unit.discovery / perDay)) : 0
  const money = value =>
    currency === 'pln'
      ? `${formatNumber(Math.round(value), lang)} zł`
      : `${unit.label}${formatNumber(Math.round(value), lang)}`
  const roi = Math.round(((saved - unit.discovery) / unit.discovery) * 100)
  const barShare = Math.min(100, (unit.discovery / Math.max(saved, 1)) * 100)

  const change = setter => value => {
    setter(value)
    if (!touched) {
      setTouched(true)
      track('chart_interaction', { chart: 'roi', action: 'slider' })
    }
  }
  const switchCurrency = next => {
    setCurrency(next)
    setHourly(data.currencies[next].hourly)
  }

  return (
    <Figure
      name="roi"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
      controls={
        <div role="radiogroup" aria-label="Currency">
          {Object.entries(data.currencies).map(([id, item]) => (
            <button
              key={id}
              type="button"
              role="radio"
              className="VizButton"
              aria-checked={id === currency}
              onClick={() => switchCurrency(id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      }
    >
      <div className="VizCalc">
        <div className="VizFields">
          <Slider
            label={pick(data.fields.people, lang)}
            value={people}
            min={1}
            max={20}
            onChange={change(setPeople)}
          />
          <Slider
            label={pick(data.fields.hours, lang)}
            value={hours}
            min={1}
            max={40}
            suffix=" h"
            onChange={change(setHours)}
          />
          <Slider
            label={pick(data.fields.hourly, lang)}
            value={hourly}
            min={currency === 'pln' ? 30 : 10}
            max={unit.hourlyMax}
            step={5}
            suffix={` ${unit.label}`}
            onChange={change(setHourly)}
          />
          <Slider
            label={pick(data.fields.share, lang)}
            value={share}
            min={10}
            max={90}
            step={5}
            suffix="%"
            onChange={change(setShare)}
          />
        </div>
        <div className="VizResult" aria-live="polite">
          <p>
            <span>{pick(data.out.cost, lang)}</span>
            <strong className="big">{money(cost)}</strong>
            <span>{pick(data.out.perYear, lang)}</span>
          </p>
          <p>
            <span>{pick(data.out.saved, lang)}</span>
            <strong>{money(saved)}</strong>
            <span>{pick(data.out.perYear, lang)}</span>
          </p>
          <div className="VizCompare" aria-hidden="true">
            <span className="saved" />
            <span className="price" style={{ width: `${barShare}%` }} />
          </div>
          <p>
            <span>{pick(data.out.discovery, lang)}</span>
            <strong>{money(unit.discovery)}</strong>
          </p>
          <p className="VizKpi">
            <strong>{formatNumber(roi, lang)}%</strong>
            <span>{pick(data.out.roi, lang)}</span>
          </p>
          <p className="VizPayback">{pick(data.out.payback, lang)(payback)}</p>
          <p className="VizSmall">{pick(data.note, lang)}</p>
        </div>
      </div>
    </Figure>
  )
}

export default Roi
