import eslint from "@eslint/js";
import globals from "globals";
import ts_eslint from "typescript-eslint";

import * as tsParser from "@typescript-eslint/parser";
import solid from "eslint-plugin-solid/configs/typescript";

// import typescriptRecommended from "@typescript-eslint/eslint-plugin/dist/configs/recommended";
// import tailwindRecommended from "eslint-plugin-tailwindcss/recommended";
// import prettierRecommended from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ts_eslint.configs.recommended,
  // solidRecommended,
  // typescriptRecommended,
  // tailwindRecommended,
  // prettierRecommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: ["watch.js", "dist/**"],
    ...solid,
    // extends: [
    // "plugin:solid/recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:tailwindCSS/recommended",
    // "prettier",
    // ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node, // needed for linting vite.config.ts
        chrome: "readonly",
      },
    },

    // legacy config
    // parser: "@typescript-eslint/parser",
    // parserOptions: {
    //   ecmaFeatures: {
    //     jsx: true,
    //   },
    //   ecmaVersion: "latest",
    //   sourceType: "module",
    // },
    // plugins: ["solid", "@typescript-eslint"],
    // rules: {},
  },
];