import React from 'react'

import { useLang } from '../i18n'

// picks the text for the post's language: { en, pl } or a plain string
export const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value)
    ? (value[lang] ?? value.en)
    : value

// a source named inside a sentence: [{ name, href }] becomes "A, B" with links
export const Credit = ({ sources = [] }) => {
  const lang = useLang()
  return sources.map((source, index) => (
    <React.Fragment key={source.href}>
      {index > 0 && ', '}
      <a href={source.href} target="_blank" rel="noopener noreferrer">
        {pick(source.name, lang)}
      </a>
    </React.Fragment>
  ))
}

/* The frame every figure shares: a title, one line that says what to look at and where the
   numbers come from, the plot, and a readout for the mark under the pointer or focus. */
const Figure = ({
  name,
  title,
  subtitle,
  sources = [],
  controls,
  children,
  readout,
  ref
}) => (
  <figure className="Viz" data-chart={name} ref={ref}>
    <figcaption className="VizHead">
      <strong className="VizTitle">{title}</strong>
      {(subtitle || sources.length > 0) && (
        <span className="VizSub">
          {subtitle}
          {subtitle && sources.length > 0 && ' · '}
          <Credit sources={sources} />
        </span>
      )}
    </figcaption>
    {controls && <div className="VizControls">{controls}</div>}
    <div className="VizPlot">{children}</div>
    {readout !== undefined && (
      <p className="VizReadout" aria-live="polite">
        {readout}
      </p>
    )}
  </figure>
)

export default Figure
