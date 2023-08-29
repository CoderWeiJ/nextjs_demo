# 安装eslint
```bash
pnpm add -D eslint
pnpm add -D '@typescript-eslint/eslint-plugin' eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security eslint-plugin-simple-import-sort eslint-plugin-sonarjs
```
```txt
@typescript-eslint/eslint-plugin：提供 lint 规则的 ESLint 插件
eslint-config-airbnb： Airbnb 提供的 .eslintrc 的共享配置
eslint-config-prettier：关闭所有不必要或可能与Prettier冲突的规则。
eslint-plugin-jsx-a11y：静态 AST 检查器
eslint-plugin-prettier：将Prettier作为 ESLint 规则运行
eslint-plugin-react：React 特定的 linting 规则
eslint-plugin-react-hooks： ESLint 插件强制执行 Hooks 规则
eslint-plugin-security：ESLint节点安全规则
eslint-plugin-simple-import-sort: 自动修复的导入排序
eslint-plugin-sonarjs: 用于ESLint的 SonarJS 规则，用于检测代码中的 bug
```


```js
// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended"
    // "plugin:react-hooks/recommended",
  ],


  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
  },
}
```

# 安装prettier
```bash
pnpm add -D prettier
```

```js
// .prettierrc.js
module.exports = {
    tabWidth: 4,
    printWidth: 80,
    endOfLine: "auto",
    arrowParens: "avoid",
    trailingComma: "es5",
    semi: true,
    useTabs: false,
    singleQuote: false,
    bracketSpacing: true,
};
```

# 安装stylelint
```bash
pnpm add -D stylelint stylelint-config-standard stylelint-order 
```



# 安装husky和lint-staged
```bash
pnpm add -D  @commitlint/cli @commitlint/config-conventional lint-staged
```