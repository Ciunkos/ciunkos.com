import React from 'react'

import { compare as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import Figure, { pick } from './Figure'

// a plain table: the markdown renderer has no tables, and this one needs a highlighted row
const Compare = () => {
  const lang = useLang()
  const head = pick(data.head, lang)
  return (
    <Figure name="fde-compare" title={pick(data.title, lang)}>
      <div className="VizTableScroll">
        <table className="VizGridTable">
          <thead>
            <tr>
              {head.map(cell => (
                <th key={cell} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map(row => (
              <tr key={row.name.en} className={row.lead ? 'lead' : undefined}>
                <th scope="row">{pick(row.name, lang)}</th>
                {pick(row.cells, lang).map((cell, index) => (
                  <td key={head[index + 1]}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Figure>
  )
}

export default Compare
