const fetch = require('isomorphic-fetch')
const https = require('https')
const Stream = require('stream').Transform
const fs = require('fs')

const output = '/tmp/master/'
const outputScreenshots = `${output}screenshots/`

const artifactsEndpoint = (
  vcsType = 'github',
  username = 'ciunkos',
  project = 'ciunkos.com',
  buildNumber = 51,
  token = ''
) =>
  `https://circleci.com/api/v1.1/project/${vcsType}/${username}/${project}/${
    buildNumber
  }/artifacts?circle-token=${process.env.CIRCLE_TOJKE}`

const createDir = dir => {
  const splitPath = dir.split('/')
  console.info({ splitPath })
  splitPath.reduce((path, subPath) => {
    console.info({ path, subPath })
    if (path && !fs.existsSync(path)) {
      console.log(`Create directory at ${path}.`)
      fs.mkdirSync(path)
    }
    return `${path}/${subPath}`
  })
}

const download = source => to => async () => {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(to)
    stream.on('error', reject)
    stream
      .on('open', () => {
        https
          .request(source, response => {
            response.on('data', chunk => {
              stream.write(chunk)
            })

            response.on('end', () => {
              stream.end()
              resolve()
            })

            response.on('error', reject)
          })
          .end()
      })
      .on('error', reject)
  })
}

const main = async () => {
  createDir(outputScreenshots)
  const response = await fetch(artifactsEndpoint())
  const json = await response.json()
  const screenshots = json.filter(x => x.path.startsWith('screenshots/'))
  const tasks = await Promise.all(
    screenshots.map(async screenshot => {
      try {
        console.info(`Dowloading ${screenshot.url}`)
        const data = await download(screenshot.url)(
          `${output}${screenshot.path}`
        )()
        console.info(`Written to ${screenshot.path}`)
      } catch (error) {
        console.info('error')
        console.error(error.message)
      }
    })
  )
}

main()
