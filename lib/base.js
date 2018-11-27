/* eslint no-var: "off" */
var configuration = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    'arrow-parens': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', 'stroustrup'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    'no-console': ['off'],
    'no-var': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'lines-between-class-members': ['error', 'always'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        vars: 'all',
        varsIgnorePattern: 'React'
      }
    ],
    'default-case': 'error'
  },
  plugins: []
};

try {
  // Check if 'eslint-plugin-wyze' is installed
  require('eslint-plugin-wyze');
  configuration.plugins.push('wyze');
  configuration.rules['wyze/sort-destructuring-keys'] = [
    'error',
    'asc',
    {
      caseSensitive: false
    }
  ];
  configuration.rules['wyze/sort-imports'] = [
    'error',
    {
      ignoreCase: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['default', 'named', 'all', 'type', 'none']
    }
  ];
}
catch (_) {
  // Nothing to do here.
}

module.exports = configuration;
