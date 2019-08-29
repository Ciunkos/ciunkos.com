import React, { useEffect } from 'react'

import AppContainer from './AppContainer'
import { match } from './routes'
import useLocation from './useLocation'

let logPageView = () => {}

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  const ReactGA = require('react-ga')
  ReactGA.initialize('UA-41993735-2')

  logPageView = ({ pathname }) => {
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }
}

const Main = ({ location: sourceLocation }) => {
  const location = useLocation(sourceLocation)

  const { pathname } = location
  const route = match(pathname)
  const page = route({ location })

  useEffect(() => {
    logPageView(location)
  }, [location])

  return <AppContainer>{page}</AppContainer>
}

export default Main
