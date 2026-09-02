if (typeof window === 'undefined') {
  global.window = {}
}

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { writeFile } from 'fs/promises'

import AppContainer from '../AppContainer'
import { match } from '../routes'
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
  { pathname: '/not-found', alias: '404.html', includeInSitemap: true }
]

const main = async () => {
  try {
    for (const {
      pathname,
      alias = `${pathname.substring(1)}.html`
    } of routes) {
      const location = { pathname }

      const route = match(pathname)
      const page = route({ location })
      const element = <AppContainer>{page}</AppContainer>

      const renderedComponent = renderToString(element)
      const helmet = Helmet.renderStatic()
      const html = template(renderedComponent, { ...helmet, pathname })

      await writeFile(`./dist/${alias}`, html, 'utf-8')
    }

    const sitemapUrls = routes
      .filter(route => route.includeInSitemap)
      .map(
        route => `<url><loc>https://ciunkos.com${route.pathname}</loc></url>`
      )

    const sitemapXml = `<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${sitemapUrls.join('')}</urlset>`

    await writeFile('./dist/sitemap.xml', sitemapXml, 'utf-8')

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
