import React from 'react'

import styled from 'styled'

/* The cover is an <img> (not a CSS background) so the browser finds it in the HTML right away;
   object-fit and object-position do what background-size and background-position did.
   Bundled JPEGs come with a WebP twin (scripts/cover-loader.cjs). The first section of a page
   passes priority, the covers further down load lazily. priority="decorative" (home): the cover
   sits behind the LCP heading, so it loads at once but at low fetch priority; at high priority
   Lighthouse counted its 182 KB into the heading's simulated LCP (2.8 s instead of 0.9 s). */
const fetchPriorityOf = priority => {
  if (priority === 'decorative') return 'low'
  return priority ? 'high' : undefined
}
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
          fetchPriority={fetchPriorityOf(priority)}
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
