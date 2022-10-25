import { test, expect } from "@playwright/test";
import { preview } from "vite";
import type { PreviewServer } from "vite";

let server: PreviewServer;

test.beforeEach(async ({ page }) => {
  server = await preview({ preview: { port: 3000 } });
  await page.goto("http://localhost:3000");
  await page.waitForTimeout(1000);
});

test.afterEach(async () => {
  await new Promise<void>((resolve, reject) => {
    server.httpServer.close((error) => (error ? reject(error) : resolve()));
  });
});

test.use({ viewport: { width: 1440, height: 1024 } });

test("dekstop visual testing", async ({ page }) => {
  await expect(page).toHaveScreenshot();
});
