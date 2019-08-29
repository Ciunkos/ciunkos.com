import React from 'react'
import classNames from 'classnames'

import { partition, filter } from 'utils'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { push, replace } from './history'

const viewCache = {}

function defaultView(name) {
  if (viewCache[name]) {
    return viewCache[name]
  }

  const view = class StyledComponent extends React.PureComponent {
    render() {
      const { children, ref, id, tag: Tag = 'div', ...rest } = this.props
      const { href } = this.props
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
          onClick: event => {
            if (!href.startsWith('#')) {
              event.preventDefault()

              requestAnimationFrame(() => {
                push(href)
              })
            } else {
              event.preventDefault()

              const hash = href.substring(1)
              const element = document.getElementById(hash)

              requestAnimationFrame(() => {
                if (element) {
                  window.scrollTo(0, element.offsetTop)
                  element.focus()
                }

                const {
                  location: { hash: sourceHash, pathname }
                } = window

                if (sourceHash && sourceHash.length > 1) {
                  replace(pathname + href)
                } else {
                  push(pathname + href)
                }
              })
            }
          }
        }
      }

      return (
        <ErrorBoundary>
          <Tag
            className={classNames(name, booleans)}
            id={id}
            ref={ref}
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

export const View = defaultView('View')

export default styledOrDefault
