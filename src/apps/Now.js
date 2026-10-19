import React from 'react'

import { Section } from 'components'
import { apps } from 'home/Recent'
import locale from 'home/locale'
import toolIcon from './toolIcons'
import riddle from './2026/shot-2026-riddle.jpg'
import przemo from './2026/shot-2026-przemo.jpg'
import migawki from './2026/shot-2026-migawki.jpg'
import kalkulator from './2026/shot-2026-kalkulator.jpg'
import wyrocznia from './2026/shot-2026-wyrocznia.jpg'
import korpo from './2026/shot-2026-korpo.jpg'

/* Screenshots taken from production on 18 October 2026. Apps up to Korpo Tłumacz get a card;
   the smaller tools after it are one paragraph of links with their transparent SVG icons. */
const lastCard = apps.findIndex(app => app.id === 'korpo')
const cardApps = apps.slice(0, lastCard + 1)
const toolApps = apps.slice(lastCard + 1)
const vectorIcon = icon => icon.replace(/apple-touch-icon\.png$/, 'favicon.svg')
const shots = {
  riddle,
  przemo,
  migawki,
  kalkulator,
  wyrocznia,
  korpo
}

const Now = () => (
  <Section Apps NowApps id="now">
    <Section.Content padding-2 spacing-4>
      <h2>{locale.recent.title}</h2>
      <p>{locale.recent.nowLead}</p>
      <ul className="NowGrid">
        {cardApps.map(app => (
          <li key={app.id}>
            <a className="NowCard" href={app.href}>
              <img
                className="NowShot"
                src={shots[app.id]}
                alt=""
                width="960"
                height="600"
                loading="lazy"
              />
              <span className="NowText">
                <span className="NowHead">
                  <img
                    src={app.icon}
                    alt=""
                    width="32"
                    height="32"
                    loading="lazy"
                  />
                  <strong>{locale.recent.apps[app.id][0]}</strong>
                </span>
                <small>{locale.recent.long[app.id]}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="NowTools">
        {locale.recent.nowTools}{' '}
        {toolApps.map((app, i) => (
          <span className="NowToolItem" key={app.id}>
            <a className="NowTool" href={app.href}>
              <img
                src={toolIcon(app.id) || vectorIcon(app.icon)}
                alt=""
                width="22"
                height="22"
                loading="lazy"
              />
              {locale.recent.apps[app.id][0]}
            </a>
            {i < toolApps.length - 1 ? ',' : '.'}
          </span>
        ))}
      </p>
      <p className="NowNote">{locale.recent.nowNote}</p>
    </Section.Content>
  </Section>
)

export default Now
