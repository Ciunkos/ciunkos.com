import posts from './posts'

const SITE = 'https://ciunkos.com/'

const bySlug = slug => Object.values(posts).find(post => post.slug === slug)

/* hreflang links for a post that has a twin in the other language (post.alternate is the
   twin's slug): both versions and x-default, which points at the English one. A post
   without a twin gets none. */
export const postAlternates = post => {
  const twin = post.alternate && bySlug(post.alternate)
  if (!twin) return []
  const versions = [post, twin].map(p => ({
    lang: p.lang || 'en',
    href: new URL(p.slug, SITE).href
  }))
  const english = versions.find(v => v.lang === 'en') || versions[0]
  return [...versions, { lang: 'x-default', href: english.href }]
}

// { en: '/slug', pl: '/slug' } for the footer's language switch
export const footerAlternate = post => {
  const twin = post.alternate && bySlug(post.alternate)
  if (!twin) return undefined
  return Object.fromEntries(
    [post, twin].map(p => [p.lang || 'en', `/${p.slug}`])
  )
}
