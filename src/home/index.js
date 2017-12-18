import React from 'react'

import { ArrowDownward, ArrowForward } from 'icons'
import styled from 'styled'
import posts from 'blog/posts'
import { Page, Section, ActionButton, InlineLink } from 'components'
import homeBackground from 'assets/home-background.jpg'
import { PostHeader, PostAbstract } from 'blog/post'
import locale from './locale'
import './styles.css'

const { WelcomeMessage, BlogDescription } = styled

const HomePage = () => (
  <Page Home title={locale.page.title} description={locale.page.description}>
    <Section Home cover={homeBackground} gradient="shadow">
      <Section.Content padding-2>
        <h1>{locale.hero.title}</h1>

        <WelcomeMessage spacing-2>
          <BlogDescription>
            {locale.hero.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
