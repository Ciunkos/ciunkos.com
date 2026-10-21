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
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
  jsonLd,
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
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:secure_url" content={ogImage} />}
      {ogImage && /\.jpe?g$/i.test(ogImage) && (
        <meta property="og:image:type" content="image/jpeg" />
      )}
      {ogImageWidth && (
        <meta property="og:image:width" content={String(ogImageWidth)} />
      )}
      {ogImageHeight && (
        <meta property="og:image:height" content={String(ogImageHeight)} />
      )}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      {ogImage && <meta name="twitter:card" content="summary_large_image" />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {ogImageAlt && <meta name="twitter:image:alt" content={ogImageAlt} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
    {header}
    <main>{children}</main>
    {footer}
  </styled.Page>
)

export default Page
