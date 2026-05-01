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

test("/socios/ Hero h1 hydrates without bundle errors", async ({ page }) => {
  await page.goto("/socios/");
  // Espera a que el bundle haya tenido oportunidad de ejecutarse.
  await page.waitForLoadState("networkidle");
  // Si el bundle lanzó un error JS, captura el detalle para depuración.
  const bundleErrors = await page.evaluate(
    () => (window as unknown as { __atlapsErrors?: unknown[] }).__atlapsErrors ?? [],
  );
  expect(bundleErrors, JSON.stringify(bundleErrors)).toEqual([]);
  // Si no hubo errores, el Hero debería estar montado.
  await expect(page.getByRole("heading", { level: 1, name: /atlas de domótica/i })).toBeVisible({
    timeout: 5_000,
  });
});
