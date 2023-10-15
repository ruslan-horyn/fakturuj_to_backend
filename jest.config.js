/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    './jest-setup-file.ts',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/test/**/*',
    '!<rootDir>/node_modules/',
  ],
  coverageDirectory: 'reports/coverage',
};