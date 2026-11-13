import React from 'react'

import { meme as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import { pick } from './Figure'
import face from './przemo-cutout.webp'

// the "they took our jobs" line again, this time over the author's own photo
const Meme = () => {
  const lang = useLang()
  return (
    <figure className="Meme">
      <div className="MemeFrame" role="img" aria-label={pick(data.alt, lang)}>
        <span className="MemeText top" aria-hidden="true">
          {pick(data.top, lang)}
        </span>
        <img src={face} alt="" width="512" height="512" loading="lazy" />
        <span className="MemeText bottom" aria-hidden="true">
          {pick(data.bottom, lang)}
        </span>
      </div>
      <figcaption>{pick(data.caption, lang)}</figcaption>
    </figure>
  )
}

export default Meme
