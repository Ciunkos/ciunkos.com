import React from 'react'

import styled from 'styled'
import './styles'
import { Page, Section, ActionButton, InlineLink, Button } from 'components'
import { MailOutline } from 'icons'
import { social } from 'resume'
import cover from './cover.jpg'
import background from './background.jpg'

const AboutPage = ({ location = {} }) => (
  <Page
    About
    title="About me - Przemysław Zalewski - Ciunkos"
    description="Przemysław Zalewski, a 26-year old developer from Wroclaw, Poland"
  >
    <Section About cover={cover}>
      <Section.Content padding-2 spacing-4>
        <h1>About me</h1>

        <styled.AboutMe spacing-2>
          <p>
            My name is Przemysław Zalewski. I am a 26-year old developer from
            Wroclaw, Poland.
          </p>

          <p>
            Most of the time I am doing web development with JavaScript, however
            not so long ago I have been developing Windows apps using C#. I have
            transitioned myself for the web stack in order to spread my apps and
            services for a much bigger audience and not wall myself in the{' '}
            {"Microsoft's"} garden. Was that a good move? I am asking myself
            that question every day.
          </p>

          <p>
            Here, on the blog, I mostly write about React.js, node.js and other
            hot web technologies and present how to incorporate interesting
            solutions in your projects. As the web stack is not so well designed
            and is full of quirks and workarounds
            {"I've got many topics to explore and write about. Stay tuned!"}
          </p>
        </styled.AboutMe>

        <styled.SocialLinks>
          <h3>See my social profiles</h3>
          <styled.Social
            horizontal
            wrappable
            spacing
            media-no-print
            style={{ paddingTop: 16 }}
          >
            {Object.entries(social).map(([key, { name, icon, url }]) => (
              <styled.SocialEntry tag="a" href={url} key={key} card-1>
                <styled.SocialIcon tag="img" src={icon} alt={name} />
              </styled.SocialEntry>
            ))}
          </styled.Social>
        </styled.SocialLinks>
      </Section.Content>

      <ActionButton href="#contact" name="Contact me" icon={<MailOutline />} />
    </Section>

    <Section Contact cover={background} id="contact">
      <Section.Content padding-2 spacing-4>
        <h1>Contact me</h1>

        <styled.About spacing-4>
          <styled.ContactForm
            id="contact-form"
            tag="form"
            method="POST"
            action="/contact"
            spacing-4
            style={{ maxWidth: 360 }}
          >
            <styled.FormFiels spacing-2>
              <styled.FormField spacing>
                <label htmlFor="name" className="spacing">
                  <span>Name</span>
                  <input type="text" name="name" id="name" />
                </label>
              </styled.FormField>

              <styled.FormField spacing>
                <label htmlFor="email" className="spacing">
                  <span>Email</span>
                  <input type="email" name="email" id="email" />
                </label>
                <p className="tiny">Your email will be kept private</p>
              </styled.FormField>

              <styled.FormField spacing>
                <label htmlFor="message" className="spacing">
                  <span>Message</span>
                  <textarea
                    className="stretch"
                    name="message"
                    id="message"
                    rows="3"
                    style={{ maxWidth: 360 }}
                  />
                </label>
              </styled.FormField>
            </styled.FormFiels>

            <Button
              type="submit"
              primary
              active
              full-width
              center
              middle
              style={{ minHeight: 48 }}
            >
              Send
            </Button>
          </styled.ContactForm>

          {location.hash === '#contact-success' && (
            <div className="task-result success" id="contact-success">
              <p>
                Your message has been sent{' '}
                <span role="img" aria-label="mail icon">
                  📧
                </span>
              </p>
            </div>
          )}

          {location.hash === '#contact-error' && (
            <div className="task-result error" id="contact-error">
              <p>
                An error occured while submitting the form, please try again or
                mail me directly at{' '}
                <InlineLink href="mailto:ciunkos@gmail.com">
                  ciunkos@gmail.com
                </InlineLink>
              </p>
            </div>
          )}
        </styled.About>
      </Section.Content>
    </Section>
  </Page>
)

export default AboutPage
