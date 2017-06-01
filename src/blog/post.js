import React from 'react'


import styled from 'styled'

import { InlineLink } from 'components'

import Subscription from 'disqus/Subscription'
import { comments } from 'disqus/service'


const CommentCount = ({ post }) =>
<Subscription commentCount={comments(`https://ciunkos.com/${post.slug}`)}>
{({ commentCount }) =>
    <span>{commentCount} comments</span>
}
</Subscription>

export const PostMeta = ({ post }) =>
<p className="tiny">
    {post.date || 'Draft'} · {post.readingTime} min read · <InlineLink href={`/${post.slug}#comments`}><CommentCount post={post} /></InlineLink>
</p>

export const PostHeader = ({ post, headerRole: HeaderRole = 'h1', link = true, ...rest }) =>
<styled.PostHeader {...rest}>
    <HeaderRole>
        {link && 
        <InlineLink href={`/${post.slug}`}>
            {post.name}
        </InlineLink>
        || post.name}
    </HeaderRole>
    <PostMeta post={post} />
</styled.PostHeader>

export const PostAbstract = ({ post }) =>
<p>
    {post.description}
</p>

export default {
    PostHeader,
    PostMeta,
    PostAbstract
}
