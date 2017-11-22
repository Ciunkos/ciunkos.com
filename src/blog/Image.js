import React from 'react'

import styled from 'styled'

export default class Image extends React.PureComponent {
  render() {
    const { src, title, alt } = this.props
    return (
      <styled.Image center middle>
        <styled.ImageContainer center middle card-1 tag="a" href={src}>
          <img src={src} title={title || alt} alt={alt} />
        </styled.ImageContainer>
        <styled.Caption>{alt}</styled.Caption>
      </styled.Image>
    )
  }
}
