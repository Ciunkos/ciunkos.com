import React from 'react'

export const page = {
  title: 'Przemysław Zalewski (Ciunkos): senior engineer, apps and free tools',
  description:
    'Przemysław Zalewski (Ciunkos), senior full-stack engineer from Wrocław: the free tools and apps I run in 2026, apps from 2007 to 2017 and a JavaScript blog.'
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
  nowTools: 'Smaller free tools:',
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
    emailTest: ['Email Test', 'Spam and unsubscribe test'],
    phishingChecker: ['Phishing email checker', 'Is this email a scam?'],
    signatureDesk: ['Signature Desk', 'Team email signatures'],
    dashboardDesk: ['Dashboard Desk', 'PostHog growth dashboard'],
    evalDesk: ['Eval Desk', 'Test your AI prompt'],
    listDesk: ['List Desk', 'Clean an email list'],
    aiVisibility: ['AI Visibility Desk', 'Does AI recommend you?'],
    quoteDesk: ['Quote Desk', 'Inquiry to draft quote'],
    tenant: ['Multi-tenant SaaS calculator', 'Company tool to SaaS'],
    mcp: ['OpenAPI to MCP tools', 'Your API in Claude and ChatGPT'],
    ksef: ['KSeF invoice validator', 'FA(3) in your browser'],
    rfq: ['Quoting time calculator', 'Inquiries to quotes'],
    validator: ['Business idea validator', 'AI report, free'],
    dns: ['SPF, DKIM, DMARC checker', 'Email DNS grade'],
    configurator: ['Engagement configurator', 'Price and start date'],
    glossary: ['Glossary', 'AI, email, analytics'],
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
    sla: 'A monthly fee, response times per priority, a downtime budget and contract clauses for the apps a company runs on.',
    llm: 'Does a model like Bielik fit in your hardware, how fast it answers, what it costs against an API and where the data lives.',
    legacy:
      'Lines of code and language to function points, hours and cost of a rewrite, with and without coding agents.',
    emailTest:
      'Send one email to a test address and get a report: one-click unsubscribe, SPF, DKIM, DMARC, Gmail and Yahoo rules, spam signals and an AI panel of three models. Free.',
    phishingChecker:
      'Forward a suspicious email or upload the .eml file: three AI models and technical checks say if it looks like spam or phishing, and what to do. Free.',
    signatureDesk:
      'Company email signatures for the whole team: one template, the legal footer, Outlook-safe HTML for Gmail, Outlook and Apple Mail. Free, in your browser.',
    dashboardDesk:
      'A growth dashboard created in your own PostHog: channels incl. AI assistants, funnel, activation, retention, errors, plus what your tracking is missing. Free, runs in your browser.',
    evalDesk:
      'Test cases for an AI assistant, run after every prompt change: what regressed, what got fixed, which cases are unstable. Free, Claude models.',
    listDesk:
      'An email list checked in your browser: dead domains, null MX, disposable providers, typos and duplicates. Addresses never leave the page. Free.',
    aiVisibility:
      'Your buyers’ questions asked to an AI assistant every week with web search on: whether your brand is named, who is named instead, which pages are cited. Free.',
    quoteDesk:
      'A customer inquiry (email, PDF, Excel or a photo of a handwritten list) matched to your own price list, unclear lines flagged, exported to Excel. Free.',
    tenant:
      'For a system built for one company and now sold to others: which multi-tenant model, the work per release and the weeks to get there.',
    mcp: 'Paste an OpenAPI spec and get narrow MCP tools, with the irreversible ones flagged, plus a TypeScript server skeleton.',
    ksef: 'Checks a Polish FA(3) e-invoice against the official schema in your browser, with errors in plain words and a readable preview.',
    rfq: 'Counts the hours spent turning customer inquiries into quotes and when an agent that drafts them would pay off.',
    validator:
      'Ten rubrics scored by AI with quotes from your idea, a fixed-rule verdict and three cheap experiments.',
    dns: 'Grades a domain’s email DNS: SPF with nested lookups, DKIM, DMARC, MTA-STS, TLS-RPT, BIMI and DNSSEC.',
    configurator:
      'Pick the kind of work and its size, see hours, a price range and the earliest start date.',
    glossary:
      'AI engineering, software projects, email, product analytics and AI search in plain English, each term with one thing to do in practice.'
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
