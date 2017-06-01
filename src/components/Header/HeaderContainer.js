import React from 'react'
import styled from 'styled'

export default class HeaderContainer extends React.Component {
    listener = null;

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
        if(window && !this._frameId ) {
            this._frameId = window.requestAnimationFrame( this.loop );
        }
    }

    loop() {
        const { name, target, height } = this.props
            const HeaderFlowHeight = 64 + height
            let prevState = 0;
            const task = () => {
                //cancelled
                if(this._frameId === -1) {
                    return;
                }

                const state  = window && window.pageYOffset || document && document.documentElement.scrollTop || 0;
                    if(state > prevState) { //scrolling down
                        if(state > HeaderFlowHeight) {
                            if(state > this.state.breakpoint + HeaderFlowHeight) {
                                this.setState({
                                    position: 'fixed',
                                    top: -HeaderFlowHeight,
                                    breakpoint: 0,
                                })
                            }
                            else if(this.state.position == 'fixed') {
                                this.setState({
                                    position: 'absolute',
                                    top: state,
                                    breakpoint: state,
                                })
                            }
                        }
                        else {
                            this.setState({
                                position: 'absolute',
                                top: 0
                            })
                        }
                    } else if(prevState > state && !this.state.breakpoint) {
                        this.setState({
                            position: 'absolute',
                            top: Math.max(state - HeaderFlowHeight, 0),
                            breakpoint: state
                    })
                    
                } else if(this.state.breakpoint ) {
                    if(this.state.breakpoint - HeaderFlowHeight > state) {
                        this.setState({
                            position: 'fixed',
                            top: 0,
                            breakpoint: state
                        })
                    }
                    else if(this.state.breakpoint + HeaderFlowHeight < state) {
                        this.setState({
                            position: 'fixed',
                            top: Math.max(-HeaderFlowHeight, 0),
                            breakpoint: state
                        })
                    }
                }


                    this.setState({
                        scrollY: state,
                        
                    })
                    prevState = state;

                    if(this._frameId !== -1)
                this.frameId = window && window.requestAnimationFrame( task )
        }


        task();        
    }

    stopLoop() {
        window && window.cancelAnimationFrame( this._frameId );
        this._frameId = -1;
    }

    componentDidMount() {
        this.startLoop();
    }

    componentWillUnmount() {
        this.stopLoop();
    }

    render() {
        const { position, top, breakpoint, scrollY } = this.state;
        const { header, subheader } = this.props;

        return (
            <styled.HeaderContainer tag="header" style={{zIndex: 1000, width: '100%', position, left: 0, right: 0, top, willChange: 'top, position'}}>
                <styled.MainHeader style={{height: 64, width: '100%'}}>
                    {header && header(subheader ? 65 : scrollY)}
                </styled.MainHeader>

                {subheader &&
                <styled.SecondaryHeader style={{height: 56, width: '100%'}}>
                    {subheader(scrollY)}
                </styled.SecondaryHeader>
                }
            </styled.HeaderContainer>
        )
    }
}