import React from 'react'

import styled from 'styled'
import { Paragraph, InlineLink, linkIf } from 'components'
import Subscription from 'disqus/Subscription'
import { comments } from 'disqus/service'

const CommentCount = ({ post, ...rest }) => (
  <Subscription commentCount={comments(`https://ciunkos.com/${post.slug}`)}>
    {({ commentCount }) => (
      <styled.CommentCount tag="span" {...rest}>
        {commentCount} comments
      </styled.CommentCount>
    )}
  </Subscription>
)

export const PostMeta = ({ post, ...rest }) => (
  <Paragraph tiny {...rest}>
    {post.date || 'Draft'} ·{post.readingTime} min read ·{' '}
    <InlineLink href={`/${post.slug}#comments`}>
      <CommentCount post={post} />
    </InlineLink>
  </Paragraph>
)

export const PostHeader = ({
  post,
  headerRole: HeaderRole = 'h1',
  link = true,
  ...rest
}) => (
  <styled.PostHeader {...rest}>
    <HeaderRole>{linkIf(link && `/${post.slug}`)(post.name)}</HeaderRole>
    <PostMeta post={post} />
  </styled.PostHeader>
)

export const PostAbstract = ({ post, ...rest }) => (
  <styled.PostAbstract tag="p" {...rest}>
    {post.description}
  </styled.PostAbstract>
)

export default {
  PostHeader,
  PostMeta,
  PostAbstract
}
