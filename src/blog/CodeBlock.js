import React from 'react';
import Lowlight from 'react-lowlight'
import shallowCompare from 'react-addons-shallow-compare';
import js from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-light.css'

Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('javascript', js);

const CodeBlock = React.createClass({
    displayName: 'CodeBlock',
    propTypes: {
        literal: React.PropTypes.string,
        language: React.PropTypes.string,
        inline: React.PropTypes.bool
    },

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    },

    render() {
        const { language, literal, inline } = this.props

        return (
            <Lowlight
                language={(language === 'javascript' ? 'js' : language) || 'js'}
                value={literal}
                inline={inline}
            />
        );
    }
});

export default CodeBlock
