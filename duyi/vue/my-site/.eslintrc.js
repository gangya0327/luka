module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ["package.json", "jsconfig.json", "public/"],
  rules: {
    'vue/attributes-order': ['error', {
      // order: [
      //   'LIST_RENDERING',
      //   'CONDITIONALS',
      //   'TWO_WAY_BINDING',
      //   'EVENTS',
      // ],
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'data',
        'computed',
        'methods',
      ],
    }],
    // 允许单文件组件名使用单个单词（Icon, Pager, Avatar 等）
    'vue/multi-word-component-names': 'off',
    "vue/max-attributes-per-line": "off"
  },
};
