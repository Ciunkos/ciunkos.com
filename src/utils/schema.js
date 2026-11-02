/* JSON-LD for ciunkos.com pages. The Person, business and WebSite nodes come from
   schema-ld.mjs, an exact copy of ~/hire/src/data/schema-ld.mjs, so every page on
   ciunkos.com (this app and the Workers under it) describes the same entities. */
import {
  PERSON,
  BUSINESS,
  WEBSITE,
  PERSON_ID,
  WEBSITE_ID,
  BAZA,
  pelnaData
} from './schema-ld.mjs'

export const SITE = BAZA
export const personRef = { '@id': PERSON_ID }
export const websiteRef = { '@id': WEBSITE_ID }

export const breadcrumbs = (url, items) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: items.map(([name, item], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item
  }))
})

/* One @graph per page: the page's own nodes, then the shared entities. */
// Google wants Article dates with a time and timezone, so a bare date becomes midnight UTC
const DATES = ['datePublished', 'dateModified']
const withFullDates = node =>
  Object.fromEntries(
    Object.entries(node).map(([key, value]) => [
      key,
      DATES.includes(key) ? pelnaData(value) : value
    ])
  )

export const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': [
    ...nodes.filter(Boolean).map(withFullDates),
    PERSON,
    BUSINESS,
    WEBSITE
  ]
})
