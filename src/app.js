import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import 'styles/foundation'
import 'styles/common'

import Main from './Main'
import { preload } from './routes'
import { startAnalytics } from './analytics'

let root = null

// the prerendered pages are hydrated; the dev server's empty page is rendered from scratch
const rerender = Component => {
  const container = document.getElementById('app')
  if (root) {
    root.render(<Component />)
  } else if (container.hasChildNodes()) {
    root = hydrateRoot(container, <Component />)
  } else {
    root = createRoot(container)
    root.render(<Component />)
  }
}

preload(window.location.pathname).then(() => rerender(Main))

startAnalytics()

if (module.hot) {
  module.hot.accept('./Main', () => {
    rerender(Main)
  })
}
