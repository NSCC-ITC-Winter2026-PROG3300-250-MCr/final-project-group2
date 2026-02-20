module.exports = {
  root: true,
  env: { node: true, es2022: true },
  extends: ['eslint:recommended'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'out/',
    '.next/',
    'coverage/',
    '.eslintrc.*'
  ]
};
