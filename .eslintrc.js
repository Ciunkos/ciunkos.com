module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': ['error', 'always', { js: 'never' }],
    'import/extensions': 0,
    'import/first': 0,
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-namespace': 2,
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['index', 'sibling', 'parent', 'internal']
        ],
        'newlines-between': 'always'
      }
    ],
    indent: ['error', 2],
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/href-no-hash': 'off',
    'linebreak-style': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-mixed-operators': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-shadow': 0,
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-multi-comp': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    semi: 0,
    'spaced-comment': 0
  },
  settings: {
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      'babel-module': {}
    }
  },
  env: {
    browser: true,
    node: true
  }
}
