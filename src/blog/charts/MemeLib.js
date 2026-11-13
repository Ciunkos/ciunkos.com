import React, { useEffect, useRef } from 'react'

import { memelib as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import { pick } from './Figure'

const MEDIA = 'https://ciunkos.com/memelib/media'

/* A reaction from MemeLib (ciunkos.com/memelib), played from there as a muted, looping
   video with the poster as its still. It plays while it is on screen; with reduced motion
   it stays a still with controls. The caption links to the meme's page. */
const MemeLib = ({ id }) => {
  const lang = useLang()
  const video = useRef(null)
  const meme = data[id]

  useEffect(() => {
    const element = video.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      return undefined
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // no motion asked for: the poster stays, with controls to play it by hand
      element.controls = true
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.play().catch(() => {
            element.controls = true
          })
        } else element.pause()
      },
      { threshold: 0.5 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="Meme">
      <video
        ref={video}
        className="MemeVideo"
        poster={`${MEDIA}/${id}/${id}-poster.png`}
        width={meme.width}
        height={meme.height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={pick(meme.alt, lang)}
      >
        <source src={`${MEDIA}/${id}/${id}.mp4`} type="video/mp4" />
      </video>
      <figcaption>
        {pick(meme.caption, lang)}{' '}
        <a href={`https://ciunkos.com${pick(meme.page, lang)}`}>MemeLib</a>
      </figcaption>
    </figure>
  )
}

export default MemeLib
