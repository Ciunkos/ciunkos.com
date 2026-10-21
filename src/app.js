import React from 'react'
import { render } from 'react-dom'

import 'styles/foundation'
import 'styles/common'

import Main from './Main'
import { preload } from './routes'
import { startAnalytics } from './analytics'

const rerender = Component => {
  const root = document.getElementById('app')
  render(<Component />, root)
}

preload(window.location.pathname).then(() => rerender(Main))

startAnalytics()

if (module.hot) {
  module.hot.accept('./Main', () => {
    rerender(Main)
  })
}
