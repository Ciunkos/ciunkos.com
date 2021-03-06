const fs = require('fs')
const glob = require('glob')
const path = require('path')

const pkg = require('../package.json')

const cwd = path.resolve(process.cwd(), './src/')

console.info({
  cwd
})

const [, , locale] = process.argv

glob(`**/*.${locale}*`, { cwd }, (er, filesRoot) => {
  const { locale: defaultLocale } = pkg

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
      if (fs.existsSync(originalName)) {
        throw new Error('File already exists!')
      }
      fs.renameSync(newName, originalName)
    }
    console.log(`Move file ${fileName} to ${newName}`)
    //createDir(newName)
    if (fs.existsSync(newName)) {
      throw new Error('File already exists!')
    }
    fs.renameSync(fileName, newName)
  })

  //write package.json
  const localePath = path.resolve(cwd, '..', 'package.json')
  fs.writeFileSync(
    localePath,
    JSON.stringify(
      {
        ...pkg,
        locale
      },
      null,
      2
    )
  )
})
