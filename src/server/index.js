import 'babel-polyfill'

if (typeof window === 'undefined') {
  global.window = {}
}

import express from 'express'
import bodyParser from 'body-parser'
import glob from 'glob'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { match, RouterContext } from 'react-router'

import routes from 'routes'
import template, { preloadHeader } from './template'
import mailer from './mailer'

const staticFiles = glob.sync('**/*.{js,css,json,png,jpg,txt,pdf,zip,xml}')
const staticExcludes = [
  /server\.js$/,
  /stats\.json$/,
  /static\.html$/,
  /Web\.config$/
]

console.log({
  staticFiles,
  staticExcludes
})

const app = express()

const filterHost = hostname => (req, res, next) => {
  if (req.hostname !== hostname) {
    return res.end()
  }

  return next()
}

app.use(filterHost('ciunkos.com'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const enablePreload = res => res.header('Link', preloadHeader)

const cache = {}

staticFiles
  .filter(_ => !staticExcludes.some(regex => _.match(regex)))
  .forEach(_ => {
    app.get(`/${_}`, (req, res) => {
      const filePath = path.resolve(process.cwd(), _)
      console.log({
        route: `/${_}`,
        url: req.url,
        file: filePath
      })
      res.sendFile(filePath)
    })
  })

app.get('*', (req, res) => {
  console.log({
    route: '*',
    url: req.url
  })
  enablePreload(res)

  if (cache[req.url]) {
    res.send(cache[req.url])
    return
  }

  try {
    match(
      {
        routes,
        location: req.url
      },
      (err, redirect, props) => {
        const renderedComponent = renderToString(<RouterContext {...props} />)
        const helmet = Helmet.renderStatic()
        const html = template(renderedComponent, helmet)

        const notFound = props.routes.filter(route => route.notFound).length > 0
        res.send(notFound ? 404 : 200, html)
        if (!notFound) {
          cache[req.url] = html
        }
      }
    )
  } catch (error) {
    const result = [error.message, error.stack].join('\r\n')
    res.send(500, result)
  }
})

app.post('/contact', async (req, res) => {
  try {
    const email = req.body.email || ''
    const name = req.body.name || ''
    const text = req.body.message || ''
    await mailer({ email, name, text })
    res.redirect('/about#contact-success')
  } catch (error) {
    res.redirect('/about#contact-error')
  }
})

app.listen(80)
