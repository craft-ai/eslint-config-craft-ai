module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'extends': [
    'plugin:react/recommended'
  ],
  'rules': {
    'react/jsx-no-bind': 1,
    'react/prop-types': 1,
    'react/prefer-stateless-function': 1,
    'react/prefer-es6-class': [1, 'never']
  }
};
