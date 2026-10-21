import React, { useEffect } from 'react'

import AppContainer from './AppContainer'
import { match } from './routes'
import useLocation from './useLocation'
import { logPageView } from './analytics'

const Main = ({ location: sourceLocation }) => {
  const location = useLocation(sourceLocation)

  const { pathname } = location
  const route = match(pathname)
  const page = route({ location })

  useEffect(() => {
    logPageView({ pathname })
  }, [pathname])

  return <AppContainer>{page}</AppContainer>
}

export default Main
