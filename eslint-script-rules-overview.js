import { execSync } from "child_process";
import fs from "fs";

function createOverviewFiles() {
  const eslintConfig = JSON.parse(
    execSync("npx eslint --print-config src/App.tsx").toString(),
  );

  const warningRules = {};
  const errorRules = {};
  for (const rule in eslintConfig.rules) {
    const configValue = eslintConfig.rules[rule];
    if (Array.isArray(configValue)) {
      const severity = configValue[0];
      const [_, ...options] = configValue;
      switch (severity) {
        case 2:
          errorRules[rule] = ["error", ...options];
          break;
        case 1:
          warningRules[rule] = ["warning", ...options];
          break;
      }
    } else {
      switch (configValue) {
        case 2:
          errorRules[rule] = "error";
          break;
        case 1:
          warningRules[rule] = "warning";
          break;
      }
    }
  }

  fs.writeFileSync(
    "eslint-active-errors.json",
    JSON.stringify(errorRules, null, 2),
  );
  fs.writeFileSync(
    "eslint-active-warnings.json",
    JSON.stringify(warningRules, null, 2),
  );
}

createOverviewFiles();
