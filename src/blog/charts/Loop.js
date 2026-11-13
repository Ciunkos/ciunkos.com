import React, { useState } from 'react'

import { loop as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'
import { track } from './hooks'

/* The five steps as tabs: the step names run in a row with arrows, the chosen step's text
   sits below. Without JavaScript the first step is open and all five names are readable. */
const Loop = () => {
  const lang = useLang()
  const [current, setCurrent] = useState(0)
  const step = data.steps[current]

  const choose = index => {
    setCurrent(index)
    track('chart_interaction', {
      chart: 'fde-loop',
      action: data.steps[index].id
    })
  }
  const onKeyDown = event => {
    const move = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[
      event.key
    ]
    if (!move) return
    event.preventDefault()
    const next = (current + move + data.steps.length) % data.steps.length
    choose(next)
    const tabs = event.currentTarget.querySelectorAll('[role="tab"]')
    tabs[next].focus()
  }

  return (
    <Figure
      name="fde-loop"
      title={pick(data.title, lang)}
      subtitle={pick(data.subtitle, lang)}
    >
      {/* the tabs inside take the focus, one at a time */}
      {/* eslint-disable-next-line jsx-a11y-x/interactive-supports-focus */}
      <div
        className="VizSteps"
        role="tablist"
        aria-label={pick(data.title, lang)}
        onKeyDown={onKeyDown}
      >
        {data.steps.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`fde-loop-tab-${item.id}`}
            aria-selected={index === current}
            aria-controls="fde-loop-panel"
            tabIndex={index === current ? 0 : -1}
            className="VizStep"
            onClick={() => choose(index)}
          >
            <span className="VizStepNumber">{index + 1}</span>
            <span className="VizStepName">{pick(item.name, lang)}</span>
            <span className="VizStepWhen">{pick(item.when, lang)}</span>
          </button>
        ))}
      </div>
      <div
        className="VizPanel"
        role="tabpanel"
        id="fde-loop-panel"
        aria-labelledby={`fde-loop-tab-${step.id}`}
      >
        <p>{pick(step.does, lang)}</p>
        <p className="VizGet">
          <strong>{pick(data.getLabel, lang)}:</strong> {pick(step.get, lang)}
        </p>
      </div>
    </Figure>
  )
}

export default Loop
