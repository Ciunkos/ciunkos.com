import 'babel-polyfill'

if (typeof window === 'undefined') {
  global.window = {}
}

import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { match, RouterContext } from 'react-router'

import routes from 'routes'
import template from './template'
import mailer from './mailer'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cache = {}
app.get('*', (req, res) => {
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

app.listen(process.env.PORT)
