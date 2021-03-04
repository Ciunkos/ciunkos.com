import React from 'react'

import styled from 'styled'
import { Section, ActionButton, InlineLink, Button, linkIf } from 'components'
import ProfilePicture from 'assets/profile-picture.jpg'
import bio from 'resume/bio'
import { ArrowDownward } from 'icons'
import Social from 'social'
import { profile as cover } from './covers'

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
            includes JavaScript, React, node.js, C#, and .NET.
          </p>
          <p>
            I am fully committed to what I do, I am experienced with the full
            product lifecycle and I lead projects and teams to achieve their
            goals. I am product-focused, and I deliver. I love clean code,
            functional programming and participate in code reviews heavily. New
            challenges and opportunities are what I am looking for.
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
          <p>Earliest availability from June 2021. Remote work preferred.</p>
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
