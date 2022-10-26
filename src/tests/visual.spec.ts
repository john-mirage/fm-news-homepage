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

test.describe("desktop", () => {
  test.use({ viewport: { width: 1440, height: 1024 } });

  test.only("initial", async ({ page }) => {
    await expect(page).toHaveScreenshot("desktop.png", {
      animations: "disabled",
    });
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 375, height: 1872 } });

  test("initial", async ({ page }) => {
    await expect(page).toHaveScreenshot("mobile.png", {
      animations: "disabled",
    });
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 375, height: 669 } });

  test("initial", async ({ page }) => {
    const button = page.locator('role=button[name="open the sidebar"]');
    await button.click();
    await expect(page).toHaveScreenshot("mobile-menu.png", {
      animations: "disabled",
    });
  });
});
