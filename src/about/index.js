import React from 'react'

import styled from 'styled'
import './styles'
import { Page, Section, ActionButton, InlineLink } from 'components'
import { MailOutline } from 'icons'
import Social from 'social'
import cover from './cover.jpg'
import background from './background.jpg'

const AboutPage = () => (
  <Page
    About
    title="About me - Przemysław Zalewski - Ciunkos"
    description="Przemysław Zalewski, Full Stack Web Developer from Wroclaw, Poland"
  >
    <Section About cover={cover}>
      <Section.Content padding-2 spacing-4>
        <h1>About me</h1>

        <styled.AboutMe spacing-2>
          <p>
            My name is Przemysław Zalewski. I am a Full Stack Web Developer from
            Wroclaw, Poland.
          </p>

          <p>
            Most of the time I am doing web development with JavaScript, however
            not so long ago I have been developing Windows apps using C#. I have
            transitioned myself for the web stack in order to spread my apps and
            services for a much bigger audience and not wall myself in
            Microsoft’s garden. Was that a good move? I am asking myself that
            question every day.
          </p>

          <p>
            Here, on the blog, I mostly write about React.js, node.js, and other
            hot web technologies and present how to incorporate interesting
            solutions in your projects. As the web stack is not so well designed
            and is full of quirks and workarounds I’ve got many topics to
            explore and write about. Stay tuned!
          </p>
        </styled.AboutMe>

        <styled.SocialLinks>
          <h3>See my social profiles</h3>
          <Social />
        </styled.SocialLinks>
      </Section.Content>

      <ActionButton href="#contact" name="Contact me" icon={<MailOutline />} />
    </Section>

    <Section Contact cover={background} id="contact">
      <Section.Content padding-2 spacing-4>
        <h1>Contact me</h1>

        <styled.About spacing-4>
          <div className="task-result error" id="contact-error">
            <p>
              Please mail me directly at{' '}
              <InlineLink href="mailto:ciunkos@gmail.com">
                ciunkos@gmail.com
              </InlineLink>{' '}
              or{' '}
              <InlineLink href="mailto:ciunkos@ciunkos.com">
                ciunkos@ciunkos.com
              </InlineLink>
              .
            </p>
          </div>
        </styled.About>
      </Section.Content>
    </Section>
  </Page>
)

export default AboutPage
