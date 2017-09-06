import React from 'react'

import styled from 'styled'

export default class HeaderContainer extends React.PureComponent {
    listener = null

    constructor() {
      super();
      this.state = {
        position: 'fixed',
        top: 0,
        breakpoint: 0,
        scrollY: 0
      }

      this.loop = this.loop.bind(this)
      this.startLoop = this.startLoop.bind(this)
      this.stopLoop = this.stopLoop.bind(this)
    }

    startLoop() {
      if (typeof window !== 'undefined' && !this.frameId) {
        this.frameId = window.requestAnimationFrame(this.loop);
      }
    }

    loop() {
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
          return;
        }

        const state = (typeof window !== 'undefined' && window.pageYOffset) || 0

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
              } if (position === 'absolute' && state >= breakpoint + HeaderFlowHeight) {
                stuck = true
                position = 'fixed'
                top = -HeaderFlowHeight
              }
            }
          } else {
            // unstick after scrolling up
            if (stuck) {
              stuck = false;
              position = 'absolute'
              top = Math.max(0, state - HeaderFlowHeight);
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
        if (this.state.scrollY !== ternaryScrollState
        /* || this.state.position !== position
             || this.state.top !== top */) {
          this.setState({
            scrollY: ternaryScrollState
            // position,
            // top
          })
        }

        // manual DOM manipulation because of one frame latency with React setState
        if (prevPosition !== position) {
          headerElement.style.position = position;
          prevPosition = position
        }
        if (prevTop !== top) {
          headerElement.style.top = `${top}px`;
          prevTop = top
        }
        // end of manual DOM manipulation

        prevState = state;

        if (this.frameId !== -1) {
          this.frameId = typeof window !== 'undefined' && window.requestAnimationFrame(task)
        }
      }

      task()
    }

    stopLoop() {
      if (typeof window !== 'undefined') {
        window.cancelAnimationFrame(this.frameId)
      }
      this.frameId = -1
    }

    componentDidMount() {
      this.startLoop();
    }

    componentWillUnmount() {
      this.stopLoop();
    }

    render() {
      const { scrollY } = this.state;
      const { header, subheader } = this.props;

      return (
        <styled.HeaderContainer
          id="header"
          tag="header"
          style={{
            zIndex: 1000,
            width: '100%',
            /* top, position, */
            left: 0,
            right: 0,
            willChange: 'top, position'
          }}
          has-subheader={subheader !== undefined}
        >
          <styled.MainHeader style={{ height: 64, width: '100%' }}>
            {header && header(scrollY)}
          </styled.MainHeader>

          { subheader &&
            <styled.SecondaryHeader style={{ height: 56, width: '100%' }}>
              {subheader(scrollY)}
            </styled.SecondaryHeader>
          }
        </styled.HeaderContainer>
      )
    }
}
