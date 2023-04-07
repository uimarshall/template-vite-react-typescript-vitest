module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb', // Add this line
    'airbnb/hooks', // Add this line
    'airbnb-typescript', // Add add support for TypeScript as well since we use it in our project
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
