import React from 'react'
import { Helmet } from 'react-helmet'

export default class DisqusThread extends React.PureComponent {
  componentDidMount() {
    this.loadDisqus()
  }

  componentDidUpdate() {
    this.loadDisqus()
  }

  loadDisqus = () => {
    if (!window) {
      return
    }

    const { identifier, title, url, categoryId, onNewComment } = this.props

    const config = {
      identifier,
      title,
      url,
      category_id: categoryId,
      onNewComment
    }

    // If Disqus has already been added, reset it
    if (typeof window.DISQUS !== 'undefined') {
      window.DISQUS.reset({
        reload: true,
        config() {
          // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
          // required fields: url and identifier
          const changes = Object.entries(config)
            .filter(keyValuePair => keyValuePair[1] !== undefined)
            .map(([key, value]) => [
              key,
              key === 'url' ? `${value}#!newthread` : value
            ])

          changes.forEach(([key, value]) => {
            this.page[key] = value
          })
        }
      })
    } else {
      Object.entries(config)
        .filter(keyValuePair => keyValuePair[1] !== undefined)
        .forEach(([key, value]) => {
          window[`disqus_${key}`] = value
        })
    }
  }

  render() {
    const {
      tag: Tag = 'div',
      shortname,
      identifier,
      title,
      url,
      categoryId,
      onNewComment,
      ...rest
    } = this.props

    // inject the script only when not loaded yet
    const loaded = window && typeof window.DISQUS !== 'undefined'

    return (
      <Tag {...rest}>
        <Helmet>
          {!loaded && (
            <script
              key="disqus"
              src={`//${this.props.shortname}.disqus.com/embed.js`}
              data-timestamp={+new Date()}
            />
          )}
        </Helmet>

        <div id="disqus_thread" />

        <noscript>
          Please enable JavaScript to view the
          <a href="https://disqus.com/?ref_noscript" rel="nofollow">
            comments powered by Disqus.
          </a>
        </noscript>
      </Tag>
    )
  }
}
