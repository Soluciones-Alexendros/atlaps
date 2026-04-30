# Atlaps Design System — Skill

> Invoke this skill whenever you are designing for **Atlaps** (atlas SaaS de domótica multi-protocolo), or for any of its five sub-products (Planificador, Mercado, Monitor, Sugerencias, ComtubernIA), or for the public landing at atlaps.com.

## When to invoke

- The user mentions Atlaps, Iniciativa Alexendros, KNX/Matter/Zigbee multi-protocolo, "atlas vivo", "blueprint" / plano arquitectónico, or any of the five product names.
- The user asks for landing-page work, app screens, marketing material, or component design "in the Atlaps style".
- The user pastes a brief that mentions self-host UE, voz local, comisiones declaradas, Atlaps Bridge Protocol.

## What to do first (every time)

1. **Read** `README.md` end-to-end. It is the canonical brand+system reference. Do not improvise tokens or copy.
2. **Read** the relevant brief in `design-system/`:
   - `BRIEF-DESIGN-SYSTEM.md` if building tokens / components / showcase.
   - `BRIEF-PROTOTYPE-LANDING.md` for landing pages.
   - `BRIEF-PROTOTYPE.md` for app screens (Planificador / Mercado / Monitor).
   - `COMPANY-BLURB.md` and `DESIGN-NOTES.md` for tone, voice, and "what we don't do".
   - `ADR-007-marca-independiente-blueprint.md` for the strategic "why" of the blueprint identity.
3. **Open** `Atlaps Design System.html` in a webview to see the live system. Reuse the JSX in `src/` (`components.jsx`, `patterns.jsx`, `icons.jsx`, `logo.jsx`) instead of redrawing.
4. **Reuse tokens from** `tokens.css` (Tailwind v4 `@theme`) or `colors_and_type.css` (vanilla CSS vars). Never hardcode hex.

## Hard rules (ranked, do not violate)

1. **Idioma castellano peninsular.** `tú` / `vosotros`, **sin voseo**, sin anglicismos. KNX/Matter/Zigbee/Z-Wave/BACnet/DALI/Modbus se escriben así, en sus formas oficiales.
2. **Wordmark `atlaps` siempre lowercase.** Sentence case en titulares y botones.
3. **Paleta blueprint exacta.** `#0F2A4A · #1E4D7A · #3A7BB8` (azul) + `#F5F1E8 · #E8E0CC` (papel) + `#C77D2C · #E89642` (ámbar como **acento**, <10 % superficie, **nunca** fondo dominante). Texto/badge/CTA ámbar **siempre** vía `--amber-on-surface` — nunca el hex directo. En oscuro promueve automáticamente a `amber-glow`.
4. **Cero gradientes vistosos, neón, parallax decorativo, partículas, stock de "manos en teclado".** Lo único decorativo permitido son **isolíneas topográficas** SVG.
5. **Radii defaults a 4 px.** No 12+. Botones 4, tarjetas 4, badges full.
6. **Sombras solo "papel"** — gridline 1 px + trazo de tinta blueprint-mid escalonado. Nada de blur amplio.
7. **Modo claro = paper-bone fondo / blueprint-deep tinta.** Modo oscuro = blueprint-deep fondo / paper-bone tinta. **No invert brusco.**
8. **Cuadrícula de papel 24 px** en `body`, 16 px en `.paper-card.gridded`.
9. **Focus = 2 px ámbar outline + 2 px offset.** Nunca anillos azules nativos.
10. **Cero emoji decorativos en UI.** Direcciones KNX en mono (`1.1.42`).
11. **Hit targets ≥ 44 px.** Container max 1280, gutters 32 (desktop) / 16 (mobile).

## Voice — copy templates

- Hero pattern: `<sustantivo concreto>, <verbo arquitectónico>.` ej. *Tu casa inteligente, dibujada como un atlas.*
- CTA primary: `Empezar gratis` · CTA secondary: `Ver el atlas en acción` (siempre sentence case, sin "!").
- Toast OK: `<Resultado declarativo> · <métrica>.` ej. *Atlas sincronizado · 48 dispositivos en 1,2 s.*
- Toast error: `<Diagnóstico técnico>.` ej. *Conflicto de direcciones · Dos dispositivos en 1.1.42.*
- Empty state: `<Estado>. <Acción siguiente>.` ej. *Atlas vacío. Empieza añadiendo el primer dispositivo o importa un BOM existente.*
- Pricing: `0 € · 24,90 €/mes · 59 €/mes` (decimales con coma, IVA inc.).

## Type stack (decisión F0-F2 cerrada)

Dual por superficie, conmutado por `data-surface`:

- **A clásica · `data-surface="marketing"`** — Display **Fraunces** · Body **Inter** · Mono **JetBrains Mono**.
- **B técnica · `data-surface="app"`** — Display **Inter Tight** · Body **Geist** · Mono **IBM Plex Mono**.

Söhne **descartado en F0-F2**. No mencionar en marketing. Inter Tight es elección operativa, no aspiracional.

Escala Major Third 1.25: **12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px**.

## Reusable assets

| Need | Path |
|---|---|
| Logo SVG (icon, horizontal, vertical, favicon) | `assets/*.svg` |
| Token vars (CSS) | `colors_and_type.css` |
| Token vars (Tailwind v4) | `tokens.css` |
| 12 primitivos React | `src/components.jsx` |
| 4 patrones React | `src/patterns.jsx` |
| 24 iconos React | `src/icons.jsx` |
| Logo React (3 variantes + animación) | `src/logo.jsx` |
| Tweaks panel infra | `tweaks-panel.jsx` |
| Live showcase | `Atlaps Design System.html` |

## Anti-patterns (will be rejected on review)

- "Inteligente" como adjetivo de relleno (ya está implícito en "casa inteligente").
- Sombras tipo `0 20px 40px rgba(0,0,0,.1)` — no es Atlaps, es SaaS genérico 2017.
- Heros con 3 columnas de "feature cards" con icono + 2 líneas de copy. Atlaps muestra **el atlas mismo** en el hero.
- Iconografía rellena (filled). Atlaps es lineal, stroke 1.5 px, viewBox 24.
- Gradientes morado→rosa, neon-blue glow, glassmorphism vistoso.
- "Revolutionary", "next-gen", "AI-powered" en copy ES o EN.

## When in doubt

Ask. Atlaps tiene una identidad estrecha y deliberada. Si una decisión visual no encaja con "plano arquitectónico técnico, sobrio, sin hype", **no encaja**.
