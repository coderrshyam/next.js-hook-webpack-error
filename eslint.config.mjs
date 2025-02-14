import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "no-var": "error",
      semi: ["error", "always"],
      "prefer-template": "error",
      "no-param-reassign": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      quotes: ["error", "double", { avoidEscape: true }],
      "comma-spacing": ["error", { before: false, after: true }],
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  }),
];

export default eslintConfig;
