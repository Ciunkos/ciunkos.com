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
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia
        rekrutacji (RODO, art. 6 ust. 1 lit. a).
      </styled.LegalNote>

      <styled.Extras tag="p" media-no-print>
        <DownloadLink />
      </styled.Extras>
    </Section.Content>
  </Section>
)
