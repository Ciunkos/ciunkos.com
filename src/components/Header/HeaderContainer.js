import React from 'react'

import styled from 'styled'

export default class HeaderContainer extends React.PureComponent {
  state = { scrollY: 0 }
  listener = null

  startLoop = () => {
    if (window && !this.frameId) {
      this.frameId = window.requestAnimationFrame(this.loop)
    }
  }

  loop = () => {
    const { height } = this.props

    const HeaderFlowHeight = 64 + height

    let prevState = 0
    let breakpoint = 0
    let position = 'fixed'
    let top = 0
    let stuck = false
    let prevTop = 0
    let prevPosition = 'fixed'

    const headerElement = document.getElementById('header')

    const task = () => {
      // task cancelled
      if (this.frameId === -1) {
        return
      }

      const state = (window && window.pageYOffset) || 0

      if (state !== prevState) {
        // automatic scroll or jump to section, ignore scrolling up
        // only with subheader
        if (Math.abs(prevState - state) > 300 && state > 0) {
          if (this.props.subheader) {
            position = 'absolute'
            top = Math.max(state - HeaderFlowHeight, 0)
            breakpoint = Math.max(state - HeaderFlowHeight, 0)
            stuck = true
          } else {
            position = 'fixed'
            top = 0
            breakpoint = state
            stuck = false
          }
        }

        if (state > prevState) {
          if (!stuck) {
            // start flow
            if (position === 'fixed') {
              breakpoint = state
              position = 'absolute'
              top = state
            }
            if (
              position === 'absolute' &&
              state >= breakpoint + HeaderFlowHeight
            ) {
              stuck = true
              position = 'fixed'
              top = -HeaderFlowHeight
            }
          }
        } else {
          // unstick after scrolling up
          if (stuck) {
            stuck = false
            position = 'absolute'
            top = Math.max(0, state - HeaderFlowHeight)
            breakpoint = Math.max(0, state - HeaderFlowHeight)
          }
          if (position === 'absolute' && state <= breakpoint) {
            position = 'fixed'
            top = 0
            breakpoint = 0
          }
        }
      }

      const ternaryScrollState = state && (state > 64 ? 65 : 64)
      if (
        this.state.scrollY !== ternaryScrollState
        /* || this.state.position !== position
             || this.state.top !== top */
      ) {
        this.setState({
          scrollY: ternaryScrollState
          // position,
          // top
        })
      }

      // manual DOM manipulation because of one frame latency with React setState
      if (prevPosition !== position) {
        headerElement.style.position = position
        prevPosition = position
      }
      if (prevTop !== top) {
        headerElement.style.top = `${top}px`
        prevTop = top
      }
      // end of manual DOM manipulation

      prevState = state

      if (this.frameId !== -1) {
        this.frameId = window && window.requestAnimationFrame(task)
      }
    }

    task()
  }

  stopLoop = () => {
    if (window) {
      window.cancelAnimationFrame(this.frameId)
    }
    this.frameId = -1
  }

  componentDidMount() {
    this.startLoop()
  }

  componentWillUnmount() {
    this.stopLoop()
  }

  render() {
    const { scrollY } = this.state
    const { header, subheader } = this.props
    const hasSubheader = subheader !== undefined
    return (
      <styled.HeaderContainer
        id="header"
        tag="header"
        has-subheader={hasSubheader}
      >
        <styled.MainHeader>{header && header(scrollY)}</styled.MainHeader>
        {subheader && (
          <styled.SecondaryHeader>{subheader(scrollY)}</styled.SecondaryHeader>
        )}
      </styled.HeaderContainer>
    )
  }
}
