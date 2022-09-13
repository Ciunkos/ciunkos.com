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
export const readStories = 'Read the stories'
export const readMore = 'Read more'

export default {
  page,
  hero,
  readStories,
  readMore
}
