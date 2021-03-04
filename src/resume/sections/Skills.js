import React from 'react'

import styled from 'styled'
import { Paragraph, Section } from 'components'
import skills from 'resume/skills'
import { skills as cover } from './covers'
// import pluralsight from './pluralsight.png'
// import codeFights from './codefights.png'
// import codeSchool from './codeschool.png'

const Skills = ({ skills }) => (
  <styled.Skills
    tag="ul"
    dot-separated
    horizontal
    wrappable
    spacing
    vertical-spacing
  >
    {skills.map(({ name }) => (
      <styled.Skill key={name} tag="li" horizontal wrappable spacing>
        <styled.SkillName>{name}</styled.SkillName>
      </styled.Skill>
    ))}
  </styled.Skills>
)

const SkillSets = ({ children: skillSets }) => (
  <styled.SkillSets spacing-4>
    {skillSets.map(([title, skills]) => (
      <styled.SkillSet key={title}>
        <h3>{title}</h3>
        <Skills skills={skills} />
      </styled.SkillSet>
    ))}
  </styled.SkillSets>
)

const skillSets = [
  ['Web', skills.web],
  ['Windows', skills.windows],
  ['Tools and soft skills', skills.tools],
  ['Languages', skills.languages]
]

// const courses = {
//   Pluralsight: { icon: pluralsight, url: 'https://app.pluralsight.com/profile/ciunkos' },
//   CodeFights: { icon: codeFights, url: 'https://codefights.com/profile/Ciunkos' },
//   'Code School': { icon: codeSchool, url: 'https://www.codeschool.com/users/1678882' }
// }

// const Course = ({ name, icon }) =>
//   <styled.Course horizontal>
//     <styled.CourseIcon tag="img" src={icon} />
//     <styled.CourseTitle>{name}</styled.CourseTitle>
//   </styled.Course>

// const Courses = () =>
//   <styled.Courses horizontal spacing-2 wrappable>
//     { Object.entries(courses).map(([key, course]) =>
//       <Course key={key} name={key} {...course} />
//     )}
//   </styled.Courses>

export default () => (
  <Section Skills cover={cover} id="skills">
    <Section.Content padding-2 spacing-4>
      <Section.Title>Skills</Section.Title>

      <Paragraph media-no-print>
        Browse my skills to see if I can fit your project’s needs.
      </Paragraph>

      <SkillSets>{skillSets}</SkillSets>

      {/* <h3>
        Online courses and platforms
      </h3>

      <Paragraph media-no-print>
        See and my skills and compare your skills on these platforms.
        Don't hesitate to challenge me for a code fight 💪
      </Paragraph>

      <Courses /> */}
    </Section.Content>
  </Section>
)
