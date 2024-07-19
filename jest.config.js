/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-fileTransformer.js",
  },
};

// IntelliJ doesn't know that this export actually *is used*
// noinspection JSUnusedGlobalSymbols
export default config;
