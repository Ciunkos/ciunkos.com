import React from 'react'

import { redFlags as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import { pick } from './Figure'

// three small line drawings: a stack of forms, a padlock, an anchor
const ICONS = {
  paper: (
    <>
      <path d="M14 10h18l8 8v24H14z" />
      <path d="M32 10v8h8" />
      <path d="M20 26h14M20 32h14M20 38h8" />
      <path d="M10 16v30h22" />
    </>
  ),
  lock: (
    <>
      <rect x="12" y="24" width="28" height="20" rx="3" />
      <path d="M18 24v-6a8 8 0 0 1 16 0v6" />
      <path d="M26 32v5" />
    </>
  ),
  anchor: (
    <>
      <circle cx="26" cy="12" r="4" />
      <path d="M26 16v28" />
      <path d="M18 24h16" />
      <path d="M10 32c2 8 8 12 16 12s14-4 16-12" />
    </>
  )
}

const RedFlags = () => {
  const lang = useLang()
  return (
    <figure className="Flags">
      <figcaption>{pick(data.title, lang)}</figcaption>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
            <svg viewBox="0 0 52 52" width="52" height="52" aria-hidden="true">
              {ICONS[item.id]}
            </svg>
            <strong>{pick(item.name, lang)}</strong>
            <span>{pick(item.text, lang)}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

export default RedFlags
