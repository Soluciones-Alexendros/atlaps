# `packages/design-system` · Sistema de diseño Atlaps

Sistema de diseño completo del producto Atlaps, generado con Design de Claude e iterado en este monorepo.

## Contenido

- `showcase.html` — página única navegable con las 10 secciones del system (brand, colors, typography, spacing, motion, iconography, components, patterns, tokens CSS, notes). Single-page autocontenida. Para abrirla localmente, primero ejecuta `pnpm build:showcase` (descarga React UMD a `vendor/` y compila los JSX a `showcase-bundle.js`); ambos artefactos están en `.gitignore`.
- `tokens.css` — tokens Tailwind v4 con `@theme` directive. Fuente única de verdad.
- `colors_and_type.css` — espejo dirigido a páginas standalone que no tienen pipeline Tailwind.
- `tweaks-panel.jsx` — infraestructura "Make tweakable" reusable (sliders, radios, etc.) para iterar tokens en vivo.
- `src/` — 7 módulos JSX que componen el showcase (app, components, icons, logo, patterns, sections-1, sections-2).
- `preview/` — 5 cards para el panel del Design System (color, typography, spacing, components, brand).
- `ui_kits/` — landing pública (mock) y app autenticada (mock con canvas blueprint) generadas como referencia visual.
- `assets/` — logos (icon, horizontal, vertical, favicon).
- `SKILL.md` — invocación como skill de Claude.

## Cómo consumir

### Desde el portal Next.js (root del repo)

```css
/* app/globals.css */
@import "tailwindcss";
/* Los tokens están duplicados en app/globals.css por simplicidad. Si esto crece, importar:
   @import "../packages/design-system/tokens.css";
*/
```

### Desde una `apps/*` futura

Cada Next.js de `apps/web/`, `apps/platform/` etc debe:

1. Copiar los tokens de `packages/design-system/tokens.css` a su `app/globals.css` (o importarlos vía workspace).
2. Cargar las fuentes via `next/font/google` (no requiere los WOFF2 de `public/fonts/`; build-time download + auto self-host).
3. Heredar el componente `<Logo />` de `packages/design-system/src/logo.jsx` (cuando se porte a TSX en F2).

### Desde un HTML standalone

```html
<link rel="stylesheet" href="/fonts/fonts.css" />
<link rel="stylesheet" href="/path/to/colors_and_type.css" />
```

## Restricciones

- **Marca independiente blueprint** (ADR 007). NO heredar de Vergina Imperial.
- **Configuración tipográfica dual:** A (Fraunces + Inter + JetBrains Mono) en marketing; B (Inter Display + Geist + IBM Plex Mono) en app autenticada.
- **Söhne descartado en F0–F2** por coste de licencia comercial. Usar Inter Display como fallback.
- **Ámbar en oscuro:** promoción obligatoria a `--amber-glow` por contraste WCAG 2.2 AA. Ver ADR pendiente sobre tipografía dual y promoción de ámbar.

## Roadmap del sistema

- F0 ✅ · v0 generado con Design de Claude (showcase + ui_kits + preview + tokens + 24 iconos vía Lucide).
- F1 ⏳ · auditoría axe-core, ajuste de pares de contraste, primer set de iconos propios (8 protocolos).
- F2 ⏳ · port a TSX en `packages/ui/`, integración con shadcn/ui, Storybook 9.
- F3 ⏳ · set propio completo de 24 iconos blueprint-style, retiro definitivo de Lucide para iconos del producto.

## Briefs origen

Ver `docs/briefs/`:
- `design-system.md` — generación del system standalone.
- `prototype-landing-app.md` — landing+app pública.
- `landing-socios.md` — presentación privada para socios.

## ADRs relevantes

- `docs/adr/007-marca-independiente-blueprint.md` — decisión cromática y tipográfica.
- ADR pendiente · tipografía dual A marketing / B app + promoción amber-glow en oscuro.
