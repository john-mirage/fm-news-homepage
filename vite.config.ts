/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[folder]__[local]__[hash:base64:5]",
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@data": resolve(__dirname, "src/data"),
      "@images": resolve(__dirname, "src/images"),
      "@styles": resolve(__dirname, "src/styles"),
      "@tests": resolve(__dirname, "src/tests"),
    },
  },
  test: {
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
});
