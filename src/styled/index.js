import React from 'react'
import classNames from 'classnames'
import { browserHistory } from 'react-router'

import { partition, filter } from 'utils'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

const viewCache = {}

function defaultView(name) {
  if (viewCache[name]) {
    return viewCache[name]
  }

  const view = class StyledComponent extends React.PureComponent {
    render() {
      const { children, ref, id, tag: Tag = 'div', ...rest } = this.props
      const { href } = this.props;
      const [booleans, others] = partition(x => x === true)(rest)
      const otherProps = filter(x => x)(others)
      let injectedProps = {}

      // changed behavior for now as there are issues with react-router-scroll
      // and scrolling to fragments
      if (
        Tag === 'a' &&
        href &&
        // && !href.startsWith('#')
        !href.startsWith('http') &&
        !href.startsWith('tel:') &&
        !href.startsWith('mailto:') &&
        !href.endsWith('.png') &&
        !href.endsWith('.jpg') &&
        !href.endsWith('.zip') &&
        !href.endsWith('.pdf')
      ) {
        injectedProps = {
          onClick: e => {
            if (typeof window !== 'undefined') {
              if (!href.startsWith('#')) {
                e.preventDefault()
                setTimeout(() => {
                  browserHistory.push(href)
                })
              } else {
                const hash = href.substring(1)
                e.preventDefault()
                const element = document.getElementById(hash)
                setTimeout(() => {
                  if (element) {
                    window.scrollTo(0, element.offsetTop)
                    element.focus()
                  }
                  if (window.location.hash && window.location.hash.length > 1) {
                    browserHistory.replace(window.location.pathname + href)
                  } else {
                    browserHistory.push(window.location.pathname + href)
                  }
                })
              }
            }
          }
        }
      }

      return (
        <ErrorBoundary>
          <Tag
            ref={ref}
            id={id}
            className={classNames(name, booleans)}
            {...injectedProps}
            {...otherProps}
          >
            {children}
          </Tag>
        </ErrorBoundary>
      )
    }

    static displayName = `styled.${name}`
  }

  viewCache[name] = view
  return view
}

const handler = {
  get(target, key) {
    return target[key] || defaultView(key)
  }
}

const styled = {}
const styledOrDefault = new Proxy(styled, handler)

export default styledOrDefault
export const View = defaultView('View')
