module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/multi-word-component-names': 0
  }
};
