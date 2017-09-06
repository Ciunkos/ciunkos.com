import React from 'react'

import { ArrowDownward, ArrowForward } from 'icons'
import styled from 'styled'
import posts from 'blog/posts'
import { Page, Section, ActionButton, InlineLink } from 'components'
import homeBackground from 'assets/home-background.jpg'
import { PostHeader, PostAbstract } from 'blog/post'
import './styles.css'

const {
  WelcomeMessage,
  BlogDescription
} = styled;

const HomePage = () =>
  <Page
    Home
    title="Blog - Przemysław Zalewski - Ciunkos"
    description="Przemysław Zalewski - blog, apps, resume"
  >
    <Section Home cover={homeBackground} gradient="shadow">
      <Section.Content padding-2>
        <h1>Ooh, hello there!</h1>

        <WelcomeMessage spacing-2>
          <BlogDescription>
            <p>
              Assorted ramblings poured from my mind onto the page...
              This is kind of a blog.
            </p>

            <p>
              Topics incluce JavaScript, React.js, functional programming and app development.
            </p>
          </BlogDescription>

          <p>
            If you have ever wondered,
            the <InlineLink href="/about">guy on the left {"it's"} me</InlineLink> and <InlineLink href="https://www.facebook.com/ares.sp.zoo/">
              the dog on the right is Ares
            </InlineLink>.
          </p>
        </WelcomeMessage>
      </Section.Content>

      <ActionButton href="#posts" name="Read the stories" icon={<ArrowDownward />} />
    </Section>

    <a id="posts" ><div /></a>

    { Object.values(posts).map(post =>
      <Section key={post.name} cover={post.cover} >
        <Section.Content padding-2 spacing-4>
          <PostHeader post={post} headerRole="h2" />
          <PostAbstract post={post} />
        </Section.Content>

        <ActionButton href={`/${post.slug}`} name="Read more" icon={<ArrowForward />} />
      </Section>
    )}
  </Page>

export default HomePage
