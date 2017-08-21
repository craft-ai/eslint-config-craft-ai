# eslint-config-craft-ai #

This is [craft ai](https://craft.ai/)'s [ESLint](http://eslint.org/)
configuration for es5 and es6.

[![Version](https://img.shields.io/npm/v/eslint-config-craft-ai.svg?style=flat-square)](https://npmjs.org/package/eslint-config-craft-ai) [![Build](https://img.shields.io/travis/craft-ai/eslint-config-craft-ai/master.svg?style=flat-square)](https://travis-ci.org/craft-ai/eslint-config-craft-ai) [![License](https://img.shields.io/badge/license-BSD--3--Clause-42358A.svg?style=flat-square)](LICENSE) [![Dependencies](https://img.shields.io/david/craft-ai/eslint-config-craft-ai.svg?style=flat-square)](https://david-dm.org/craft-ai/eslint-config-craft-ai) [![Dev Dependencies](https://img.shields.io/david/dev/craft-ai/eslint-config-craft-ai.svg?style=flat-square)](https://david-dm.org/craft-ai/eslint-config-craft-ai#info=devDependencies)


## Usage ##

### Basics ###

- Install this package and every needed dependencies using
```sh
npm install --save-dev eslint eslint-config-craft-ai \
                       eslint-plugin-wyze \ # If you have node >= 4
                       babel-eslint \ # Optional, if you are using Babel in your project
                       eslint-plugin-react \ # Optional, if your using React in your project
```

- Create a `.eslintrc` file in your project's root with the following content
```json
{
  "extends": "craft-ai"
}
```

  Or choose one of the following configurations: `craft-ai/base`, `craft-ai/react`, `craft-ai/base.babel`, `craft-ai/react.babel`.
  Default is `craft-ai/base.babel`.

  Configurations starting by `craft-ai/react` is for [React](https://facebook.github.io/react/) applications and needs `eslint-plugin-react` to be installed.

  Configurations ending by `.babel` requires `babel-eslint`.

- Optionally, create a `.eslintignore` file to list paths that won't need any linting (see
[this](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
for further details)

- Optionally, add the following to your `package.json` file
```json
{
  "scripts": {
    "lint": "eslint .",
    "fix_lint": "eslint --fix ."
  }
}
```

  You can now run `npm run lint` to check if the rules are properly applied, and
  `npm run fix_lint` to let eslint fix what is fixable.

- To make it easier to use, consider installing an [eslint plugin for your
favorite editor](http://eslint.org/docs/user-guide/integrations#editors).


## _(for craft ai devs)_ Releasing a new version ##

- Make sure the build of the master branch is passing
- Checkout the master branch locally
```sh
git fetch
git checkout master
git reset --hard origin/master
```
- Bump the version and push
```sh
npm version patch # or 'minor' or 'major'
git push origin master
git push --tags
```
