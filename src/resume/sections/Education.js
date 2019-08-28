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
        <p>{contract.decription}</p>
      </styled.Contract>
    ))}
  </styled.Contracts>
)

const JobPaths = () => (
  <styled.JobPaths spacing-3>
    <div>
      <styled.Subheader>Since 2016</styled.Subheader>
      <p>Full-stack web developer · JavaScript</p>
    </div>
    <div>
      <styled.Subheader Subheader>2013 - 2016</styled.Subheader>
      <p>Windows app developer · C#</p>
    </div>
    <div>
      <styled.Subheader Subheader>Before 2013</styled.Subheader>
      <p>Game developer · C++, C#</p>
    </div>
  </styled.JobPaths>
)

export default () => (
  <Section cover={cover} id="education-and-experience">
    <Section.Content padding-2 spacing-4>
      <h2>Education and work experience</h2>

      <p>
        In 2014 I have earned <em>Bachelor of Science</em> degree in{' '}
        <em>Computer Science</em> on{' '}
        <InlineLink href="http://wiz.pwr.edu.pl/en/">
          <em>Faculty of Computer Science and Management</em>
        </InlineLink>{' '}
        of{' '}
        <InlineLink href="http://pwr.edu.pl/en/">
          <em>Wroclaw University of Science and Technology</em>
        </InlineLink>
        .
      </p>

      <p className="media-no-print">
        I work mostly on my own apps and services, however I have done some
        contracted work. I am currently open for office work.
      </p>

      <styled.Row horizontal wrappable>
        <styled.Column stretch style={{ flex: '2 1 auto', paddingRight: 16 }}>
          <h3>Contracted work</h3>
          <Contracts contracts={contracts} />
        </styled.Column>

        <styled.Column stretch style={{ flex: '1 1 auto' }}>
          <h3>Job paths</h3>
          <JobPaths />
        </styled.Column>
      </styled.Row>
    </Section.Content>
  </Section>
)
