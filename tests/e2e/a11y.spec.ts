import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes: Array<{ path: string; name: string }> = [
  { path: "/", name: "home" },
  { path: "/socios/", name: "socios" },
];

for (const { path, name } of routes) {
  test(`${name} (${path}) · axe-core sin violaciones críticas`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter((v) => v.impact === "critical");
    expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
  });
}
