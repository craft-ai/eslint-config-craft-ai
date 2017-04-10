module.exports = {
  parser: 'babel-eslint',
  extends: [
    './base'
  ].map(require.resolve)
};
