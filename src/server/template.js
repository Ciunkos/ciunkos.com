import fs from 'fs'

const stats = JSON.parse(fs.readFileSync('./build/stats.json'))

const find = (source, regex) => source.find(x => regex.test(x))

const appSourcePath = find(stats.assetsByChunkName.main, /^app-[a-z0-9]+\.js$/g)
const appStylesPath = find(
  stats.assetsByChunkName.main,
  /^styles-[a-z0-9]+\.css$/g
)

const publicPath = process.env.PUBLIC_PATH ?? '/'

// Scripts start downloading after the first paint. Lighthouse (lantern) counts every script
// requested before the observed LCP paint into simulated LCP, so the 482 KB app bundle made LCP
// on / bimodal (0.95 s or 4.1 s, depending on whether the bundle request or the paint came
// first). The page is prerendered, so the first paint needs no JS; the loader inserts the
// bundles in order (async=false, like defer) on the first-contentful-paint entry, with rAF and
// 1.5 s fallbacks (a background tab never paints).
const afterPaint = src =>
  `<script type="text/x-after-paint" data-src="${src}"></script>`
const LOADER = `<script>(function(){var d=0;function go(){if(d)return;d=1;document.querySelectorAll('script[type="text/x-after-paint"]').forEach(function(o){var s=document.createElement('script');s.src=o.getAttribute('data-src');s.async=false;o.replaceWith(s)})}function later(){setTimeout(go,0)}try{if(performance.getEntriesByName('first-contentful-paint').length)later();else new PerformanceObserver(function(l){if(l.getEntriesByName('first-contentful-paint').length)later()}).observe({type:'paint',buffered:true})}catch(e){requestAnimationFrame(later)}setTimeout(go,1500)})()</script>`

// async chunks a page needs before its first render (the blog chunk on the posts)
const chunkScripts = (chunks = []) =>
  chunks
    .map(chunk => find(stats.assetsByChunkName[chunk], /\.js$/))
    .map(path => afterPaint(`${publicPath}${path}`))
    .join('')

const template = (
  body = '',
  { title, meta, link, script, pathname, chunks, lang = 'en' }
) => `<!doctype html>
<html lang="${lang}" style="background: #3040bc">
  <head>
    <meta charset="utf-8">
    <link rel="preload" href="${publicPath}${appStylesPath}" as="style">
    ${title.toString()}
    ${meta.toString()}
    ${link.toString()}
    ${script.toString()}
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="icon" href="${publicPath}favicon.ico?v=20261030" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="${publicPath}favicon-32x32.png?v=20261030">
    <link rel="icon" type="image/png" sizes="192x192" href="${publicPath}round-icon-192x192.png?v=20261030">
    <link rel="apple-touch-icon" sizes="180x180" href="${publicPath}apple-icon-180x180.png?v=20261030">
    <link rel="manifest" href="${publicPath}manifest.json?v=20261030">
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
  ${chunkScripts(chunks)}${afterPaint(`${publicPath}${appSourcePath}`)}${LOADER}
</html>`

export default template
