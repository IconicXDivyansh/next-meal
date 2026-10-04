import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import next from "ultracite/oxlint/next";

export default defineConfig({
  extends: [core, react, next],
  ignorePatterns: [
    ...core.ignorePatterns,
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  plugins: [
    "typescript",
    "unicorn",
    "oxc",
    "react"
  ],
  categories: {
    "correctness": "error"
  },
  rules: {},
  env: {
    "builtin": true,
    "browser": true,
    "node": true
  },
});
