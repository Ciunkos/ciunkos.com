import React from 'react'

import { InlineLink } from 'components/InlineLink'
import { Button } from 'components/Button'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, info })
  }

  render() {
    const { hasError, info } = this.state

    if (hasError) {
      const log = JSON.stringify(info, null, 2).replace(/\\n/g, '\r\n')
      const encodedLog = encodeURIComponent(log)

      return (
        <div className="ErrorBoundary spacing-2">
          <h1>Something went wrong</h1>
          <p>
            <InlineLink href={`mailto:ciunkos@gmail.com?body=${encodedLog}`}>
              {"Please contact me and I'll get to the bottom of it."}
            </InlineLink>
          </p>
          <div className="actions spacing">
            <Button
              tag="a"
              onClick={event => {
                event.preventDefault()
                if (typeof window !== 'undefined') {
                  window.location.reload()
                }
              }}
              href={typeof window !== 'undefined' && window.location.href}
              primary
              active
              center
              middle
              style={{ minHeight: 48 }}
            >
              Refresh the page
            </Button>
            <Button
              tag="a"
              href="/about#contact"
              primary
              center
              middle
              style={{ minHeight: 48 }}
            >
              Contact me
            </Button>
            <Button
              tag="a"
              href="/"
              primary
              center
              middle
              style={{ minHeight: 48 }}
            >
              Back to home
            </Button>
          </div>
          <details className="spacing">
            <summary>Details</summary>
            <pre>{log}</pre>
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
