import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

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
  //   todo 'react/react-in-jsx-scope' to be disabled
  pluginReact.configs.flat.recommended,
  //   todo enable
  // react-hooks/exhaustive-deps
  // react-refresh/only-export-components
];
