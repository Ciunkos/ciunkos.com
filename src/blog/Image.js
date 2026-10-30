import React from 'react'

import styled from 'styled'

export default class Image extends React.PureComponent {
  render() {
    const { src, title, alt } = this.props
    return (
      <styled.Image center middle>
        <styled.ImageContainer center middle card-1 tag="a" href={src}>
          {/* images in posts sit below the first screen: load them when they get close */}
          <img
            src={src}
            title={title || alt}
            alt={alt}
            loading="lazy"
            decoding="async"
          />
        </styled.ImageContainer>
        <styled.Caption>{alt}</styled.Caption>
      </styled.Image>
    )
  }
}
