// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/define-emits-declaration': ['error', 'type-literal'],
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'ATTR_DYNAMIC',
          'ATTR_STATIC',
          'ATTR_SHORTHAND_BOOL',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-plusplus': 'error',
    'no-implicit-coercion': 'error',
    'no-unneeded-ternary': 'error',
    curly: 'error',
    'no-console': [
      'error',
      {
        allow: ['info', 'error'],
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    eqeqeq: 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
  },
});
