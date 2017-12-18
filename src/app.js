import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import 'styles/foundation'
import 'styles/common'

import Main from './Main'

const rerender = Component => {
  const root = document.getElementById('app')
  render(<Component />, root)
}

rerender(Main)

if (module.hot) {
  module.hot.accept('./Main', () => {
    rerender(Main)
  })
}
