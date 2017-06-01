import React from 'react';
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'

Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('javascript', js);

export default class CodeBlock extends React.PureComponent {
    render() {
        const { language, literal, inline } = this.props
        const languageCode = (language === 'javascript' ? 'js' : language) || 'js'
        return (
            <Lowlight
                language={languageCode}
                value={literal}
                inline={inline}
            />
        );
    }
}
