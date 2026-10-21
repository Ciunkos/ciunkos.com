import React from 'react'

import styled from 'styled'
import Button from '../Button'

// context is for screen readers and search engines only:
// "Read more" alone says nothing about the target
const ActionButton = ({ href, name, context, icon, ...rest }) => (
  <Button
    tag={href ? 'a' : 'button'}
    href={href}
    primary
    borderless
    center
    middle
    horizontal
    wrappable
    spacing-2
    animated
    fade-in-up
    ActionButton
    {...rest}
  >
    <styled.ActionName>
      {name}
      {context && <span className="visually-hidden">{context}</span>}
    </styled.ActionName>
    <styled.ActionIcon>{icon}</styled.ActionIcon>
  </Button>
)

export default ActionButton
