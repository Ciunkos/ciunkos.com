import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import 'styles/foundation'
import 'styles/common'

import Main from './Main'

render(<Main />, document.getElementById('app'))
