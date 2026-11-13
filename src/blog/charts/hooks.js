import { useEffect, useRef, useState } from 'react'

/* Shared behaviour of the figures in posts. Every figure is prerendered in its final state
   (so it reads without JavaScript) and only starts moving once it is hydrated. */

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// the width the figure really has; the prerender assumes a desktop column
export const useWidth = (ref, initial = 680) => {
  const [width, setWidth] = useState(initial)
  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === 'undefined') return undefined
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.round(entry.contentRect.width)
      if (next > 0) setWidth(next)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])
  return width
}

const easeOut = t => 1 - (1 - t) ** 3

// follows `target` over `duration` ms; jumps when the reader asked for less motion
export const useTween = (target, duration = 700) => {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    if (reducedMotion() || from.current === target) {
      from.current = target
      setValue(target)
      return undefined
    }
    const start = from.current
    const began = performance.now()
    let frame = 0
    const step = now => {
      const t = Math.min(1, (now - began) / duration)
      const next = start + (target - start) * easeOut(t)
      from.current = next
      setValue(next)
      if (t < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])
  return value
}

/* 1 once the figure has been seen. A figure that is below the screen when the page hydrates
   starts at 0 and plays when it scrolls in; one already on screen stays as prerendered. */
export const useEntrance = ref => {
  const [seen, setSeen] = useState(1)
  useEffect(() => {
    const element = ref.current
    if (
      !element ||
      reducedMotion() ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return undefined
    }
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
      return undefined
    }
    setSeen(0)
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setSeen(1)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])
  return seen
}

// product analytics, when it has loaded; a figure works the same without it
export const track = (event, properties) => {
  try {
    if (window.posthog && window.posthog.capture) {
      window.posthog.capture(event, properties)
    }
  } catch {
    // analytics must never break a figure
  }
}

export const formatNumber = (value, lang, options) =>
  new Intl.NumberFormat(lang === 'pl' ? 'pl-PL' : 'en-GB', options).format(
    value
  )
