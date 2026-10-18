import React from 'react'

export const page = {
  title: 'Przemysław Zalewski - Ciunkos',
  description: 'Przemysław Zalewski - blog, apps, resume'
}

export const hero = {
  title: 'Ooh, hello there!',
  paragraphs: [
    'Assorted ramblings poured from my mind onto the page... This is kind of a blog.',
    'Topics include JavaScript, React, functional programming and app development.'
  ],
  note: ({ aboutLink, outboundLink }) => (
    <>
      If you have ever wondered, the {aboutLink('guy on the left it’s me')} and{' '}
      {outboundLink('the dog on the right is Ares 🐶')}
    </>
  )
}
export const recent = {
  hire: 'Hire me',
  services: 'Services',
  title: 'What I build now, in 2026',
  more: 'All 2026 apps and free tools',
  nowLead:
    'Small tools and pages I built and run on Cloudflare in 2026. All free, no account needed.',
  nowNote:
    'Below: the apps from my first decade, as this page showed them in 2017.',
  apps: {
    riddle: ['You 🤝 Przemysław?', 'Riddle me this: a hire page'],
    przemo: ['Przemo', 'Flack: DM the AI me, it always replies'],
    migawki: ['Migawki', 'Started as a song, ended as a game'],
    bimi: ['BIMI checker', 'Will Gmail show your logo?'],
    estimator: ['Software cost estimator', '125 real projects'],
    buildorbuy: ['Build or buy', 'SaaS vs your own app'],
    store: ['App store ready', 'Web app to the stores'],
    runbook: ['Runbook generator', 'For a system only you know'],
    sla: ['SLA calculator', 'Internal apps, fee and times'],
    llm: ['Local model or API?', 'Hardware, speed, cost'],
    legacy: ['Legacy rewrite estimate', 'Delphi, Access, old PHP'],
    validator: ['Business idea validator', 'AI report, free'],
    dns: ['SPF, DKIM, DMARC checker', 'Email DNS grade'],
    configurator: ['Engagement configurator', 'Price and start date'],
    glossary: ['Glossary', 'AI, projects, email'],
    kalkulator: ['B2B vs UoP calculator', 'Polish contracts, 2026'],
    korpo: ['Korpo Tłumacz', 'Corporate speak into plain words'],
    wyrocznia: ['Wyrocznia', 'Ask Klaudia anything, she says yes or no']
  },
  long: {
    migawki:
      'It began as a song from an EP called Migawki and ended as an abstract browser game in a rainy night city. All you see are snapshots.',
    przemo:
      'Flack, as in the Flak Cannon: a meme Slack where the only chat that works is a DM with me as an AI agent. It started as Przemo, a bot of me for the team chat, and it replies the way I do, typos included.',
    riddle:
      'A hire page shaped like a film about the Riddler: two quizzes, a coin toss and an AI agent that answers questions about me.',
    kalkulator:
      'Compares a Polish B2B contract with employment for a whole year, with taxes, leave, sick days and costs.',
    wyrocznia: 'Ask Klaudia anything. She answers only yes or no.',
    korpo:
      'Translates corporate speak into plain Polish and back, with a dictionary of buzzwords.',
    bimi: 'Checks the BIMI record, DMARC, the SVG Tiny PS logo and the VMC or CMC certificate, previews the logo in inboxes and fixes the SVG.',
    estimator:
      'Places your project among 125 real products, with honest ranges and an AI-agent multiplier.',
    buildorbuy:
      'A SaaS subscription against your own app over 1, 3 or 5 years, with the payback month and the reasons to build that are not about money.',
    store:
      'Paste a web app address: what is missing for the App Store and Google Play, TWA or Capacitor, and files to copy.',
    runbook:
      'Answer a few questions about a system you built yourself and get a RUNBOOK.md and a to-do list. Nothing leaves your browser.',
    sla:
      'A monthly fee, response times per priority, a downtime budget and contract clauses for the apps a company runs on.',
    llm:
      'Does a model like Bielik fit in your hardware, how fast it answers, what it costs against an API and where the data lives.',
    legacy:
      'Lines of code and language to function points, hours and cost of a rewrite, with and without coding agents.',
    validator:
      'Ten rubrics scored by AI with quotes from your idea, a fixed-rule verdict and three cheap experiments.',
    dns: 'Grades a domain’s email DNS: SPF with nested lookups, DKIM, DMARC, MTA-STS, TLS-RPT, BIMI and DNSSEC.',
    configurator:
      'Pick the kind of work and its size, see hours, a price range and the earliest start date.',
    glossary:
      'AI engineering, software projects and email in plain English, each term with one thing to do in practice.'
  },
  note: 'The rest of this page is kept exactly as it was in 2017, on purpose: compare it with the tiles above to see how far things have come.'
}
export const readStories = 'Read the stories'
export const readMore = 'Read more'

export default {
  page,
  hero,
  recent,
  readStories,
  readMore
}
