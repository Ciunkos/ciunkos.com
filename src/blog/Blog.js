import React from 'react'
import ReactMarkdown from 'react-markdown'

import styled from 'styled'
import './styles.css'
import { Page, Section } from 'components'
import relatedPosts from 'blog/related-posts'
import Comments from './Comments'
import CodeBlock from './CodeBlock'
import Image from './Image'
import { PostHeader } from 'blog/post'

const Blog = ({ post }) => (
  <Page Blog title={post.name} description={post.description}>
    <Section Title cover={post.cover} gradient="shadow">
      <Section.Content padding-2 spacing-4>
        <PostHeader post={post} link={false} />
      </Section.Content>
    </Section>

    <Section PostContent gradient={false}>
      <Section.Content padding-2 spacing-4>
        {post.markdown && (
          <ReactMarkdown
            className="Markdown spacing-4"
            source={post.markdown}
            renderers={{
              code: CodeBlock,
              image: Image
            }}
          />
        )}
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

    <Section Comments id="comments">
      <Section.Content padding-2 spacing-4>
        <h2>Express yourself...</h2>
        <p>Let me know your thoughts.</p>
      </Section.Content>

      <styled.CommentsThread Card padding-2>
        <Comments id={post.slug} />
      </styled.CommentsThread>
    </Section>
  </Page>
)

export default Blog
