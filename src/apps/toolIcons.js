/* eslint-disable max-len -- SVG path data reads best on one line per symbol. */
/* Symbol icons for the smaller tools on /apps: a rounded square in a colour unique to each tool
   with a white line symbol (24-unit grid, drawn here), so the list reads at a glance instead of
   showing the same face 22 times. */

const S =
  "fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'"

/* id → [background colour, symbol drawn on a 24 × 24 grid] */
const ICONS = {
  bimi: [
    '#c2410c',
    "<rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/>"
  ],
  estimator: [
    '#15803d',
    "<path d='M12 3v18M16.5 7.5c-.8-1.3-2.4-2-4.5-2-2.6 0-4.5 1.3-4.5 3.2 0 4.6 9.3 2.3 9.3 6.9 0 2-2 3.4-4.8 3.4-2.3 0-4-.8-4.8-2.3'/>"
  ],
  buildorbuy: [
    '#b45309',
    "<path d='M12 3v18M5 21h14M4 7h16M7 7l-3 7h6l-3-7M17 7l-3 7h6l-3-7'/>"
  ],
  store: [
    '#0f766e',
    "<rect x='6' y='2' width='12' height='20' rx='2.5'/><path d='M11 18h2M9.5 10.5l2 2 3.5-4'/>"
  ],
  runbook: [
    '#7c3aed',
    "<path d='M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H20M8 8h8M8 12h5'/>"
  ],
  sla: [
    '#be123c',
    "<circle cx='12' cy='13' r='8'/><path d='M12 9v4l2.5 2.5M9 2h6'/>"
  ],
  llm: [
    '#334155',
    "<rect x='6' y='6' width='12' height='12' rx='2'/><path d='M10 10h4v4h-4zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4'/>"
  ],
  legacy: [
    '#a16207',
    "<path d='M20 11a8 8 0 0 0-14.6-4.5L3 9M3 4v5h5M4 13a8 8 0 0 0 14.6 4.5L21 15M21 20v-5h-5'/>"
  ],
  signatureDesk: [
    '#db2777',
    "<path d='M3 20c3-1 4-6 6-6s-1 5 1 5 3-4 5-4 1 3 3 3M15 4l5 5-8 8H7v-5z'/>"
  ],
  dashboardDesk: ['#ea580c', "<path d='M4 20V10M10 20V4M16 20v-7M22 20H2'/>"],
  evalDesk: [
    '#0891b2',
    "<path d='M9 3h6M10 3v6L4.5 18.5A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.5L14 9V3M7 15h10'/>"
  ],
  listDesk: [
    '#16a34a',
    "<path d='M10 6h11M10 12h11M10 18h11M3 6l1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17'/>"
  ],
  aiVisibility: [
    '#9333ea',
    "<path d='M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z'/><circle cx='12' cy='12' r='3'/>"
  ],
  quoteDesk: ['#0369a1', "<path d='M6 2h9l5 5v15H6zM14 2v6h6M9 13h8M9 17h5'/>"],
  tenant: [
    '#4d7c0f',
    "<path d='M4 21V7l8-4 8 4v14M9 21v-5h6v5M8 10h2M14 10h2M2 21h20'/>"
  ],
  mcp: [
    '#0e7490',
    "<path d='M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5'/>"
  ],
  ksef: [
    '#b91c1c',
    "<path d='M5 2h14v20l-3-2-2 2-2-2-2 2-2-2-3 2zM9 7h6M9 11h6M9 15h3'/>"
  ],
  rfq: [
    '#a21caf',
    "<circle cx='12' cy='14' r='7'/><path d='M12 11v3h3M10 2h4M12 2v5M19 6l1.5-1.5'/>"
  ],
  validator: [
    '#ca8a04',
    "<path d='M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.7.5 1.2 1.3 1.3 2.1h4.4c.1-.8.6-1.6 1.3-2.1A6 6 0 0 0 12 3z'/>"
  ],
  dns: [
    '#047857',
    "<path d='M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5zM8.5 12l2.5 2.5 4.5-5'/>"
  ],
  configurator: [
    '#475569',
    "<path d='M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0'/><circle cx='16' cy='6' r='2'/><circle cx='10' cy='12' r='2'/><circle cx='18' cy='18' r='2'/>"
  ],
  glossary: [
    '#be185d',
    "<path d='M3 18l4-11 4 11M4.5 14h5M14 11.5c.6-.9 1.6-1.5 2.9-1.5 1.8 0 3.1 1.1 3.1 2.9V18M20 14.5c-.9-.6-1.9-.8-3-.8-1.9 0-3.2.9-3.2 2.2s1.1 2.1 2.6 2.1c1.5 0 2.9-.7 3.6-1.8'/>"
  ]
}

/* Data URI with the symbol centred in a 32 × 32 rounded square; null when the tool has no symbol yet. */
const toolIcon = id => {
  const icon = ICONS[id]
  if (!icon) return null
  const [colour, symbol] = icon
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='${colour}'/><g transform='translate(5 5) scale(0.9167)' ${S}>${symbol}</g></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default toolIcon
