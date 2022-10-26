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

test.use({ viewport: { width: 1440, height: 1024 } });

test("dekstop", async ({ page }) => {
  await expect(page).toHaveScreenshot("desktop.png", {
    animations: "disabled",
  });
});

test.use({ viewport: { width: 375, height: 1872 } });

test("mobile", async ({ page }) => {
  await expect(page).toHaveScreenshot("mobile.png", { animations: "disabled" });
});

test.use({ viewport: { width: 375, height: 669 } });

test.only("mobile menu", async ({ page }) => {
  const button = page.locator('role=button[name="open the sidebar"]');
  await button.click();
  await expect(page).toHaveScreenshot("mobile-menu.png", {
    animations: "disabled",
  });
});
