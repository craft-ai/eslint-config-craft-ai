module.exports = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  rules: {
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-curly-spacing': [2, 'always', {
      'allowMultiline': true,
      'spacing': {
        'objectLiterals': 'never'
      }
    }],
    'react/jsx-no-bind': 1,
    'react/jsx-space-before-closing': [1, 'always'],
    'react/no-string-refs': 1,
    'react/prop-types': 1,
    'react/prefer-stateless-function': 1,
    'react/prefer-es6-class': [1, 'always']
  }
};
