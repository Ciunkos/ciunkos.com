import React from 'react'

import styled from 'styled'
import { Page, Section, Button, InlineLink } from 'components'
import cover from 'about/background.jpg'

const NotFoundPage = () => (
  <Page
    NotFound
    title="Page not found - ciunkos.com"
    description="This page does not exist on ciunkos.com. Go to the home page, the apps and free tools, the resume or the hire page of Przemysław Zalewski."
  >
    <Section cover={cover}>
      <Section.Content padding-2 spacing-4>
        <h1>Ooops!</h1>
        <p>
          The page you've requested does not exist. If you believe this to be an
          error,{' '}
          <InlineLink href="/about#contact">
            please contact me and I'll get to the bottom of it.
          </InlineLink>
        </p>

        <styled.Actions spacing style={{ maxWidth: 360 }}>
          <Button
            tag="a"
            href="/"
            primary
            active
            center
            middle
            style={{ minHeight: 48 }}
          >
            Back to home
          </Button>

          <Button
            tag="a"
            href="/about#contact"
            primary
            center
            middle
            style={{ minHeight: 48 }}
          >
            Contact me
          </Button>

          <Button
            tag="a"
            href="/apps"
            primary
            center
            middle
            style={{ minHeight: 48 }}
          >
            Browse my apps
          </Button>

          <Button
            tag="a"
            href="/resume"
            primary
            center
            middle
            style={{ minHeight: 48 }}
          >
            See my resume
          </Button>
        </styled.Actions>
      </Section.Content>
    </Section>
  </Page>
)

export default NotFoundPage
