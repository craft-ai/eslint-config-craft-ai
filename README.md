# eslint-config-craft-ai #

This is [craft ai](https://craft.ai/)'s [ESLint](http://eslint.org/)
configuration for es5 and es6.

[![Version](https://img.shields.io/npm/v/eslint-config-craft-ai.svg?style=flat-square)](https://npmjs.org/package/eslint-config-craft-ai) [![Build](https://img.shields.io/travis/craft-ai/eslint-config-craft-ai/master.svg?style=flat-square)](https://travis-ci.org/craft-ai/eslint-config-craft-ai) [![License](https://img.shields.io/badge/license-BSD--3--Clause-42358A.svg?style=flat-square)](LICENSE) [![Dev Dependencies](https://img.shields.io/david/dev/craft-ai/eslint-config-craft-ai.svg?style=flat-square)](https://david-dm.org/craft-ai/eslint-config-craft-ai#info=devDependencies)

## Usage ##

1. Install this package and every needed dependencies using
````sh
npm install eslint-config-craft-ai --save-dev --save-exact
````
2. Create a `.eslintrc` file in your project's root with the following content
````json
{
  "extends": "craft-ai"
}
````
3. Create a `.eslintignore` file to list pathes that won't need any linting (see
[this](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
for further details)
4. To easily run the lint add the following to your `package.json` file
````json
{
  "scripts": {
    "lint": "eslint ."
  }
}
````
5. To make it easier to use, consider installing an [eslint plugin for your
favorite editor](http://eslint.org/docs/user-guide/integrations#editors).

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
