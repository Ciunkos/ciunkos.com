import fs from 'fs'

const stats = JSON.parse(fs.readFileSync('./build/stats.json'))

const find = (source, regex) => source.find(x => regex.test(x))

const appSourcePath = find(stats.assetsByChunkName.main, /^app-[a-z0-9]+\.js$/g)
const appStylesPath = find(
  stats.assetsByChunkName.main,
  /^styles-[a-z0-9]+\.css$/g
)

const publicPath = process.env.PUBLIC_PATH ?? '/'

// async chunks a page needs before its first render (the blog chunk on the posts)
const chunkScripts = (chunks = []) =>
  chunks
    .map(chunk => find(stats.assetsByChunkName[chunk], /\.js$/))
    .map(path => `<script defer src="${publicPath}${path}"></script>`)
    .join('')

const template = (
  body = '',
  { title, meta, script, pathname, chunks }
) => `<!doctype html>
<html lang="en" style="background: #3040bc">
  <head>
    <meta charset="utf-8">
    <link rel="preload" href="${publicPath}${appStylesPath}" as="style">
    ${title.toString()}
    ${meta.toString()}
    ${script.toString()}
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="icon" href="${publicPath}favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="${publicPath}round-icon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${publicPath}apple-icon-180x180.png">
    <link rel="manifest" href="${publicPath}manifest.json">
    <meta name="application-name" content="Ciunkos.com">
    <meta name="apple-mobile-web-app-title" content="Ciunkos.com">
    <meta name="theme-color" content="#3040BC">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="stylesheet" href="${publicPath}${appStylesPath}" type="text/css">
    <link rel="canonical" href="https://ciunkos.com${pathname}">
    <meta name='impact-site-verification' value='c7cf594f-cb85-4c69-81b1-29727fd2c171' />
  </head>
  <body style="background: #3040bc">
    <div id="app">${body}</div>
  </body>
  ${chunkScripts(
    chunks
  )}<script defer src="${publicPath}${appSourcePath}"></script>
</html>`

export default template
