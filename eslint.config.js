const htmlPlugin = require('eslint-plugin-html');

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error",
      "no-redeclare": "error",
      "no-use-before-define": "error"
    }
  },
  {
    files: ["**/*.html"],
    plugins: {
      html: htmlPlugin
    },
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error"
    }
  }
];
