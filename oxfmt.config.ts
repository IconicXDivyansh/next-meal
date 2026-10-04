import { defineConfig } from "oxfmt"
import ultracite from "ultracite/oxfmt"

export default defineConfig({
  ...ultracite,
  endOfLine: "lf",
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "coverage/**",
    "bun.lock",
  ],
  printWidth: 80,
  semi: false,
  singleQuote: false,
  sortTailwindcss: {
    functions: ["cn", "cva"],
    stylesheet: "app/globals.css",
  },
  tabWidth: 2,
  trailingComma: "es5",
})
