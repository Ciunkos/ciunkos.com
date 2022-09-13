import fs from 'fs'

const stats = JSON.parse(fs.readFileSync('./build/stats.json'))

const find = (source, regex) => source.find(x => regex.test(x))

const appSourcePath = find(stats.assetsByChunkName.main, /^app-[a-z0-9]+\.js$/g)
const appStylesPath = find(
  stats.assetsByChunkName.main,
  /^styles-[a-z0-9]+\.css$/g
)

const publicPath = process.env.PUBLIC_PATH ?? '/'

const template = (
  body = '',
  helmet = { title: '', meta: '' }
) => `<!doctype html>
<html lang="en" style="background: #3040bc">
  <head>
    <meta charset="utf-8">
    <link rel="preload" href="${publicPath}${appSourcePath}" as="script">
    <link rel="preload" href="${publicPath}${appStylesPath}" as="style">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link rel="apple-touch-icon" sizes="57x57" href="${publicPath}apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="${publicPath}apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="${publicPath}apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="${publicPath}apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="${publicPath}apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="${publicPath}apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="${publicPath}apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="${publicPath}apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="${publicPath}apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="${publicPath}round-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="${publicPath}favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${publicPath}favicon-16x16.png">
    <link rel="manifest" href="${publicPath}manifest.json">
    <meta name="application-name" content="Ciunkos.com"/>
    <meta name="apple-mobile-web-app-title" content="Ciunkos.com">
    <meta name="application-name" content="Ciunkos.com">
    <meta name="theme-color" content="#3040BC">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#3040BC">
    <meta name="msapplication-TileColor" content="#3040BC">
    <meta name="msapplication-TileImage" content="${publicPath}ms-icon-144x144.png">
    <meta name="msapplication-navbutton-color" content="#3040BC">
    <link rel="stylesheet" href="${publicPath}${appStylesPath}" type="text/css">
  </head>
  <body style="background: #3040bc">
    <div id="app">${body}</div>
  </body>
  <script defer src="${appSourcePath}"></script>
</html>`

export default template
