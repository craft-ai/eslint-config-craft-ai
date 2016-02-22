# eslint-config-craft-ai #

This is [craft ai](https://craft.ai/)'s [ESLint](http://eslint.org/)
configuration for es5 and es6.

[![Version](https://img.shields.io/npm/v/eslint-config-craft-ai.svg?style=flat-square)](https://npmjs.org/package/eslint-config-craft-ai) [![Build](https://img.shields.io/travis/craft-ai/eslint-config-craft-ai/master.svg?style=flat-square)](https://travis-ci.org/craft-ai/eslint-config-craft-ai) [![License](https://img.shields.io/badge/license-BSD--3--Clause-42358A.svg?style=flat-square)](LICENSE) [![Dev Dependencies](https://img.shields.io/david/dev/craft-ai/eslint-config-craft-ai.svg?style=flat-square)](https://david-dm.org/craft-ai/eslint-config-craft-ai#info=devDependencies)

## _(for craft ai devs)_ Releasing a new version ##

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
