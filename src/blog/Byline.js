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

// under the post title, on one line: who wrote it and when it was last updated.
// Each person opens a card: on hover or focus with CSS alone, and on click or tap as a
// native popover (light dismiss, Esc) anchored to the person with CSS anchor positioning.
export const Byline = ({ post }) => (
  <div className="Byline">
    <div className="BylineAuthors">
      <span className="BylineLabel">{post.bylineLabel || 'Written by'}:</span>
      {postAuthors(post).map(author => {
        const id = `author-${post.slug}-${author.id}`
        return (
          <span
            key={author.id}
            className="BylineAuthor"
            style={{ '--anchor': `--${id}` }}
          >
            <button type="button" className="BylinePerson" popovertarget={id}>
              <img src={author.avatar} alt="" width="28" height="28" />
              <span>{author.name}</span>
            </button>
            <div
              id={id}
              popover="auto"
              role="dialog"
              aria-label={`About ${author.name}`}
              className="AuthorPopover"
            >
              <div className="AuthorPopoverHead">
                <img src={author.avatar} alt="" width="48" height="48" />
                <div>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
                </div>
              </div>
              <p>{author.description}</p>
              <AuthorLinks links={author.links} />
            </div>
          </span>
        )
      })}
    </div>
    {post.date && (
      <span className="BylineDate">
        {post.updated ? 'Updated' : 'Published'}{' '}
        <strong>{formatPostDate(post.updated || post.date)}</strong>
      </span>
    )}
  </div>
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
