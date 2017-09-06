import React from 'react'

import styled from 'styled'
import { Section, InlineLink } from 'components'

const AttributionLink = () => <InlineLink href="https://unsplash.com">unsplash.com</InlineLink>
const RepositoryLink = () => <InlineLink href="https://github.com/ciunkos/ciunkos.com">GitHub</InlineLink>
const DownloadLink = () => <InlineLink href="resume.pdf">Download this resume as PDF</InlineLink>

export default () =>
  <Section Notes>
    <Section.Content padding-2 spacing-4>
      <styled.LegalNote tag="p">
        Wyrażam zgodę na przetwarzanie moich danych osobowych
        dla potrzeb niezbędnych do realizacji procesu rekrutacji
        (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych;
        tekst jednolity: Dz. U. 2016 r. poz. 922).
      </styled.LegalNote>

      <styled.CopyrightNotes tag="p" media-no-print>
        <styled.Attribution tag="span">Background images from <AttributionLink />.</styled.Attribution>{' '}
        <styled.SourceCode tag="span">Source code available on <RepositoryLink />.</styled.SourceCode>
      </styled.CopyrightNotes>

      <styled.Extras tag="p" media-no-print>
        <DownloadLink />
      </styled.Extras>
    </Section.Content>
  </Section>
