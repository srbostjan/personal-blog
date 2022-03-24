module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/__test__/setupTest.js',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@containers(.*)$': '<rootDir>/src/containers$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
  },
};
