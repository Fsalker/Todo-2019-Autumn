module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": [2, {
      code: 150,
    }],
    "consistent-return": "off",
    "react/jsx-filename-extension": "off",
    "react/button-has-type": "off",
    "arrow-body-style": "off"
  },
};
