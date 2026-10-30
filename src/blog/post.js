import React from 'react'

import styled from 'styled'
import { Paragraph, linkIf } from 'components'

// post dates are ISO days (2017-06-01), shown as 1 June 2017
// in UTC, so the server render and the browser agree
export const formatPostDate = date =>
  new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })

// newest first, posts without a date (drafts) last
export const byPostDate = (a, b) => (b.date || '').localeCompare(a.date || '')

export const PostMeta = ({ post, ...rest }) => (
  <Paragraph tiny {...rest}>
    {post.date ? formatPostDate(post.date) : 'Draft'} ·{' '}
    {`${post.readingTime} min read`}
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
  formatPostDate,
  byPostDate,
  PostHeader,
  PostMeta,
  PostAbstract
}
