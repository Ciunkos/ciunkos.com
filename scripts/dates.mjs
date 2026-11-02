/* dates.mjs: real content dates for the static pages, from git (not the build day).
   Writes src/dates.json, which the pages import for dateModified and the visible
   "Updated" line. The file is committed because the deploy clone may be shallow;
   on a shallow clone this script keeps the committed file.
   node scripts/dates.mjs */
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { zmiana, publikacja } from '../src/utils/daty.mjs'

const shallow = (() => {
  try {
    return (
      execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
        encoding: 'utf8'
      }).trim() === 'true'
    )
  } catch {
    return true
  }
})()

if (shallow) {
  console.log('dates: shallow clone, keeping src/dates.json')
  process.exit(0)
}

const pages = {
  '/': ['src/home/index.js', 'src/home/locale', 'src/home/Recent.js'],
  '/about': ['src/about/index.js'],
  '/resume': [
    'src/resume/LOCALE',
    'src/resume/sections',
    'src/resume/bio.js',
    'src/resume/companies.js',
    'src/resume/contracts.js',
    'src/resume/goals.js',
    'src/resume/interests.js',
    'src/resume/projects.js',
    'src/resume/skills.js',
    'src/resume/tech.js'
  ],
  '/apps': [
    'src/apps/index.js',
    'src/apps/Now.js',
    'src/apps/data.js',
    'src/home/Recent.js'
  ]
}

const dates = Object.fromEntries(
  Object.entries(pages).map(([path, files]) => [
    path,
    { modified: zmiana(files), published: publikacja(files[0]) }
  ])
)

writeFileSync('src/dates.json', JSON.stringify(dates, null, 2) + '\n')
console.log('dates:', dates)
