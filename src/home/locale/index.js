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
  apps: {
    riddle: ['You 🤝 Przemysław?', 'A hire page in riddles'],
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
