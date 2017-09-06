import React from 'react'

import styled from 'styled'
import { Button } from 'components'

const ActionButton = ({ href, name, icon, ...rest }) =>
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
    <styled.ActionName>{name}</styled.ActionName>
    <styled.ActionIcon>{icon}</styled.ActionIcon>
  </Button>

export default ActionButton
