import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import reactRefresh from "eslint-plugin-react-refresh";

const compat = new FlatCompat();

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      ".history/**",
      "dist/",
      "eslint.config.js",
      "jest.config.js",
      "jest-fileTransformer.js",
      "**/vite.config.ts",
      "eslint-script-rules-overview.js",
    ],
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"] /* if you are using React 17+ */,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
  reactRefresh.configs.recommended,
];
