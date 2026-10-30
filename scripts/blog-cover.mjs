/* Renders generated blog post images: covers (1280 × 720, the size of the photo covers)
   into src/blog/posts/<slug>/cover.jpg, and illustrations used inside posts into
   src/blog/posts/<slug>/images/. On covers the left side stays dark because the site lays
   the post title and abstract over it; the art lives on the right.
   Usage: node scripts/blog-cover.mjs, then node scripts/webp.mjs <cover.jpg> for the WebP twin.
   Uses a current Playwright from a tool repo (this repo's is too old to have its browser
   installed): PLAYWRIGHT_REPO=~/signature-desk by default, PLAYWRIGHT_CHANNEL=chrome
   to use the installed Chrome instead of a downloaded browser. */
import { homedir } from 'node:os'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const repo = process.env.PLAYWRIGHT_REPO || join(homedir(), 'signature-desk')
const { chromium } = await import(
  join(repo, 'node_modules/@playwright/test/index.mjs')
)

const W = 1280
const H = 720

// pointy-top hexagon (the Node.js logo shape) centred at cx, cy with radius r
const hex = (cx, cy, r) =>
  [0, 1, 2, 3, 4, 5]
    .map(i => {
      const a = (Math.PI / 3) * i - Math.PI / 2
      const x = (cx + r * Math.cos(a)).toFixed(1)
      const y = (cy + r * Math.sin(a)).toFixed(1)
      return `${x},${y}`
    })
    .join(' ')

// honeycomb that fades in towards the art on the right
const honeycomb = () => {
  const r = 34
  const w = Math.sqrt(3) * r
  const cells = []
  for (let row = -1; row * 1.5 * r < H + r; row += 1) {
    for (let col = -1; col * w < W + w; col += 1) {
      const cx = col * w + (row % 2 ? w / 2 : 0)
      const cy = row * 1.5 * r
      const d = Math.hypot(cx - 1000, cy - 300)
      const o = Math.max(0, 0.32 - d / 2600) * Math.min(1, cx / 700)
      if (o > 0.01) {
        const points = hex(cx, cy, r - 3)
        const opacity = o.toFixed(3)
        cells.push(
          `<polygon points="${points}" fill="none" stroke="#5fa04e" stroke-opacity="${opacity}" stroke-width="1.5"/>`
        )
      }
    }
  }
  return cells.join('')
}

// a few lit cells and floating particles
const sparks = [
  [690, 120, 14, 0.5],
  [1210, 520, 18, 0.45],
  [760, 560, 9, 0.6],
  [1190, 90, 10, 0.55],
  [640, 420, 6, 0.5],
  [1235, 300, 7, 0.6],
  [860, 80, 6, 0.45]
]
  .map(
    ([x, y, r, o]) =>
      `<polygon points="${hex(
        x,
        y,
        r
      )}" fill="#7cc95d" fill-opacity="${o}" filter="url(#glow)"/>`
  )
  .join('')

const sun = {
  halo: hex(1035, 250, 230),
  body: hex(1035, 250, 190),
  rim: hex(1035, 250, 172)
}

const nodeLts = () => `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:${W}px;height:${H}px;overflow:hidden;background:#06100a}
svg{display:block}
</style></head><body>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="sky" cx="0.8" cy="0.36" r="0.75">
    <stop offset="0" stop-color="#1d4a24"/>
    <stop offset="0.45" stop-color="#0c2112"/>
    <stop offset="1" stop-color="#050b07"/>
  </radialGradient>
  <linearGradient id="sun" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#a6e37f"/>
    <stop offset="0.55" stop-color="#5fa04e"/>
    <stop offset="1" stop-color="#2f6b2b"/>
  </linearGradient>
  <linearGradient id="stone" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#8b938d"/>
    <stop offset="0.5" stop-color="#5d655f"/>
    <stop offset="1" stop-color="#363c38"/>
  </linearGradient>
  <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#143419"/>
    <stop offset="0.35" stop-color="#07130b"/>
    <stop offset="1" stop-color="#040906"/>
  </linearGradient>
  <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="6" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="40"/>
  </filter>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity="0.6"/>
  </filter>
  <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#050b07" stop-opacity="0.9"/>
    <stop offset="0.45" stop-color="#050b07" stop-opacity="0"/>
  </linearGradient>
</defs>

<rect width="${W}" height="${H}" fill="url(#sky)"/>
${honeycomb()}

<!-- ground -->
<path d="M0 420 C 300 405, 600 385, 780 368 C 980 354, 1150 356, 1280 364 L 1280 720 L 0 720 Z" fill="url(#ground)"/>
<path d="M0 420 C 300 405, 600 385, 780 368 C 980 354, 1150 356, 1280 364" fill="none" stroke="#5fa04e" stroke-opacity="0.55" stroke-width="2"/>

<!-- the post header crops the cover to about y 70-440 (object-position 50% 20%), so the art is scaled into that band -->
<g transform="translate(402 54) scale(0.6)">
<!-- the rising Node.js 26 hexagon -->
<polygon points="${
  sun.halo
}" fill="#7cc95d" opacity="0.55" filter="url(#halo)"/>
<polygon points="${sun.body}" fill="url(#sun)"/>
<polygon points="${
  sun.rim
}" fill="none" stroke="#d8f5c4" stroke-opacity="0.45" stroke-width="3"/>
<text x="1035" y="300" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif" font-weight="900" font-size="160" letter-spacing="-6" fill="#06100a" fill-opacity="0.88" dy="16">26</text>
<text x="1035" y="172" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif" font-weight="800" font-size="38" letter-spacing="14" fill="#06100a" fill-opacity="0.75">LTS</text>

${sparks}


<!-- the tombstone of new Date(), raised out of the darker bottom of the header -->
<g transform="translate(-80 -110)">
<g filter="url(#shadow)" transform="rotate(-4 830 520)">
  <path d="M660 640 L 660 430 Q 660 300 830 300 Q 1000 300 1000 430 L 1000 640 Z" fill="url(#stone)"/>
  <path d="M676 630 L 676 432 Q 676 316 830 316 Q 984 316 984 432 L 984 630" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="3"/>
  <text x="830" y="420" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="700" font-size="84" letter-spacing="10" fill="#1e2420" fill-opacity="0.85">RIP</text>
  <text x="830" y="500" text-anchor="middle" font-family="ui-monospace,Menlo,Consolas,monospace" font-weight="700" font-size="44" fill="#1e2420" fill-opacity="0.85">new Date()</text>
  <text x="830" y="566" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-size="30" letter-spacing="4" fill="#1e2420" fill-opacity="0.7">1995 – 2026</text>
</g>
<!-- grass tufts -->
<path d="M640 646 l8 -26 l6 24 l9 -32 l5 34 l10 -22 l4 24 M960 640 l7 -24 l7 22 l8 -30 l6 32 l9 -20 l3 22" fill="none" stroke="#5fa04e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>

<rect width="${W}" height="${H}" fill="url(#fadeLeft)"/>
</svg>
</body></html>`

// in-post illustration: Temporal is on by default, with fanfares
const confetti = (width, height, count) => {
  const colors = [
    '#7cc95d',
    '#a6e37f',
    '#f5c542',
    '#ff7a59',
    '#5fb3f5',
    '#ffffff'
  ]
  let seed = 7
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  // keep the wordmark and the line under it clear
  const overText = (x, y) =>
    x > width * 0.22 &&
    x < width * 0.78 &&
    y > height * 0.3 &&
    y < height * 0.72
  return Array.from({ length: count }, (_, i) => {
    let x
    let y
    do {
      x = random() * width
      y = random() * height
    } while (overText(x, y))
    const r = 5 + random() * 9
    const rotate = Math.round(random() * 60)
    const color = colors[i % colors.length]
    const opacity = (0.45 + random() * 0.5).toFixed(2)
    return `<polygon points="${hex(
      x,
      y,
      r
    )}" fill="${color}" fill-opacity="${opacity}" transform="rotate(${rotate} ${x.toFixed(
      1
    )} ${y.toFixed(1)})"/>`
  }).join('')
}

const temporalParty = ({
  width,
  height
}) => `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:${width}px;height:${height}px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
  background:radial-gradient(ellipse at 50% 42%,#2a6a2e 0%,#12301a 45%,#060f09 100%);color:#fff}
svg{position:absolute;inset:0}
.center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
.word{font-size:200px;font-weight:900;letter-spacing:-8px;line-height:1;
  background:linear-gradient(180deg,#ffffff 0%,#d8f5c4 55%,#7cc95d 100%);-webkit-background-clip:text;color:transparent;
  filter:drop-shadow(0 10px 30px rgba(124,201,93,.45))}
.sub{font-size:44px;font-weight:700;color:#d8f5c4;letter-spacing:.5px}
.sub b{color:#06100a;background:#7cc95d;border-radius:12px;padding:2px 16px;margin-left:6px}
.emoji{position:absolute;font-size:150px;line-height:1;filter:drop-shadow(0 12px 20px rgba(0,0,0,.45))}
.small{font-size:84px}
.note{position:absolute;right:120px;bottom:70px;transform:rotate(7deg);background:#fff3a8;color:#5a4a00;
  font:700 40px ui-monospace,Menlo,Consolas,monospace;padding:22px 30px;border-radius:6px;box-shadow:0 14px 30px rgba(0,0,0,.45)}
.note s{text-decoration-thickness:5px;text-decoration-color:#d9381e}
</style></head><body>
<svg width="${width}" height="${height}">${confetti(width, height, 70)}</svg>
<div class="emoji" style="left:70px;top:300px;transform:scaleX(-1) rotate(-18deg)">🎺</div>
<div class="emoji" style="right:70px;top:300px;transform:rotate(-18deg)">🎺</div>
<div class="emoji small" style="left:190px;top:90px;transform:rotate(-12deg)">🎉</div>
<div class="emoji small" style="right:190px;top:90px;transform:scaleX(-1) rotate(-12deg)">🎉</div>
<div class="emoji small" style="left:150px;bottom:70px">🥳</div>
<div class="emoji small" style="left:660px;top:40px">🎊</div>
<div class="note"><s>new Date()</s></div>
<div class="center"><div class="word">Temporal</div><div class="sub">is on by default in <b>Node.js 26</b></div></div>
</body></html>`

const IMAGES = [
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-migrate/cover.jpg',
    width: W,
    height: H,
    html: nodeLts
  },
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-migrate/images/temporal.jpg',
    width: 1600,
    height: 800,
    html: temporalParty
  }
]

const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL
})
const page = await browser.newPage()
for (const image of IMAGES) {
  await page.setViewportSize({ width: image.width, height: image.height })
  await page.setContent(image.html(image))
  mkdirSync(dirname(image.file), { recursive: true })
  writeFileSync(
    image.file,
    await page.screenshot({ type: 'jpeg', quality: 90 })
  )
  console.log(image.file)
}
await browser.close()
