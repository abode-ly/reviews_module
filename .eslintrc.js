module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    jest: 'readonly',
  },
  plugins: [
    'react', 'jest'
  ],
  rules: {
  },
};
