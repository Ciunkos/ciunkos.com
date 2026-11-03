import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { createNodeResolver, importX } from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

/* The Airbnb style this repo always followed, as a flat config. eslint-config-airbnb stopped at
   ESLint 8, so its rules are listed here (core, react, jsx-a11y, import), minus the formatting
   ones Prettier owns; the few formatting rules the repo set itself come from @stylistic. */

// globals that are easy to use by mistake in place of a local variable
const confusingBrowserGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top'
]

const airbnbCore = {
  'array-callback-return': ['error', { allowImplicit: true }],
  'arrow-body-style': ['error', 'as-needed'],
  'block-scoped-var': 'error',
  camelcase: ['error', { properties: 'never' }],
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'componentDidMount',
        'shouldComponentUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate'
      ]
    }
  ],
  'consistent-return': 'error',
  curly: ['error', 'multi-line'],
  'default-case': ['error', { commentPattern: '^no default$' }],
  'dot-notation': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-names': 'warn',
  'getter-return': ['error', { allowImplicit: true }],
  'guard-for-in': 'error',
  'max-classes-per-file': ['error', 1],
  'new-cap': ['error', { newIsCap: true, capIsNew: false }],
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-constant-condition': 'warn',
  'no-continue': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty-function': [
    'error',
    { allow: ['arrowFunctions', 'functions', 'methods'] }
  ],
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-implied-eval': 'error',
  'no-inner-declarations': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response'
      ]
    }
  ],
  'no-plusplus': 'error',
  'no-proto': 'error',
  'no-restricted-globals': [
    'error',
    { name: 'isFinite', message: 'Use Number.isFinite instead.' },
    { name: 'isNaN', message: 'Use Number.isNaN instead.' },
    ...confusingBrowserGlobals
  ],
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.'
    }
  ],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-underscore-dangle': [
    'error',
    { enforceInMethodNames: true, allowFunctionParams: true }
  ],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unused-expressions': 'error',
  'no-unused-vars': [
    'error',
    { args: 'after-used', ignoreRestSiblings: true, caughtErrors: 'none' }
  ],
  'no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true }
  ],
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': 'error',
  'prefer-const': ['error', { destructuring: 'any' }],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: { array: false, object: true },
      AssignmentExpression: { array: true, object: false }
    }
  ],
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  strict: ['error', 'never'],
  'symbol-description': 'error',
  'unicode-bom': ['error', 'never'],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'vars-on-top': 'error',
  yoda: 'error'
}

const airbnbReact = {
  'react/button-has-type': 'error',
  'react/destructuring-assignment': ['error', 'always'],
  'react/display-name': 'off',
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' }
  ],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true
    }
  ],
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
  'react/no-access-state-in-setstate': 'error',
  'react/no-array-index-key': 'error',
  'react/no-danger': 'warn',
  'react/no-did-update-set-state': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  'react/self-closing-comp': 'error',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error'
}

const airbnbA11y = {
  'jsx-a11y/control-has-associated-label': [
    'error',
    {
      labelAttributes: ['label'],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video'
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid'
      ],
      depth: 5
    }
  ],
  'jsx-a11y/label-has-associated-control': ['error', { assert: 'both' }],
  'jsx-a11y/lang': 'error',
  'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }]
}

const airbnbImport = {
  'import-x/no-absolute-path': 'error',
  'import-x/no-amd': 'error',
  'import-x/no-cycle': 'error',
  'import-x/no-dynamic-require': 'error',
  'import-x/no-mutable-exports': 'error',
  'import-x/no-named-default': 'error',
  'import-x/no-self-import': 'error',
  'import-x/no-useless-path-segments': ['error', { commonjs: true }],
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/prefer-default-export': 'error'
}

// the rules this repo set on top of Airbnb
const repoRules = {
  'import-x/extensions': ['error', 'always', { js: 'never' }],
  'import-x/first': 'off',
  'import-x/newline-after-import': ['error', { count: 1 }],
  'import-x/no-extraneous-dependencies': 'off',
  'import-x/no-named-as-default': 'off',
  'import-x/no-named-as-default-member': 'off',
  'import-x/no-namespace': 'error',
  'import-x/order': [
    'error',
    {
      groups: [
        ['external', 'builtin'],
        ['index', 'sibling', 'parent', 'internal']
      ],
      'newlines-between': 'always'
    }
  ],
  'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  'no-console': 'off',
  'no-await-in-loop': 'off',
  'no-restricted-syntax': 'off',
  'no-shadow': 'off',
  'react/jsx-filename-extension': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/no-multi-comp': 'off',
  'react/no-unescaped-entities': 'off',
  'react/prop-types': 'off',
  'react/sort-comp': 'off',
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',
  // the automatic JSX runtime needs no React in scope
  'react/react-in-jsx-scope': 'off',
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/comma-dangle': ['error', 'never'],
  '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
  '@stylistic/max-len': [
    'error',
    {
      code: 100,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  '@stylistic/object-curly-newline': ['error', { consistent: true }]
}

export default [
  {
    ignores: [
      '**/node_modules',
      'build',
      'dist',
      'dev',
      'src/www/vendor',
      // the .mjs build scripts and the modules shared with the other ciunkos.com repos
      // (schema-ld, daty, posthog-sdk) keep their own style
      '**/*.mjs'
    ]
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  importX.flatConfigs.recommended,
  {
    plugins: { '@stylistic': stylistic },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    settings: {
      // an explicit version: eslint-plugin-react's 'detect' calls an API that ESLint 10 removed
      react: { version: '19.3' },
      // bare imports like 'components' or 'blog/posts' resolve from src, as in webpack
      'import-x/resolver-next': [
        createNodeResolver({ modules: ['src', 'node_modules'] })
      ],
      'import-x/ignore': ['\\.(css|json|md|txt|jpg|png)$']
    },
    rules: {
      ...airbnbCore,
      ...airbnbReact,
      ...airbnbA11y,
      ...airbnbImport,
      ...repoRules
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' }
  },
  {
    // webpack's hot module replacement
    files: ['src/app.js'],
    languageOptions: { globals: { module: 'readonly' } }
  }
]
