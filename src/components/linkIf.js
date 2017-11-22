import React from 'react'

import { InlineLink } from 'components'

const wrapIf = (Component, props) => condition => value =>
  condition ? <Component {...props}>{value}</Component> : value
const linkIf = uri => wrapIf(InlineLink, { href: uri })(uri)

export default linkIf
