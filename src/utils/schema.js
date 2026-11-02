/* JSON-LD for ciunkos.com pages. The Person, business and WebSite nodes come from
   schema-ld.mjs, an exact copy of ~/hire/src/data/schema-ld.mjs, so every page on
   ciunkos.com (this app and the Workers under it) describes the same entities. */
import {
  PERSON,
  BUSINESS,
  WEBSITE,
  PERSON_ID,
  WEBSITE_ID,
  BAZA
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
export const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': [...nodes.filter(Boolean), PERSON, BUSINESS, WEBSITE]
})
