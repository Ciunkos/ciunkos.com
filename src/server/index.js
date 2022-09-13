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
  ['/', 'index.html'],
  ['/about'],
  ['/apps'],
  ['/creating-contact-forms-with-nodemailer-and-react'],
  ['/data-as-code-modules'],
  ['/debugging-javascript-the-basics'],
  ['/resume'],
  ['/traversable-objects-in-java-script'],
  ['/not-found', '404.html']
]

const main = async () => {
  try {
    for (const [pathname, alias = `${pathname.substring(1)}.html`] of routes) {
      const location = { pathname }

      const route = match(pathname)
      const page = route({ location })
      const element = <AppContainer>{page}</AppContainer>

      const renderedComponent = renderToString(element)
      const helmet = Helmet.renderStatic()
      const html = template(renderedComponent, helmet)

      await writeFile(`./dist/${alias}`, html)
    }

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
