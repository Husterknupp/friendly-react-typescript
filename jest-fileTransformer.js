import path from "path";

const config = {
  process(sourceText, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};

// IntelliJ doesn't know that this export actually *is used*
// noinspection JSUnusedGlobalSymbols
export default config;
