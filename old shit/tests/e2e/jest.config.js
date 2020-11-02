module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testMatch: ['./**/*.(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/webpack/', '<rootDir>/src/'],
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './environment.js'
};
