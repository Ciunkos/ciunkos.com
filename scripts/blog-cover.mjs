/* Renders generated blog post images: covers (1280 × 720, the size of the photo covers)
   into src/blog/posts/<slug>/cover.jpg, and illustrations used inside posts into
   src/blog/posts/<slug>/images/. On covers the left side stays dark because the site lays
   the post title and abstract over it; the art lives on the right.
   Usage: node scripts/blog-cover.mjs, then node scripts/webp.mjs <cover.jpg> for the WebP twin.
   Uses a current Playwright from a tool repo (this repo's is too old to have its browser
   installed): PLAYWRIGHT_REPO=~/signature-desk by default, PLAYWRIGHT_CHANNEL=chrome
   to use the installed Chrome instead of a downloaded browser. */
import { homedir } from 'node:os'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
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

// in-post chart: the support timeline of recent Node.js lines
// (dates from schedule.json in the nodejs/Release repository).
// Phase colours are the validated dark categorical slots (blue, aqua, orange), labelled directly.
const PHASES = {
  current: { label: 'Current', color: '#3987e5' },
  active: { label: 'Active LTS', color: '#199e70' },
  maintenance: { label: 'Maintenance', color: '#d95926' }
}

const LINES = [
  {
    name: 'Node.js 22',
    phases: [
      ['current', '2024-04-24', '2024-10-29'],
      ['active', '2024-10-29', '2025-10-21'],
      ['maintenance', '2025-10-21', '2027-04-30']
    ]
  },
  {
    name: 'Node.js 24',
    phases: [
      ['current', '2025-05-06', '2025-10-28'],
      ['active', '2025-10-28', '2026-10-20'],
      ['maintenance', '2026-10-20', '2028-04-30']
    ]
  },
  {
    name: 'Node.js 25',
    phases: [
      ['current', '2025-10-15', '2026-04-01'],
      ['maintenance', '2026-04-01', '2026-06-01']
    ]
  },
  {
    name: 'Node.js 26',
    phases: [
      ['current', '2026-05-05', '2026-10-28'],
      ['active', '2026-10-28', '2027-10-20'],
      ['maintenance', '2027-10-20', '2029-04-30']
    ]
  }
]

const supportTimeline = ({ width, height }) => {
  const from = Date.parse('2025-01-01')
  const to = Date.parse('2030-01-01')
  const left = 200
  const right = width - 60
  const x = date =>
    left +
    ((Math.max(Date.parse(date), from) - from) / (to - from)) * (right - left)
  const rowTop = 150
  const rowGap = 110
  const barHeight = 50
  const years = [2025, 2026, 2027, 2028, 2029]
  const grid = years
    .map(year => {
      const gx = x(`${year}-01-01`)
      return `<line x1="${gx}" y1="120" x2="${gx}" y2="${
        rowTop + LINES.length * rowGap - 40
      }" stroke="#ffffff" stroke-opacity=".08"/>
<text x="${gx}" y="110" text-anchor="middle" class="axis">${year}</text>`
    })
    .join('')
  const rows = LINES.map((line, i) => {
    const y = rowTop + i * rowGap
    const textY = y + 34
    const bars = line.phases
      .map(([phase, start, end]) => {
        // a 2px surface gap between neighbouring phases
        const x1 = x(start) + 1
        const labelX = x1 + 12
        const w = Math.max(0, x(end) - x(start) - 2)
        const { label, color } = PHASES[phase]
        const fits = w > label.length * 12 + 20
        const text = fits
          ? `<text x="${labelX}" y="${textY}" class="seg">${label}</text>`
          : ''
        return `<rect x="${x1}" y="${y}" width="${w}" height="${barHeight}" rx="4" fill="${color}"/>${text}`
      })
      .join('')
    const end = line.phases[line.phases.length - 1][2]
    const eolX = x(end) + 12
    const nameX = left - 24
    const eol = new Date(end).toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    })
    // a surface-coloured box behind the label masks the "today" line where it crosses
    const eolText = `EOL ${eol}`
    const boxX = eolX - 8
    const boxY = y + 6
    const boxW = eolText.length * 13 + 16
    return `<text x="${nameX}" y="${textY}" text-anchor="end" class="name">${line.name}</text>${bars}
<rect x="${boxX}" y="${boxY}" width="${boxW}" height="38" fill="#0f2615"/>
<text x="${eolX}" y="${textY}" class="eol">${eolText}</text>`
  }).join('')
  const today = x('2026-10-30')
  const gridBottom = rowTop + LINES.length * rowGap - 40
  const todayLabelY = gridBottom + 36
  const legendY = height - 62
  const legend = Object.values(PHASES)
    .map(({ label, color }, i) => {
      const lx = left + i * 280
      const tx = lx + 34
      const ty = legendY + 21
      return `<rect x="${lx}" y="${legendY}" width="26" height="26" rx="4" fill="${color}"/><text x="${tx}" y="${ty}" class="legend">${label}</text>`
    })
    .join('')
  return `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:${width}px;height:${height}px;overflow:hidden;background:#0f2615;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}
svg{display:block}
.title{fill:#f0efec;font-size:38px;font-weight:800}
.axis{fill:#c3c2b7;font-size:30px}
.name{fill:#f0efec;font-size:30px;font-weight:700}
.seg{fill:#ffffff;font-size:24px;font-weight:700}
.eol{fill:#c3c2b7;font-size:24px}
.legend{fill:#c3c2b7;font-size:30px}
.today{fill:#f0efec;font-size:28px;font-weight:700}
</style></head><body>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
<text x="60" y="62" class="title">Node.js release lines, 2025 to 2029</text>
${grid}
<line x1="${today}" y1="120" x2="${today}" y2="${gridBottom}" stroke="#f0efec" stroke-width="2" stroke-dasharray="6 6"/>
${rows}
<text x="${today}" y="${todayLabelY}" text-anchor="middle" class="today">Today, 30 Oct 2026</text>
${legend}
</svg></body></html>`
}

// in-post diagram: which Temporal type to reach for
// one meeting, 15:00 in Warsaw on 30 October 2026, seen through each type
const TEMPORAL_TYPES = [
  ['PlainDate', '2026-10-30', 'A calendar day: a birthday, a release date'],
  ['PlainTime', '15:00', 'A time of day: opening hours, an alarm'],
  [
    'PlainDateTime',
    '2026-10-30T15:00',
    'A date and time with no zone: a form input'
  ],
  [
    'ZonedDateTime',
    '2026-10-30T15:00[Europe/Warsaw]',
    'A date and time in a place: a meeting, a deadline'
  ],
  ['Instant', '2026-10-30T14:00Z', 'An exact point in time: a log entry'],
  ['Duration', 'PT2H30M', 'A length of time: a timeout, a billing period']
]

const temporalCards = TEMPORAL_TYPES.map(
  ([type, value, use]) =>
    `<div class="card"><div class="type">${type}</div><div class="value">${value}</div><div class="use">${use}</div></div>`
).join('')

const temporalTypes = ({
  width,
  height
}) => `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:${width}px;height:${height}px;overflow:hidden;box-sizing:border-box;padding:56px 60px;display:flex;flex-direction:column;
  background:radial-gradient(ellipse at 50% 0%,#1f4d26 0%,#0f2615 60%,#08140b 100%);color:#f0efec;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}
h1{margin:0 0 30px;font-size:46px;font-weight:800;letter-spacing:-.5px}
h1 span{color:#7cc95d}
.grid{flex:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr);gap:22px}
.card{background:rgba(255,255,255,.06);border:1px solid rgba(124,201,93,.35);border-radius:14px;padding:26px 28px;box-sizing:border-box}
.type{font:800 38px ui-monospace,Menlo,Consolas,monospace;color:#a6e37f}
.value{margin-top:12px;font:600 23px ui-monospace,Menlo,Consolas,monospace;color:#f0efec;background:rgba(0,0,0,.3);border-radius:8px;padding:8px 12px;display:inline-block;word-break:break-all}
.use{margin-top:12px;font-size:27px;line-height:1.3;color:#c3c2b7}
</style></head><body>
<h1>Which <span>Temporal</span> type do I need?</h1>
<div class="grid">${temporalCards}</div>
</body></html>`

// share card for LinkedIn, X and Slack (1200 × 630): the title on the left, the cover's
// tombstone and "26" hexagon cropped in on the right
const shareCard = ({
  width,
  height,
  cover
}) => `<!doctype html><html><head><meta charset="utf-8"><style>
body{margin:0;width:${width}px;height:${height}px;overflow:hidden;position:relative;background:#06100a;color:#f0efec;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif}
.art{position:absolute;right:-40px;top:0;width:760px;height:${height}px;
  background:url(data:image/jpeg;base64,${cover}) no-repeat;background-size:1250px auto;background-position:-480px 60px;
  -webkit-mask-image:linear-gradient(180deg,transparent 60px,#000 180px);mask-image:linear-gradient(180deg,transparent 60px,#000 180px)}
.fade{position:absolute;inset:0;background:linear-gradient(90deg,#06100a 38%,rgba(6,16,10,.85) 52%,rgba(6,16,10,0) 72%)}
.text{position:absolute;left:64px;top:0;bottom:0;width:600px;display:flex;flex-direction:column;justify-content:center}
.kicker{color:#7cc95d;text-transform:uppercase;letter-spacing:.14em;font-weight:800;font-size:22px;margin-bottom:20px}
h1{margin:0 0 22px;font-size:62px;line-height:1.05;letter-spacing:-.02em;font-weight:800}
.sub{font-size:27px;line-height:1.35;color:#c3c2b7;margin:0}
.url{position:absolute;left:64px;bottom:40px;font:700 20px ui-monospace,Menlo,monospace;color:#8a9a8c}
</style></head><body>
<div class="art"></div><div class="fade"></div>
<div class="text"><div class="kicker">Node.js 26 LTS</div><h1>What's new since 24 and how to upgrade</h1>
<p class="sub">Temporal, new JavaScript, and every breaking change with its fix.</p></div>
<div class="url">ciunkos.com</div>
</body></html>`

const IMAGES = [
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/cover.jpg',
    width: W,
    height: H,
    html: nodeLts
  },
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/images/temporal.jpg',
    width: 1600,
    height: 800,
    html: temporalParty
  },
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/images/support-timeline.jpg',
    width: 1200,
    height: 700,
    html: supportTimeline
  },
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/images/temporal-types.jpg',
    width: 1200,
    height: 960,
    html: temporalTypes
  },
  {
    file: 'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/share.jpg',
    width: 1200,
    height: 630,
    html: shareCard,
    // rendered after the cover, which it reuses
    withCover:
      'src/blog/posts/node-js-26-lts-whats-new-and-how-to-upgrade/cover.jpg'
  }
]

const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL
})
for (const image of IMAGES) {
  // a fresh page per image: resizing one page left stale paint at the bottom of taller images
  const viewport = { width: image.width, height: image.height }
  const page = await browser.newPage({ viewport })
  const cover =
    image.withCover && readFileSync(image.withCover).toString('base64')
  await page.setContent(image.html({ ...image, cover }))
  mkdirSync(dirname(image.file), { recursive: true })
  writeFileSync(
    image.file,
    await page.screenshot({ type: 'jpeg', quality: 90 })
  )
  await page.close()
  console.log(image.file)
}
await browser.close()
