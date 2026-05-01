import { test, expect } from "@playwright/test";

test("/socios/ landing serves 200 with bundle wired", async ({ page }) => {
  const response = await page.goto("/socios/");
  expect(response?.status()).toBe(200);
  // Verifica que el HTML servido es la presentación de socios (no un 404 page)
  // y que el bundle generado por scripts/build-socios.sh está enlazado, sin
  // referencias residuales a CDNs externos (regresión F6.1).
  const html = await page.content();
  expect(html).toContain('<div id="root">');
  expect(html).toMatch(/<script[^>]*src=["']bundle\.js["']/);
  expect(html).not.toMatch(/unpkg\.com|cdn\.jsdelivr/);
});

// TODO: re-enable hydration assertion once we can capture browser console
// errors from the bundle in CI. Local manual check on /socios/ in a real
// browser is the current verification path. See PR #20 thread.
test.skip("/socios/ Hero h1 hydrates with React 18 UMD globals", async ({ page }) => {
  await page.goto("/socios/");
  await expect(page.getByRole("heading", { level: 1, name: /atlas de domótica/i })).toBeVisible({
    timeout: 15_000,
  });
});
