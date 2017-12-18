import React from 'react'

import styled from 'styled'
import social from './data'

const Social = () => (
  <styled.Social horizontal wrappable spacing media-no-print>
    {Object.entries(social).map(([key, { name, icon, url }]) => (
      <styled.SocialEntry tag="a" href={url} key={key} card-1>
        <styled.SocialIcon tag="img" src={icon} alt={name} />
      </styled.SocialEntry>
    ))}
  </styled.Social>
)

export default Social
