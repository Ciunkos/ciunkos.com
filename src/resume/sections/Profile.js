import React from 'react'

import styled from 'styled'
import { Section, ActionButton, Button, linkIf } from 'components'
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
  <Section Profile cover={cover} priority id="profile">
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
          <p className="media-no-print">
            Senior Full-Stack Engineer from Wrocław, Poland. 15+ years of
            commercial experience, shipping React since 2017, C# and .NET before
            that. I&nbsp;own what I&nbsp;ship, lead small teams by example and
            put AI agents to work with guardrails and end-to-end tests.
          </p>
          <p className="media-only-print">
            Senior Full-Stack Engineer from Wrocław, Poland. Product engineer
            with 15+ years of commercial experience, shipping React since 2017.
            Before that I&nbsp;built and ran mobile apps in C# and .NET.
            Long-term player: nine years in the same agency, running projects
            end to end, solo or with a&nbsp;team.
          </p>
          <p className="media-only-print">
            I&nbsp;own what I&nbsp;ship: I&nbsp;monitor it, run it, debug it and
            page myself. Known for fast, thorough code reviews. I&nbsp;lead
            small teams. Since 2018 I&nbsp;have mentored colleagues by pairing
            with them and raising them along, not as a&nbsp;boss: I&nbsp;believe
            in leading by example. Agentic engineering by default: given
            a&nbsp;goal, I&nbsp;ship it end to end with coding agents under
            skills, guardrails, end-to-end tests and observability. Product
            engineer, not a&nbsp;ticket mover. Generalist: TypeScript, React and
            Node.js daily, 10+ years of C#/.NET, Python when needed.
          </p>
          <styled.CurrentEmployment tag="p" media-no-print>
            Available now, remote preferred.
          </styled.CurrentEmployment>
        </styled.AboutMe>

        <styled.Outbound>
          <Bio />
          <Social />
        </styled.Outbound>

        <styled.Actions horizontal wrappable spacing-2>
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
          <Button
            tag="a"
            href="/resume.pdf"
            primary
            center
            middle
            style={{ minHeight: 48 }}
          >
            Download PDF
          </Button>
        </styled.Actions>
      </styled.Column>
    </Section.Content>

    <ActionButton
      href="#education-and-experience"
      name="Learn more"
      context=" about my education and work experience"
      icon={<ArrowDownward />}
    />
  </Section>
)
