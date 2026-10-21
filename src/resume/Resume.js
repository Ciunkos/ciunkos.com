import React from 'react'

import './styles'
import { Page } from 'components'
import ogResume from 'assets/og-resume.jpg'
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
    ogUrl="https://ciunkos.com/resume"
    ogImage={new URL(ogResume, 'https://ciunkos.com/').href}
    ogImageWidth={2400}
    ogImageHeight={1260}
    ogImageAlt="Resume card: Przemysław Zalewski, senior full-stack engineer with 15+ years shipping software"
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
