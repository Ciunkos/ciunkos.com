/* eslint-disable no-param-reassign */
/* remark plugins for blog posts. They change the markdown AST (mdast) in place before
   react-markdown turns it into HTML elements; data.hName and data.hProperties pick the element
   and its props, which the components in renderers.js receive. */

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
    const id = seen[base] > 1 ? `${base}-${seen[base]}` : base
    heading.data = { ...heading.data, hProperties: { id } }
  })
}

// GitHub's five kinds, plus tldr for the summary at the top of a post
export const CALLOUT_KINDS = [
  'note',
  'tip',
  'important',
  'warning',
  'caution',
  'tldr',
  'przemo'
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
    parent.children[index] = {
      type: 'callout',
      children: quote.children,
      data: { hName: 'callout', hProperties: { kind } }
    }
  })

// A fenced block with the language "chart" names an interactive figure from blog/charts:
//   ```chart
//   role-shift
//   ```
// react-markdown drops raw HTML, so this is how a post places a React component
export const charts = root =>
  visit(root, 'code', (code, index, parent) => {
    if (code.lang !== 'chart') return
    parent.children[index] = {
      type: 'chart',
      data: { hName: 'chart', hProperties: { name: code.value.trim() } }
    }
  })

// a remark plugin returns the transform it runs on the tree
export const remarkPlugins = [() => headingIds, () => callouts, () => charts]
