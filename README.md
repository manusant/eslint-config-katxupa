# eslint-config-katxupa
ESLint configs for [Katxupa](https://github.com/manusant/Katxupa) library.

## Project Configuration
1. Add [Katxupa](https://github.com/manusant/Katxupa) library to project dependencies
```shell
npm install katxupa
pnpm add katxupa
yarn add katxupa
```
2. Add [eslint-config-katxupa](https://github.com/manusant/eslint-config-katxupa) ESLint configs
```shell
npm install --save-dev eslint-config-katxupa
pnpm add --save-dev eslint-config-katxupa
yarn add --dev eslint-config-katxupa
```
3. Activate ESLint config
```js
// .eslintrc.js
module.exports = {
    root: true,
    env: {node: true},
    extends: ["eslint:recommended", "katxupa"],
   ...
};
```