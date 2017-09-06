import React from 'react'

import styled from 'styled'
import { Background } from 'components'

const gradientStyle = gradient => gradient ? {
  [`background-gradient${typeof gradient === 'string' ? `-${gradient}` : ''}`]: true
} : {}

const Section = ({ children, cover, gradient = true, ...rest }) =>
  <styled.Section tag="section" {...rest} tabIndex={-1}>
    {cover && <Background src={cover} />}

    <styled.SectionContent {...gradientStyle(gradient)}>
      {children}
    </styled.SectionContent>
  </styled.Section>

Section.Content = props => <styled.Content {...props} />
Section.Title = props => <styled.Title tag="h2" {...props} />

export default Section
