/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.js"],
  moduleFileExtensions: ["js", "json"],
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
  clearMocks: true,
  restoreMocks: true,
  setupFiles: ["<rootDir>/tests/setup.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup-after-env.js"],
  transform: { "\\.js$": "babel-jest" },
};
