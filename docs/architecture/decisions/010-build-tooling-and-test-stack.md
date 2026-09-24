# ADR 010 · Build tooling y stack de tests

- Fecha: 2026-05-01
- Estado: Aceptado
- Sucede a: ADR 009 (deps fijadas)
- Relacionado con: F6 (CDN drop) + F7 (tests) del plan propuesta\_#61

## Contexto

`public/socios/` carga React + ReactDOM + `@babel/standalone` desde unpkg.com en runtime y compila JSX en el navegador. La CSP que entra con F5 (`vercel.json`) prohíbe `unsafe-eval` y `script-src 'self' https://unpkg.com` no es admisible: hay que servir los runtimes desde el mismo dominio y precompilar JSX.

Los tokens de diseño viven duplicados en tres CSS:

- `app/globals.css` con Tailwind v4 `@theme { --color-* }`.
- `packages/design-system/tokens.css` (mismo formato `@theme`).
- `packages/design-system/colors_and_type.css` con `:root { --blueprint-* }` + utilidades `.t-h1`, `.kicker`, etc.
- `public/socios/styles/colors_and_type.css` (copia legacy del anterior).

Las HTMLs no-Next (showcase + 5 preview + 2 ui_kits + socios) usan los nombres legacy `--blueprint-deep` (sin prefijo `--color-`) y las clases utilitarias `.t-h1`. Eliminar `colors_and_type.css` rompería 638 referencias.

No hay tests automatizados. El CI ejecuta `pnpm test --passWithNoTests` con `continue-on-error: true`.

## Decisión

### 1) Drop CDN runtime de socios

- Self-host React 18.3.1 UMD en `public/socios/vendor/` con SRI sha384 (descargado del tarball de npm en `scripts/build-socios.sh`).
- Sustituir `@babel/standalone` por `esbuild` (devDep) que transforma JSX → JS classic (`React.createElement`) en build-time. Sin `--bundle`: cada `*.jsx` se transforma de forma independiente y se concatena en `bundle.js` (los JSX comparten globals via `window.X`).
- `package.json#scripts.build` precede `next build` con `bash scripts/build-socios.sh`.

### 2) Tokens single-source dual

- `packages/design-system/tokens.css` = source canónico Tailwind v4 (`@theme { --color-* }`) para el app Next. Importado por `app/globals.css`.
- `packages/design-system/colors_and_type.css` = source canónico legacy (`:root { --blueprint-* }` + `.t-*` utilitarias) para todos los HTML no-Next.
- `public/socios/styles/colors_and_type.css` = regenerado en build desde `packages/design-system/colors_and_type.css` con cabecera "NO editar". Gitignored.
- Aceptamos drift de hex entre los dos sources canónicos como riesgo controlado; vitest assertion en `tokens.test.ts` cubre los 4-5 hex críticos.

### 3) Stack de tests

- Vitest 4.1 + jsdom + Testing Library para tests unitarios y de integración ligera (script `pnpm test`).
- Playwright 1.59 + axe-core para E2E + a11y (script `pnpm test:e2e`).
- Estructura: `app/__tests__/`, `lib/__tests__/`, `packages/**/__tests__/`, `tests/e2e/`.
- CI: job `ci` ejecuta vitest tras lint/typecheck; job `e2e` paralelo con `needs: ci` instala chromium y corre Playwright.

## Alternativas descartadas

- **Bundle JSX con esbuild `--bundle --jsx=automatic --external:react`**: emite `import { jsx } from "react/jsx-runtime"` que el navegador no puede resolver. Descartado en favor de `--jsx=transform --jsx-factory=React.createElement`.
- **Webpack/Rollup para socios**: overkill para 4 ficheros JSX que comparten globales.
- **Deduplicar `colors_and_type.css` y `tokens.css` ahora**: requeriría renombrar 638 referencias (`--blueprint-deep` → `--color-blueprint-deep`) y migrar las clases `.t-*` a Tailwind utilities. Trabajo no encajado en F6.
- **Jest en lugar de Vitest**: integración nativa con Vite/esbuild + velocidad superior; Jest aporta poco aquí.

## Consecuencias

Positivas:

- CSP estricta posible (`script-src 'self'`); cierra la puerta a `unsafe-eval`.
- Build reproducible offline tras la primera descarga del tarball UMD.
- Tests automatizados acoplan F6+F7 a CI; el `e2e` job es opt-in vía `needs: ci` para no penalizar PRs que no tocan UI.

Negativas / deuda:

- ~~`packages/design-system/showcase.html` aún usa unpkg + babel-standalone (artefacto local-only de design system; no se sirve en prod). Pendiente de mismo tratamiento si en algún momento se publica.~~ **Resuelto en W0F**: `scripts/build-showcase.sh` aplica el mismo patrón que `build-socios.sh` (React UMD self-host en `packages/design-system/vendor/` + bundle precompilado `showcase-bundle.js` con esbuild + SRI sha384). Cero hits CDN en runtime; expuesto como `pnpm build:showcase`.
- Dos CSS canónicos (`tokens.css` y `colors_and_type.css`) introducen drift potencial; mitigado con vitest assertions sobre hex críticos.

## Verificación

```bash
pnpm install
bash scripts/build-socios.sh   # vendor + bundle.js + tokens copy + index.html
pnpm lint && pnpm typecheck && pnpm format:check
pnpm test                       # vitest 9 tests
pnpm build                      # build-socios + next build
grep -rnE 'unpkg\.com|cdn\.jsdelivr|fonts\.googleapis|fonts\.gstatic' public/ packages/ apps/ app/ docs/
# 0 hits en runtime tras W0F (build-showcase.sh resuelve §62); solo referencias documentales en docs/
```
