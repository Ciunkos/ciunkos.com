/* Renders the Open Graph cards (laid out at 1200 × 630, saved at 2× as 2400 × 1260 so LinkedIn keeps them sharp) for the home page and /resume into src/assets/og-*.jpg,
   in the same look as the /hire-me cards (dark, amber accent, portrait cutout, ciunkos.com in the corner).
   LinkedIn Featured, Slack and X show these as link thumbnails. Usage: node scripts/og-cards.mjs
   Uses a current Playwright from a tool repo (this repo's is too old to have its browser installed):
   PLAYWRIGHT_REPO=~/signature-desk by default. The portrait comes from ~/hire (HIRE_REPO). */
import { homedir } from 'node:os'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const repo = process.env.PLAYWRIGHT_REPO || join(homedir(), 'signature-desk')
const hire = process.env.HIRE_REPO || join(homedir(), 'hire')
const { chromium } = await import(
  join(repo, 'node_modules/@playwright/test/index.mjs')
)
const portrait = readFileSync(
  join(hire, 'public/hire/img/przemo-wycinek-512.png')
).toString('base64')

const CARDS = [
  {
    file: 'src/assets/og-home.jpg',
    kicker: 'Senior full-stack engineer · Wrocław',
    title: 'Przemysław Zalewski',
    sub: 'The free tools and apps I run in 2026, apps from 2007 to 2017 and a JavaScript blog.'
  },
  {
    file: 'src/assets/og-resume.jpg',
    kicker: 'Resume',
    title: 'Przemysław Zalewski',
    sub: 'Senior full-stack engineer, 15+ years shipping software. TypeScript, React, Node.js, Cloudflare, PostHog.'
  }
]

const html = ({
  kicker,
  title,
  sub
}) => `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:1200px;height:630px;background:#0a0a0a;color:#f5f5f5;font:17px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;display:flex;overflow:hidden;position:relative}
.bg{position:absolute;inset:0;background:radial-gradient(circle at 1px 1px,rgba(255,255,255,.06) 1px,transparent 0) 0 0/22px 22px,radial-gradient(ellipse at 85% 50%,#f59e0b33,transparent 55%)}
.txt{position:relative;flex:1;padding:70px 0 70px 72px;display:flex;flex-direction:column;justify-content:center;max-width:720px}
.k{color:#f59e0b;text-transform:uppercase;letter-spacing:.14em;font-weight:800;font-size:20px;margin-bottom:18px}
h1{font-size:72px;line-height:1.04;letter-spacing:-.02em;margin:0 0 24px;font-weight:800}
.s{font-size:28px;color:#9a9a9a;line-height:1.35;margin:0}
.ph{position:relative;width:440px;display:flex;align-items:flex-end;justify-content:center}
.blob{position:absolute;bottom:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle at 50% 40%,#f59e0b99,#f59e0b22 70%,transparent 71%)}
.ph img{position:relative;width:400px;height:auto}
.url{position:absolute;right:40px;top:34px;font:700 18px ui-monospace,Menlo,monospace;color:#9a9a9a}
</style></head><body><div class="bg"></div><div class="url">ciunkos.com</div>
<div class="txt"><div class="k">${kicker}</div><h1>${title}</h1><p class="s">${sub}</p></div>
<div class="ph"><div class="blob"></div><img src="data:image/png;base64,${portrait}"></div>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2
})
for (const card of CARDS) {
  await page.setContent(html(card))
  writeFileSync(card.file, await page.screenshot({ type: 'jpeg', quality: 92 }))
  console.log(card.file)
}
await browser.close()
