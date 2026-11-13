import React from 'react'

import { ArrowDownward, ArrowForward } from 'icons'
import styled from 'styled'
import posts from 'blog/posts'
import { Page, Section, ActionButton, InlineLink } from 'components'
import homeBackground from 'assets/home-background.jpg'
import ogHome from 'assets/og-home.jpg'
import { PostHeader, PostAbstract, byPostDate } from 'blog/post'
import locale from './locale'
import Recent from './Recent'
import './styles.css'
import dates from '../dates.json'
import { graph, personRef, websiteRef } from 'utils/schema'

const { WelcomeMessage, BlogDescription } = styled

const SITE_URL = 'https://ciunkos.com/'

const homeJsonLd = graph({
  '@type': 'WebPage',
  '@id': SITE_URL,
  url: SITE_URL,
  name: locale.page.title,
  description: locale.page.description,
  inLanguage: 'en',
  isPartOf: websiteRef,
  about: personRef,
  mainEntity: personRef,
  author: personRef,
  publisher: personRef,
  datePublished: dates['/'].published,
  dateModified: dates['/'].modified
})

const HomePage = () => (
  <Page
    Home
    title={locale.page.title}
    description={locale.page.description}
    ogUrl="https://ciunkos.com/"
    ogImage={new URL(ogHome, 'https://ciunkos.com/').href}
    ogImageWidth={2400}
    ogImageHeight={1260}
    ogImageAlt="Przemysław Zalewski, senior full-stack engineer from Wrocław: the free tools and apps he runs in 2026"
    jsonLd={homeJsonLd}
    updated={dates['/'].modified}
  >
    <Section
      Home
      cover={homeBackground}
      priority="decorative"
      gradient="shadow"
    >
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

    {Object.values(posts)
      // a post's Polish twin is reached from the post itself, not listed here
      .filter(post => (post.lang || 'en') === 'en')
      .sort(byPostDate)
      .map(post => (
        <Section key={post.name} cover={post.cover}>
          <Section.Content padding-2 spacing-4>
            <PostHeader post={post} headerRole="h2" />
            <PostAbstract post={post} />
          </Section.Content>

          <ActionButton
            href={`/${post.slug}`}
            name={locale.readMore}
            context={`: ${post.name}`}
            icon={<ArrowForward />}
          />
        </Section>
      ))}
  </Page>
)

export default HomePage
