module.exports = {
    overrides: [
        {
            files: ['*.(j|t)sx'],
            parserOptions: {
                ecmaFeatures: {
                    experimentalObjectRestSpread: true,
                    jsx: true
                },
                sourceType: 'module'
            }
        }
    ],
    extends: ['plugin:react/recommended', '@r_h_zero/eslint-config-ts'],
    settings: {
        react: {
            version: '>=16.0'
        }
    },
    rules: {
        'react/display-name': 0,
        'react/jsx-key': 0,
        'react/no-danger': 0,
        'react/forbid-prop-types': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
        'react/sort-comp': 0,
        'react/no-did-update-set-state': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-no-bind': 0,
        'react/no-array-index-key': 0,
        'react/no-children-prop': 0,
        'react/no-did-mount-set-state': 0,
        'react/no-find-dom-node': 0,
        'react/default-props-match-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/no-multi-comp': 0,
        'react/destructuring-assignment': 0,
        'react/no-access-state-in-setstate': 0,
        'react/button-has-type': 0,
        'react/require-default-props': 0,
        'react/jsx-wrap-multilines': 0,
        'react/state-in-constructor': 0,
        'react/no-render-return-value': 0,
        'react/jsx-no-useless-fragment': 0
    }
}
