module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupFiles: ['<rootDir>/__tests__/setup.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  testPathIgnorePatterns: ['/__tests__/setup.js', '/e2e'],
};
