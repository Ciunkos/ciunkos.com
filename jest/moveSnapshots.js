const fs = require('fs')
const glob = require('glob')

const outputDirectory = [process.argv[2] || 'snapshots']
  .filter(x => x)
  .join('/')

const createDir = dir => {
  const splitPath = dir.split('/')
  splitPath.reduce((path, subPath) => {
    if (!fs.existsSync(path)) {
      console.log(`Create directory at ${path}.`);
      fs.mkdirSync(path)
    }
    return `${path}/${subPath}`
  })
}

glob('src/__snapshots__/*.snap', {}, (er, files) => {
  console.log({
    argv: process.argv
  })
  files.forEach(fileName => {
    const newName = fileName
      .replace(/__snapshots__\//g, '')
      .replace('src/', `${outputDirectory}/`)

    console.log(`Move file ${fileName} to ${newName}.`);
    createDir(newName)
    fs.renameSync(fileName, newName)
  })

  glob('src/__snapshots__', {}, (er, files) => {
    files.forEach(fileName => {
      fs.rmdirSync(fileName)
    })
  })
})
