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
const CEIDG =
  'https://www.biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/2AB7BD16-7CDD-483D-B542-F7BD0E5EE64D'

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
            <InlineLink href="https://ciunkos.com/hire-developer-mvp-to-product">
              From MVP to product
            </InlineLink>
            <InlineLink href="https://ciunkos.com/hire-business-partner">
              Technical co-founder
            </InlineLink>
            <InlineLink href="https://ciunkos.com/hire-software-developer-poland">
              Hire developers from Poland
            </InlineLink>
            <InlineLink href="https://ciunkos.com/you-and-przemyslaw">
              You 🤝 Przemysław?
            </InlineLink>
          </styled.View>
          <styled.View tag="section" horizontal spacing-2 wrappable>
            <strong>Trust:</strong>
            <InlineLink href="https://ciunkos.com/pricing">Pricing</InlineLink>
            <InlineLink href="https://ciunkos.com/how-i-work">
              How I work
            </InlineLink>
            <InlineLink href="https://ciunkos.com/security">
              Security
            </InlineLink>
            <InlineLink href="https://ciunkos.com/privacy">Privacy</InlineLink>
            <InlineLink href="https://ciunkos.com/trust">
              Trust center
            </InlineLink>
          </styled.View>
          <styled.View tag="section" horizontal spacing-2 wrappable>
            <strong>Rankings:</strong>
            <InlineLink href="https://ciunkos.com/software-houses-in-poland">
              Software houses in Poland
            </InlineLink>
            <InlineLink href="https://ciunkos.com/best-software-houses-in-wroclaw">
              Wrocław
            </InlineLink>
            <InlineLink href="https://ciunkos.com/best-software-houses-in-warsaw">
              Warsaw
            </InlineLink>
            <InlineLink href="https://ciunkos.com/best-software-houses-in-krakow">
              Kraków
            </InlineLink>
            <InlineLink href="https://ciunkos.com/best-software-development-companies-in-poland">
              Best in Poland
            </InlineLink>
            <InlineLink href="https://ciunkos.com/best-ai-development-companies-in-poland">
              AI companies
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
      <styled.VitalsBadge tag="p" media-no-print>
        <a href="https://ciunkos.com/checks/ciunkos.com">
          <img
            src="https://ciunkos.com/checks/ciunkos.com/badge.svg?path=/"
            width="392"
            height="20"
            loading="lazy"
            decoding="async"
            alt="Core Web Vitals of the ciunkos.com home page, measured daily by Vitals Desk"
            style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </styled.VitalsBadge>
      <styled.CopyrightNotes tag="p" media-no-print>
        <InlineLink href="mailto:ciunkos@gmail.com">
          ciunkos@gmail.com
        </InlineLink>{' '}
        · <InlineLink href="tel:+48884828647">+48 884 828 647</InlineLink>
      </styled.CopyrightNotes>
      <styled.CopyrightNotes tag="p" media-no-print>
        I reply within 24 hours on working days, personally. If I am late, the
        first hour of work is free.
      </styled.CopyrightNotes>
      <styled.CopyrightNotes tag="p" media-no-print>
        Przemysław Zalewski, ul. Tęczowa 31A/56, 53-601 Wrocław, Poland · NIP
        8952144360 · REGON 367652014 · D-U-N-S 438385453 ·{' '}
        <InlineLink href={CEIDG}>Business register entry (CEIDG)</InlineLink>
      </styled.CopyrightNotes>
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
