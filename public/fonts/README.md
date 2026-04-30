# `/public/fonts/` — Atlaps self-hosted typography

Fuentes oficiales del sistema, servidas desde el propio dominio. **Cero requests a CDNs externos**, cumple RGPD UE sin DPA adicional.

## Inventario

| Archivo | Familia | Tipo | Uso |
|---|---|---|---|
| `fraunces-variable.woff2` | Fraunces | Variable (`opsz 9..144`, `wght 100..900`) | A · display marketing |
| `inter-variable.woff2` | Inter | Variable (`wght 100..900`) | A · body marketing |
| `jetbrains-mono-variable.woff2` | JetBrains Mono | Variable (`wght 100..800`) | A · mono marketing |
| `inter-tight-variable.woff2` | Inter Tight | Variable (`wght 100..900`) | B · display app |
| `geist-variable.woff2` | Geist | Variable (`wght 100..900`) | B · body app |
| `ibm-plex-mono-400.woff2` | IBM Plex Mono | Static · 400 | B · mono app |
| `ibm-plex-mono-500.woff2` | IBM Plex Mono | Static · 500 | B · mono app |
| `fonts.css` | — | `@font-face` declarations | importado por todos los HTML |

**Subset:** `latin + latin-ext` (suficiente para castellano peninsular y nombres europeos del catálogo Mercado).

## Procedencia

- **Fraunces** — Google Fonts · <https://fonts.google.com/specimen/Fraunces> · Undercase Type · SIL OFL 1.1.
- **Inter** — Google Fonts · <https://fonts.google.com/specimen/Inter> · Rasmus Andersson · SIL OFL 1.1.
- **Inter Tight** — Google Fonts · <https://fonts.google.com/specimen/Inter+Tight> · Rasmus Andersson · SIL OFL 1.1.
- **Geist** — Vercel · <https://vercel.com/font> · SIL OFL 1.1.
- **JetBrains Mono** — JetBrains · <https://www.jetbrains.com/lp/mono/> · SIL OFL 1.1.
- **IBM Plex Mono** — IBM · <https://github.com/IBM/plex> · SIL OFL 1.1.

Todas bajo SIL Open Font License 1.1. Permite redistribución dentro del producto sin atribución en UI (sí en este README).

## Cómo regenerar

```bash
# Fraunces (variable, opsz + wght)
curl -L "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&display=swap" \
  -H "User-Agent: Mozilla/5.0" \
  | grep -oE "https://[^)]+\.woff2" \
  | head -1 \
  | xargs curl -L -o fraunces-variable.woff2

# Inter, Inter Tight, Geist, JetBrains Mono — mismo patrón con su URL de Google Fonts.
# IBM Plex Mono — bajar 400 + 500 estáticos del repo IBM/plex (woff2/IBMPlexMono-Regular-Latin1.woff2).
```

Recomendación: usar [`google-webfonts-helper`](https://gwfh.mranftl.com/fonts) para extraer el subset latin + latin-ext en un solo paso.

## Última actualización

| Fecha | Acción |
|---|---|
| `YYYY-MM-DD` | Bootstrap inicial — placeholders en repo, descargar VF antes de deploy. |

> ⚠️ Los archivos `.woff2` listados arriba **no están todavía en el repositorio**. Este directorio define la estructura y `fonts.css`. Antes de hacer deploy a producción, ejecutar la sección "Cómo regenerar" o usar `next/font/google` (ver más abajo) que descarga en build-time.

## Estrategia dual

### A · HTML standalone (este design system, mockups, prototipos)

Los HTML del repo (`Atlaps Design System.html`, `ui_kits/landing/index.html`, `ui_kits/app/index.html`, etc.) cargan `fonts.css` por enlace relativo:

```html
<link rel="stylesheet" href="public/fonts/fonts.css" />
<link rel="preload" as="font" type="font/woff2" crossorigin href="public/fonts/inter-variable.woff2" />
```

### B · Next.js 15 producción (atlaps.com)

**No** usar `/public/fonts/` ni `@font-face` manual. En `app/layout.tsx`:

```tsx
import { Fraunces, Inter, JetBrains_Mono, Inter_Tight, Geist, IBM_Plex_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"], weight: "variable",
  variable: "--font-display-marketing", display: "swap"
});
const inter = Inter({
  subsets: ["latin", "latin-ext"], weight: "variable",
  variable: "--font-body-marketing", display: "swap"
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"], weight: "variable",
  variable: "--font-mono-marketing", display: "swap"
});
const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"], weight: "variable",
  variable: "--font-display-app", display: "swap"
});
const geist = Geist({
  subsets: ["latin", "latin-ext"], weight: "variable",
  variable: "--font-body-app", display: "swap"
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"], weight: ["400", "500"],
  variable: "--font-mono-app", display: "swap"
});

<html className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} ${interTight.variable} ${geist.variable} ${ibmPlexMono.variable}`}>
```

`next/font` descarga las fuentes en **build-time** desde Google Fonts y las sirve desde el dominio Atlaps en runtime. **Cero requests a Google en producción**, RGPD-compliant sin esfuerzo extra.

## Tokens unificados

`tokens.css` y `globals.css` mapean los tokens marketing como default y los sobrescriben con `data-surface="app"`:

```css
@theme {
  --font-display: var(--font-display-marketing, "Fraunces", Georgia, serif);
  --font-body:    var(--font-body-marketing,    "Inter", system-ui, sans-serif);
  --font-mono:    var(--font-mono-marketing,    "JetBrains Mono", ui-monospace, monospace);
}

[data-surface="app"] {
  --font-display: var(--font-display-app, "Inter Tight", "Inter", system-ui, sans-serif);
  --font-body:    var(--font-body-app,    "Geist", system-ui, sans-serif);
  --font-mono:    var(--font-mono-app,    "IBM Plex Mono", ui-monospace, monospace);
}
```

Componentes referencian `--font-display` sin saber si están en marketing o app — el switch ocurre a nivel root.
