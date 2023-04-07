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
    'plugin:react/jsx-runtime',
    // 'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // Add this line as well
  },
  plugins: ['react'],
  rules: {},
};
