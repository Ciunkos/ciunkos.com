module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    semi: 0,
    indent: ['error', 2],
    'function-paren-newline': 0,
    'object-curly-newline': ['error', { consistent: true }],
    'spaced-comment': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-mixed-operators': 0,
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'no-confusing-arrow': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': ['error', 2],
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent-props': 0,
    'react/no-multi-comp': 0,
    'import/first': 0,
    'no-shadow': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'jsx-a11y/accessible-emoji': 0,
    'import/no-namespace': 2,
    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never'
      }
    ],
    'import/no-named-as-default-member': 0,
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
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack-dev-server.config.js',
        'config-index': 0
      }
    },
    'import/external-module-folders': ['node_modules']
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
