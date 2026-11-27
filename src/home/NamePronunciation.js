import React, { useCallback, useRef, useState } from 'react'

import { VolumeUp } from 'icons'

export default function NamePronunciation() {
  const audioRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const label = playing ? 'Stop name pronunciation' : 'Play name pronunciation'

  const attachAudio = useCallback(element => {
    audioRef.current = element
    setReady(Boolean(element))
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio.paused && !audio.error) {
      audio.pause()
      audio.currentTime = 0
      return
    }

    if (!audio.src || audio.error) audio.src = '/audio/name-pronunciation.m4a'
    try {
      await audio.play()
    } catch {
      // A pending play can also be interrupted by a second click.
      if (audio.paused || audio.error) setPlaying(false)
    }
  }

  return (
    <>
      <button
        className="NamePronunciation"
        type="button"
        disabled={!ready}
        aria-label={label}
        title={label}
        data-playing={playing}
        onClick={togglePlayback}
      >
        <VolumeUp aria-hidden="true" focusable="false" />
      </button>
      {/* The adjacent name is the transcript of this audio-only recording. */}
      {/* eslint-disable-next-line jsx-a11y-x/media-has-caption */}
      <audio
        ref={attachAudio}
        preload="none"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => setPlaying(false)}
        onWaiting={() => setPlaying(false)}
      />
    </>
  )
}
