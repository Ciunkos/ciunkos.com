import React from 'react'

const CALLOUT_LABELS = {
  note: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution'
}

// the page header already has the h1, so headings inside a post start at h2;
// every heading gets a stable id (see headingIds in markdown.js) and a # link to copy
export const Heading = ({ level, node, children }) => {
  const id = node.data && node.data.id
  return React.createElement(
    `h${Math.min(level + 1, 6)}`,
    { id },
    children,
    id && (
      <a
        className="HeadingAnchor"
        href={`#${id}`}
        aria-label="Link to this section"
      >
        #
      </a>
    )
  )
}

export const InlineCode = ({ value }) => (
  <code className={value.length <= 32 ? 'nowrap' : undefined}>{value}</code>
)

export const Callout = ({ kind, children }) => (
  <aside className={`Callout ${kind}`}>
    <span className="CalloutLabel">{CALLOUT_LABELS[kind]}</span>
    {children}
  </aside>
)

const isGlossary = href =>
  /^(https:\/\/ciunkos\.com)?\/(glossary|slownik)\//.test(href)
const isExternal = href =>
  /^https?:\/\//.test(href) && !/^https:\/\/ciunkos\.com(\/|$)/.test(href)

// glossary terms get the dashed underline, other sites open in a new tab
export const Link = ({ href, title, children }) => (
  <a
    href={href}
    title={title}
    className={isGlossary(href) ? 'GlossaryLink' : undefined}
    {...(isExternal(href) && {
      target: '_blank',
      rel: 'noopener noreferrer'
    })}
  >
    {children}
  </a>
)
