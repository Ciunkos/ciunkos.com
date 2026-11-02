import React from 'react'

import './styles'
import { Page } from 'components'
import ogResume from 'assets/og-resume.jpg'
import { HeaderBar } from 'components/Header'
import routes from './routes'
import { description, title } from './LOCALE'
import dates from '../dates.json'
import { graph, breadcrumbs, personRef, websiteRef } from 'utils/schema'
import {
  Profile,
  Education,
  Skills,
  Projects,
  Interests,
  Notes
} from './sections'

const URL_RESUME = 'https://ciunkos.com/resume'
const resumeJsonLd = graph(
  {
    '@type': 'ProfilePage',
    '@id': URL_RESUME,
    url: URL_RESUME,
    name: title,
    description,
    inLanguage: 'en',
    isPartOf: websiteRef,
    mainEntity: personRef,
    about: personRef,
    author: personRef,
    publisher: personRef,
    breadcrumb: { '@id': `${URL_RESUME}#breadcrumb` },
    datePublished: dates['/resume'].published,
    dateModified: dates['/resume'].modified
  },
  breadcrumbs(URL_RESUME, [
    ['ciunkos.com', 'https://ciunkos.com/'],
    ['Resume', URL_RESUME]
  ])
)

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
    jsonLd={resumeJsonLd}
    updated={dates['/resume'].modified}
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
