import { test, expect } from "@playwright/test";
import { preview } from "vite";
import type { PreviewServer } from "vite";

let server: PreviewServer;

test.beforeEach(async ({ page }) => {
  server = await preview({ preview: { port: 3000 } });
  await page.goto("http://localhost:3000");
});

test.afterEach(async () => {
  await new Promise<void>((resolve, reject) => {
    server.httpServer.close((error) => (error ? reject(error) : resolve()));
  });
});

test("should have the correct title", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/news homepage/i);
});
