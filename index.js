'use strict';

module.exports = {
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2020: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['prettier'],
  rules: {
    // Possible Errors
    'for-direction': 'error',
    'getter-return': '',
    'no-async-promise-executor': '',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': ['warn'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    // 'valid-jsdoc': [
    //   'error',
    //   {
    //     requireParamDescription: false,
    //     requireReturnDescription: false,
    //     requireReturn: false,
    //     prefer: { returns: 'return' },
    //   },
    // ],

    // Best practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    // block-scoped-var:
    // class-methods-use-this
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    'consistent-return': 'off',
    // curly:
    // default-case:
    // default-case-last
    // default-param-last
    // dot-location:
    // dot-notation:
    eqeqeq: ['error', 'always'],
    // grouped-accessor-pairs
    // guard-for-in:
    // max-classes-per-file
    'no-alert': 'off',
    // no-caller:
    // no-case-declarations:
    // no-constructor-return
    // no-div-regex:
    // no-else-return:
    // no-empty-function:
    // no-empty-pattern:
    // no-eq-null:
    // no-eval:
    // no-extend-native:
    // no-extra-bind:
    // no-extra-label:
    // no-fallthrough:
    // no-floating-decimal:
    // no-implicit-coercion:
    // no-implicit-globals:
    // no-implied-eval:
    // no-invalid-this:
    // no-iterator:
    // no-labels:
    // no-lone-blocks:
    // no-loop-func:
    // no-magic-numbers:
    // no-multi-spaces:
    // no-multi-str:
    // no-native-reassign:
    // no-new:
    // no-new-func:
    // no-new-wrappers:
    // no-octal:
    // no-octal-escape:
    // no-param-reassign:
    // no-proto:
    // no-redeclare:
    'no-return-assign': ['error', 'except-parens'],
    // no-script-url:
    // no-self-assign:
    // no-self-compare:
    // no-sequences:
    // no-throw-literal:
    // no-unmodified-loop-condition:
    // no-unused-expressions:
    // no-unused-labels:
    // no-useless-call:
    // no-useless-concat:
    // no-useless-escape:
    // no-void:
    // no-warning-comments:
    // no-with:
    // radix:
    // vars-on-top:
    // wrap-iife:
    yoda: 'error',

    // Strict mode
    strict: 'error',

    // Variables
    // init-declarations:
    // no-catch-shadow:
    // no-delete-var:
    // no-label-var:
    // no-restricted-globals:
    // no-shadow:
    // no-shadow-restricted-names:
    // no-undef:
    // no-undef-init:
    // no-undefined:
    // no-unused-vars:
    // no-use-before-define:

    // Stylistic issues
    camelcase: ['error', { properties: 'always' }],
    'capitalized-comments': 'error',
    'consistent-this': 'off',
    curly: ['error', 'multi-line'],
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      { max: 2500, skipBlankLines: false, skipComments: false },
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
    'operator-assignment': 'error',
    'padding-line-between-statements': 'error',
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'error',
    'sort-keys': 'off',
    'sort-vars': 'error',
    'spaced-comment': 'error',
  },
};
