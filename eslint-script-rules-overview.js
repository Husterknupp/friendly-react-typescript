import { execSync } from "child_process";
import fs from "fs";
import prettier from "prettier";

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
        case 0:
          // ignore because it's disabled
          break;
        default:
          throw new Error(`unknown severity: '${severity}' for rule '${rule}'`);
      }
    } else {
      switch (configValue) {
        case 2:
          errorRules[rule] = "error";
          break;
        case 1:
          warningRules[rule] = "warning";
          break;
        case 0:
          // ignore because it's disabled
          break;
        default:
          throw new Error(
            `unknown severity: '${configValue}' for rule '${rule}'`,
          );
      }
    }
  }
  prettier
    .format(JSON.stringify(errorRules), {
      parser: "json",
    })
    .then((formattedString) => {
      fs.writeFileSync("eslint-active-errors.json", formattedString);
    });

  prettier
    .format(JSON.stringify(warningRules), {
      parser: "json",
    })
    .then((formattedString) => {
      fs.writeFileSync("eslint-active-warnings.json", formattedString);
    });
}

createOverviewFiles();
