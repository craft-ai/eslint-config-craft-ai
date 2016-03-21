module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      2,
      2,
      {'SwitchCase': 1}
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
    'modules': true,
    'jsx': true
  },
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  }
};
