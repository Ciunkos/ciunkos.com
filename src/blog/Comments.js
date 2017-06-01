import React from 'react'
import ReactDisqusThread from 'react-disqus-thread'

const defaults = {
    shortname: 'ciunkos'
}

const cannonicalUrl = path => `https://ciunkos.com/${path}`

export default ({ id, ...props }) =>
<ReactDisqusThread
    url={cannonicalUrl(id)}
    identifier={cannonicalUrl(id)}
    {...defaults}
    {...props}
/>
