import React from 'react'

export default class Subscription extends React.Component {
  subs = {}

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    const { children, ...subscriptions } = this.props
    Object.entries(subscriptions).forEach(([key, subscribe]) => {
      this.subs[key] = subscribe(unsubscribe => {
        this.setState({
          [key]: unsubscribe
        })
      })
    })
  }

  componentWillUnmount() {
    Object.values(this.subs).forEach(unsubscribe => {
      unsubscribe()
    })
    this.subs = {}
  }

  render() {
    const { children } = this.props

    return children(this.state)
  }
}
