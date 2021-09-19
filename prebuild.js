import fs from 'fs'

fs.rmSync('./build', { force: true, recursive: true })
fs.rmSync('./dist', { force: true, recursive: true })
