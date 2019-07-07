
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>src/**/*.js'],
  coverageDirectory: '<rootDir>__coverage__',
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    }
  },
  setupFiles: ['<rootDir>src/setupTests.js'],
  verbose: true,
};