require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
extends: ["@microsoft/eslint-config-spfx/lib/profiles/react"],
parserOptions: { tsconfigRootDir: __dirname },

overrides: [
{
files: ["*.ts", "*.tsx"],
parser: "@typescript-eslint/parser",
parserOptions: {
project: "./tsconfig.json",
ecmaVersion: 2018,
sourceType: "module",
},


  rules: {
    "@rushstack/no-new-null": 1,
    "@rushstack/hoist-jest-mock": 1,
    "@rushstack/import-requires-chunk-name": 1,
    "@rushstack/pair-react-dom-render-unmount": 1,
    "@rushstack/security/no-unsafe-regexp": 1,

    "@typescript-eslint/adjacent-overload-signatures": 1,

    /* 🔧 Disable problematic rules */
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "promise/param-names": "off",

    "@typescript-eslint/explicit-function-return-type": [
      1,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],

    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-array-constructor": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-for-in-array": 2,
    "@typescript-eslint/no-misused-new": 2,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/parameter-properties": 0,

    "@typescript-eslint/no-unused-vars": [
      1,
      {
        vars: "all",
        args: "none"
      }
    ],

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-namespace-keyword": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-empty-interface": 0,

    "accessor-pairs": 1,
    "dot-notation": 1,
    "eqeqeq": 1,
    "guard-for-in": 2,
    "max-lines": ["warn", { max: 2000 }],
    "no-debugger": 1,
    "no-duplicate-case": 2,
    "no-eval": 1,
    "no-implied-eval": 2,
    "no-invalid-regexp": 2,
    "no-new": 1,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 1,
    "no-octal": 2,
    "no-regex-spaces": 2,
    "no-return-assign": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 1,
    "no-useless-concat": 1,
    "no-var": 2,
    "prefer-const": 1,
    "require-atomic-updates": 2,
    "require-yield": 1,
    "use-isnan": 2,

    "@microsoft/spfx/no-require-ensure": 2
  }
}


]
};
