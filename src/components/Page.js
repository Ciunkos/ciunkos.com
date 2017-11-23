import React from 'react'
import { Helmet } from 'react-helmet'

import styled from 'styled'
import Header from '../Header'

const Page = ({
  children,
  subheader,
  header = <Header subheader={subheader} />,
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
  </styled.Page>
)

export default Page
