import React from 'react'
import ReactMarkdown from 'react-markdown'

import styled from 'styled'
import { Page, Section } from 'components'
import relatedPosts from 'blog/related-posts'
import { PostHeader } from 'blog/post'
import { Byline, Contributors } from './Byline'
import { postAuthors } from './authors'
import { remarkPlugins } from './markdown'
import components from './renderers'
import { graph, breadcrumbs, personRef, websiteRef } from 'utils/schema'

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
  const url = postUrl(post)
  return graph(
    {
      '@type': 'BlogPosting',
      '@id': url,
      headline: post.name,
      description: post.metaDescription || post.description,
      url,
      mainEntityOfPage: url,
      image: coverUrl(post),
      inLanguage: 'en',
      isPartOf: websiteRef,
      ...(post.date && { datePublished: post.date }),
      // a post that was never revised was last modified when it was published
      dateModified: post.updated || post.date,
      author,
      publisher: personRef,
      ...(contributors.length && { contributor: contributors }),
      wordCount: post.markdown ? post.markdown.split(/\s+/).length : undefined
    },
    breadcrumbs(url, [
      ['ciunkos.com', SITE],
      [post.name, url]
    ])
  )
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
    <Section
      Title
      cover={post.cover}
      coverPosition={post.coverPosition}
      priority
      gradient="shadow"
    >
      <Section.Content padding-2 spacing-4>
        <PostHeader post={post} link={false} />
      </Section.Content>
    </Section>

    <Section PostContent gradient={false}>
      <Section.Content padding-2 spacing-4>
        <Byline post={post} />
        {post.markdown && (
          <div className="Markdown spacing-4">
            <ReactMarkdown
              remarkPlugins={remarkPlugins}
              components={components}
            >
              {withoutTitle(post.markdown)}
            </ReactMarkdown>
          </div>
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
