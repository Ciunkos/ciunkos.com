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
  ...rest
}) => (
  <styled.Page {...rest}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {header}
    <main>{children}</main>
    {footer}
  </styled.Page>
)

export default Page
