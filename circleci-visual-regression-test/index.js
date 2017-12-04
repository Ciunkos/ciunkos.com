const fetch = require('isomorphic-fetch')
const https = require('https')
const Stream = require('stream').Transform
const fs = require('fs')

const output = '/tmp/visual-regression/'
const outputScreenshots = `${output}before/`

const artifactsEndpoint = (
  buildNumber = 51,
  vcsType = 'github',
  username = 'ciunkos',
  project = 'ciunkos.com'
) =>
  `https://circleci.com/api/v1.1/project/${vcsType}/${username}/${project}/${
    buildNumber
  }/artifacts?circle-token=${process.env.CIRCLE_TOKEN}`

const projectEndpoint = (
  vcsType = 'github',
  username = 'ciunkos',
  project = 'ciunkos.com'
) =>
  `https://circleci.com/api/v1.1/project/${vcsType}/${username}/${
    project
  }?circle-token=${process.env.CIRCLE_TOKEN}`

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
  const projectUrl = projectEndpoint()
  const projectInfoResponse = await fetch(projectUrl)
  if (!projectInfoResponse.ok) {
    throw new Error(`Request failed: ${projectUrl}`)
  }
  const projectInfo = await projectInfoResponse.json()
  // console.info({
  //   projectInfo
  // })
  let latest = projectInfo[0]
  while (latest.status !== 'success' || latest.branch !== 'master') {
    const previousSuccessfulBuildNumber =
      latest.previous_successful_build.build_num
    latest = projectInfo.find(
      x => x.build_num === previousSuccessfulBuildNumber
    )
    if (!latest) {
      throw new Error('Could not find latest successful master build')
    }
  }
  const artifactsUrl = artifactsEndpoint(latest.build_num)
  const response = await fetch(artifactsUrl)
  if (!response.ok) {
    throw new Error(`Request failed: ${artifactsUrl}`)
  }
  const json = await response.json()
  const screenshots = json.filter(x =>
    x.path.startsWith('visual-regression/after')
  )
  const tasks = await Promise.all(
    screenshots.map(async screenshot => {
      try {
        const to = `${outputScreenshots}${screenshot.path.substr(
          'visual-regression/after'.length
        )}`
        console.info(`Dowloading ${screenshot.url} to `)
        await download(screenshot.url)(to)()
        console.info(`Written to ${screenshot.path}`)
      } catch (error) {
        console.info('error')
        console.error(error.message)
        throw error
      }
    })
  )
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
