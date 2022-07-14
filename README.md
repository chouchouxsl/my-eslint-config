# @r_h_zero/eslint-config

## Usage

```bash
pnpm i -D @r_h_zero/eslint-config-basic # JavaScript only
pnpm i -D @r_h_zero/eslint-config-prettier # Prettier only
pnpm i -D @r_h_zero/eslint-config-ts # JavaScript and TypeScript
pnpm i -D @r_h_zero/eslint-config-react # JavaScript, TypeScript and react
pnpm i -D @r_h_zero/eslint-config-vue # JavaScript, TypeScript and Vue
pnpm i -D @r_h_zero/eslint-config # JavaScript, TypeScript, Vue 3 and Prettier
```

## Quick start

```bash
pnpm i -D @r_h_zero/eslint-config
```

```jsonc
// .eslintrc.json
{
    "extends": "@r_h_zero",
    "rules": {
        // your rules...
    }
}
```

```jsonc
// .prettierrc
{
    "arrowParens": "avoid",
    "semi": false,
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 4,
    "htmlWhitespaceSensitivity": "ignore",
    "trailingComma": "none",
    "proseWrap": "preserve",
    "useEditorConfig": false
}
```

### VSCode

```jsonc
// settings.json
{
    "prettier.enable": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## Thanks

This project is based on [antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

MIT License © 2021-PRESENT [R_h_zero](https://github.com/chouchouxsl)
