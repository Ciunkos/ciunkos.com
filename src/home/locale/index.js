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
    riddle: ['You 🤝 Przemysław?', 'A hire page in riddles'],
    migawki: ['Migawki', 'A photo game: 36 frames, five minutes'],
    bimi: ['BIMI checker', 'Will Gmail show your logo?'],
    estimator: ['Software cost estimator', '125 real projects'],
    validator: ['Business idea validator', 'AI report, free'],
    dns: ['SPF, DKIM, DMARC checker', 'Email DNS grade'],
    configurator: ['Engagement configurator', 'Price and start date'],
    glossary: ['Glossary', 'AI, projects, email'],
    kalkulator: ['B2B vs UoP calculator', 'Polish contracts, 2026'],
    korpo: ['Korpo Tłumacz', 'Corporate speak, decoded'],
    wyrocznia: ['Wyrocznia', 'Ask Klaudia, yes or no']
  },
  long: {
    riddle:
      'A hire page shaped like a film about the Riddler: two quizzes, a coin toss and an AI agent that answers questions about me.',
    migawki:
      'A browser photo game: it is raining, people stare at their screens, and you have 36 frames and five minutes.',
    kalkulator:
      'Compares a Polish B2B contract with employment for a whole year, with taxes, leave, sick days and costs.',
    wyrocznia: 'Ask Klaudia anything. She answers only yes or no.',
    korpo:
      'Translates corporate speak into plain Polish and back, with a dictionary of buzzwords.',
    bimi: 'Checks the BIMI record, DMARC, the SVG Tiny PS logo and the VMC or CMC certificate, previews the logo in inboxes and fixes the SVG.',
    estimator:
      'Places your project among 125 real products, with honest ranges and an AI-agent multiplier.',
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
