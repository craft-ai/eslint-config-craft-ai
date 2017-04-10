module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'rules': {
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    'no-console': [
      0
    ],
    'space-before-function-paren': [
      2,
      'never'
    ],
    'object-curly-spacing': [
      2,
      'always'
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true
      }
    ],
    'keyword-spacing': 2,
    'no-unused-vars': [
      1,
      {
        'args': 'none',
        'vars': 'all',
        'varsIgnorePattern': 'React'
      }
    ],
    'default-case': 2
  },
  'ecmaFeatures': {
    'modules': true
  },
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  }
};
