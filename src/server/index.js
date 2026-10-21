if (typeof window === 'undefined') {
  global.window = {}
}

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { writeFile } from 'fs/promises'
import { existsSync } from 'fs'

import AppContainer from '../AppContainer'
import { match, preload, isBlogPath } from '../routes'
import template from './template'

const routes = [
  { pathname: '/', alias: 'index.html', includeInSitemap: true },
  { pathname: '/about', includeInSitemap: true },
  { pathname: '/apps', includeInSitemap: true },
  {
    pathname: '/creating-contact-forms-with-nodemailer-and-react',
    includeInSitemap: true
  },
  { pathname: '/data-as-code-modules', includeInSitemap: true },
  { pathname: '/debugging-javascript-the-basics', includeInSitemap: true },
  { pathname: '/resume', includeInSitemap: true },
  { pathname: '/traversable-objects-in-java-script', includeInSitemap: true },
  { pathname: '/not-found', alias: '404.html', includeInSitemap: false }
]

const main = async () => {
  try {
    for (const {
      pathname,
      alias = `${pathname.substring(1)}.html`
    } of routes) {
      const location = { pathname }
      await preload(pathname)

      const route = match(pathname)
      const page = route({ location })
      const element = <AppContainer>{page}</AppContainer>

      const renderedComponent = renderToString(element)
      const helmet = Helmet.renderStatic()
      const html = template(renderedComponent, {
        ...helmet,
        pathname,
        chunks: isBlogPath(pathname) ? ['blog'] : []
      })

      // every cover offers a WebP twin, so a cover without one would show no image at all
      const missingWebp = [...html.matchAll(/srcSet="([^"]+\.webp)"/gi)]
        .map(([, src]) => src)
        .filter(src => !existsSync(`./dist${src}`))
      if (missingWebp.length) {
        throw new Error(
          `${pathname}: no WebP for ${missingWebp.join(
            ', '
          )} (node scripts/webp.mjs <cover.jpg>)`
        )
      }

      await writeFile(`./dist/${alias}`, html, 'utf-8')
    }

    const sitemapUrls = routes
      .filter(route => route.includeInSitemap)
      .map(
        route => `<url><loc>https://ciunkos.com${route.pathname}</loc></url>`
      )

    const sitemapXml = `<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${sitemapUrls.join(
      ''
    )}</urlset>`

    await writeFile('./dist/sitemap.xml', sitemapXml, 'utf-8')

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
