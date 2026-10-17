import React from 'react'

import styled from 'styled'
import PageIcon from 'assets/page-icon.jpg'
import Social from 'social'
import Section from './Section'
import InlineLink from './InlineLink'
import './Footer.css'

const AttributionLink = () => (
  <InlineLink href="https://unsplash.com">unsplash.com</InlineLink>
)
const RepositoryLink = () => (
  <InlineLink href="https://github.com/ciunkos/ciunkos.com">GitHub</InlineLink>
)

export default () => (
  <Section Notes>
    <Section.Content padding-2 spacing-4>
      <styled.View tag="footer" spacing-4 media-no-print>
        <styled.View spacing-3>
          <styled.View tag="section" horizontal>
            <styled.Icon media-large style={{ paddingRight: 12 }}>
              <styled.PageIcon
                tag="img"
                src={PageIcon}
                alt="Ciunkos.com"
                style={{ width: 40, height: 40, borderRadius: '50%' }}
              />
            </styled.Icon>
            <styled.Logo
              media-large-inline
              horizontal
              style={{
                fontWeight: 300,
                textTransform: 'none',
                fontSize: '24px',
                letterSpacing: '-0.5px',
                display: 'flex'
              }}
            >
              <InlineLink href="/">Ciunkos.com</InlineLink>
            </styled.Logo>
          </styled.View>
          <styled.View tag="section" horizontal spacing-2 wrappable>
            <InlineLink href="/">Blog</InlineLink>
            <InlineLink href="/about#contact">Contact</InlineLink>
            <InlineLink href="/about">About</InlineLink>
            <InlineLink href="/apps">Apps</InlineLink>
            <InlineLink href="/resume">Resume</InlineLink>
          </styled.View>
          <styled.View tag="section" horizontal spacing-2 wrappable>
            <strong>Work with me:</strong>
            <InlineLink href="https://ciunkos.com/hire-me">Hire me</InlineLink>
            <InlineLink href="https://ciunkos.com/hire-me#services">
              Services
            </InlineLink>
            <InlineLink href="https://ciunkos.com/engagement-configurator">
              Price and start date
            </InlineLink>
            <InlineLink href="https://ciunkos.com/hire-developers-poland">
              Hire developers from Poland
            </InlineLink>
            <InlineLink href="https://ciunkos.com/you-and-przemyslaw">
              You 🤝 Przemysław?
            </InlineLink>
          </styled.View>
          <styled.View tag="section" horizontal spacing-2 wrappable>
            <strong>Free tools:</strong>
            <InlineLink href="https://ciunkos.com/business-idea-validator">
              Business idea validator
            </InlineLink>
            <InlineLink href="https://ciunkos.com/bimi-checker">
              BIMI checker
            </InlineLink>
            <InlineLink href="https://ciunkos.com/spf-dkim-dmarc-checker">
              SPF, DKIM and DMARC checker
            </InlineLink>
            <InlineLink href="https://ciunkos.com/software-cost-estimator">
              Software cost estimator
            </InlineLink>
            <InlineLink href="https://ciunkos.com/glossary">
              Glossary
            </InlineLink>
          </styled.View>
          <Social />
        </styled.View>
      </styled.View>
      <styled.CopyrightNotes tag="p" media-no-print>
        <styled.SourceCode tag="span">
          Source code available on <RepositoryLink />.
        </styled.SourceCode>{' '}
        <styled.Attribution tag="span">
          Background images from <AttributionLink />.
        </styled.Attribution>
      </styled.CopyrightNotes>
    </Section.Content>
  </Section>
)
