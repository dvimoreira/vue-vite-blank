module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'\
    "vue/multi-word-component-names": "off",
    "vue/no-undef-properties": [
      "error",
      {
        ignores: ["/^\\$/"],
      },
    ],
  },
};