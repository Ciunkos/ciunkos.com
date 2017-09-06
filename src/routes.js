import React from 'react'
import { Route, IndexRoute } from 'react-router'

import posts from 'blog/posts'
import Home from 'home'
import Resume from 'resume'
import About from 'about'
import Apps from 'apps'
import Blog from 'blog'
import NotFound from 'not-found'
import AppContainer from './AppContainer'

const routes =
  <Route path="/" component={AppContainer} >
    <IndexRoute component={Home} />
    <Route path="resume" component={Resume} />
    <Route path="about" component={About} />
    <Route path="apps" component={Apps} />
    <Route path="blog" component={Blog} />
    { Object.values(posts).map(post =>
      <Route
        key={post.slug}
        path={post.slug}
        component={props => (<Blog post={post} {...props} />)}
      />
    )}
    <Route path="*" component={NotFound} notFound />
  </Route>

export default routes
