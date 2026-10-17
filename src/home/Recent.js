import React from 'react'

import locale from './locale'

/* Recent apps and tools (2026), shown on the 2017 home page hero. Icons come from each app. */
const kalkulatorIcon =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect width=%2232%22 height=%2232%22 rx=%227%22 fill=%22%23e0642a%22/%3E%3Ctext x=%2216%22 y=%2222%22 font-size=%2216%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22sans-serif%22 font-weight=%22700%22%3E%25%3C/text%3E%3C/svg%3E'

export const apps = [
  {
    id: 'riddle',
    href: '/you-and-przemyslaw',
    icon: '/hire/favicon/riddle-180.png'
  },
  {
    id: 'bimi',
    href: '/bimi-checker',
    icon: '/spf-dkim-dmarc-checker/a/apple-touch-icon.png'
  },
  {
    id: 'estimator',
    href: '/software-cost-estimator',
    icon: '/software-cost-estimator/a/apple-touch-icon.png'
  },
  {
    id: 'validator',
    href: '/business-idea-validator',
    icon: '/business-idea-validator/a/apple-touch-icon.png'
  },
  {
    id: 'dns',
    href: '/spf-dkim-dmarc-checker',
    icon: '/spf-dkim-dmarc-checker/a/apple-touch-icon.png'
  },
  {
    id: 'configurator',
    href: '/engagement-configurator',
    icon: '/engagement-configurator/a/apple-touch-icon.png'
  },
  {
    id: 'glossary',
    href: '/glossary',
    icon: '/glossary/a/apple-touch-icon.png'
  },
  {
    id: 'kalkulator',
    href: '/kalkulator-b2b-vs-uop-2026',
    icon: kalkulatorIcon
  },
  {
    id: 'korpo',
    href: '/korpo-tlumacz',
    icon: '/korpo-tlumacz/apple-touch-icon.png'
  },
  {
    id: 'wyrocznia',
    href: '/wyrocznia',
    icon: '/wyrocznia/ikony/apple-touch-icon.png'
  }
]

const Recent = () => (
  <div className="RecentApps">
    <p className="RecentCta">
      <a className="HireMeButton" href="/hire-me">
        {locale.recent.hire}
      </a>
      <a className="HireMeLink" href="/hire-me#services">
        {locale.recent.services} →
      </a>
    </p>
    <p className="RecentTitle">{locale.recent.title}</p>
    <ul className="RecentGrid">
      {apps.map(app => (
        <li key={app.id}>
          <a className="RecentTile" href={app.href}>
            <img src={app.icon} alt="" width="40" height="40" loading="lazy" />
            <span>
              <strong>{locale.recent.apps[app.id][0]}</strong>
              <small>{locale.recent.apps[app.id][1]}</small>
            </span>
          </a>
        </li>
      ))}
    </ul>
    <p className="RecentNote">* {locale.recent.note}</p>
  </div>
)

export default Recent
