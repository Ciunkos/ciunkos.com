import React from 'react'

import styled from 'styled'
import { Section, ActionButton, InlineLink, Button, linkIf } from 'components'
import { profile as cover } from './covers'
import ProfilePicture from 'assets/profile-picture.jpg'
import bio from 'resume/bio'
import social from 'resume/social'
import { ArrowDownward } from 'icons'

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

export const Social = () => (
  <styled.Social horizontal wrappable spacing media-no-print>
    {Object.entries(social).map(([key, { name, icon, url }]) => (
      <styled.SocialEntry tag="a" href={url} key={key} card-1>
        <styled.SocialIcon tag="img" src={icon} alt={name} />
      </styled.SocialEntry>
    ))}
  </styled.Social>
)

export default () => (
  <Section Profile cover={cover} id="profile">
    <Section.Content padding-2>
      <styled.Column middle HeadingImageContainer>
        <styled.HeadingImage tag="img" src={ProfilePicture} transition-all />
      </styled.Column>
      <styled.Column HeadingContent flex-2 spacing-4>
        <Section.Title tag="h1">Przemysław Zalewski</Section.Title>

        <styled.AboutMe>
          <p>Full-stack web and Windows app developer from Wroclaw.</p>
          <p>
            Currently working for{' '}
            <InlineLink href="http://sandstream.pl">
              <em>Sandstream Development Sp. z o.o.</em>
            </InlineLink>
          </p>
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
