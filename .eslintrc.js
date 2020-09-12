const path = require('path');

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    plugins: [
        '@typescript-eslint',
        'graphql',
        'import',
        'prettier',
        'unused-imports',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/eslint-recommended', // Disables ESLint rules that are unnecessary with TS linting
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        // defines how GraphQL is recognized
        'graphql/template-strings': [
            'error',
            {
                env: 'relay',
                schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
                tagName: 'graphql',
            },
        ],

        'import/no-deprecated': 'warn',
        'react/jsx-no-duplicate-props': [
            2,
            {
                ignoreCase: false,
            },
        ],
        'react/prop-types': 'off', // Props validation is not needed when using TypeScript
        'react/react-in-jsx-scope': 'off', // Doesn't work with Next.js
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': 'error',
    },
    settings: {
        'import/extensions': ['.js', '.ts'],
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
