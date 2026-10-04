import { defineConfig } from "oxlint"
import core from "ultracite/oxlint/core"
import next from "ultracite/oxlint/next"
import react from "ultracite/oxlint/react"

export default defineConfig({
  categories: {
    correctness: "error",
  },
  env: {
    browser: true,
    builtin: true,
    node: true,
  },
  extends: [core, react, next],
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  plugins: ["typescript", "unicorn", "oxc", "react"],
  rules: {},
})
