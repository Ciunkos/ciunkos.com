import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(_, info) {
    this.setState({ hasError: true, info })
  }

  render() {
    const { children } = this.props
    const { hasError, info } = this.state

    if (hasError) {
      const log = JSON.stringify(info, null, 2).replace(/\\n/g, '\r\n')
      const encodedLog = encodeURIComponent(log)

      return (
        <div className="ErrorBoundary spacing-2">
          <h1>Something went wrong</h1>
          <div>
            <a href={`mailto:ciunkos@gmail.com?body=${encodedLog}`}>
              {"Please contact me and I'll get to the bottom of it."}
            </a>
          </div>
          <div className="actions spacing">
            <a
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
            </a>
            <a
              tag="a"
              href="/about#contact"
              primary
              center
              middle
              style={{ minHeight: 48 }}
            >
              Contact me
            </a>
            <a tag="a" href="/" primary center middle style={{ minHeight: 48 }}>
              Back to home
            </a>
          </div>
          <details className="spacing">
            <summary>Details</summary>
            <pre>{log}</pre>
          </details>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
