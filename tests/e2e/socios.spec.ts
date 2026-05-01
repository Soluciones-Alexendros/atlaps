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
  // Captura mensajes de consola, errores de pagina, requests fallidos y respuestas !=200.
  const consoleMsgs: string[] = [];
  page.on("console", (m) => consoleMsgs.push(`[${m.type()}] ${m.text()}`));
  page.on("pageerror", (e) => consoleMsgs.push(`[pageerror] ${e.message}`));
  page.on("response", (r) => {
    if (r.status() >= 400) consoleMsgs.push(`[${r.status()}] ${r.url()}`);
  });
  page.on("requestfailed", (r) =>
    consoleMsgs.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText ?? ""}`),
  );

  await page.goto("/socios/");
  // Espera a que el bundle haya tenido oportunidad de ejecutarse.
  await page.waitForLoadState("networkidle");

  // Snapshot de diagnostico: window.__atlapsErrors + estado de globals + #root.
  const diag = await page.evaluate(() => {
    const w = window as unknown as {
      __atlapsErrors?: unknown[];
      React?: unknown;
      ReactDOM?: unknown;
      SociosBlocksA?: unknown;
      SociosBlocksB?: unknown;
      SociosBlocksC?: unknown;
    };
    const root = document.getElementById("root");
    return {
      errors: w.__atlapsErrors ?? [],
      bundleErrorAttr: document.documentElement.getAttribute("data-bundle-error"),
      rootChildren: root ? root.children.length : -1,
      rootInnerLen: root ? root.innerHTML.length : -1,
      h1Count: document.querySelectorAll("h1").length,
      firstH1Text: document.querySelector("h1")?.textContent ?? null,
      hasReact: typeof w.React !== "undefined",
      hasReactDOM: typeof w.ReactDOM !== "undefined",
      hasSociosA: typeof w.SociosBlocksA !== "undefined",
      hasSociosB: typeof w.SociosBlocksB !== "undefined",
      hasSociosC: typeof w.SociosBlocksC !== "undefined",
    };
  });

  const diagStr = JSON.stringify({ ...diag, consoleMsgs }, null, 2);
  expect(diag.errors, diagStr).toEqual([]);
  // Si no hubo errores, el Hero deberia estar montado.
  await expect(
    page.getByRole("heading", { level: 1, name: /atlas de domótica/i }),
    diagStr,
  ).toBeVisible({ timeout: 5_000 });
});
