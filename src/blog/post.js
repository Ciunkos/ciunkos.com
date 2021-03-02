import React from 'react'

import styled from 'styled'
import { Paragraph, linkIf } from 'components'

export const PostMeta = ({ post, ...rest }) => (
  <Paragraph tiny {...rest}>
    {post.date || 'Draft'} · {post.readingTime} min read
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
