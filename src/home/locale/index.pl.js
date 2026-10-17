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
  more: 'Wszystkie aplikacje i darmowe narzędzia z 2026',
  nowLead:
    'Małe narzędzia i strony, które zbudowałem i utrzymuję na Cloudflare w 2026. Wszystkie za darmo, bez zakładania konta.',
  nowNote:
    'Niżej: aplikacje z pierwszej dekady, tak jak pokazywała je ta strona w 2017.',
  apps: {
    riddle: ['Ty i Przemysław?', 'Strona rekrutacyjna w zagadkach'],
    migawki: ['Migawki', 'Gra foto: 36 klatek, pięć minut'],
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
  long: {
    riddle:
      'Strona rekrutacyjna w kształcie filmu o Człowieku Zagadce: dwa quizy, rzut monetą i agent AI, który odpowiada na pytania o mnie.',
    migawki:
      'Gra fotograficzna w przeglądarce: pada, ludzie patrzą w ekrany, a Ty masz 36 klatek i pięć minut.',
    kalkulator:
      'Porównuje B2B z umową o pracę w skali całego roku: podatki, urlop, L4 i koszty.',
    wyrocznia: 'Zapytaj Klaudię o cokolwiek. Odpowiada tylko tak albo nie.',
    korpo:
      'Tłumaczy korpomowę na ludzki polski i z powrotem, ze słownikiem buzzwordów.',
    bimi: 'Sprawdza rekord BIMI, DMARC, logo SVG Tiny PS i certyfikat VMC albo CMC, pokazuje logo w skrzynkach i naprawia SVG.',
    estimator:
      'Umieszcza projekt na tle 125 prawdziwych produktów, z uczciwym rozrzutem i mnożnikiem agentów AI.',
    validator:
      'Dziesięć rubryk ocenianych przez AI z cytatami z pomysłu, werdykt ze stałej reguły i trzy tanie eksperymenty.',
    dns: 'Ocenia DNS poczty: SPF z zagnieżdżonymi odwołaniami, DKIM, DMARC, MTA-STS, TLS-RPT, BIMI i DNSSEC.',
    configurator:
      'Wybierz rodzaj i wielkość pracy, zobacz godziny, widełki ceny i najbliższy termin.',
    glossary:
      'AI, projekty software i poczta po ludzku, przy każdym haśle jedna rzecz do zrobienia.'
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
