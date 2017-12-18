const fs = require('fs')
const glob = require('glob')
const path = require('path')

const outputDirectory = [process.argv[2] || 'snapshots']
  .filter(x => x)
  .join('/')

const createDir = dir => {
  const splitPath = dir.split('/')
  splitPath.reduce((path, subPath) => {
    if (path && !fs.existsSync(path)) {
      console.log(`Create directory at ${path}.`)
      fs.mkdirSync(path)
    }
    return `${path}/${subPath}`
  })
}

const cwd = path.resolve(process.cwd(), './src/')
console.info({
  cwd
})

const [, , locale] = process.argv

glob(`**/*.${locale}*`, { cwd }, (er, filesRoot) => {
  const package = require('../package.json')
  const { locale: defaultLocale } = package

  const files = filesRoot.map(x => `${cwd}/${x}`.replace(/\\/gi, '/'))
  console.log({
    argv: process.argv
  })
  console.info({
    files,
    locale,
    defaultLocale
  })
  files.forEach(fileName => {
    const newName = fileName.replace(`.${locale}`, '')
    if (fs.existsSync(newName)) {
      console.info({
        fileAlreadyExists: newName
      })
      const originalName = fileName.replace(`.${locale}`, `.${defaultLocale}`)
      console.info({
        renamedTo: originalName
      })
      fs.renameSync(newName, originalName)
    }
    console.log(`Move file ${fileName} to ${newName}`)
    //createDir(newName)
    fs.renameSync(fileName, newName)
  })

  //write package.json
  fs.writeFileSync(
    '../package.json',
    JSON.stringify(
      {
        ...package,
        locale
      },
      null,
      2
    )
  )
})
