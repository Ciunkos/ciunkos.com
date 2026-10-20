import React from 'react'

import styled from 'styled'
import { Section, ActionButton, InlineLink, Button, linkIf } from 'components'
import ProfilePicture from 'assets/profile-picture.jpg'
import bio from 'resume/bio'
import { ArrowDownward } from 'icons'
import Social from 'social'
import companies from '../companies'
import { profile as cover } from './covers'

const NOTICE_RECEIVED_AT = new Date('2026-09-03T12:00:00.000Z')
const PERIOD_OF_NOTICE_DAYS = 60
const AVAILABILITY_BUFFER_DAYS = 0

const yearMonthDateFormatter = new Intl.DateTimeFormat(['en-US', 'en'], {
  month: 'long',
  year: 'numeric'
})

const EarliestAvailabilityDate = ({ children: now }) => {
  const estimatedAvailability = new Date(NOTICE_RECEIVED_AT ?? now)
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
        <styled.HeadingImage
          tag="img"
          src={ProfilePicture}
          alt="Przemysław Zalewski"
          transition-all
        />
      </styled.Column>
      <styled.Column HeadingContent flex-2 spacing-4>
        <Section.Title tag="h1">Przemysław Zalewski</Section.Title>

        <styled.AboutMe spacing-2>
          <p>
            Senior Frontend / Full-Stack Developer from Wrocław, Poland. Product
            engineer with 15+ years of commercial experience, shipping React
            since 2017. Before that I&nbsp;built and ran mobile apps in C# and
            .NET. Long-term player: nine years in the same agency, running
            projects end to end, solo or with a&nbsp;team.
          </p>
          <p>
            I&nbsp;own what I&nbsp;ship: I&nbsp;monitor it, run it, debug it and
            page myself. Known for fast, thorough code reviews. I&nbsp;lead
            small teams. Since 2018 I&nbsp;have mentored colleagues by pairing
            with them and raising them along, not as a&nbsp;boss: I&nbsp;believe
            in leading by example. I&nbsp;put AI agents to work on real products
            and keep them in check with agent skills, guardrails, an end-to-end
            test obsession, monitoring and observability.
          </p>
          <styled.CurrentEmployment tag="p" media-no-print>
            Currently working for{' '}
            <InlineLink
              href="https://sanddev.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <em>{companies.Sanddev}</em>
            </InlineLink>
          </styled.CurrentEmployment>
          <styled.EarliestAvailability tag="p" media-no-print>
            Available from{' '}
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
