import React from 'react'
import ReactMarkdown from 'react-markdown'

import styled from 'styled'
import { Page, Section } from 'components'
import relatedPosts from 'blog/related-posts'
import { PostHeader } from 'blog/post'
import CodeBlock from './CodeBlock'
import Image from './Image'
import { Byline, Contributors } from './Byline'
import { postAuthors } from './authors'
import { astPlugins } from './markdown'
import { Heading, InlineCode, Callout, Link } from './renderers'

const SITE = 'https://ciunkos.com/'

const postUrl = post => new URL(post.slug, SITE).href
const coverUrl = post => new URL(post.cover, SITE).href
// a post can bring a 1200 × 630 share card; otherwise links show the 1280 × 720 cover
const shareImage = post =>
  post.shareImage
    ? { url: new URL(post.shareImage, SITE).href, width: 1200, height: 630 }
    : { url: coverUrl(post), width: 1280, height: 720 }

// the first author wrote the post, the others are contributors (co-authors)
const postJsonLd = post => {
  const [author, ...contributors] = postAuthors(post).map(a => a.jsonLd)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.name,
    description: post.metaDescription || post.description,
    url: postUrl(post),
    mainEntityOfPage: postUrl(post),
    image: coverUrl(post),
    inLanguage: 'en',
    ...(post.date && { datePublished: post.date }),
    ...(post.updated && { dateModified: post.updated }),
    author,
    ...(contributors.length && { contributor: contributors })
  }
}

// the page header already shows the title, so a leading "# Title" line in the markdown is dropped
const withoutTitle = markdown => markdown.replace(/^# .*\n+/, '')

const Blog = ({ post }) => (
  <Page
    Blog
    title={post.name}
    description={post.metaDescription || post.description}
    ogUrl={postUrl(post)}
    ogType="article"
    ogImage={shareImage(post).url}
    ogImageWidth={shareImage(post).width}
    ogImageHeight={shareImage(post).height}
    ogImageAlt={post.name}
    jsonLd={postJsonLd(post)}
  >
    <Section Title cover={post.cover} priority gradient="shadow">
      <Section.Content padding-2 spacing-4>
        <PostHeader post={post} link={false} />
      </Section.Content>
    </Section>

    <Section PostContent gradient={false}>
      <Section.Content padding-2 spacing-4>
        <Byline post={post} />
        {post.markdown && (
          <ReactMarkdown
            className="Markdown spacing-4"
            source={withoutTitle(post.markdown)}
            astPlugins={astPlugins}
            renderers={{
              code: CodeBlock,
              image: Image,
              heading: Heading,
              inlineCode: InlineCode,
              callout: Callout,
              link: Link
            }}
          />
        )}
        <Contributors post={post} />
      </Section.Content>
    </Section>

    {relatedPosts[post.slug] && (
      <Section RelatedPosts id="related-posts">
        <Section.Content padding-2 spacing-4>
          <h2>Related posts</h2>

          <styled.Row RelatedPostsView style={{ color: 'black' }}>
            {Object.entries(relatedPosts[post.slug] || {}).map(
              ([key, post]) => (
                <styled.Card
                  key={key}
                  Screenshot
                  tag="a"
                  href={`/${post.slug}`}
                  stretch
                  card-1
                >
                  <div className="sixteen-nine">
                    <div className="content">
                      <styled.Cover
                        tag="img"
                        src={post.cover}
                        alt={post.name}
                        img-responsive
                      />
                    </div>
                  </div>
                  <PostHeader post={post} headerRole="h4" padding-2 />
                </styled.Card>
              )
            )}
          </styled.Row>
        </Section.Content>
      </Section>
    )}
  </Page>
)

export default Blog
