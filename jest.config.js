
module.exports = {
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    }
  },
  setupFiles: ['<rootDir>src/setupTests.js'],
  verbose: true
};