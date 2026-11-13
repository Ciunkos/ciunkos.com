import React from 'react'

import { useLang } from '../i18n'

const UI = {
  en: { source: 'Source', table: 'Show the data as a table' },
  pl: { source: 'Źródło', table: 'Pokaż dane w tabeli' }
}

// picks the text for the post's language: { en, pl } or a plain string
export const pick = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value)
    ? (value[lang] ?? value.en)
    : value

export const useText = () => {
  const lang = useLang()
  return value => pick(value, lang)
}

/* The frame every figure shares: title, a line that says what to look at, the plot, a readout
   for the mark under the pointer or focus, the same data as a table and where it comes from. */
const Figure = ({
  name,
  title,
  subtitle,
  controls,
  children,
  readout,
  table,
  sources = [],
  note,
  ref
}) => {
  const lang = useLang()
  const ui = UI[lang] || UI.en
  return (
    <figure className="Viz" data-chart={name} ref={ref}>
      <figcaption className="VizHead">
        <strong className="VizTitle">{title}</strong>
        {subtitle && <span className="VizSub">{subtitle}</span>}
      </figcaption>
      {controls && <div className="VizControls">{controls}</div>}
      <div className="VizPlot">{children}</div>
      {readout !== undefined && (
        <p className="VizReadout" aria-live="polite">
          {readout}
        </p>
      )}
      {table && (
        <details className="VizTable">
          <summary>{ui.table}</summary>
          <div className="VizTableScroll">
            <table>
              <thead>
                <tr>
                  {table.head.map(cell => (
                    <th key={cell} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map(row => (
                  <tr key={row[0]}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th key={cell} scope="row">
                          {cell}
                        </th>
                      ) : (
                        // eslint-disable-next-line @eslint-react/no-array-index-key
                        <td key={index}>{cell}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
      {(sources.length > 0 || note) && (
        <p className="VizSource">
          {sources.length > 0 && `${ui.source}: `}
          {sources.map((source, index) => (
            <React.Fragment key={source.href}>
              {index > 0 && ', '}
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                {pick(source.name, lang)}
              </a>
            </React.Fragment>
          ))}
          {sources.length > 0 && note && '. '}
          {note}
        </p>
      )}
    </figure>
  )
}

export default Figure
