module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-end-tags': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'single'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}