/* site-footer.mjs — the shared ciunkos.com footer ("100K footer").
   MASTER COPY: ~/hire/src/data/site-footer.mjs. Every app keeps a byte-identical copy; sync and verify with
   `node ~/hire/scripts/check-footer-copies.mjs [--fix]`. Edit the master, never a copy.

   No framework: siteFooter() returns one HTML string with exactly one <footer> (schema-ld.mjs puts the
   visible updated date after the last <footer>), SITE_FOOTER_CSS is scoped under .cf-foot. Workers inline both;
   the React site renders the string with dangerouslySetInnerHTML.

   Links are bilingual: {en, pl} labels and hrefs; pages that exist in one language only use the same href. */

const P = (en, pl = en) => ({ en, pl });
const L = (label, href) => ({ label: typeof label === 'string' ? P(label) : label, href: typeof href === 'string' ? P(href) : href });

export const FOOTER_CONTACT = {
  email: 'ciunkos@gmail.com',
  phone: '+48884828647',
  phoneDisplay: '+48 884 828 647',
  calendar: 'https://cal.com/przemyslaw-zalewski-ciunkos/30min',
  linkedin: 'https://www.linkedin.com/in/przemyslaw-zalewski-ciunkos',
  x: 'https://x.com/Ciunkos',
  github: 'https://github.com/przemyslawzalewski',
  ceidg: 'https://www.biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/2AB7BD16-7CDD-483D-B542-F7BD0E5EE64D'
};

export const FOOTER_GROUPS = [
  { id: 'work', title: P('Work with me', 'Współpraca'), hub: P('/hire-me', '/zatrudnij-mnie'), links: [
    L(P('Hire me', 'Zatrudnij mnie'), P('/hire-me', '/zatrudnij-mnie')),
    L(P('AI-built app rescue', 'Ratunek dla apki z AI'), P('/vibe-coding-rescue', '/ratunek-dla-apki')),
    L(P('AI engineer on contract', 'AI engineer na kontrakt'), P('/hire-ai-engineer-contract', '/zatrudnij-ai-engineera-na-kontrakt')),
    L(P('Senior for AI agencies', 'Senior dla agencji AI'), P('/hire-developer-for-ai-agencies', '/zatrudnij-programiste-dla-agencji-ai')),
    L(P('MCP connectors for Claude and ChatGPT', 'Konektory MCP do Claude i ChatGPT'), P('/hire-mcp-connector-developer', '/zatrudnij-programiste-konektorow-mcp')),
    L(P('Company login for internal apps', 'Firmowe logowanie w apkach'), P('/hire-developer-company-login-internal-apps', '/zatrudnij-programiste-logowanie-firmowe')),
    L(P('KSeF integration', 'Integracja z KSeF'), P('/hire-ksef-integration-developer', '/zatrudnij-programiste-integracji-ksef')),
    L(P('Quote automation', 'Automatyzacja ofert'), P('/hire-developer-quote-automation', '/zatrudnij-programiste-automatyzacja-ofert')),
    L(P('From company tool to SaaS', 'Z narzędzia firmy do SaaS'), P('/hire-developer-internal-tool-to-saas', '/zatrudnij-programiste-z-narzedzia-do-saas')),
    L(P('From MVP to product', 'Z MVP do produktu'), P('/hire-developer-mvp-to-product', '/zatrudnij-programiste-z-mvp-do-produktu')),
    L(P('Technical co-founder', 'Wspólnik techniczny'), P('/hire-business-partner', '/zatrudnij-partnera-biznesowego')),
    L(P('Senior for founders who code', 'Senior dla właściciela, który koduje'), P('/hire-senior-developer-for-founders-who-code', '/zatrudnij-seniora-dla-wlasciciela-ktory-koduje')),
    L(P('Off WordPress in hours', 'Bez WordPressa w kilka godzin'), P('/hire-developer-wordpress-migration', '/zatrudnij-programiste-migracja-z-wordpressa')),
    L(P('Developers from Poland: costs', 'Programista z Polski: koszty'), P('/hire-software-developer-poland', '/zatrudnij-programiste-z-polski')),
    L(P('Price and start date', 'Cena i termin startu'), P('/engagement-configurator', '/konfigurator-wspolpracy')),
    L(P('Two-minute fit quiz', 'Dwuminutowy quiz'), P('/you-and-przemyslaw', '/ty-i-przemyslaw'))
  ] },
  { id: 'tech', title: P('Technologies', 'Technologie'), hub: P('/hire-me', '/zatrudnij-mnie'), links: [
    L('React', P('/hire-react-developer', '/zatrudnij-programiste-react')),
    L('Next.js', P('/hire-nextjs-developer', '/zatrudnij-programiste-nextjs')),
    L(P('TypeScript & Node.js', 'TypeScript i Node.js'), P('/hire-typescript-developer', '/zatrudnij-programiste-typescript')),
    L('JavaScript', P('/hire-javascript-developer', '/zatrudnij-programiste-javascript')),
    L('Cloudflare', P('/hire-cloudflare-developer', '/zatrudnij-programiste-cloudflare')),
    L(P('Maintenance & CI/CD', 'Utrzymanie i CI/CD'), P('/hire-devops-developer', '/zatrudnij-programiste-devops')),
    L(P('Full-stack & custom software', 'Full-stack i custom software'), P('/hire-full-stack-developer', '/zatrudnij-programiste-full-stack')),
    L(P('SaaS & MVP', 'SaaS i MVP'), P('/hire-saas-developer', '/zatrudnij-programiste-saas')),
    L(P('Mobile & desktop apps', 'Aplikacje mobilne i desktopowe'), P('/hire-mobile-app-developer', '/zatrudnij-programiste-aplikacji-mobilnych')),
    L(P('Email', 'E-mail'), P('/hire-email-developer', '/zatrudnij-programiste-email')),
    L('Agentic engineering', P('/hire-agentic-engineer', '/zatrudnij-agentic-engineera')),
    L(P('AI in your company', 'AI w Twojej firmie'), P('/hire-ai-consultant', '/zatrudnij-konsultanta-ai')),
    L(P('AI & agents', 'AI i agenci'), P('/hire-ai-developer', '/zatrudnij-programiste-ai')),
    L(P('PostHog & product analytics', 'PostHog i analityka produktowa'), P('/hire-posthog-developer', '/zatrudnij-programiste-posthog')),
    L(P('C# & .NET (legacy)', 'C# i .NET (legacy)'), P('/hire-dotnet-developer', '/zatrudnij-programiste-dotnet')),
    L(P('Games', 'Gry'), P('/hire-game-developer', '/zatrudnij-programiste-gier'))
  ] },
  { id: 'desks', title: P('Desk tools', 'Narzędzia Desk'), hub: P('/apps'), links: [
    L('Quote Desk', P('/quote-desk', '/oferta-z-zapytania')),
    L('AI Visibility Desk', P('/ai-visibility', '/widocznosc-w-ai')),
    L('Eval Desk', P('/ai-prompt-testing', '/testowanie-promptow-ai')),
    L('Dashboard Desk', P('/posthog-dashboard-generator', '/generator-dashboardu-posthog')),
    L('Vitals Desk', P('/core-web-vitals-monitor', '/monitor-core-web-vitals')),
    L('List Desk', P('/email-list-validator', '/walidacja-listy-email')),
    L('Signature Desk', P('/email-signature-generator', '/generator-stopki-email'))
  ] },
  { id: 'email', title: P('Email tools', 'Narzędzia e-mail'), hub: P('/spf-dkim-dmarc-checker', '/sprawdz-spf-dkim-dmarc'), links: [
    L(P('Email spam test', 'Test maila na spam'), P('/email-spam-test', '/test-maila-spam')),
    L(P('Phishing email checker', 'Czy ten mail to oszustwo?'), P('/phishing-email-checker', '/czy-ten-mail-to-oszustwo')),
    L(P('SPF, DKIM and DMARC checker', 'Sprawdź SPF, DKIM i DMARC'), P('/spf-dkim-dmarc-checker', '/sprawdz-spf-dkim-dmarc')),
    L(P('BIMI checker', 'Sprawdź BIMI'), P('/bimi-checker', '/sprawdz-bimi')),
    L(P('Email list validator', 'Walidacja listy e-mail'), P('/email-list-validator', '/walidacja-listy-email')),
    L(P('Email signature generator', 'Generator stopki e-mail'), P('/email-signature-generator', '/generator-stopki-email'))
  ] },
  { id: 'calc', title: P('Calculators', 'Kalkulatory'), hub: P('/software-cost-estimator', '/ile-kosztuje-aplikacja'), links: [
    L(P('Software cost estimator', 'Ile kosztuje aplikacja'), P('/software-cost-estimator', '/ile-kosztuje-aplikacja')),
    L(P('Build or buy', 'Budować czy kupić'), P('/software-cost-estimator/build-or-buy', '/ile-kosztuje-aplikacja/budowac-czy-kupic')),
    L(P('Legacy rewrite estimate', 'Przepisanie starego systemu'), P('/software-cost-estimator/legacy-rewrite', '/ile-kosztuje-aplikacja/przepisanie-systemu')),
    L(P('SLA calculator', 'Kalkulator SLA'), P('/sla-calculator', '/kalkulator-sla')),
    L(P('Local model or API?', 'Lokalny model czy API?'), P('/local-llm-calculator', '/lokalny-model-czy-api')),
    L(P('Multi-tenant SaaS calculator', 'Kalkulator multi-tenant'), P('/multi-tenant-saas-calculator', '/kalkulator-multi-tenant')),
    L(P('Quoting time calculator', 'Kalkulator ofertowania'), P('/rfq-automation-calculator', '/kalkulator-ofertowania')),
    L(P('App store ready', 'Apka do sklepu'), P('/app-store-ready', '/apka-do-sklepu')),
    L('Kalkulator B2B vs UoP 2026', '/kalkulator-b2b-vs-uop-2026')
  ] },
  { id: 'ai', title: P('AI and developers', 'AI i programiści'), hub: P('/skills', '/skille'), links: [
    L(P('Business idea validator', 'Walidator pomysłu na biznes'), P('/business-idea-validator', '/walidator-pomyslu-na-biznes')),
    L(P('Runbook generator', 'Instrukcja systemu'), P('/runbook-generator', '/instrukcja-systemu')),
    L(P('OpenAPI to MCP tools', 'Konektor MCP z OpenAPI'), P('/mcp-tools-from-openapi', '/konektor-mcp-z-openapi')),
    L(P('KSeF invoice validator', 'Walidator faktury KSeF'), P('/ksef-invoice-validator', '/walidator-faktury-ksef')),
    L(P('Agent skills', 'Skille dla agentów'), P('/skills', '/skille')),
    L('/przemo skill', P('/skills/przemo', '/skille/przemo')),
    L('/indexnow skill', P('/skills/indexnow', '/skille/indexnow')),
    L(P('AI engineering glossary', 'Słownik pojęć AI'), P('/glossary', '/slownik')),
    L('PostHog Blocker', 'https://github.com/Ciunkos/posthog-blocker'),
    L('Open source', P('/open-source', '/open-source-pl')),
    L('llms.txt', '/llms.txt')
  ] },
  { id: 'rank', title: P('Software house rankings', 'Rankingi software house’ów'), hub: P('/software-houses-in-poland', '/software-house-polska'), links: [
    L(P('Best in Poland', 'Najlepsze w Polsce'), P('/best-software-development-companies-in-poland', '/najlepsze-software-house-w-polsce')),
    L('Wrocław', P('/best-software-houses-in-wroclaw', '/software-house-wroclaw')),
    L(P('Warsaw', 'Warszawa'), P('/best-software-houses-in-warsaw', '/software-house-warszawa')),
    L(P('Kraków', 'Kraków'), P('/best-software-houses-in-krakow', '/software-house-krakow')),
    L(P('Poznań', 'Poznań'), P('/best-software-houses-in-poznan', '/software-house-poznan')),
    L(P('Gdańsk', 'Gdańsk'), P('/best-software-houses-in-gdansk', '/software-house-gdansk')),
    L(P('Łódź', 'Łódź'), P('/best-software-houses-in-lodz', '/software-house-lodz')),
    L(P('Rzeszów', 'Rzeszów'), P('/best-software-houses-in-rzeszow', '/software-house-rzeszow')),
    L(P('Zielona Góra', 'Zielona Góra'), P('/best-software-houses-in-zielona-gora', '/software-house-zielona-gora')),
    L(P('AI companies', 'Firmy AI'), P('/best-ai-development-companies-in-poland', '/software-house-ai')),
    L(P('MCP server companies', 'Firmy od serwerów MCP'), P('/best-mcp-server-and-ai-integration-companies-in-poland', '/software-house-serwery-mcp')),
    L('React', P('/best-react-development-companies-in-poland', '/software-house-react')),
    L('TypeScript', P('/best-typescript-development-companies-in-poland', '/software-house-typescript')),
    L('JavaScript', P('/best-javascript-development-companies-in-poland', '/software-house-javascript')),
    L(P('Software house finder', 'Wyszukiwarka software house’ów'), P('/software-house-finder', '/wyszukiwarka-software-house'))
  ] },
  { id: 'jobs', title: P('IT job market', 'Rynek pracy IT'), hub: P('/job-radar', '/radar-pracy-it'), links: [
    L(P('IT job radar', 'Radar pracy IT'), P('/job-radar', '/radar-pracy-it')),
    L(P('Wrocław IT map', 'Mapa IT Wrocławia'), '/radar-pracy-it/mapa-wroclawia'),
    L(P('Hiring from Poland', 'Programista z Polski'), P('/hire-software-developer-poland', '/zatrudnij-programiste-z-polski'))
  ] },
  { id: 'pl', title: P('In Polish', 'Po polsku'), hub: P('/korpo-tlumacz'), links: [
    L('Korpo Tłumacz', '/korpo-tlumacz'),
    L(P('Corporate Polish dictionary', 'Słownik korpomowy'), '/korpo-tlumacz/slownik'),
    L('Kalkulator B2B vs UoP', '/kalkulator-b2b-vs-uop-2026'),
    L('Wyrocznia', '/wyrocznia'),
    L('Migawki', '/migawki'),
    L('Memylib', '/memylib')
  ] },
  { id: 'fun', title: P('Fun', 'Na luzie'), hub: P('/memelib', '/memylib'), links: [
    L(P('Memelib: reaction GIFs', 'Memylib: GIF-y z reakcjami'), P('/memelib', '/memylib')),
    L(P('Meme collections', 'Kolekcje memów'), P('/memelib/collections', '/memylib/kolekcje')),
    L(P('Work and office memes', 'Memy o pracy i korpo'), P('/memelib/collections/work-and-office', '/memylib/kolekcje/praca-i-korpo')),
    L(P('AI and coding memes', 'Memy o AI i programowaniu'), P('/memelib/collections/ai-and-coding', '/memylib/kolekcje/ai-i-programowanie')),
    L(P('Polish memes', 'Polskie memy'), P('/memelib/collections/polish-memes', '/memylib/kolekcje/polskie-memy')),
    L(P('Przemo on Flack', 'Przemo na Flacku'), '/przemo')
  ] },
  { id: 'learn', title: P('Articles', 'Artykuły'), hub: P('/'), links: [
    L('Node.js 26 LTS: what’s new and how to upgrade', '/node-js-26-lts-whats-new-and-how-to-upgrade'),
    L('Data as code modules', '/data-as-code-modules'),
    L('Debugging JavaScript: the basics', '/debugging-javascript-the-basics'),
    L('Traversable objects in JavaScript', '/traversable-objects-in-java-script'),
    L('Contact forms with nodemailer and React', '/creating-contact-forms-with-nodemailer-and-react'),
    L(P('AI engineering glossary', 'Słownik pojęć AI'), P('/glossary', '/slownik'))
  ] },
  { id: 'trust', title: P('Trust and legal', 'Zaufanie i zasady'), hub: P('/trust', '/zaufanie'), links: [
    L(P('Pricing', 'Cennik'), P('/pricing', '/cennik')),
    L(P('How I work', 'Jak pracuję'), P('/how-i-work', '/jak-pracuje')),
    L(P('Security', 'Bezpieczeństwo'), P('/security', '/bezpieczenstwo')),
    L(P('Privacy', 'Prywatność'), P('/privacy', '/prywatnosc')),
    L('Open source', P('/open-source', '/open-source-pl')),
    L(P('Trust center', 'Centrum zaufania'), P('/trust', '/zaufanie'))
  ] },
  { id: 'about', title: P('About', 'O mnie'), hub: P('/about'), links: [
    L(P('About Przemysław', 'O Przemysławie'), '/about'),
    L(P('Contact', 'Kontakt'), '/about#contact'),
    L(P('Resume', 'CV'), '/resume'),
    L(P('All apps and tools', 'Wszystkie aplikacje i narzędzia'), '/apps'),
    L(P('Core Web Vitals of this site', 'Core Web Vitals tej strony'), '/checks/ciunkos.com'),
    L('Blog', '/')
  ] }
];

const UI = {
  en: {
    nav: 'Site map', summary: 'Independent senior full-stack engineer in Wrocław, Poland. Web apps, SaaS and AI agents in TypeScript and React, shipped on Cloudflare and measured in PostHog.',
    call: 'Book a 30-minute call', hire: 'Hire me', reply: 'I reply within 24 hours on working days, personally.', all: 'All',
    updated: 'Updated', by: 'by', register: 'Business register entry (CEIDG)', country: ', Poland', lang: 'Język: polski'
  },
  pl: {
    nav: 'Mapa strony', summary: 'Niezależny senior full-stack z Wrocławia. Aplikacje webowe, SaaS i agenci AI w TypeScripcie i Reakcie, wdrażane na Cloudflare i mierzone w PostHogu.',
    call: 'Umów 30-minutową rozmowę', hire: 'Zatrudnij mnie', reply: 'Odpowiadam w ciągu 24 godzin w dni robocze, osobiście.', all: 'Wszystko',
    updated: 'Aktualizacja', by: '·', register: 'Wpis w CEIDG', country: '', lang: 'Language: English'
  }
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const dateText = (iso, lang) => new Intl.DateTimeFormat(lang === 'pl' ? 'pl-PL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(String(iso).slice(0, 10) + 'T00:00:00Z'));
const ext = (h) => /^https?:/.test(h);

/** One footer for every ciunkos.com page.
 *  lang: 'en' | 'pl'; updated: ISO date of the page's last content change (optional);
 *  current: this page's path; the link with exactly this href (no #fragment) gets aria-current; alternate: {en, pl} paths of this page in both languages
 *  (adds a language switch); note: one app-specific small-print sentence; an empty <p data-vitals> is left for apps that
 *  lazy-load the Core Web Vitals badge into it; extra: [{title, links:[{label, href}]}]
 *  app-specific groups shown first. */
export function siteFooter({ lang = 'en', updated, current = '', alternate, note = '', extra = [] } = {}) {
  const ui = UI[lang] || UI.en, l = lang === 'pl' ? 'pl' : 'en', c = FOOTER_CONTACT;
  const a = (href, label, where = 'footer') => {
    const cur = !ext(href) && !href.includes('#') && href === current;
    return `<a href="${esc(href)}"${cur ? ' aria-current="page"' : ''}${ext(href) ? ' rel="noopener"' : ''} data-track="footer_link_clicked" data-where="${where}">${esc(label)}</a>`;
  };
  const group = (g) => `<nav class="cf-group" aria-labelledby="cf-${esc(g.id)}"><h2 id="cf-${esc(g.id)}">${g.hub ? a(g.hub[l], g.title[l], 'footer-heading') : esc(g.title[l])}</h2><ul>${g.links.map((x) => `<li>${a(x.href[l], x.label[l])}</li>`).join('')}</ul></nav>`;
  const extras = extra.map((g, n) => group({ id: 'x' + n, title: P(g.title), links: g.links.map((x) => L(x.label, x.href)) }));
  const other = l === 'pl' ? 'en' : 'pl';
  return `<footer class="cf-foot" role="contentinfo"><div class="cf-wrap">
<section class="cf-brand"><p class="cf-name"><a href="/" data-track="footer_link_clicked" data-where="footer-brand">Przemysław Zalewski <span>· Ciunkos</span></a></p><p class="cf-summary">${esc(ui.summary)}</p><p class="cf-ctas"><a class="cf-btn cf-primary" href="${c.calendar}" rel="noopener" data-track="cta_call_clicked" data-where="footer">${esc(ui.call)} →</a><a class="cf-btn" href="${l === 'pl' ? '/zatrudnij-mnie' : '/hire-me'}" data-track="footer_link_clicked" data-where="footer-cta">${esc(ui.hire)}</a></p><p class="cf-contact"><a href="mailto:${c.email}" data-track="cta_email_clicked" data-where="footer">${c.email}</a> · <a href="tel:${c.phone}" data-track="cta_phone_clicked" data-where="footer">${c.phoneDisplay}</a></p><p class="cf-small">${esc(ui.reply)}</p><p class="cf-social"><a href="${c.linkedin}" rel="me noopener">LinkedIn</a><a href="${c.x}" rel="me noopener">X</a><a href="${c.github}" rel="me noopener">GitHub</a>${alternate && alternate[other] ? `<a href="${esc(alternate[other])}" hreflang="${other}" lang="${other}">${esc(ui.lang)}</a>` : ''}</p></section>
<div class="cf-groups" aria-label="${esc(ui.nav)}">${extras.join('')}${FOOTER_GROUPS.map(group).join('')}</div>
<div class="cf-legal"><p class="cf-vitals" data-vitals></p>${updated ? `<p data-ld-updated>${esc(ui.updated)} <time datetime="${esc(String(updated).slice(0, 10))}">${esc(dateText(updated, l))}</time> ${esc(ui.by)} <a href="/about" rel="author">Przemysław Zalewski</a></p>` : ''}${note ? `<p>${esc(note)}</p>` : ''}<p>Przemysław Zalewski, ul. Tęczowa 31A/56, 53-601 Wrocław${ui.country} · <span>NIP 8952144360</span> · <span>REGON 367652014</span> · <span>D-U-N-S 438385453</span> · <a href="${c.ceidg}" rel="noopener">${esc(ui.register)}</a></p></div>
</div></footer>`;
}

export const SITE_FOOTER_CSS = `.cf-foot{max-width:none;width:auto;margin:56px 0 0;padding:0;display:block;--cf-bg:#f4f1ea;--cf-fg:#25231e;--cf-muted:#6b665b;--cf-line:#dcd7cb;--cf-accent:#d7f34b;--cf-accent-fg:#25231e;background:var(--cf-bg);color:var(--cf-fg);border-top:1px solid var(--cf-line);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:left}
@media (prefers-color-scheme:dark){.cf-foot{--cf-bg:#191814;--cf-fg:#ece8dd;--cf-muted:#a49e90;--cf-line:#34322b;--cf-accent:#d7f34b;--cf-accent-fg:#191814}}
.cf-foot :is(div,section,nav,ul,li,p,h2){font-family:inherit;letter-spacing:normal;display:block;flex-direction:row;align-items:normal;justify-content:normal;flex-shrink:1;text-align:left;position:static;margin:0;padding:0;max-width:none;width:auto;border:0;background:none}
.cf-foot :is(a,span,time){display:inline;flex-direction:row;align-items:normal;justify-content:normal;position:static;color:inherit;text-decoration:none;font:inherit;background:none;border:0;padding:0;margin:0}
.cf-foot *{box-sizing:border-box}.cf-foot a:hover{text-decoration:underline;text-underline-offset:3px}.cf-foot a:focus-visible{outline:2px solid currentColor;outline-offset:2px;border-radius:4px}
.cf-foot .cf-wrap{max-width:1280px;margin:0 auto;padding:48px 24px 32px;display:grid;grid-template-columns:minmax(0,1fr);gap:40px}
.cf-foot .cf-brand{display:grid;gap:10px;max-width:640px}.cf-foot .cf-name{font-size:22px;font-weight:700;letter-spacing:-.01em}.cf-foot .cf-name span{font-weight:400;color:var(--cf-muted)}.cf-foot .cf-summary{color:var(--cf-muted)}
.cf-foot .cf-ctas{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}.cf-foot .cf-btn{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border:1px solid var(--cf-line);border-radius:999px;font-weight:600}.cf-foot .cf-btn:hover{text-decoration:none;border-color:var(--cf-fg)}.cf-foot .cf-primary{background:var(--cf-accent);color:var(--cf-accent-fg);border-color:var(--cf-accent)}
.cf-foot .cf-contact,.cf-foot .cf-small{font-size:14px}.cf-foot .cf-small{color:var(--cf-muted)}.cf-foot .cf-social{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:4px;font-size:14px;font-weight:600}
.cf-foot .cf-groups{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:32px 28px;border-top:1px solid var(--cf-line);padding-top:32px}
.cf-foot .cf-group h2{margin:0 0 8px;font-size:13px;line-height:1.4;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cf-muted)}
.cf-foot .cf-group ul{list-style:none}.cf-foot .cf-group li{list-style:none}.cf-foot .cf-group li a{display:flex;align-items:center;min-height:32px;padding:4px 0;font-size:14px;line-height:1.3}.cf-foot .cf-group a[aria-current]{font-weight:700}
.cf-foot .cf-legal{border-top:1px solid var(--cf-line);padding-top:20px;font-size:12px;color:var(--cf-muted);display:grid;gap:6px}.cf-foot .cf-legal span{white-space:nowrap}.cf-foot .cf-legal a{text-decoration:underline;text-underline-offset:2px}.cf-foot .cf-vitals:empty{display:none}.cf-foot .cf-vitals img{display:block;max-width:100%;height:auto}
@media (max-width:600px){.cf-foot .cf-wrap{padding:36px 16px 28px;gap:28px}.cf-foot .cf-groups{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 16px}.cf-foot .cf-group li a{font-size:13.5px}}
@media print{.cf-foot{display:none}}`;
