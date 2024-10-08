# React + TypeScript + Vite + Jest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

It uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (uses [SWC](https://swc.rs/)) for Fast Refresh. An alternative is [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Troubleshooting

### Cannot use JSX unless the '--jsx' flag is provided

TypeScript is complaining in the jsx part of .tsx files

Solution:

- Use project's typescript version
- Restart language service
- explicitly re-compile project
