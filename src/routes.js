import React from 'react'

import posts from 'blog/posts'
import Home from 'home'
import Resume from 'resume'
import About from 'about'
import Apps from 'apps'
import Blog, { loadBlog } from 'blog/LazyBlog'
import NotFound from 'not-found'

const routes = {
  '/': () => <Home />,
  '/resume/': () => <Resume />,
  '/about/': () => <About />,
  '/apps/': () => <Apps />,
  ...Object.fromEntries(
    Object.values(posts).map(post => [
      `/${post.slug}/`,
      () => <Blog post={post} />
    ])
  )
}

const defaultRoute = () => <NotFound />

export const match = (pathname = '') =>
  routes[pathname] || routes[`${pathname}/`] || defaultRoute

const blogPaths = Object.values(posts).map(post => `/${post.slug}/`)

export const isBlogPath = (pathname = '') =>
  blogPaths.includes(pathname) || blogPaths.includes(`${pathname}/`)

// the code a route needs before its first render
export const preload = pathname =>
  isBlogPath(pathname) ? loadBlog() : Promise.resolve()

export default routes
