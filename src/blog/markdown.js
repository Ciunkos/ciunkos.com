/* eslint-disable no-param-reassign */
/* react-markdown 5 AST plugins for blog posts. They change the markdown AST in place
   before rendering, and the custom renderers in Blog.js receive the changed nodes. */

export const textOf = node =>
  node.value || (node.children || []).map(textOf).join('')

const slugify = text =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const visit = (node, type, callback) => {
  const children = node.children || []
  children.forEach((child, index) => {
    if (child.type === type) callback(child, index, node)
    visit(child, type, callback)
  })
  return node
}

// "## Title {#custom-id}" gets id="custom-id", other headings a slug of their text
export const headingIds = root => {
  const seen = {}
  return visit(root, 'heading', heading => {
    const last = heading.children[heading.children.length - 1]
    const match =
      last && last.type === 'text' && /\s*\{#([\w-]+)\}\s*$/.exec(last.value)
    if (match) last.value = last.value.slice(0, match.index)
    const base = match ? match[1] : slugify(textOf(heading)) || 'section'
    seen[base] = (seen[base] || 0) + 1
    heading.data = {
      ...heading.data,
      id: seen[base] > 1 ? `${base}-${seen[base]}` : base
    }
  })
}

// GitHub's five kinds, plus tldr for the summary at the top of a post
export const CALLOUT_KINDS = [
  'note',
  'tip',
  'important',
  'warning',
  'caution',
  'tldr'
]

// GitHub alerts: a blockquote starting with "[!WARNING]" becomes a callout node
export const callouts = root =>
  visit(root, 'blockquote', (quote, index, parent) => {
    const paragraph = quote.children[0]
    const first =
      paragraph && paragraph.type === 'paragraph' && paragraph.children[0]
    const match =
      first && first.type === 'text' && /^\[!(\w+)\]\s*/.exec(first.value)
    const kind = match && match[1].toLowerCase()
    if (!CALLOUT_KINDS.includes(kind)) return
    first.value = first.value.slice(match[0].length)
    if (!first.value) paragraph.children.shift()
    if (!paragraph.children.length) quote.children.shift()
    parent.children[index] = { type: 'callout', kind, children: quote.children }
  })

export const astPlugins = [headingIds, callouts]
