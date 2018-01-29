import React from 'react'

import styled from 'styled'
import social from './data'

const Social = () => (
  <styled.Social horizontal wrappable spacing media-no-print>
    {Object.entries(social).map(([key, { name, icon, url }]) => {
      const Renderer = icon
      return (
        <styled.SocialEntry tag="a" href={url} key={key} title={name} card-1>
          <Renderer className="SocialIcon" />
        </styled.SocialEntry>
      )
    })}
  </styled.Social>
)

export default Social
