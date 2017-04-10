module.exports = {
  parser: 'babel-eslint',
  extends: [
    './react'
  ].map(require.resolve)
};
