import React from 'react'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'

import routes from 'routes'

let logPageView = () => {}
let middlewares = []

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  const ReactGA = require('react-ga')
  ReactGA.initialize('UA-41993735-2')

  logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }

  /* eslint-disable global-require */
  const { useScroll } = require('react-router-scroll')
  middlewares = [useScroll()]
}

const Main = () => (
  <Router
    history={browserHistory}
    onUpdate={logPageView}
    render={applyRouterMiddleware(...middlewares)}
  >
    {routes}
  </Router>
)

export default Main
