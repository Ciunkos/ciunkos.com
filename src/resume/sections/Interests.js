import React from 'react'

import styled from 'styled'
import { CheckBoxOutlineBlank } from 'icons'
import { Section } from 'components'
import { interests as cover } from './covers'
import { goals, interests } from 'resume'

const Interests = ({ interests, ...rest }) => (
  <styled.Interests
    tag="ul"
    dot-separated
    horizontal
    wrappable
    spacing
    vertical-spacing
    {...rest}
  >
    {interests.map(interest => (
      <styled.Skill key={interest} tag="li" horizontal spacing>
        <styled.SkillName>{interest}</styled.SkillName>
      </styled.Skill>
    ))}
  </styled.Interests>
)

const Goals = ({ goals, ...rest }) => (
  <styled.Goals tag="ul" semicolon-separated spacing {...rest}>
    {goals.map(goal => (
      <styled.Goal key={goal} tag="li" horizontal spacing>
        <styled.SkillIcon>
          <CheckBoxOutlineBlank />
        </styled.SkillIcon>
        <styled.SkillName tag="span" stretch>
          {goal}
        </styled.SkillName>
      </styled.Goal>
    ))}
  </styled.Goals>
)

const id = x => x
const compose = f => g => x => f(g(x))

const splitString = x => x.split('')
const firstLetterToLowercase = ([x, ...xs]) => [x.toLowerCase(), ...xs].join('')
const splitAndThenFirstLetterToLowercase = compose(firstLetterToLowercase)(
  splitString
)

const toSentenceCase = (part, index) =>
  (index > 0 ? splitAndThenFirstLetterToLowercase : id)(part)
const createSentence = parts => parts.map(toSentenceCase).join(', ')

const InlineGoals = ({ goals, ...rest }) => (
  <styled.InlineGoals tag="p" {...rest}>
    {`${createSentence(goals)}.`}
  </styled.InlineGoals>
)

const InlineInterests = ({ interests, ...rest }) => (
  <styled.InlineInterests tag="p" {...rest}>
    {`${createSentence(interests)}.`}
  </styled.InlineInterests>
)

export default () => (
  <Section InterestsSection cover={cover} id="interests-and-goals">
    <Section.Content padding-2 spacing-4>
      <h2>Interests and future goals</h2>

      <p className="media-no-print">
        I am always ready to learn new things and explore new opportunities.
      </p>

      <styled.InterestsAndGoals spacing-2>
        <styled.InterestsSection>
          <h3>My interests</h3>
          <Interests interests={interests} media-no-print />
          <InlineInterests interests={interests} media-only-print />
        </styled.InterestsSection>

        <styled.GoalsSection>
          <h3>My goals</h3>
          <Goals goals={goals} media-no-print />
          <InlineGoals goals={goals} media-only-print />
        </styled.GoalsSection>
      </styled.InterestsAndGoals>
    </Section.Content>
  </Section>
)