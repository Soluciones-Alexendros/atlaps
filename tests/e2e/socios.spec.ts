import { test, expect } from "@playwright/test";

test("/socios/ landing serves 200 and hydrates Hero h1", async ({ page }) => {
  const response = await page.goto("/socios/");
  expect(response?.status()).toBe(200);
  // Tras hidratar el bundle, el componente Hero pinta un h1 con la frase
  // "Un atlas de domótica que se opera, no se gestiona." (public/socios/src/socios-a.jsx:45).
  // Si el bundle no carga o no hidrata, el #root queda vacío y este matcher falla,
  // por lo que sirve también como detector de regresión del drop-CDN F6.
  await expect(page.getByRole("heading", { level: 1, name: /atlas de domótica/i })).toBeVisible({
    timeout: 15_000,
  });
  // El badge "Documento confidencial" del Header sigue presente en otra parte del DOM.
  await expect(page.getByText(/documento confidencial/i).first()).toBeVisible();
});
