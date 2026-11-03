import React from 'react'

import styled from 'styled'
import './styles'
import { Page, Section, ActionButton, InlineLink } from 'components'
import { MailOutline } from 'icons'
import Social from 'social'
import cover from './cover.jpg'
import background from './background.jpg'
import dates from '../dates.json'
import { graph, breadcrumbs, personRef, websiteRef } from 'utils/schema'

const URL_ABOUT = 'https://ciunkos.com/about'
const TITLE = 'About Przemysław Zalewski (Ciunkos), senior full-stack engineer'
const DESCRIPTION =
  'Przemysław Zalewski, senior full-stack engineer and technical lead from Wrocław, Poland. TypeScript, React, Node.js and AI agents.'

const aboutJsonLd = graph(
  {
    '@type': 'ProfilePage',
    '@id': URL_ABOUT,
    url: URL_ABOUT,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: 'en',
    isPartOf: websiteRef,
    mainEntity: personRef,
    about: personRef,
    author: personRef,
    publisher: personRef,
    breadcrumb: { '@id': `${URL_ABOUT}#breadcrumb` },
    datePublished: dates['/about'].published,
    dateModified: dates['/about'].modified
  },
  breadcrumbs(URL_ABOUT, [
    ['ciunkos.com', 'https://ciunkos.com/'],
    ['About', URL_ABOUT]
  ])
)

const AboutPage = () => (
  <Page
    About
    title={TITLE}
    description={DESCRIPTION}
    ogUrl={URL_ABOUT}
    ogType="profile"
    ogImage={new URL(cover, 'https://ciunkos.com/').href}
    ogImageAlt="Przemysław Zalewski"
    jsonLd={aboutJsonLd}
    updated={dates['/about'].modified}
  >
    <Section About cover={cover} priority>
      <Section.Content padding-2 spacing-4>
        <h1>About me</h1>

        <styled.AboutMe spacing-2>
          <p>
            I am Przemysław Zalewski, a senior full-stack engineer and technical
            lead from Wrocław, Poland. I have shipped React since 2017, with
            TypeScript and Node.js. Before that I spent ten years on C# and
            .NET, building my own Windows Phone and Windows Store apps with
            3.7M+ downloads.
          </p>

          <p>
            For nine years I have run products end to end at the same agency,
            solo or with a small team. I own what I ship: I monitor it, run it,
            debug it and page myself. Since 2023 I have put AI agents to work on
            real products. They get skills, guardrails, end-to-end tests and
            observability, and I review what they ship.
          </p>

          <p>
            Recent work: Patriot Mail, an email client with iOS and macOS apps
            on the App Store since April 2026, and Sandtime.io, time tracking
            for 4,000+ freelancers and teams, where I have been the founding
            engineer since 2018. The details are in my{' '}
            <InlineLink href="/resume">resume</InlineLink>.
          </p>

          <p>
            Available now, in Wrocław or remote. Hiring for TypeScript, React or
            AI agents? See{' '}
            <InlineLink href="https://ciunkos.com/hire-me">
              services, rates and the earliest start date
            </InlineLink>
            , or write to me below.
          </p>
        </styled.AboutMe>

        <styled.SocialLinks>
          <h2>See my social profiles</h2>
          <Social />
        </styled.SocialLinks>
      </Section.Content>

      <ActionButton href="#contact" name="Contact me" icon={<MailOutline />} />
    </Section>

    <Section Contact cover={background} id="contact">
      <Section.Content padding-2 spacing-4>
        <h2>Contact me</h2>

        <styled.About spacing-4>
          <div className="task-result error" id="contact-error">
            <p>
              Please mail me directly at{' '}
              <InlineLink href="mailto:ciunkos@gmail.com">
                ciunkos@gmail.com
              </InlineLink>{' '}
              or{' '}
              <InlineLink href="mailto:ciunkos@ciunkos.com">
                ciunkos@ciunkos.com
              </InlineLink>
              .
            </p>
            <p>
              I reply within 24 hours on working days, personally. If I am late,
              the first hour of work is free.
            </p>
          </div>
        </styled.About>
      </Section.Content>
    </Section>
  </Page>
)

export default AboutPage
