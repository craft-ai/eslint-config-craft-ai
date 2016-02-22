# eslint-config-craft-ai #

This is [craft ai](https://craft.ai/)'s [ESLint](http://eslint.org/)
configuration for es5 and es6.

[![Build](https://img.shields.io/travis/craft-ai/eslint-config-craft-ai/master.svg?style=flat-square)](https://travis-ci.org/craft-ai/eslint-config-craft-ai)

## _(for `craft ai` developers)_ Releasing a new version ##

1. Make sure the build of the master branch is passing
2. Checkout the master branch locally
````sh
git fetch
git checkout master
git reset --hard origin/master
````
3. Bump the version and push
````sh
npm version patch # or 'minor' or 'major'
git push origin master
git push --tags
````
