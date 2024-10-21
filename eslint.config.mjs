import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    //   files: ["*/*.ts", "*/*.tsx"],
    ignores: [
      ".history/**",
      "dist/",
      "eslint.config.mjs",
      "jest.config.js",
      "jest-fileTransformer.js",
      "**/vite.config.ts",
      // "**/.eslintrc.cjs",
    ],
  },

  ...fixupConfigRules(compat.extends("eslint:recommended")),
  // ...fixupConfigRules(compat.extends("eslint:recommended")).map((config) => {
  //   return { ...config, ignores: ["vite.config.ts"] };
  // }),
  ...fixupConfigRules(
    compat.extends(
      // "eslint:recommended",
      "plugin:@typescript-eslint/strict-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react/jsx-runtime",
    ),
  ),
  {
    files: ["*/*.ts", "*/*.tsx"],

    plugins: {
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        projectService: true,
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
