import React from 'react'

import locale from './locale'
import migawkiIcon from 'apps/2026/icon-migawki.png'
import kalkulatorIcon from 'apps/2026/icon-kalkulator.png'

/* Apps and tools from 2026. They live outside this SPA, so links are absolute:
   the router in styled/index.js only intercepts relative links. */
const BASE = 'https://ciunkos.com'

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
    icon: migawkiIcon,
    hero: true
  },
  {
    id: 'kalkulator',
    path: '/kalkulator-b2b-vs-uop-2026',
    icon: kalkulatorIcon,
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
    icon: '/spf-dkim-dmarc-checker/a/ikony/bimi/apple-touch-icon.png'
  },
  {
    id: 'estimator',
    path: '/software-cost-estimator',
    icon: '/software-cost-estimator/a/apple-touch-icon.png'
  },
  {
    id: 'buildorbuy',
    path: '/software-cost-estimator/build-or-buy',
    icon: '/software-cost-estimator/a/ikony/buildorbuy/apple-touch-icon.png'
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
    icon: '/runbook-generator/a/ikony/sla/apple-touch-icon.png'
  },
  {
    id: 'llm',
    path: '/local-llm-calculator',
    icon: '/runbook-generator/a/ikony/llm/apple-touch-icon.png'
  },
  {
    id: 'legacy',
    path: '/software-cost-estimator/legacy-rewrite',
    icon: '/software-cost-estimator/a/ikony/legacy/apple-touch-icon.png'
  },
  {
    id: 'emailTest',
    path: '/email-spam-test',
    icon: '/email-spam-test/a/apple-touch-icon.png'
  },
  {
    id: 'phishingChecker',
    path: '/phishing-email-checker',
    icon: '/email-spam-test/a/ikony/phishing/apple-touch-icon.png'
  },
  {
    id: 'signatureDesk',
    path: '/email-signature-generator',
    icon: '/email-signature-generator/a/apple-touch-icon.png'
  },
  {
    id: 'dashboardDesk',
    path: '/posthog-dashboard-generator',
    icon: '/posthog-dashboard-generator/a/apple-touch-icon.png'
  },
  {
    id: 'evalDesk',
    path: '/ai-prompt-testing',
    icon: '/ai-prompt-testing/a/apple-touch-icon.png'
  },
  {
    id: 'listDesk',
    path: '/email-list-validator',
    icon: '/email-list-validator/a/apple-touch-icon.png'
  },
  {
    id: 'aiVisibility',
    path: '/ai-visibility',
    icon: '/ai-visibility/a/apple-touch-icon.png'
  },
  {
    id: 'quoteDesk',
    path: '/quote-desk',
    icon: '/quote-desk/a/apple-touch-icon.png'
  },
  {
    id: 'tenant',
    path: '/multi-tenant-saas-calculator',
    icon: '/runbook-generator/a/ikony/tenant/apple-touch-icon.png'
  },
  {
    id: 'mcp',
    path: '/mcp-tools-from-openapi',
    icon: '/runbook-generator/a/ikony/mcp/apple-touch-icon.png'
  },
  {
    id: 'ksef',
    path: '/ksef-invoice-validator',
    icon: '/runbook-generator/a/ikony/ksef/apple-touch-icon.png'
  },
  {
    id: 'rfq',
    path: '/rfq-automation-calculator',
    icon: '/runbook-generator/a/ikony/rfq/apple-touch-icon.png'
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
].map(app => ({
  ...app,
  href: BASE + app.path,
  /* Icon files live on ciunkos.com too: the mirror domains
     (przemyslawzalewski.com, .pl) serve only this SPA. */
  icon: app.icon.startsWith('/') ? BASE + app.icon : app.icon
}))

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
