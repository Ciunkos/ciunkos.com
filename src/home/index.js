import React from 'react'

import { ArrowDownward, ArrowForward } from 'icons'
import styled from 'styled'
import posts from 'blog/posts'
import { Page, Section, ActionButton, InlineLink } from 'components'
import homeBackground from 'assets/home-background.jpg'
import { PostHeader, PostAbstract } from 'blog/post'
import locale from './locale'
import Recent from './Recent'
import './styles.css'

const { WelcomeMessage, BlogDescription } = styled

/* Same @id and sameAs as the Person node on /hire-me, so search engines merge the two. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://ciunkos.com/#person',
  name: 'Przemysław Zalewski',
  alternateName: 'Ciunkos',
  url: 'https://ciunkos.com',
  jobTitle: 'Senior Full-Stack Engineer',
  image: 'https://ciunkos.com/hire/img/przemo-512.png',
  sameAs: [
    'https://www.linkedin.com/in/przemyslaw-zalewski-ciunkos',
    'https://x.com/Ciunkos',
    'https://github.com/przemyslawzalewski',
    'https://github.com/Ciunkos',
    'https://www.biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/2AB7BD16-7CDD-483D-B542-F7BD0E5EE64D'
  ],
  taxID: '8952144360',
  duns: '438385453',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Tęczowa 31A/56',
    postalCode: '53-601',
    addressLocality: 'Wrocław',
    addressCountry: 'PL'
  }
}

const HomePage = () => (
  <Page
    Home
    title={locale.page.title}
    description={locale.page.description}
    jsonLd={personJsonLd}
  >
    <Section Home cover={homeBackground} gradient="shadow">
      <Section.Content padding-2>
        <h1>{locale.hero.title}</h1>

        <WelcomeMessage spacing-2>
          <BlogDescription>
            {locale.hero.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </BlogDescription>

          <p>
            {locale.hero.note({
              aboutLink: content => (
                <InlineLink href="/about">{content}</InlineLink>
              ),
              outboundLink: content => (
                <InlineLink href="https://www.facebook.com/ares.sp.zoo/">
                  {content}
                </InlineLink>
              )
            })}
          </p>
        </WelcomeMessage>

        <Recent />
      </Section.Content>

      <ActionButton
        href="#posts"
        name={locale.readStories}
        icon={<ArrowDownward />}
      />
    </Section>

    <a id="posts">
      <div />
    </a>

    {Object.values(posts).map(post => (
      <Section key={post.name} cover={post.cover}>
        <Section.Content padding-2 spacing-4>
          <PostHeader post={post} headerRole="h2" />
          <PostAbstract post={post} />
        </Section.Content>

        <ActionButton
          href={`/${post.slug}`}
          name={locale.readMore}
          icon={<ArrowForward />}
        />
      </Section>
    ))}
  </Page>
)

export default HomePage
