# Friendly React + TypeScript Starter

A minimal-yet-practical React 19 + TypeScript + Vite starter that keeps its toolchain up to date and guarded by automated regression checks. It ships with a working component, Jest + React Testing Library setup, and CI workflows that continuously validate build quality and linting rules.

## Highlights

- React 19 with TypeScript, bundled by Vite 7 for instant-dev feedback and optimized builds
- Jest 30 + React Testing Library preconfigured for fast component and unit tests
- ESLint 9 and Prettier 3 enforced in CI with zero-warning policy
- GitHub Actions workflow runs test, build, lint, and ESLint rule regression checks on every push/PR
- Dependabot (monthly) keeps npm dependencies current with grouped updates

## Requirements

- Node.js `v22` LTS (defined in `.nvmrc`)
- npm 10+ (bundled with Node 22)

If you use `nvm`, run `nvm use` to switch to the correct runtime before installing dependencies.

## Getting Started

```bash
npm install
npm run dev
```

The Vite dev server prints the local and network URLs. Hot Module Replacement is enabled out of the box; update files in `src/` and your changes appear instantly.

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run test` — execute the Jest test suite in watchless mode
- `npm run lint` — lint and format check with ESLint + Prettier (fails on warnings)
- `npm run build` — type-check via `tsc --build` and produce a production bundle under `dist/`
- `npm run preview` — serve the production build locally
- `npm run eslint-rules-overview` — regenerate `eslint-active-errors.json` / `eslint-active-warnings.json` to compare rule changes across dependency upgrades

## Quality Gates & Automation

GitHub Actions (`.github/workflows/push_and_pull-request.yaml`) run on every push and pull request to:

- install dependencies with `npm ci`
- run the Jest suite, build, and lint checks
- detect unexpected ESLint rule changes by comparing the generated JSON rule snapshots to the committed versions

This provides confidence that dependency updates—automatic or manual—do not silently alter lint behaviour or break the build.

Dependabot (`.github/dependabot.yml`) submits monthly npm update PRs using a grouped minor/patch strategy to simplify maintenance.

## Updating Tooling

After upgrading dependencies (manually or via Dependabot):

1. Run `npm run eslint-rules-overview` to regenerate the rule snapshots.
2. Review the diff; if the lint surface changes unexpectedly, adjust `eslint.config.js` before committing. Or the warning/error json files if you're confident that it's a good change.
3. Execute `npm run test`, `npm run build`, and `npm run lint` locally to mirror the CI gates.

## License

This project is licensed under the [MIT License](LICENSE).
