/* schema-ld.mjs: JEDNO źródło encji schema.org dla całego ciunkos.com.
   Oryginał: ~/hire/src/data/schema-ld.mjs. Inne repo trzymają identyczną kopię
   (src/shared/schema-ld.mjs) i nie edytują jej ręcznie; zgodność pilnuje
   ~/hire/scripts/check-schema-copies.mjs.

   Bez importów i bez node:*, więc działa w buildzie i w Workerze.

   ulepszLd(html, opcje) bierze gotowy HTML strony i:
   - skleja wszystkie bloki ld+json w jeden @graph,
   - podmienia każdą osobę z @id #person (albo autora o tym imieniu) na referencję
     i dokleja pełne węzły PERSON, BUSINESS, WEBSITE (identyczne na każdej stronie),
   - ustawia isPartOf → #website, datePublished/dateModified na węźle strony,
   - dokłada BreadcrumbList i WebPage, jeśli ich brak,
   - wstawia widoczną datę „Updated / Aktualizacja” (ta sama data co dateModified).
   sprawdzLd(html) zwraca listę błędów do lintu. */

export const BAZA = 'https://ciunkos.com';
export const PERSON_ID = BAZA + '/#person';
export const WEBSITE_ID = BAZA + '/#website';
export const BUSINESS_ID = BAZA + '/#business';
export const IMIE = 'Przemysław Zalewski';

export const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: IMIE,
  alternateName: 'Ciunkos',
  url: BAZA + '/',
  mainEntityOfPage: BAZA + '/about',
  jobTitle: 'Senior Full-Stack Engineer',
  description: 'Independent senior full-stack engineer in Wrocław, Poland. Builds web apps, SaaS products and AI agents in TypeScript, React and Node.js on Cloudflare.',
  image: BAZA + '/hire/img/przemo-512.png',
  email: 'mailto:ciunkos@gmail.com',
  knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Cloudflare Workers', 'AI agents', 'Model Context Protocol', 'PostHog', 'C#', '.NET', 'PostgreSQL', 'Email deliverability (SPF, DKIM, DMARC)', 'AI search optimization'],
  knowsLanguage: ['en', 'pl'],
  homeLocation: { '@type': 'Place', name: 'Wrocław, Poland' },
  worksFor: { '@id': BUSINESS_ID },
  sameAs: [
    'https://www.linkedin.com/in/przemyslaw-zalewski-ciunkos',
    'https://x.com/Ciunkos',
    'https://github.com/przemyslawzalewski',
    'https://github.com/Ciunkos',
    'https://www.biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/2AB7BD16-7CDD-483D-B542-F7BD0E5EE64D'
  ]
};

export const BUSINESS = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: IMIE,
  alternateName: 'Ciunkos',
  url: BAZA + '/hire-me',
  logo: BAZA + '/hire/img/przemo-512.png',
  image: BAZA + '/hire/img/przemo-512.png',
  description: 'Software development, AI agents and technical consulting from a one-person company in Wrocław, Poland. Remote, for clients in the US, UK and EU.',
  founder: { '@id': PERSON_ID },
  taxID: '8952144360',
  duns: '438385453',
  email: 'ciunkos@gmail.com',
  telephone: '+48884828647',
  priceRange: '$$',
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', streetAddress: 'ul. Tęczowa 31A/56', postalCode: '53-601', addressLocality: 'Wrocław', addressCountry: 'PL' },
  sameAs: ['https://www.biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/2AB7BD16-7CDD-483D-B542-F7BD0E5EE64D']
};

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BAZA + '/',
  name: 'ciunkos.com',
  alternateName: 'Przemysław Zalewski (Ciunkos)',
  inLanguage: ['en', 'pl'],
  publisher: { '@id': PERSON_ID },
  author: { '@id': PERSON_ID }
};

const STALE = { [PERSON_ID]: PERSON, [BUSINESS_ID]: BUSINESS, [WEBSITE_ID]: WEBSITE };
const ref = (id) => ({ '@id': id });

/* Typy, które mogą być „węzłem strony” (ten, który dostaje daty i isPartOf). */
const TYPY_STRONY = ['WebPage', 'CollectionPage', 'ProfilePage', 'AboutPage', 'ContactPage', 'FAQPage', 'ItemPage', 'SearchResultsPage', 'Article', 'BlogPosting', 'NewsArticle', 'TechArticle', 'WebApplication', 'SoftwareApplication', 'DefinedTermSet', 'DefinedTerm', 'Dataset', 'DiscussionForumPosting', 'Service'];
const TYPY_WEBPAGE = ['WebPage', 'CollectionPage', 'ProfilePage', 'AboutPage', 'ContactPage', 'ItemPage', 'SearchResultsPage'];
const typy = (n) => [].concat(n && n['@type'] || []);
const jest = (n, lista) => typy(n).some((t) => lista.includes(t));

const RE_LD = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
const odEnc = (s) => String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const escHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function meta(html, re) { const m = html.match(re); return m ? odEnc(m[1]).trim() : ''; }
export function canonical(html) { return meta(html, /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || meta(html, /<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i); }
export function opis(html) { return meta(html, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) || meta(html, /<meta\b[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i); }
function tytul(html) { return meta(html, /<title[^>]*>([\s\S]*?)<\/title>/i); }
function h1(html) { const m = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i); return m ? odEnc(m[1].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim() : ''; }
function jezyk(html) { return (html.match(/<html\b[^>]*\blang=["']([a-z-]+)["']/i) || [])[1] || 'en'; }

/* Wszystkie węzły ze wszystkich bloków (rozpakowane @graph). */
export function wezly(html) {
  const out = []; const bledy = [];
  for (const m of html.matchAll(RE_LD)) {
    let j; try { j = JSON.parse(m[1]); } catch (e) { bledy.push('ld+json nie parsuje się: ' + e.message); continue; }
    for (const x of [].concat(j)) { if (x && x['@graph']) out.push(...x['@graph']); else if (x) out.push(x); }
  }
  return { wezly: out.map((n) => { const k = { ...n }; delete k['@context']; return k; }), bledy };
}

/* Czy obiekt to „ja” (osoba po @id albo po imieniu/handlu). */
function toJa(o) {
  if (!o || typeof o !== 'object' || Array.isArray(o)) return false;
  if (o['@id'] === PERSON_ID) return true;
  if (!jest(o, ['Person'])) return false;
  const n = String(o.name || '').toLowerCase();
  return n === IMIE.toLowerCase() || n === 'ciunkos' || n.includes('zalewski');
}

/* Rekurencyjnie: ja → ref, inline WebSite ciunkos.com → ref, organizacja = ja → ref business. */
function normalizuj(v, glebokosc = 0) {
  if (Array.isArray(v)) return v.map((x) => normalizuj(x, glebokosc + 1));
  if (!v || typeof v !== 'object') return v;
  if (glebokosc > 0) {
    if (toJa(v)) return ref(PERSON_ID);
    if (jest(v, ['WebSite']) && (!v.url || String(v.url).replace(/\/$/, '') === BAZA)) return ref(WEBSITE_ID);
    if (v['@id'] && STALE[v['@id']]) return ref(v['@id']);
  }
  const o = {};
  for (const [k, x] of Object.entries(v)) o[k] = normalizuj(x, glebokosc + 1);
  return o;
}

const bezSlasha = (u) => String(u || '').replace(/[?#].*$/, '').replace(/\/$/, '');

/**
 * @param {string} html gotowy dokument
 * @param {{ modified?: string, published?: string, lang?: string,
 *           okruszki?: Array<{name: string, item: string}>, typ?: string,
 *           widocznaData?: boolean, gdzieData?: 'footer'|'main'|'h1' }} [o]
 */
export function ulepszLd(html, o = {}) {
  const url = canonical(html);
  const lang = o.lang || jezyk(html);
  const { wezly: stare } = wezly(html);
  let graf = stare.filter((n) => !toJa(n) && !(n['@id'] && STALE[n['@id']]) && !(jest(n, ['WebSite']) && bezSlasha(n.url) === BAZA)).map((n) => normalizuj(n));

  let strona = wybierzStrone(graf, url);
  if (!strona && url) {
    strona = { '@type': o.typ || 'WebPage', '@id': url, url, name: h1(html) || tytul(html), description: opis(html) || undefined, inLanguage: lang };
    graf.unshift(strona);
  }
  if (strona) {
    if (!strona.isPartOf) strona.isPartOf = ref(WEBSITE_ID);
    if (!strona.inLanguage) strona.inLanguage = lang;
    if (jest(strona, ['Article', 'BlogPosting', 'NewsArticle', 'TechArticle', 'WebPage', 'CollectionPage', 'ProfilePage', 'DefinedTermSet', 'DefinedTerm', 'DiscussionForumPosting', 'Dataset'])) {
      if (!strona.author) strona.author = ref(PERSON_ID);
      if (!strona.publisher && !jest(strona, ['DefinedTerm', 'DiscussionForumPosting'])) strona.publisher = ref(PERSON_ID);
    }
    if (o.published && !strona.datePublished) strona.datePublished = o.published;
    if (o.modified) strona.dateModified = o.modified;
    else if (!strona.dateModified && strona.datePublished) strona.dateModified = strona.datePublished;
    /* Pozostałe węzły tej samej strony (Article obok WebPage itd.) dostają tę samą datę zmiany. */
    if (o.modified) for (const n of graf) if (n !== strona && zgodnyLubKotwica(n, url) && jest(n, ['Article', 'BlogPosting', 'WebPage', 'CollectionPage', 'Dataset', 'DefinedTermSet'])) n.dateModified = o.modified;
  }

  /* Okruszki: zostawiamy istniejące, w przeciwnym razie z opcji albo domyślne Home → strona. */
  if (!graf.some((n) => jest(n, ['BreadcrumbList'])) && url && bezSlasha(url) !== BAZA) {
    const kroki = o.okruszki || [{ name: 'ciunkos.com', item: BAZA + '/' }, { name: h1(html) || tytul(html), item: url }];
    graf.push({ '@type': 'BreadcrumbList', itemListElement: kroki.map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: k.name, item: k.item })) });
  }
  if (strona && !strona.breadcrumb) { const bc = graf.find((n) => jest(n, ['BreadcrumbList'])); if (bc && jest(strona, TYPY_WEBPAGE)) { bc['@id'] = bc['@id'] || (url + '#breadcrumb'); strona.breadcrumb = ref(bc['@id']); } }

  graf = [...graf, PERSON, BUSINESS, WEBSITE];
  const blok = `<script type="application/ld+json">${jsonLd({ '@context': 'https://schema.org', '@graph': usunPuste(graf) })}</script>`;

  let pierwszy = true;
  let out = html.replace(RE_LD, () => { if (pierwszy) { pierwszy = false; return blok; } return ''; });
  if (pierwszy) out = out.replace(/<\/head>/i, blok + '\n</head>');

  if (o.modified && o.widocznaData !== false && !/data-ld-updated/.test(out)) out = wstawDate(out, o.modified, lang, o.gdzieData || 'footer');
  return out;
}

/* Węzeł strony: najpierw WebPage z @id/url = canonical, potem inny typ strony z tym adresem, potem pierwszy WebPage. */
export function wybierzStrone(graf, url) {
  const zgodny = (n) => url && (bezSlasha(n['@id']) === bezSlasha(url) || bezSlasha(n.url) === bezSlasha(url));
  return graf.find((n) => jest(n, TYPY_WEBPAGE) && zgodny(n)) || graf.find((n) => jest(n, TYPY_STRONY) && zgodny(n) && !jest(n, ['FAQPage'])) || graf.find((n) => jest(n, TYPY_WEBPAGE));
}
function zgodnyLubKotwica(n, url) { const id = bezSlasha(n['@id'] || n.url); return id === bezSlasha(url); }
function usunPuste(v) { return JSON.parse(JSON.stringify(v), (k, x) => (DATY.includes(k) ? pelnaData(x) : x)); }

/* Google chce daty z czasem i strefą (Article: datePublished/dateModified). Sama data → północ UTC. */
const DATY = ['datePublished', 'dateModified', 'dateCreated', 'uploadDate'];
export const pelnaData = (d) => (typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d + 'T00:00:00+00:00' : d);

export function dataLokalna(iso, lang) {
  return new Intl.DateTimeFormat(lang === 'pl' ? 'pl-PL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso.slice(0, 10) + 'T00:00:00Z'));
}
export function znacznikDaty(iso, lang) {
  const d = iso.slice(0, 10);
  return `<p class="ld-updated" data-ld-updated style="margin:.75rem auto;font-size:.85em;opacity:.75;text-align:center">${lang === 'pl' ? 'Aktualizacja' : 'Updated'}: <time datetime="${escHtml(d)}">${escHtml(dataLokalna(d, lang))}</time> · ${lang === 'pl' ? 'autor' : 'by'} <a href="${BAZA}/about" rel="author">${IMIE}</a></p>`;
}
function wstawDate(html, iso, lang, gdzie) {
  const p = znacznikDaty(iso, lang);
  if (gdzie === 'h1' && /<\/h1>/i.test(html)) return html.replace(/<\/h1>/i, (m) => m + '\n' + p);
  if (gdzie !== 'main' && /<footer\b[^>]*>/i.test(html)) { const i = html.toLowerCase().lastIndexOf('<footer'); const j = html.indexOf('>', i) + 1; return html.slice(0, j) + p + html.slice(j); }
  if (/<\/main>/i.test(html)) return html.replace(/<\/main>/i, p + '</main>');
  return html.replace(/<\/body>/i, p + '</body>');
}

/* Lint: zwraca listę błędów (puste = OK). */
export function sprawdzLd(html, { wymagajDaty = true, opisMin = 50, opisMax = 170 } = {}) {
  const b = [];
  const bloki = [...html.matchAll(RE_LD)];
  if (!bloki.length) return ['brak JSON-LD'];
  if (bloki.length > 1) b.push('więcej niż jeden blok ld+json (' + bloki.length + ')');
  const { wezly: n, bledy } = wezly(html);
  b.push(...bledy);
  const ja = n.filter((x) => x['@id'] === PERSON_ID && x.name);
  if (ja.length !== 1) b.push('pełny węzeł #person występuje ' + ja.length + '×');
  else if (JSON.stringify(ja[0]) !== JSON.stringify(PERSON)) b.push('węzeł #person różni się od kanonu');
  if (n.some((x) => jest(x, ['Person']) && x['@id'] !== PERSON_ID && toJa(x))) b.push('osoba Przemysław bez @id #person');
  const url = canonical(html);
  if (!url) b.push('brak canonical');
  const strona = wybierzStrone(n, url);
  if (wymagajDaty) {
    if (!strona) b.push('brak węzła strony z @id/url = canonical');
    else if (!/^\d{4}-\d{2}-\d{2}/.test(strona.dateModified || '')) b.push('węzeł strony bez dateModified');
    else {
      const m = html.match(/data-ld-updated[\s\S]*?<time datetime="([^"]+)"/) || html.match(/<time\b[^>]*datetime="([^"]+)"/);
      if (m && m[1].slice(0, 10) !== strona.dateModified.slice(0, 10)) b.push(`widoczna data ${m[1]} ≠ dateModified ${strona.dateModified}`);
    }
  }
  if (!n.some((x) => jest(x, ['BreadcrumbList'])) && bezSlasha(url) !== BAZA) b.push('brak BreadcrumbList');
  const d = opis(html);
  if (d.length < opisMin || d.length > opisMax) b.push(`meta description ma ${d.length} znaków (${opisMin}–${opisMax})`);
  return b;
}
