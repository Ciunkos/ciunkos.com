import React from 'react'

import locale from './locale'

/* Apps and tools from 2026. They live outside this SPA, so links are absolute:
   the router in styled/index.js only intercepts relative links. */
const BASE = 'https://ciunkos.com'

const svgIcon = svg => `data:image/svg+xml,${svg}`

export const apps = [
  {
    id: 'riddle',
    path: '/you-and-przemyslaw',
    icon: '/hire/favicon/riddle-180.png',
    hero: true
  },
  { id: 'przemo', path: '/przemo', icon: '/przemo/awatar-512.png', hero: true },
  {
    id: 'migawki',
    path: '/migawki',
    icon: svgIcon(
      "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23000'/%3E%3Ccircle cx='32' cy='32' r='20' fill='none' stroke='%23d8342a' stroke-width='5'/%3E%3Ccircle cx='32' cy='32' r='8' fill='%23fff'/%3E%3C/svg%3E"
    ),
    hero: true
  },
  {
    id: 'kalkulator',
    path: '/kalkulator-b2b-vs-uop-2026',
    icon: svgIcon(
      '%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%227%22 fill=%22%23e0642a%22/%3E%3Ctext x=%2216%22 y=%2222%22 font-size=%2216%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22sans-serif%22 font-weight=%22700%22%3E%25%3C/text%3E%3C/svg%3E'
    ),
    hero: false
  },
  {
    id: 'wyrocznia',
    path: '/wyrocznia',
    icon: '/wyrocznia/ikony/apple-touch-icon.png',
    hero: true
  },
  {
    id: 'korpo',
    path: '/korpo-tlumacz',
    icon: '/korpo-tlumacz/apple-touch-icon.png',
    hero: true
  },
  {
    id: 'bimi',
    path: '/bimi-checker',
    icon: '/spf-dkim-dmarc-checker/a/apple-touch-icon.png'
  },
  {
    id: 'estimator',
    path: '/software-cost-estimator',
    icon: '/software-cost-estimator/a/apple-touch-icon.png'
  },
  {
    id: 'buildorbuy',
    path: '/software-cost-estimator/build-or-buy',
    icon: '/software-cost-estimator/a/apple-touch-icon.png'
  },
  {
    id: 'store',
    path: '/app-store-ready',
    icon: '/app-store-ready/a/apple-touch-icon.png'
  },
  {
    id: 'runbook',
    path: '/runbook-generator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'sla',
    path: '/sla-calculator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'llm',
    path: '/local-llm-calculator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'legacy',
    path: '/software-cost-estimator/legacy-rewrite',
    icon: '/software-cost-estimator/a/apple-touch-icon.png'
  },
  {
    id: 'quoteDesk',
    path: '/quote-desk',
    icon: '/quote-desk/a/apple-touch-icon.png'
  },
  {
    id: 'tenant',
    path: '/multi-tenant-saas-calculator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'mcp',
    path: '/mcp-tools-from-openapi',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'ksef',
    path: '/ksef-invoice-validator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'rfq',
    path: '/rfq-automation-calculator',
    icon: '/runbook-generator/a/apple-touch-icon.png'
  },
  {
    id: 'validator',
    path: '/business-idea-validator',
    icon: '/business-idea-validator/a/apple-touch-icon.png'
  },
  {
    id: 'dns',
    path: '/spf-dkim-dmarc-checker',
    icon: '/spf-dkim-dmarc-checker/a/apple-touch-icon.png'
  },
  {
    id: 'configurator',
    path: '/engagement-configurator',
    icon: '/engagement-configurator/a/apple-touch-icon.png'
  },
  {
    id: 'glossary',
    path: '/glossary',
    icon: '/glossary/a/apple-touch-icon.png'
  }
].map(app => ({ ...app, href: BASE + app.path }))

const Recent = () => (
  <div className="RecentApps">
    <p className="RecentCta">
      <a className="HireMeButton" href={`${BASE}/hire-me`}>
        {locale.recent.hire}
      </a>
      <a className="HireMeLink" href={`${BASE}/hire-me#services`}>
        {locale.recent.services} →
      </a>
    </p>
    <p className="RecentTitle">{locale.recent.title}</p>
    <ul className="RecentGrid">
      {apps
        .filter(app => app.hero)
        .map(app => (
          <li key={app.id}>
            <a className="RecentTile" href={app.href}>
              <img
                src={app.icon}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <span>
                <strong>{locale.recent.apps[app.id][0]}</strong>
                <small>{locale.recent.apps[app.id][1]}</small>
              </span>
            </a>
          </li>
        ))}
    </ul>
    <p className="RecentMore">
      <a href="/apps#now">{locale.recent.more} →</a>
    </p>
    <p className="RecentNote">* {locale.recent.note}</p>
  </div>
)

export default Recent
