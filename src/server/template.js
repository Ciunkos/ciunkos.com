import fs from 'fs'

const stats = JSON.parse(fs.readFileSync('./stats.json'))

const find = (source, regex) => source.find(x => regex.test(x))

const appSourcePath = find(stats.assetsByChunkName.main, /^app-[a-z0-9]+\.js$/g)
const appStylesPath = find(
  stats.assetsByChunkName.main,
  /^styles-[a-z0-9]+\.css$/g
)

//const fontCss = '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">'

const preloadAsset = (path, role) => `<${path}>; rel=preload; as=${role}`

export const preloadHeader = [
  preloadAsset(`/${appSourcePath}`, 'script'),
  preloadAsset(`/${appStylesPath}`, 'style')
].join(', ')

const template = (
  body = '',
  helmet = { title: '', meta: '' }
) => `<!doctype html>
<html lang="en" style="background: #3040bc">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preload" href="/${appSourcePath}" as="script">
    <link rel="preload" href="/${appStylesPath}" as="style">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/favicons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/favicons/favicon-128.png" sizes="128x128" />
    <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
    <meta name="application-name" content="Ciunkos.com"/>
    <meta name="msapplication-TileColor" content="#3040BC" />
    <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png" />
    <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png" />
    <link rel="manifest" href="/manifest.json">
    <meta name="apple-mobile-web-app-title" content="Ciunkos.com">
    <meta name="application-name" content="Ciunkos.com">
    <meta name="theme-color" content="#3040BC">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#3040BC">
    <meta name="msapplication-navbutton-color" content="#3040BC">
    <link rel="stylesheet" href="/${appStylesPath}" type="text/css">
  </head>
  <body style="background: #3040bc">
    <div id="app">${body}</div>
  </body>
  <script defer src="/${appSourcePath}"></script>
</html>`

export default template
