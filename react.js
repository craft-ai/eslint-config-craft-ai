module.exports = {
  extends: [
    './lib/base',
    './lib/react'
  ].map(require.resolve)
};
