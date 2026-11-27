import assert from 'node:assert/strict'
import test from 'node:test'
import { chromium } from 'playwright'

// Serve dist/ locally and point HOMEPAGE_URL at it to run this browser test.
test('the homepage pronunciation plays on demand, stops, replays and retries', async t => {
  const browser = await chromium.launch()
  t.after(() => browser.close())
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
  const clip = '**/audio/name-pronunciation.m4a'
  let requests = 0
  await page.route(clip, route => {
    requests += 1
    return route.continue()
  })
  const hydration = Promise.withResolvers()
  await page.route('**/app-*.js', async route => {
    await hydration.promise
    await route.continue()
  })
  await page.goto(process.env.HOMEPAGE_URL ?? 'http://127.0.0.1:4173', {
    waitUntil: 'domcontentloaded'
  })
  const heading = page.getByRole('heading', { level: 1 })
  const play = heading.getByRole('button', { name: 'Play name pronunciation' })
  const stop = heading.getByRole('button', { name: 'Stop name pronunciation' })
  await play.waitFor({ timeout: 5000 })
  assert.ok(await play.isDisabled())
  hydration.resolve()
  assert.equal(requests, 0)
  await play.click()
  await stop.waitFor()
  assert.ok(requests > 0)
  assert.ok(
    await heading
      .locator('audio')
      .evaluate(audio => audio.duration > 7 && !audio.paused)
  )
  await stop.press('Space')
  await play.waitFor()
  assert.equal(
    await heading.locator('audio').evaluate(audio => audio.currentTime),
    0
  )
  await play.press('Enter')
  await stop.waitFor()
  await play.waitFor({ timeout: 12000 })
  assert.ok(await heading.locator('audio').evaluate(audio => audio.ended))

  await page.setViewportSize({ width: 320, height: 700 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await page.route(clip, route => route.fulfill({ status: 503, body: '' }), {
    times: 1
  })
  await play.click()
  await page.waitForFunction(() => document.querySelector('h1 audio')?.error)
  await play.click()
  await stop.waitFor()
  assert.equal(
    await stop.evaluate(
      button => getComputedStyle(button, '::after').animationName
    ),
    'none'
  )
  assert.ok(
    await stop.evaluate(button => {
      const surname = document.createRange()
      surname.selectNodeContents(button.previousSibling)
      const word = surname.getBoundingClientRect()
      const icon = button.getBoundingClientRect()
      return (
        icon.left >= word.right - 1 &&
        icon.top < word.bottom &&
        icon.bottom > word.top &&
        icon.right <= innerWidth
      )
    })
  )
})
