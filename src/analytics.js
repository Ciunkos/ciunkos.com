/* eslint-disable no-underscore-dangle, prefer-rest-params, func-names */

/* Analytics start after the window load event, so they never compete with the first render.
   Only PostHog (EU, no cookies, see ciunkos.com/privacy), the same stub as on the other
   ciunkos.com sites: array.js through the first-party proxy /hire/ph (the hire Worker),
   800 ms after load, never for automated browsers. ?i=1 marks this browser as the owner's
   (localStorage ph_internal, events get internal: true), ?i=0 removes the mark. */

const POSTHOG_TOKEN = 'phc_NTIsY2sy7inHkYFtbqmWdHGtjVxadeNU69NBNzroD3R'
const POSTHOG_HOST = '/hire/ph'

const afterLoad = (callback, delay = 0) => {
  if (document.readyState === 'complete') {
    setTimeout(callback, delay)
  } else {
    window.addEventListener('load', () => setTimeout(callback, delay), {
      once: true
    })
  }
}

const internalFlag = () => {
  try {
    const { location, history, localStorage } = window
    const flag = new URLSearchParams(location.search).get('i')
    if (flag === '1') localStorage.setItem('ph_internal', '1')
    else if (flag === '0') localStorage.removeItem('ph_internal')
    if (flag === '1' || flag === '0') {
      const url = new URL(location.href)
      url.searchParams.delete('i')
      history.replaceState(
        history.state,
        '',
        url.pathname + url.search + url.hash
      )
    }
    return localStorage.getItem('ph_internal') === '1'
  } catch (error) {
    return false // private window
  }
}

let posthogStarted = false

const optedOut = () => {
  try {
    return window.localStorage.getItem('ph_optout') === '1'
  } catch (error) {
    return false
  }
}

const startPostHog = () => {
  // opt-out from ciunkos.com/privacy is stored per browser on the same origin
  if (navigator.webdriver || optedOut()) return
  const internal = internalFlag()
  const p = window.posthog || []
  window.posthog = p
  if (p.__SV) return
  p._i = []
  const methods = ['capture', 'identify', 'register', 'on']
  methods.forEach(method => {
    p[method] = function () {
      p.push([method].concat([].slice.call(arguments)))
    }
  })
  p.init = (token, options) => {
    const script = document.createElement('script')
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = `${options.api_host}/static/array.js`
    afterLoad(() => document.head.appendChild(script), 800)
    p._i.push([token, options])
  }
  p.__SV = 1
  p.init(POSTHOG_TOKEN, {
    api_host: new URL(POSTHOG_HOST, window.location.origin).href.replace(
      /\/$/,
      ''
    ),
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-05-30',
    persistence: 'localStorage',
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: {
      dom_event_allowlist: ['click'],
      element_allowlist: ['a', 'button', 'summary', 'input', 'select', 'label']
    },
    disable_surveys: true,
    disable_session_recording: false,
    respect_dnt: true,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: '[data-ph-mask]',
      recordCrossOriginIframes: false
    },
    capture_exceptions: true,
    capture_performance: { web_vitals: true },
    mask_all_element_attributes: true,
    loaded: instance => {
      try {
        if (internal) instance.register({ internal: true })
        else instance.unregister('internal')
        instance.register({
          app: 'ciunkos',
          lang: document.documentElement.lang,
          mobile: window.matchMedia('(pointer: coarse)').matches
        })
        // the first $pageview; later ones come from logPageView on route changes
        instance.capture('$pageview')
      } catch (error) {
        // analytics must not break the page
      }
    }
  })
  posthogStarted = true
}

export const startAnalytics = () => {
  startPostHog()
}

let firstPageView = true

export const logPageView = () => {
  // PostHog sends the first $pageview itself once loaded
  // window.posthog is the stub until array.js replaces it with the real instance
  if (posthogStarted && !firstPageView) {
    try {
      window.posthog.capture('$pageview')
    } catch (error) {
      // analytics must not break the page
    }
  }
  firstPageView = false
}
