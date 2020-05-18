const tsPaths = require('tsconfig-paths-jest')(require('../../tsconfig.json'));

module.exports = {
  rootDir: '../..',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/tests/config/enzyme.js'],
  collectCoverageFrom: ['<rootDir>/src/**/{!(spec),}.{ts,tsx}'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  // snapshotResolver: '<rootDir>/tests/config/snapshot-resolver.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/webpack/',
    '<rootDir>/env/',
    '<rootDir>/tests/'
  ],
  moduleNameMapper: {
    ...tsPaths,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/config/file-mock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
};
