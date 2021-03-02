import React from 'react'

import styled from 'styled'
import { Section, InlineLink } from 'components'

const DownloadLink = () => (
  <InlineLink href="resume.pdf" rel="noopener noreferrer" target="_blank">
    Download this resume as a PDF
  </InlineLink>
)

export default () => (
  <Section Notes>
    <Section.Content padding-2 spacing-4>
      <styled.LegalNote tag="p">
        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
        niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia
        29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U.
        2016 r. poz. 922).
      </styled.LegalNote>

      <styled.Extras tag="p" media-no-print>
        <DownloadLink />
      </styled.Extras>
    </Section.Content>
  </Section>
)
