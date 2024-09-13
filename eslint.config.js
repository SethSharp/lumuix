import pluginJs from '@eslint/js'
import ts from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,ts,vue}'],
  },

  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  pluginJs.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/no-undef-components': 'error',
      'vue/no-unused-refs': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
