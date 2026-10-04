import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  endOfLine: "lf",
  sortTailwindcss: {
    "stylesheet": "app/globals.css",
    "functions": [
      "cn",
      "cva"
    ]
  },
  ignorePatterns: [
    ...ultracite.ignorePatterns,
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "coverage/**",
    "bun.lock",
  ],
});
