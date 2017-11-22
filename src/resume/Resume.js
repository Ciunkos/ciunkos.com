import React from 'react'

import './styles'
import { Page } from 'components'
import { HeaderBar } from 'components/Header'
import routes from './routes'
import { description, title } from './LOCALE'
import {
  Profile,
  Education,
  Skills,
  Projects,
  Interests,
  Notes
} from './sections'

export default () => (
  <Page
    Resume
    title={title}
    description={description}
    subheader={top => (
      <HeaderBar
        routes={routes}
        scrolled-top={top <= 64}
        animated
        fade-in-down
        fast
        style={{ zIndex: 10 }}
      />
    )}
  >
    <Profile />
    <Education />
    <Skills />
    <Projects />
    <Interests />
    <Notes />
  </Page>
)
