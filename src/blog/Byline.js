import React from 'react'

import styled from 'styled'
import { postAuthors } from './authors'
import { formatPostDate } from './post'

const AuthorLinks = ({ links }) => (
  <styled.AuthorLinks>
    {links.map(link => (
      <a key={link.href} href={link.href} rel="noopener noreferrer">
        {link.name}
      </a>
    ))}
  </styled.AuthorLinks>
)

// under the post title: who wrote it, in which role, and when it was last updated
export const Byline = ({ post }) => (
  <styled.Byline>
    {postAuthors(post).map(author => (
      <styled.BylineAuthor key={author.id}>
        <styled.BylineRole>{author.role}:</styled.BylineRole>
        <styled.AuthorCard>
          <img src={author.avatar} alt="" width="40" height="40" />
          <div>
            <strong>{author.name}</strong>
            <p>{author.description}</p>
            <AuthorLinks links={author.links} />
          </div>
        </styled.AuthorCard>
      </styled.BylineAuthor>
    ))}
    {post.date && (
      <styled.BylineDate>
        {post.updated ? 'Updated' : 'Published'}{' '}
        <strong>{formatPostDate(post.updated || post.date)}</strong>
      </styled.BylineDate>
    )}
  </styled.Byline>
)

// after the post: the same people, larger, without roles or dates
export const Contributors = ({ post }) => (
  <styled.Contributors tag="section">
    <h3>About the contributors</h3>
    {postAuthors(post).map(author => (
      <styled.AuthorCard key={author.id} large>
        <img src={author.avatar} alt="" width="64" height="64" />
        <div>
          <h4>{author.name}</h4>
          <p>{author.description}</p>
          <AuthorLinks links={author.links} />
        </div>
      </styled.AuthorCard>
    ))}
  </styled.Contributors>
)
