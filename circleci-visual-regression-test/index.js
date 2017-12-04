const fetch = require('isomorphic-fetch')
const https = require('https')
const Stream = require('stream').Transform
const fs = require('fs')

const output = '/tmp/master/'
const outputScreenshots = `${output}screenshots/`

const artifactsEndpoint = (
  buildNumber = 51,
  vcsType = 'github',
  username = 'ciunkos',
  project = 'ciunkos.com',
  token = ''
) =>
  `https://circleci.com/api/v1.1/project/${vcsType}/${username}/${project}/${
    buildNumber
  }/artifacts?circle-token=${process.env.CIRCLE_TOKEN}`

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
  const projectInfoResponse = await fetch(
    'https://circleci.com/api/v1.1/project/github/ciunkos/ciunkos.com'
  )
  const projectInfo = projectInfoResponse.json()

  let latest = projectInfo[0]
  while (latest.status !== 'success' && latest.branch !== 'master') {
    const previousSuccessfulBuildNumber = latest.build_num
    latest = projectInfo.find(
      x => x.build_num === previousSuccessfulBuildNumber
    )
  }

  const response = await fetch(artifactsEndpoint(latest.build_num))
  const json = await response.json()
  const screenshots = json.filter(x => x.path.startsWith('screenshots/'))
  const tasks = await Promise.all(
    screenshots.map(async screenshot => {
      try {
        console.info(`Dowloading ${screenshot.url}`)
        await download(screenshot.url)(`${output}${screenshot.path}`)()
        console.info(`Written to ${screenshot.path}`)
      } catch (error) {
        console.info('error')
        console.error(error.message)
      }
    })
  )
}

main()
