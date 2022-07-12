const { readFileSync } = require('fs')
const { defineConfig } = require('eslint-define-config')
const { resolveModule } = require('local-pkg')

const vuePath = resolveModule('vue/package.json')

let pkg

try {
    pkg = JSON.parse(readFileSync(vuePath, 'utf8'))
} catch {}

let vueVersion = pkg && pkg.version
vueVersion = +(vueVersion && vueVersion[0])
vueVersion = Number.isNaN(vueVersion) ? 3 : vueVersion

module.exports = defineConfig({
    globals: {
        // Reactivity Transform
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $toRef: 'readonly'
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off'
            },
            globals: {
                // script setup
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',

                // RFC: https://github.com/vuejs/rfcs/discussions/430
                defineOptions: 'readonly'
            }
        }
    ],
    extends: [
        vueVersion === 3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
        '@r_h_zero/eslint-config-ts'
    ],
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/prefer-import-from-vue': 'off',

        // reactivity transform
        'vue/no-setup-props-destructure': 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ],
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always'
            }
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineProps', 'defineEmits']
            }
        ],
        'vue/html-comment-content-spacing': [
            'error',
            'always',
            {
                exceptions: ['-']
            }
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/prefer-separate-static-class': 'error',

        // extensions
        'vue/array-bracket-spacing': ['error', 'never'],
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { before: false, after: true }],
        'vue/comma-style': ['error', 'last'],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        // 'vue/func-call-spacing': ['off', 'never'],
        'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'vue/keyword-spacing': ['error', { before: true, after: true }],
        'vue/no-constant-condition': 'warn',
        'vue/no-empty-pattern': 'error',
        'vue/no-extra-parens': ['error', 'functions'],
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        'vue/no-sparse-arrays': 'error',
        'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'vue/object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true
            }
        ],
        'vue/operator-linebreak': ['error', 'before'],
        'vue/prefer-template': 'error',
        'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
        'vue/template-curly-spacing': 'error'
    }
})
