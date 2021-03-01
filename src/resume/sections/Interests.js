import React from 'react'

import styled from 'styled'
import { CheckBox, CheckBoxOutlineBlank } from 'icons'
import { Section } from 'components'
import goals from 'resume/goals'
import interests from 'resume/interests'
import { interests as cover } from './covers'

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
    {goals.map(([goal, done, skipPrinting]) => (
      <styled.Goal
        key={goal}
        tag="li"
        horizontal
        spacing
        media-no-print={done || skipPrinting}
      >
        <styled.SkillIcon>
          {done ? <CheckBox /> : <CheckBoxOutlineBlank />}
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
  (index > 0 && part.length > 2 ? splitAndThenFirstLetterToLowercase : id)(part)

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

const pendingGoals = goals =>
  goals
    .filter(([, done, skipPrinting]) => !done && !skipPrinting)
    .map(([goal]) => goal)

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
          <InlineGoals goals={pendingGoals(goals)} media-only-print />
        </styled.GoalsSection>
      </styled.InterestsAndGoals>
    </Section.Content>
  </Section>
)
