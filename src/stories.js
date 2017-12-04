import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import { withScreenshot } from 'storybook-chrome-screenshot'

import { storiesOf, action, specs, describe, it } from '../.storybook/facade'
import AppContainer from './AppContainer'
import Button from 'components/Button'
import NotFoundPage from 'not-found'
import ResumePage from 'resume'

import 'styles/foundation'
import 'styles/common'
import 'styles/storybook.css'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('screenshot', withScreenshot()(() => <Button>Screenshot</Button>))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('Hello World', () => {
    const story = <Button onClick={action('Hello World')}>Hello World</Button>

    specs(() =>
      describe('Hello World', () => {
        it('Should have the Hello World label', () => {
          const output = mount(story)
          expect(output.text()).toContain('Hello World')
        })
      })
    )

    return story
  })

storiesOf('NotFoundPage', module).add(
  'screenshot',
  //withScreenshot()(
  () => (
    <AppContainer>
      <NotFoundPage />
    </AppContainer>
  )
  //)
)

storiesOf('ResumePage', module).add(
  'screenshot',
  withScreenshot()(() => (
    <AppContainer>
      <ResumePage />
    </AppContainer>
  ))
)
