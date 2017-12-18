import React from 'react'

import styled from 'styled'
import Section from './Section'
import InlineLink from './InlineLink'
import PageIcon from 'assets/page-icon.jpg'
import Social from 'social'
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
      <styled.View tag="footer" spacing-4>
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
