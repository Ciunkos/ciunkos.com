import React from 'react'

import styled from 'styled'
import { Button } from 'components'

const HeaderBar = ({ routes = [], ...rest }) => (
  <styled.HeaderBar transition-all Bar main-appbar style={{ top: 0 }} {...rest}>
    <styled.BarContent horizontal stretch>
      {routes.map(route => (
        <Button
          key={route.href}
          tag="a"
          title={route.title || route.name}
          href={route.href}
          primary
          borderless
          center
          middle
          navbaritem
          {...route.classes || {}}
          style={{
            minWidth: 24,
            paddingLeft: 0,
            paddingRight: 0,
            ...route.style
          }}
        >
          <styled.Action horizontal>
            {route.largeIcon && (
              <styled.ActionLargeIcon>{route.largeIcon}</styled.ActionLargeIcon>
            )}
            {route.icon && <styled.ActionIcon>{route.icon}</styled.ActionIcon>}
            <styled.ActionName center middle>
              {route.name}
            </styled.ActionName>
          </styled.Action>
        </Button>
      ))}
    </styled.BarContent>
  </styled.HeaderBar>
)

export default HeaderBar
