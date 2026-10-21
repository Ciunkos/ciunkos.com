/* Webpack loader for JPEGs that have a WebP twin next to them (the section covers, made by
   scripts/webp.mjs). Emits both files under one content hash, name.<hash>.jpg and name.<hash>.webp,
   and exports the JPEG URL like file-loader, so the Background component can offer the WebP
   in a <picture> and keep the JPEG for og:image and as the fallback. */
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const webpPath = resourcePath => resourcePath.replace(/\.jpg$/, '.webp')

module.exports = function coverLoader(jpg) {
  const webpFile = webpPath(this.resourcePath)
  this.addDependency(webpFile)
  const webp = fs.readFileSync(webpFile)
  const hash = crypto.createHash('md5').update(jpg).update(webp).digest('hex')
  const name = `${path.basename(this.resourcePath, '.jpg')}.${hash}`

  this.emitFile(`${name}.jpg`, jpg)
  this.emitFile(`${name}.webp`, webp)

  return `export default __webpack_public_path__ + ${JSON.stringify(
    `${name}.jpg`
  )}`
}

module.exports.raw = true
module.exports.hasWebp = resourcePath =>
  /\.jpg$/.test(resourcePath) && fs.existsSync(webpPath(resourcePath))
