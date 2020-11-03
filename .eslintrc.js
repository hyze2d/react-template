module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'unused-imports',
    'sort-imports-es6-autofix'
  ],

  extends: ['prettier/@typescript-eslint'],

  settings: {
    react: {
      version: 'detect'
    }
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'private-static-field',
          'protected-static-field',
          'public-static-field',
          'private-static-method',
          'protected-static-method',
          'public-static-method',
          'private-constructor',
          'protected-constructor',
          'public-constructor',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method'
        ]
      }
    ],

    'prettier/prettier': ['warn', { usePrettierrc: true }],

    // react start
    'react/void-dom-elements-no-children': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-redundant-should-component-update': 'warn',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
    'react/jsx-max-depth': ['warn', { max: 8 }],
    // react end

    'arrow-body-style': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'dot-notation': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-return-await': 'error',
    'valid-typeof': 'warn',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    'unused-imports/no-unused-imports': 'error',
    'use-isnan': ['error', { enforceForSwitchCase: true }]
  }
};
