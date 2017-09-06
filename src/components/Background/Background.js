import React from 'react'

import styled from 'styled'

const Background = ({ src, children, ...rest }) =>
  <styled.Background
    style={{
      backgroundImage: `url("${src}")`
    }}
    {...rest}
  >
    {children}
  </styled.Background>

export default Background
