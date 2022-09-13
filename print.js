import { chromium } from 'playwright'
import { pathToFileURL } from 'url'
import { resolve } from 'path'

const INPUT_PATH = './dist/resume.html'
const OUTPUT_PATH = './src/www/resume.pdf'

const main = async () => {
  try {
    const absolutePath = resolve(INPUT_PATH)
    const { href } = pathToFileURL(absolutePath)

    const browser = await chromium.launch()
    const context = await browser.newContext({
      javaScriptEnabled: false
    })
    const page = await context.newPage()

    await page.goto(href)

    await page.pdf({
      format: 'A4',
      path: OUTPUT_PATH,
      preferCSSPageSize: true,
      printBackground: true
    })

    await browser.close()

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
