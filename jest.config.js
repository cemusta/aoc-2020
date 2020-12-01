module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/test',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '((\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    'commands/**/*.{js,ts}',
    '!**/database/**',
    '!**/node_modules/**',
  ],
  testEnvironment: 'node',
};
