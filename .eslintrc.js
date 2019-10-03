module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/typedef": ["error"],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: false
      }
    ]
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": ["error"]
      }
    }
  ]
}
