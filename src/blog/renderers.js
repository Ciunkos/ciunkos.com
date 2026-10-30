import React from 'react'

import { textOf } from './markdown'

const CALLOUT_LABELS = {
  note: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
  tldr: 'TL;DR'
}

// the page header already has the h1, so headings inside a post start at h2;
// every heading gets a stable id (see headingIds in markdown.js) and a # link to copy,
// next to the heading rather than inside it, so it isn't read as part of the heading
export const Heading = ({ level, node, children }) => {
  const id = node.data && node.data.id
  const heading = React.createElement(
    `h${Math.min(level + 1, 6)}`,
    { id },
    children
  )
  if (!id) return heading
  return (
    <div className="HeadingWrap">
      {heading}
      <a
        className="HeadingAnchor"
        href={`#${id}`}
        aria-label={`Permalink: ${textOf(node)}`}
      >
        #
      </a>
    </div>
  )
}

export const InlineCode = ({ value }) => (
  <code className={value.length <= 32 ? 'nowrap' : undefined}>{value}</code>
)

export const Callout = ({ kind, children }) => (
  <div
    className={`Callout ${kind}`}
    role="note"
    aria-label={CALLOUT_LABELS[kind]}
  >
    <span className="CalloutLabel" aria-hidden="true">
      {CALLOUT_LABELS[kind]}
    </span>
    {children}
  </div>
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
