import React from 'react'

import styled from 'styled'

/* The cover is an <img> (not a CSS background) so the browser finds it in the HTML right away;
   object-fit and object-position do what background-size and background-position did.
   Bundled JPEGs come with a WebP twin (scripts/cover-loader.cjs). The first section of a page
   passes priority, the covers further down load lazily. */
const webpOf = src =>
  typeof src === 'string' && /^\/[^/].*\.jpg$/.test(src)
    ? src.replace(/\.jpg$/, '.webp')
    : null

const Background = ({ src, priority, position, children, ...rest }) => {
  const webp = webpOf(src)

  return (
    <styled.Background {...rest}>
      <picture>
        {webp && <source type="image/webp" srcSet={webp} />}
        <img
          alt=""
          className="BackgroundImage"
          decoding="async"
          fetchpriority={priority ? 'high' : undefined}
          loading={priority ? undefined : 'lazy'}
          src={src}
          style={position ? { objectPosition: position } : undefined}
        />
      </picture>
      {children}
    </styled.Background>
  )
}

export default Background
