import React, { useEffect, useRef } from 'react'

import { memelib as data } from '../posts/forward-deployed-engineer-coding-is-dead/data'
import { useLang } from '../i18n'
import { pick } from './Figure'
import letItGo from './memes/let-it-go.mp4'
import letItGoPoster from './memes/let-it-go.png'
import tookOurJobs from './memes/they-took-our-jobs.mp4'
import tookOurJobsPoster from './memes/they-took-our-jobs.png'

// the clips are copies of the MemeLib entries with the same ids (ciunkos.com/memelib)
const MEDIA = {
  'they-took-our-jobs': { video: tookOurJobs, poster: tookOurJobsPoster },
  'let-it-go': { video: letItGo, poster: letItGoPoster }
}

/* A reaction from MemeLib as a muted, looping video with its poster as the still. It plays
   while it is on screen; with reduced motion it stays a still with controls. The caption
   links to the meme's page. */
const MemeLib = ({ id }) => {
  const lang = useLang()
  const video = useRef(null)
  const meme = data[id]
  const media = MEDIA[id]

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
      { threshold: 0.4 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="Meme">
      <video
        ref={video}
        className="MemeVideo"
        src={media.video}
        poster={media.poster}
        width={meme.width}
        height={meme.height}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={pick(meme.alt, lang)}
      />
      <figcaption>
        {pick(meme.caption, lang)}{' '}
        <a href={`https://ciunkos.com${pick(meme.page, lang)}`}>MemeLib</a>
      </figcaption>
    </figure>
  )
}

export default MemeLib
