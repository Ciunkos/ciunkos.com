import React, { useEffect } from 'react'

import { siteFooter, SITE_FOOTER_CSS } from 'utils/site-footer.mjs'
import './Footer.css'

// The shared ciunkos.com footer ("100K footer"): the same HTML every app under
// ciunkos.com renders. Master copy: ~/hire/src/data/site-footer.mjs; sync
// src/utils/site-footer.mjs with `node ~/hire/scripts/check-footer-copies.mjs --fix`
// and never edit the copy here.

const VITALS_BADGE = 'https://ciunkos.com/checks/ciunkos.com/badge.svg?path=/'
const VITALS_LABEL =
  'Core Web Vitals of the ciunkos.com home page, measured daily by Vitals Desk'

const NOTE =
  'If I reply late, the first hour of work is free. Source code of this site is on GitHub (ciunkos/ciunkos.com); background images from unsplash.com.'

// the badge is drawn by a separate service that can take seconds to answer, so it is
// only requested after the page's load event and never holds the page back; it goes into
// the empty data-vitals slot the shared footer leaves for it
const useVitalsBadge = () => {
  useEffect(() => {
    const show = () => {
      const slot = document.querySelector('.cf-foot [data-vitals]')
      if (!slot || slot.firstChild) return
      const link = document.createElement('a')
      link.href = 'https://ciunkos.com/checks/ciunkos.com'
      link.setAttribute('aria-label', VITALS_LABEL)
      const img = document.createElement('img')
      Object.assign(img, {
        src: VITALS_BADGE,
        width: 392,
        height: 20,
        decoding: 'async',
        alt: VITALS_LABEL
      })
      link.append(img)
      slot.append(link)
    }
    if (document.readyState === 'complete') {
      show()
      return undefined
    }
    window.addEventListener('load', show, { once: true })
    return () => window.removeEventListener('load', show)
  }, [])
}

const Footer = ({ updated, lang = 'en', alternate }) => {
  useVitalsBadge()
  return (
    <>
      {/* static CSS from the shared footer module */}
      {/* eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml */}
      <style dangerouslySetInnerHTML={{ __html: SITE_FOOTER_CSS }} />
      <div
        className="SiteFooter"
        // trusted HTML built from the shared footer's own constants
        // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{
          __html: siteFooter({ lang, alternate, updated, note: NOTE })
        }}
      />
    </>
  )
}

export default Footer
