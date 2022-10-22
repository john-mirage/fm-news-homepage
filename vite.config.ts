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
      "@styles": resolve(__dirname, "src/styles"),
      "@images": resolve(__dirname, "src/images"),
      "@test": resolve(__dirname, "src/test"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    //css: true,
  },
});
