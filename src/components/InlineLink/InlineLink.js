import React from 'react'
import styled from 'styled'

const InlineLink = ({ href, children, ...rest }) =>
<styled.InlineLink
    href={href}
    tag="a"
    {...rest}
>
    {children}
</styled.InlineLink>

export default InlineLink
