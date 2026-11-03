import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintReact from '@eslint-react/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y-x'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import { createRequire } from 'node:module'

/* eslint-plugin-import-x's ESM build imports makeRe from minimatch, which minimatch 11 (the
   GHSA-g3hv-75wg-m249 fix, forced by package.json overrides) no longer exports, so the import
   fails. Its CommonJS build reads makeRe only inside no-internal-modules, a rule left off here. */
const { createNodeResolver, importX } = createRequire(import.meta.url)(
  'eslint-plugin-import-x'
)

/* The Airbnb style this repo always followed, as a flat config. eslint-config-airbnb stopped at
   ESLint 8, so its rules are listed here (core, react, jsx-a11y, import), minus the formatting
   ones Prettier owns; the few formatting rules the repo set itself come from @stylistic.
   The react and jsx-a11y rules run on @eslint-react and eslint-plugin-jsx-a11y-x, which, unlike
   eslint-plugin-react and eslint-plugin-jsx-a11y, don't pull in minimatch 3. */

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
  /* `import React` is no longer needed with the automatic JSX runtime, but removing it from the
     page sources would move their visible "Updated" dates (scripts/dates.mjs) without a content
     change, so it is allowed to stay unused. */
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      caughtErrors: 'none',
      varsIgnorePattern: '^React$'
    }
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

// eslint-plugin-react rules missing from @eslint-react
const local = {
  rules: {
    // react/jsx-no-duplicate-props with ignoreCase: @eslint-react leaves this one to TypeScript
    'jsx-no-duplicate-props': {
      meta: {
        type: 'problem',
        schema: [],
        messages: { duplicate: "Duplicate prop '{{name}}'." }
      },
      create: context => ({
        JSXOpeningElement(node) {
          const seen = new Set()
          node.attributes.forEach(attribute => {
            if (attribute.type !== 'JSXAttribute') return
            const name = context.sourceCode.getText(attribute.name)
            if (seen.has(name.toLowerCase())) {
              context.report({
                node: attribute,
                messageId: 'duplicate',
                data: { name }
              })
            }
            seen.add(name.toLowerCase())
          })
        }
      })
    }
  }
}

/* eslint-plugin-react's recommended rules and Airbnb's react rules, mapped to @eslint-react, and
   to @stylistic for JSX formatting. Not carried over: rules for APIs React 19 removed
   (createClass, isMounted, string refs: prefer-es6-class, no-is-mounted, no-string-refs);
   jsx-uses-vars, jsx-uses-react and jsx-no-undef (ESLint's own scope analysis covers JSX now);
   no-unused-state for class state (@eslint-react's rule of that name checks useState);
   jsx-no-target-blank for dynamic hrefs (browsers imply noopener for target="_blank" now);
   and the style/perf ones nothing else implements: destructuring-assignment, jsx-no-bind,
   no-this-in-sfc, no-typos, no-redundant-should-component-update, prefer-stateless-function,
   require-render-return. */
const airbnbReact = {
  '@eslint-react/dom-no-dangerously-set-innerhtml': 'warn', // react/no-danger
  '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
  '@eslint-react/dom-no-find-dom-node': 'error',
  '@eslint-react/dom-no-missing-button-type': 'error', // react/button-has-type
  '@eslint-react/dom-no-render-return-value': 'error',
  '@eslint-react/dom-no-string-style-prop': 'error', // react/style-prop-object
  '@eslint-react/dom-no-unknown-property': 'error',
  '@eslint-react/dom-no-unsafe-target-blank': 'error', // react/jsx-no-target-blank
  '@eslint-react/dom-no-void-elements-with-children': 'error',
  '@eslint-react/jsx-no-children-prop': 'error',
  '@eslint-react/jsx-no-comment-textnodes': 'error',
  '@eslint-react/no-access-state-in-setstate': 'error',
  '@eslint-react/no-array-index-key': 'error',
  '@eslint-react/no-direct-mutation-state': 'error',
  '@eslint-react/no-missing-key': 'error', // react/jsx-key
  '@eslint-react/no-set-state-in-component-did-update': 'error',
  '@eslint-react/no-set-state-in-component-will-update': 'error',
  '@eslint-react/no-unused-state': 'error', // the useState version
  // react/no-deprecated: legacy lifecycles and ReactDOM.render/hydrate
  '@eslint-react/dom-no-hydrate': 'error',
  '@eslint-react/dom-no-render': 'error',
  '@eslint-react/no-component-will-mount': 'error',
  '@eslint-react/no-component-will-receive-props': 'error',
  '@eslint-react/no-component-will-update': 'error',
  '@stylistic/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' }
  ],
  '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: true }],
  '@stylistic/jsx-self-closing-comp': 'error',
  'local/jsx-no-duplicate-props': 'error',
  // react/jsx-boolean-value 'never' and react/jsx-fragments 'syntax'
  'no-restricted-syntax': [
    'error',
    {
      selector: "JSXAttribute > JSXExpressionContainer > Literal[raw='true']",
      message: 'Omit the value of a boolean attribute.'
    },
    {
      selector:
        "JSXOpeningElement[attributes.length=0] > JSXMemberExpression[object.name='React'][property.name='Fragment']",
      message: 'Use the <></> shorthand for a fragment without a key.'
    },
    {
      selector:
        "JSXOpeningElement[attributes.length=0] > JSXIdentifier[name='Fragment']",
      message: 'Use the <></> shorthand for a fragment without a key.'
    }
  ]
}

const airbnbA11y = {
  'jsx-a11y-x/control-has-associated-label': [
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
  'jsx-a11y-x/label-has-associated-control': ['error', { assert: 'both' }],
  'jsx-a11y-x/lang': 'error',
  'jsx-a11y-x/no-autofocus': ['error', { ignoreNonDOM: true }]
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
  'jsx-a11y-x/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  'no-console': 'off',
  'no-await-in-loop': 'off',
  'no-shadow': 'off',
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
  reactHooks.configs.flat.recommended,
  jsxA11y.configs.recommended,
  importX.flatConfigs.recommended,
  {
    plugins: { '@eslint-react': eslintReact, '@stylistic': stylistic, local },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    settings: {
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
