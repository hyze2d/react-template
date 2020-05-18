module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace('__tests__', '__snapshots__') + snapshotExtension,

  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath + snapshotExtension;
  },

  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: '<rootDir>/src/index.spec.ts'
};
