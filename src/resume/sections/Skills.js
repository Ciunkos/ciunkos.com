import React from 'react'

import styled from 'styled'
import { Paragraph, Section } from 'components'
import skills from 'resume/skills'
import { skills as cover } from './covers'

const Skills = ({ skills }) =>
  <styled.Skills tag="ul" dot-separated horizontal wrappable spacing vertical-spacing>
    {
      skills.map(({ name }) =>
        <styled.Skill key={name} tag="li" horizontal wrappable spacing>
          <styled.SkillName>{name}</styled.SkillName>
        </styled.Skill>
      )
    }
  </styled.Skills>

const SkillSets = ({ children: skillSets }) =>
  <styled.SkillSets spacing-2>
    { skillSets.map(([title, skills]) =>
      <styled.SkillSet key={title}>
        <h3>{title}</h3>
        <Skills skills={skills} />
      </styled.SkillSet>
    )}
  </styled.SkillSets>

const skillSets = [
  ['Web', skills.web],
  ['Windows', skills.windows],
  ['Tools', skills.tools],
  ['Languages', skills.languages]
]

export default () =>
  <Section Skills cover={cover} id="skills">
    <Section.Content padding-2 spacing-4>
      <Section.Title>Skills</Section.Title>

      <Paragraph media-no-print>
        {"Browse my skills to see if I can fit your project's needs."}
      </Paragraph>

      <SkillSets>{skillSets}</SkillSets>
    </Section.Content>
  </Section>
