import React from 'react'

import styled from 'styled'

const Button = ({ children, href, ...rest }) =>
  <styled.Button
    tag="button"
    href={href}
    {...rest}
  >
    {children}
  </styled.Button>

export default Button
