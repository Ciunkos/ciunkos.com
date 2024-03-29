import React from 'react'

import styled from 'styled'
import { Section, ActionButton, InlineLink, Button, linkIf } from 'components'
import ProfilePicture from 'assets/profile-picture.jpg'
import bio from 'resume/bio'
import { ArrowDownward } from 'icons'
import Social from 'social'
import { profile as cover } from './covers'

const PERIOD_OF_NOTICE_DAYS = 60
const AVAILABILITY_BUFFER_DAYS = 33

const yearMonthDateFormatter = new Intl.DateTimeFormat(['en-US', 'en'], {
  month: 'long',
  year: 'numeric'
})

const EarliestAvailabilityDate = ({ children: now }) => {
  const estimatedAvailability = new Date(now)
  estimatedAvailability.setDate(
    estimatedAvailability.getDate() +
      PERIOD_OF_NOTICE_DAYS +
      AVAILABILITY_BUFFER_DAYS
  )

  const formattedYearMonth = yearMonthDateFormatter.format(
    estimatedAvailability,
    { month: '2-digit', year: 'numeric' }
  )

  return formattedYearMonth
}

const Bio = () => (
  <styled.Bio spacing>
    {Object.entries(bio).map(([key, { name, value, uri, classes = {} }]) => (
      <styled.BioEntry horizontal spacing wrappable key={key} text {...classes}>
        <styled.BioEntryName>{name}</styled.BioEntryName>
        <styled.BioEntryValue stretch>
          {linkIf(uri)(value)}
        </styled.BioEntryValue>
      </styled.BioEntry>
    ))}
  </styled.Bio>
)

export default () => (
  <Section Profile cover={cover} id="profile">
    <Section.Content padding-2>
      <styled.Column middle HeadingImageContainer>
        <styled.HeadingImage tag="img" src={ProfilePicture} transition-all />
      </styled.Column>
      <styled.Column HeadingContent flex-2 spacing-4>
        <Section.Title tag="h1">Przemysław Zalewski</Section.Title>

        <styled.AboutMe spacing-2>
          <p>
            Full Stack Web Developer from Wroclaw, Poland. My daily toolbox
            includes JavaScript, TypeScript, React, node.js, C#, and .NET.
          </p>
          <p>
            I am fully committed to what I do, I am experienced with the full
            product lifecycle and I lead projects and teams to achieve their
            goals. I am product-focused, and I deliver. I love clean code,
            functional programming, and I participate in code reviews heavily.
            New challenges and opportunities are what I am looking for.
          </p>
          <styled.CurrentEmployment tag="p" media-no-print>
            Currently working for{' '}
            <InlineLink
              href="https://sanddev.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <em>Sandstream Development sp. z o.o.</em>
            </InlineLink>
          </styled.CurrentEmployment>
          <styled.EarliestAvailability tag="p" media-no-print>
            Earliest availability from{' '}
            <EarliestAvailabilityDate>{new Date()}</EarliestAvailabilityDate>.
            Remote work preferred.
          </styled.EarliestAvailability>
        </styled.AboutMe>

        <styled.Outbound>
          <Bio />
          <Social />
        </styled.Outbound>

        <styled.Actions>
          <Button
            tag="a"
            href="/about#contact"
            primary
            active
            center
            middle
            style={{ minHeight: 48 }}
          >
            Contact me
          </Button>
        </styled.Actions>
      </styled.Column>
    </Section.Content>

    <ActionButton
      href="#education-and-experience"
      name="Learn more"
      icon={<ArrowDownward />}
    />
  </Section>
)
