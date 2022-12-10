/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  //testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
