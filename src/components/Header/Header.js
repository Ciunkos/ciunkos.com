import React from 'react'

import styled from 'styled'
import PageIcon from 'assets/page-icon.jpg'
import { Apps, PermContactCalendar, InfoOutline } from 'icons'
import HeaderBar from './HeaderBar'
import HeaderContainer from './HeaderContainer'

const Logo = () => (
  <styled.Logo
    media-large-inline
    horizontal
    style={{
      fontWeight: 300,
      textTransform: 'none',
      fontSize: '24px',
      letterSpacing: '-0.5px',
      display: 'flex'
    }}
  >
    <div>ciunkOS</div>
    <div className="fade-in-up delay" style={{ paddingLeft: 8 }}>
      blog
    </div>
  </styled.Logo>
)

const LargeIcon = (
  <styled.Icon media-large style={{ paddingRight: 12 }}>
    <styled.PageIcon
      tag="img"
      src={PageIcon}
      alt="Ciunkos.com"
      style={{ width: 40, height: 40, borderRadius: '50%' }}
    />
  </styled.Icon>
)

const routes = [
  {
    name: <Logo />,
    longName: 'Blog',
    title: 'Blog',
    href: '/',
    largeIcon: LargeIcon,
    style: {
      paddingLeft: 16,
      paddingRight: 16,
      justifySelf: 'flex-start',
      alignItems: 'flex-start',
      flexGrow: 1,
      flexShrink: 0,
      minWidth: 170
    },
    classes: {
      navbaritem: false,
      headeritem: true
    }
  },
  {
    name: 'Apps',
    href: '/apps',
    style: {
      justifySelf: 'flex-end',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: '160px'
    },
    classes: {
      navbaritem: true,
      headeritem: true
    },
    icon: <Apps />
  },
  {
    name: 'Resume',
    href: '/resume',
    style: {
      justifySelf: 'flex-end',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: '160px'
    },
    classes: {
      navbaritem: true,
      headeritem: true
    },
    icon: <PermContactCalendar />
  },
  {
    name: 'About',
    href: '/about',
    style: {
      justifySelf: 'flex-end',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: '160px'
    },
    classes: {
      navbaritem: true,
      headeritem: true
    },
    icon: <InfoOutline />
  }
]

const Header = ({ subheader, height = 0 }) => (
  <HeaderContainer
    header={top => (
      <HeaderBar
        routes={routes}
        scrolled-top={top <= 64}
        style={{ minHeight: 64, zIndex: 20 }}
      />
    )}
    subheader={subheader}
    height={height}
  />
)

export default Header
