# UI Kits — overview

Este directorio agrupa kits específicos por superficie. Cada kit es una página HTML autocontenida que reutiliza los tokens del sistema (`../colors_and_type.css` o inline) y representa el caso de uso canónico de esa superficie.

| Kit | Superficie | Paleta | Tipografía |
|---|---|---|---|
| `landing/` | atlaps.com público | Paper-bone fondo, Blueprint tinta, Amber acento | Configuración A (Fraunces · Inter) |
| `app/` | App autenticada (Planificador, Mercado, Monitor) | Paper-bone fondo en claro, Blueprint en oscuro | Configuración B (Geist · IBM Plex Mono) |

**Reglas comunes a todos los kits:**

1. Reusar tokens, **nunca** redeclarar hex.
2. Header sticky con backdrop-blur 8 px sobre `color-mix(in oklab, var(--bg) 92%, transparent)`.
3. Container max 1280, gutters 32 / 16, mobile-first 360 px.
4. Hit targets ≥ 44 px.
5. Cero gradientes vistosos. Decorativo permitido: isolíneas topográficas SVG.
