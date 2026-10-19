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
    riddle: ['Ty i Przemysław?', 'Zagadka: strona rekrutacyjna'],
    przemo: ['Przemo', 'Flack: napisz do mnie-AI, zawsze odpisze'],
    migawki: ['Migawki', 'Zaczęło się od piosenki, skończyło na grze'],
    bimi: ['Sprawdź BIMI', 'Czy Gmail pokaże Twoje logo?'],
    estimator: ['Ile kosztuje aplikacja', '125 prawdziwych projektów'],
    buildorbuy: ['Budować czy kupić', 'SaaS kontra własna apka'],
    store: ['Apka do sklepu', 'Z przeglądarki do sklepów'],
    runbook: ['Instrukcja systemu', 'Dla systemu, który znasz tylko Ty'],
    sla: ['Kalkulator SLA', 'Apki wewnętrzne, opłata i czasy'],
    llm: ['Lokalny model czy API?', 'Sprzęt, szybkość, koszt'],
    legacy: ['Przepisanie systemu', 'Delphi, Access, stary PHP'],
    signatureDesk: ['Signature Desk', 'Stopki e-mail dla firm'],
    dashboardDesk: ['Dashboard Desk', 'Dashboard wzrostu w PostHogu'],
    evalDesk: ['Eval Desk', 'Testuj prompt AI'],
    listDesk: ['List Desk', 'Wyczyść listę e-mail'],
    aiVisibility: ['Widoczność w AI', 'Czy AI Cię poleca?'],
    quoteDesk: ['Oferta z zapytania', 'Od maila do szkicu oferty'],
    tenant: ['Kalkulator multi-tenant', 'Z narzędzia firmy do SaaS'],
    mcp: ['Konektor MCP z OpenAPI', 'Twoje API w Claude i ChatGPT'],
    ksef: ['Walidator faktury KSeF', 'FA(3) w przeglądarce'],
    rfq: ['Kalkulator ofertowania', 'Od zapytań do ofert'],
    validator: ['Walidator pomysłu', 'Raport AI, za darmo'],
    dns: ['Sprawdź SPF, DKIM, DMARC', 'Ocena DNS poczty'],
    configurator: ['Konfigurator współpracy', 'Cena i termin startu'],
    glossary: ['Słownik', 'AI, projekty, poczta'],
    kalkulator: ['Kalkulator B2B vs UoP', 'Umowy w Polsce, 2026'],
    korpo: ['Korpo Tłumacz', 'Korpomowa na ludzki i z powrotem'],
    wyrocznia: ['Wyrocznia', 'Zapytaj Klaudię o cokolwiek: tak albo nie']
  },
  long: {
    migawki:
      'Zaczęło się od piosenki z EP-ki „Migawki”, skończyło na abstrakcyjnej grze w deszczowym, nocnym mieście. Jedyne, co widzisz, to migawki.',
    przemo:
      'Flack, jak Flak Cannon: memowy Slack, w którym działa tylko jedna rozmowa, DM ze mną jako agentem AI. Zaczął się jako Przemo, bot mnie na firmowy czat, i odpisuje tak jak ja, z literówkami włącznie.',
    riddle:
      'Strona rekrutacyjna w kształcie filmu o Człowieku Zagadce: dwa quizy, rzut monetą i agent AI, który odpowiada na pytania o mnie.',
    kalkulator:
      'Porównuje B2B z umową o pracę w skali całego roku: podatki, urlop, L4 i koszty.',
    wyrocznia: 'Zapytaj Klaudię o cokolwiek. Odpowiada tylko tak albo nie.',
    korpo:
      'Tłumaczy korpomowę na ludzki polski i z powrotem, ze słownikiem buzzwordów.',
    bimi: 'Sprawdza rekord BIMI, DMARC, logo SVG Tiny PS i certyfikat VMC albo CMC, pokazuje logo w skrzynkach i naprawia SVG.',
    estimator:
      'Umieszcza projekt na tle 125 prawdziwych produktów, z uczciwym rozrzutem i mnożnikiem agentów AI.',
    buildorbuy:
      'Abonament SaaS kontra własna apka w 1, 3 albo 5 lat, z miesiącem zwrotu i powodami do budowy, które nie są pieniędzmi.',
    store:
      'Wklej adres apki webowej: czego brakuje do App Store i Google Play, TWA czy Capacitor, i pliki do skopiowania.',
    runbook:
      'Odpowiedz na kilka pytań o system, który zbudowałeś sam, i dostań RUNBOOK.md oraz listę do uzupełnienia. Nic nie wychodzi z przeglądarki.',
    sla: 'Opłata miesięczna, czasy reakcji dla priorytetów, budżet przestojów i zapisy do umowy dla aplikacji, na których działa firma.',
    llm: 'Czy model taki jak Bielik zmieści się w Twoim sprzęcie, jak szybko odpowie, ile kosztuje w porównaniu z API i gdzie leżą dane.',
    legacy:
      'Linie kodu i język na punkty funkcyjne, godziny i koszt przepisania, z agentami kodującymi i bez.',
    signatureDesk:
      'Firmowe stopki e-mail dla całego zespołu: jeden szablon, stopka prawna (KRS, NIP, kapitał), HTML odporny na Outlooka. Za darmo, w przeglądarce.',
    dashboardDesk:
      'Dashboard wzrostu utworzony w Twoim PostHogu: kanały z asystentami AI, lejek, aktywacja, retencja, błędy, plus braki w śledzeniu. Za darmo, w przeglądarce.',
    evalDesk:
      'Przypadki testowe dla asystenta AI, uruchamiane po każdej zmianie promptu: co się zepsuło, co naprawiło, które przypadki są niestabilne. Za darmo, modele Claude.',
    listDesk:
      'Lista e-mail sprawdzona w przeglądarce: martwe domeny, null MX, skrzynki jednorazowe, literówki i duplikaty. Adresy nie opuszczają strony. Za darmo.',
    aiVisibility:
      'Pytania Twoich klientów zadawane asystentowi AI co tydzień z wyszukiwaniem: czy marka pada z nazwy, kto pada zamiast niej, które strony są cytowane. Za darmo.',
    quoteDesk:
      'Zapytanie klienta (mail, PDF, Excel albo zdjęcie odręcznej listy) dopasowane do Twojego cennika, niejasne pozycje oznaczone, eksport do Excela. Za darmo.',
    tenant:
      'Dla systemu zbudowanego dla jednej firmy i sprzedawanego innym: który model multi-tenant, praca przy wydaniu i tygodnie budowy.',
    mcp: 'Wklej specyfikację OpenAPI i dostań wąskie narzędzia MCP z oznaczonymi nieodwracalnymi oraz szkielet serwera w TypeScript.',
    ksef: 'Sprawdza e-fakturę FA(3) oficjalnym schematem w przeglądarce, z błędami opisanymi zwykłymi słowami i czytelnym podglądem.',
    rfq: 'Liczy godziny na zamianę zapytań klientów w oferty i to, kiedy zwróci się agent, który przygotowuje szkice.',
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
