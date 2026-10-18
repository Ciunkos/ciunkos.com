import React from 'react'

import { Section } from 'components'
import { apps } from 'home/Recent'
import locale from 'home/locale'
import riddle from './2026/shot-2026-riddle.jpg'
import przemo from './2026/shot-2026-przemo.jpg'
import migawki from './2026/shot-2026-migawki.jpg'
import kalkulator from './2026/shot-2026-kalkulator.jpg'
import wyrocznia from './2026/shot-2026-wyrocznia.jpg'
import korpo from './2026/shot-2026-korpo.jpg'
import bimi from './2026/shot-2026-bimi.jpg'
import estimator from './2026/shot-2026-estimator.jpg'
import validator from './2026/shot-2026-validator.jpg'
import dns from './2026/shot-2026-dns.jpg'
import configurator from './2026/shot-2026-configurator.jpg'
import glossary from './2026/shot-2026-glossary.jpg'
import store from './2026/shot-2026-store.jpg'
import buildorbuy from './2026/shot-2026-buildorbuy.jpg'
import runbook from './2026/shot-2026-runbook.jpg'
import sla from './2026/shot-2026-sla.jpg'
import llm from './2026/shot-2026-llm.jpg'
import legacy from './2026/shot-2026-legacy.jpg'

/* Screenshots taken from production on 18 October 2026. */
const shots = {
  riddle,
  przemo,
  migawki,
  kalkulator,
  wyrocznia,
  korpo,
  bimi,
  estimator,
  validator,
  dns,
  configurator,
  glossary,
  store,
  buildorbuy,
  runbook,
  sla,
  llm,
  legacy
}

const Now = () => (
  <Section Apps NowApps id="now">
    <Section.Content padding-2 spacing-4>
      <h2>{locale.recent.title}</h2>
      <p>{locale.recent.nowLead}</p>
      <ul className="NowGrid">
        {apps.map(app => (
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
      <p className="NowNote">{locale.recent.nowNote}</p>
    </Section.Content>
  </Section>
)

export default Now
