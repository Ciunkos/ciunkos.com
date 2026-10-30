import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import plaintext from 'highlight.js/lib/languages/plaintext'
import typescript from 'highlight.js/lib/languages/typescript'

let registered = false

export default class CodeBlock extends React.PureComponent {
  pre = React.createRef()

  constructor() {
    super()

    if (!registered) {
      registered = true

      Lowlight.registerLanguage('js', js)
      Lowlight.registerLanguage('javascript', js)
      Lowlight.registerLanguage('bash', bash)
      Lowlight.registerLanguage('typescript', typescript)
      // terminal output and error messages: no highlighting, long lines wrap
      Lowlight.registerLanguage('text', plaintext)
    }
  }

  componentDidMount() {
    // a scrollable code block has to be reachable from the keyboard
    const { inline } = this.props
    if (!inline && this.pre.current) {
      this.pre.current.setAttribute('tabindex', '0')
    }
  }

  render() {
    const { language, value, inline } = this.props

    const languageCode = (language === 'javascript' ? 'js' : language) || 'js'

    return (
      <Lowlight
        ref={this.pre}
        language={languageCode}
        value={value}
        inline={inline}
      />
    )
  }
}
