import React from 'react'

import styled from 'styled'
import { Section, InlineLink } from 'components'
import contracts from 'resume/contracts'
import { education as cover } from './covers'

const Contracts = ({ contracts }) => (
  <styled.Contracts spacing-3>
    {contracts.map(contract => (
      <styled.Contract key={contract.date} {...contract.classes}>
        <styled.Subheader Subheader>{contract.date}</styled.Subheader>
        <p>
          {contract.company} · {contract.title} ·{' '}
          {contract.scope && `${contract.scope} · `}
          {contract.tech}
        </p>
        <p>{contract.description}</p>
      </styled.Contract>
    ))}
  </styled.Contracts>
)

const JobPaths = () => (
  <styled.JobPaths spacing-3>
    <div>
      <styled.Subheader>Since 2017</styled.Subheader>
      <p>Full Stack Web Developer · JavaScript</p>
    </div>
    <div>
      <styled.Subheader Subheader>2012 - 2017</styled.Subheader>
      <p>Windows App Developer · C#</p>
    </div>
    <div>
      <styled.Subheader Subheader>Before 2012</styled.Subheader>
      <p>Game Developer · C++, C#</p>
    </div>
  </styled.JobPaths>
)

export default () => (
  <Section cover={cover} id="education-and-experience">
    <Section.Content padding-2 spacing-4>
      <h2>Education and work experience</h2>

      <p>
        In 2014 I have earned a <em>Bachelor of Science</em> degree in{' '}
        <em>Computer Science</em> at the{' '}
        <InlineLink href="http://wiz.pwr.edu.pl/en/">
          <em>Faculty of Computer Science and Management</em>
        </InlineLink>{' '}
        of{' '}
        <InlineLink href="http://pwr.edu.pl/en/">
          <em>Wroclaw University of&nbsp;Science and Technology</em>
        </InlineLink>
        .
      </p>

      <styled.Row horizontal wrappable wrappable-spacing>
        <styled.Column flex-stretch-2>
          <h3>Commercial work</h3>
          <Contracts contracts={contracts} />
        </styled.Column>

        <styled.Column flex-stretch--1>
          <h3>Job paths</h3>
          <JobPaths />
        </styled.Column>
      </styled.Row>
    </Section.Content>
  </Section>
)
