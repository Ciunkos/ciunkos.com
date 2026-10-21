import React, { useEffect, useState } from 'react'

// the blog styles stay in the main stylesheet:
// the prerendered posts are styled before the chunk arrives
import './styles.css'
import 'highlight.js/styles/atom-one-light.css'

/* react-markdown and highlight.js are only needed on the posts, so Blog comes in its own chunk.
   The server and the first render of a post wait for loadBlog(), so the prerendered markup
   hydrates as is; client-side navigation to a post renders once the chunk is in. */
let Blog = null
let loading = null

export const loadBlog = () => {
  loading =
    loading ||
    import(/* webpackChunkName: "blog" */ './Blog').then(module => {
      Blog = module.default
    })
  return loading
}

const LazyBlog = props => {
  const [, setLoaded] = useState(Boolean(Blog))

  useEffect(() => {
    if (!Blog) {
      loadBlog().then(() => setLoaded(true))
    }
  }, [])

  return Blog ? <Blog {...props} /> : null
}

export default LazyBlog
