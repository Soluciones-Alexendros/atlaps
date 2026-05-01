import { test, expect } from "@playwright/test";

test("/socios/ landing renders confidential header (200 OK)", async ({ page }) => {
  const response = await page.goto("/socios/");
  expect(response?.status()).toBe(200);
  // El bundle de socios pinta el HTML del Header tras hidratación; esperamos
  // un h1 cuyo texto contenga "confidencial" (insensible a mayúsculas/acentos).
  await expect(page.getByRole("heading", { level: 1, name: /confiden/i })).toBeVisible({
    timeout: 15_000,
  });
});
