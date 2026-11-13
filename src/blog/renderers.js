import React from 'react'

import CodeBlock from './CodeBlock'
import Image from './Image'
import Chart from './charts'
import { textOf } from './markdown'
import { useStrings } from './i18n'
import przemoFace from './charts/przemo-cutout.webp'

// the page header already has the h1 and posts start their sections at ##, so ## is h2
// (a stray # also becomes h2) and levels never skip, which axe's heading-order checks;
// every heading gets a stable id (see headingIds in markdown.js) and a # link to copy,
// next to the heading rather than inside it, so it isn't read as part of the heading
export const Heading = ({ node, id, children }) => {
  const strings = useStrings()
  const level = Number(node.tagName.slice(1))
  const heading = React.createElement(
    `h${Math.min(Math.max(level, 2), 6)}`,
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
        aria-label={`${strings.permalink}: ${textOf(node)}`}
      >
        #
      </a>
    </div>
  )
}

// a code block is <pre><code class="language-js">: CodeBlock highlights it with its own <pre>,
// so the code component below only renders inline code
export const Pre = ({ node }) => {
  const [code] = node.children
  const languageClass = (code.properties.className || []).find(name =>
    name.startsWith('language-')
  )
  return (
    <CodeBlock
      language={languageClass && languageClass.slice('language-'.length)}
      // the block's text ends with a line break
      value={textOf(code).replace(/\n$/, '')}
    />
  )
}

export const InlineCode = ({ children }) => {
  const value = String(children)
  return (
    <code className={value.length <= 32 ? 'nowrap' : undefined}>{value}</code>
  )
}

// "> [!PRZEMO]" is an aside in the author's voice, with his face next to it
export const Callout = ({ kind, children }) => {
  const label = useStrings().callouts[kind]
  return (
    <div className={`Callout ${kind}`} role="note" aria-label={label}>
      {kind === 'przemo' && (
        <img
          className="CalloutFace"
          src={przemoFace}
          alt=""
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
        />
      )}
      <span className="CalloutLabel" aria-hidden="true">
        {label}
      </span>
      {children}
    </div>
  )
}

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

// an image on its own line is a figure-like block, which can't sit inside a <p>
const Paragraph = ({ node, children }) =>
  node.children.length === 1 && node.children[0].tagName === 'img' ? (
    children
  ) : (
    <p>{children}</p>
  )

// element name → component, for react-markdown
const headings = Object.fromEntries(
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(tag => [tag, Heading])
)

export default {
  ...headings,
  pre: Pre,
  code: InlineCode,
  img: Image,
  a: Link,
  p: Paragraph,
  callout: Callout,
  chart: Chart
}
