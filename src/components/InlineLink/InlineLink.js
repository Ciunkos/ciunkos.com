import React from 'react'
import styled from 'styled'

import { browserHistory } from 'react-router';

const InlineLink = ({ href, children, ...rest }) =>
<styled.InlineLink href={href} tag="a" onClick={e => {
        if(href 
        && !href.startsWith('#')
        && !href.startsWith('http')
        && !href.startsWith('tel:')
        && !href.startsWith('mailto:')
        && !href.endsWith('.png')
        && !href.endsWith('.jpg')
        && !href.endsWith('.zip')
        && !href.endsWith('.pdf')
        ) {
            e.preventDefault();
            browserHistory.push(href);
        }
    }} {...rest}>
    {children}
</styled.InlineLink>

export default InlineLink