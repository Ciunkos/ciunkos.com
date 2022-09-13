import React from 'react'

export const page = {
  title: 'Przemysław Zalewski - Ciunkos',
  description: 'Przemysław Zalewski - blog, aplikacje, CV'
}

export const hero = {
  title: 'Cześć!',
  paragraphs: [
    'Poskładane myśli, przelane na tę stronę... W swego rodzaju blog.',
    'Poruszam tematykę JavaScriptu, Reacta, programowania funkcyjnego i tworzenia aplikacji.'
  ],
  note: ({ aboutLink, outboundLink }) => (
    <>
      Jeśli się zastanawiasz, {aboutLink('po lewej jestem ja')}, a pies po
      prawej to {outboundLink('Ares 🐶')}
    </>
  )
}
export const readStories = 'Czytaj wpisy'
export const readMore = 'Czytaj więcej'

export default {
  page,
  hero,
  readStories,
  readMore
}
