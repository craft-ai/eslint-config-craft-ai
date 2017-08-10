module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    'arrow-parens': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': ['off'],
    'no-var': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': 'error',
    'no-unused-vars': ['warn', {
      'args': 'none',
      'vars': 'all',
      'varsIgnorePattern': 'React'
    }],
    'default-case': 'error',
    'wyze/sort-destructuring-keys': [
      'error', 'asc', {
        'caseSensitive': false
      }
    ],
    'wyze/sort-imports': [
      'error', {
        'ignoreCase': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['default', 'named', 'all', 'type', 'none']
      }
    ]
  },
  plugins: [
    'wyze'
  ]
};
