import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'

let registered = false

export default class CodeBlock extends React.PureComponent {
  constructor() {
    super()

    if (!registered) {
      registered = true

      Lowlight.registerLanguage('js', js)
      Lowlight.registerLanguage('javascript', js)
    }
  }

  render() {
    const { language, value, inline } = this.props

    const languageCode = (language === 'javascript' ? 'js' : language) || 'js'

    return <Lowlight language={languageCode} value={value} inline={inline} />
  }
}
