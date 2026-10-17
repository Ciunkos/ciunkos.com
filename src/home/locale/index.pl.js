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
export const recent = {
  hire: 'Zatrudnij mnie',
  services: 'Usługi',
  title: 'Co buduję teraz, w 2026',
  apps: {
    riddle: ['Ty i Przemysław?', 'Strona rekrutacyjna w zagadkach'],
    bimi: ['Sprawdź BIMI', 'Czy Gmail pokaże Twoje logo?'],
    estimator: ['Ile kosztuje aplikacja', '125 prawdziwych projektów'],
    validator: ['Walidator pomysłu', 'Raport AI, za darmo'],
    dns: ['Sprawdź SPF, DKIM, DMARC', 'Ocena DNS poczty'],
    configurator: ['Konfigurator współpracy', 'Cena i termin startu'],
    glossary: ['Słownik', 'AI, projekty, poczta'],
    kalkulator: ['Kalkulator B2B vs UoP', 'Umowy w Polsce, 2026'],
    korpo: ['Korpo Tłumacz', 'Korpomowa po ludzku'],
    wyrocznia: ['Wyrocznia', 'Zapytaj Klaudię: tak albo nie']
  },
  note: 'Reszta tej strony zostaje celowo dokładnie taka jak w 2017: porównaj ją z kafelkami wyżej i zobacz, jak wiele się zmieniło.'
}
export const readStories = 'Czytaj wpisy'
export const readMore = 'Czytaj więcej'

export default {
  page,
  hero,
  recent,
  readStories,
  readMore
}
