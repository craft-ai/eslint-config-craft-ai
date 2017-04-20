module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'rules': {
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'arrow-spacing': [2, {
      'before': true, 'after': true
    }],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'no-console': [0],
    'no-var': 2,
    'prefer-template': 2,
    'no-useless-concat': 2,
    'space-before-function-paren': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'space-in-parens': [2, 'never'],
    'keyword-spacing': 2,
    'no-unused-vars': [1, {
      'args': 'none',
      'vars': 'all',
      'varsIgnorePattern': 'React'
    }],
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
