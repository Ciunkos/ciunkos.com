import React, { useEffect, useRef, useState } from 'react'

import { hire as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import { pick } from './Figure'
import { track } from './hooks'
import face from './przemo-cutout.webp'

const CLOSED = 'fde-peek-closed'

const remembered = () => {
  try {
    return sessionStorage.getItem(CLOSED) === 'x'
  } catch {
    return false
  }
}

/* The offer at the end of the post. When it scrolls into view the author's head leans in
   from the edge of the screen once, with the same offer in a speech bubble. Closing it
   keeps it closed for the visit; with reduced motion it never shows. */
const Hire = () => {
  const lang = useLang()
  const card = useRef(null)
  const [peek, setPeek] = useState('idle')

  useEffect(() => {
    const element = card.current
    if (
      !element ||
      remembered() ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setPeek('in')
          track('peek_shown', { post: 'fde' })
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (peek !== 'in') return undefined
    const onKeyDown = event => {
      if (event.key === 'Escape') setPeek('out')
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [peek])

  const close = () => {
    try {
      sessionStorage.setItem(CLOSED, 'x')
    } catch {
      // private window: it just shows again on the next page
    }
    setPeek('out')
    track('peek_closed', { post: 'fde' })
  }

  return (
    <>
      <aside
        className="HireCard"
        ref={card}
        aria-label={pick(data.title, lang)}
      >
        <img src={face} alt="" width="160" height="160" loading="lazy" />
        <div>
          <p className="HireLead">{pick(data.lead, lang)}</p>
          <ul>
            {pick(data.points, lang).map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="HireActions">
            <a
              className="HireButton"
              href={data.callHref}
              rel="noopener"
              data-track="cta_call_clicked"
              data-where="fde-post"
            >
              {pick(data.call, lang)} →
            </a>
            <a href={pick(data.moreHref, lang)}>{pick(data.more, lang)}</a>
          </p>
        </div>
      </aside>
      {peek !== 'idle' && (
        <div
          className={`Peek${peek === 'out' ? ' out' : ''}`}
          role="dialog"
          aria-modal="false"
          aria-label={pick(data.peek, lang)}
        >
          <img src={face} alt="" width="512" height="512" />
          <div className="PeekBubble">
            <p>{pick(data.peek, lang)}</p>
            <div className="PeekRow">
              <a
                className="HireButton small"
                href={data.callHref}
                rel="noopener"
                data-track="cta_call_clicked"
                data-where="fde-post-peek"
                onClick={() => setPeek('out')}
              >
                {pick(data.peekCall, lang)}
              </a>
              <button type="button" onClick={close}>
                {pick(data.peekClose, lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hire
