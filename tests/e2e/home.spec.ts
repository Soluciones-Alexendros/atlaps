import { test, expect } from "@playwright/test";

test("home page exposes Atlaps h1", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: /atlaps/i })).toBeVisible();
});
