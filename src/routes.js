import React from 'react'

import posts from 'blog/posts'
import Home from 'home'
import Resume from 'resume'
import About from 'about'
import Apps from 'apps'
import Blog from 'blog'
import NotFound from 'not-found'

const routes = {
  '/': () => <Home />,
  '/resume/': () => <Resume />,
  '/about/': ({ location }) => <About location={location} />,
  '/apps/': () => <Apps />,
  '/blog/': () => <Blog />,
  ...Object.fromEntries(
    Object.values(posts).map(post => [
      `${post.slug}/`,
      () => <Blog post={post} />
    ])
  )
}

export const defaultRoute = () => <NotFound />

export const match = (pathname = '') =>
  routes[pathname || `${pathname}/`] || defaultRoute

export default routes
