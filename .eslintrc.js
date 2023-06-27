module.exports = {
  extends: ["react-app", "react-app/jest", "eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: ["public/", "build/"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-unused-prop-types": 2
  },
  overrides: [
    {
      files: ["src/docs/pages/**/index.tsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-webpack-loader-syntax": "off"
      }
    }
  ]
};
