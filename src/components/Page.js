import React from 'react'
import { Helmet } from 'react-helmet'

import styled from 'styled'
import Header from './Header'
import Footer from './Footer'

const Page = ({
  children,
  subheader,
  header = <Header subheader={subheader} />,
  footer = <Footer />,
  title,
  description,
  ogUrl,
  ...rest
}) => (
  <styled.Page {...rest}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogUrl && <meta property="og:type" content="website" />}
      {ogUrl && <meta property="og:title" content={title} />}
      {ogUrl && <meta property="og:description" content={description} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
    </Helmet>
    {header}
    <main>{children}</main>
    {footer}
  </styled.Page>
)

export default Page
