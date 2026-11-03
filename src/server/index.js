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
import posts from '../blog/posts'
import dates from '../dates.json'
import { sprawdzLd } from '../utils/schema-ld.mjs'

// the pages to prerender; blog posts come from the post list, so a new post needs no edit here
const routes = [
  { pathname: '/', alias: 'index.html', lastmod: dates['/'].modified },
  { pathname: '/about', lastmod: dates['/about'].modified },
  { pathname: '/apps', lastmod: dates['/apps'].modified },
  { pathname: '/resume', lastmod: dates['/resume'].modified },
  ...Object.values(posts).map(post => ({
    pathname: `/${post.slug}`,
    lastmod: post.updated || post.date
  })),
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

      // React puts a <link rel="preload" as="image"> for every eagerly loaded <img> in front
      // of the markup; the pages choose their own preloads, so these are dropped
      const renderedComponent = renderToString(element).replace(
        /^(<link rel="preload" as="image"[^>]*\/>)+/,
        ''
      )
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

      // JSON-LD lint: one @graph, the canonical Person, dateModified = the visible date
      if (pathname !== '/not-found') {
        const problems = sprawdzLd(html)
        if (problems.length) {
          throw new Error(`${pathname}: ${problems.join('; ')}`)
        }
      }

      await writeFile(`./dist/${alias}`, html, 'utf-8')
    }

    const sitemapUrls = routes
      .filter(route => route.includeInSitemap !== false)
      .map(
        route =>
          `<url><loc>https://ciunkos.com${
            route.pathname === '/' ? '/' : route.pathname
          }</loc><lastmod>${route.lastmod}</lastmod></url>`
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
