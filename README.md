# Atlaps Design System

> Atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI). Marca **independiente**, estética **blueprint** (plano arquitectónico). Construido por Iniciativa Alexendros, S.L.

Cinco aplicaciones complementarias operan independientemente y se potencian al cooperar:

| Pilar | Función |
|---|---|
| **Planificador** | Diseño de topología sobre canvas blueprint (grid 8 px, dispositivos como pins ámbar). |
| **Mercado** | Catálogo multi-proveedor con comisión declarada visible. |
| **Monitor** | Telemetría en vivo, latencia P95, eventos por estancia. |
| **Sugerencias** | Recomendaciones de optimización de la instalación. |
| **ComtubernIA** | Voz 100 % local UE, sin nube. |

Diferenciadores: soberanía europea (self-host UE), voz 100 % local, transparencia radical de comisiones, protocolo abierto Apache-2.0 (Atlaps Bridge Protocol).

Pricing: **Free 0 €** · **Solo 24,90 €/mes** · **Studio 59 €/mes** (IVA inc.).

---

## Sources

Este design system se construyó a partir de un v0 ya existente que el usuario adjuntó:

- `design-system_atlaps/` (mounted folder, read-only) — Next.js 15 App Router scaffold con `src/`, `app/globals.css`, `tokens.css`, briefs canónicos.
- `uploads/{favicon,logo-icon,logo-horizontal,logo-vertical}.svg` — logos oficiales.

Briefs originales copiados a `design-system/` para consulta:

- `design-system/COMPANY-BLURB.md`
- `design-system/DESIGN-NOTES.md`
- `design-system/TOKENS.md` (referencia compacta de tokens)
- `design-system/BRIEF-DESIGN-SYSTEM.md` (showcase standalone)
- `design-system/BRIEF-PROTOTYPE.md` y `BRIEF-PROTOTYPE-LANDING.md` (landing + 3 vistas de app)
- `design-system/ADR-007-marca-independiente-blueprint.md`

---

## Index

```
.
├── README.md                       — este archivo
├── SKILL.md                        — invocación como Agent Skill
├── colors_and_type.css             — vars base + roles semánticos (h1/h2/body/code…)
├── tokens.css                      — Tailwind v4 @theme (color, spacing, radii, motion)
├── tweaks-panel.jsx                — infraestructura Make tweakable
├── Atlaps Design System.html       — showcase navegable (10 secciones)
├── src/                            — JSX modular del showcase
│   ├── app.jsx · logo.jsx · icons.jsx
│   ├── components.jsx              — 12 primitivos (Button, Input, Card…)
│   ├── patterns.jsx                — 4 patrones (Pagination, Breadcrumb, DataTable, EmptyState)
│   └── sections-1.jsx · sections-2.jsx
├── assets/                         — logos SVG (icon, horizontal, vertical, favicon)
├── preview/                        — tarjetas para Design System tab
├── design-system/                  — briefs y referencias originales
└── ui_kits/
    ├── landing/                    — landing pública atlaps.com
    └── app/                        — app autenticada (Planificador, Mercado, Monitor)
```

---

## CONTENT FUNDAMENTALS

**Idioma.** Castellano peninsular (`tú`/`vosotros`, **sin voseo**), sin anglicismos gratuitos. Términos técnicos consagrados se mantienen en su forma original: KNX, Matter, Zigbee, Z-Wave, BACnet, DALI, Modbus.

**Tono · 5 reglas.**

1. **Sobrio pero accesible.** El técnico se reconoce, el DIYer no se asusta.
2. **Confiado sin arrogancia.**
3. **Soberano y radical en transparencia** (self-host, voz local, comisiones declaradas).
4. **Castellano peninsular sin voseo, sin anglicismos.**
5. **Anti-jerga:** "atlas" no "dashboard"; "memoria profesional" no "as-built doc"; "instalación" no "setup".

**Casing.** Sentence case en titulares y botones (`Empezar gratis`, no `EMPEZAR GRATIS`). Lowercase en wordmark `atlaps`. UPPERCASE solo en kickers mono con `letter-spacing: 0.12em`.

**Persona.** El producto se dirige al lector con `tú` (singular) y `vosotros` (plural). Atlaps habla en primera persona del plural cuando se compromete (`declaramos`, `alojamos`).

**Emoji y unicode.** Cero emoji decorativos en UI. Permitidos: símbolos técnicos (`·`, `→`, `°C`, `m²`, `€`). Direcciones KNX en mono (`1.1.42`).

**Vibe.** Plano arquitectónico técnico. Cada texto es legible para un instalador y para un arquitecto. Cero hype, cero "revolutionary", cero "next-gen". Las cifras se declaran (`240 ms`, `48 dispositivos`, `0,8 W`).

**Ejemplos canónicos.**

- Hero: *Tu casa inteligente, dibujada como un atlas.*
- Subhero: *Diseña la topología, calcula el material y opera la instalación. Multi-protocolo (KNX, Matter, Zigbee y 5 más), voz local UE y un atlas vivo en castellano.*
- CTA primario: `Empezar gratis` · CTA secundario: `Ver el atlas en acción`
- Toast éxito: *Atlas sincronizado · 48 dispositivos actualizados en 1,2 s.*
- Toast error: *Conflicto de direcciones · Dos dispositivos en 1.1.42.*
- EmptyState: *Atlas vacío. Aún no hay dispositivos en este plano. Empieza añadiendo el primero o importando un BOM existente.*

---

## VISUAL FOUNDATIONS

**Metáfora matriz.** Plano arquitectónico (blueprint). Tinta azul sobre pergamino, ámbar como señalética técnica, isolíneas topográficas como motivo decorativo.

**Color (USAR EXACTOS).**

- Blueprint — `deep #0F2A4A` · `mid #1E4D7A` · `soft #3A7BB8`
- Paper — `bone #F5F1E8` · `grid #E8E0CC`
- Amber — `signal #C77D2C` (primario en claro) · `glow #E89642` (primario en oscuro). **Token canónico = `--amber-on-surface`**. Texto/badges/CTAs y focus rings textuales **siempre** lo usan, nunca el hex directo. En oscuro, `amber-signal` queda reservado a no-textuales (≥3:1).
- Ink — `graphite #1A1F2E` · `pencil #5C6B7F`
- Semánticos — `success #2F8F5C` · `warning #C77D2C` · `danger #B23A48` · `info #3A7BB8`
- **Modo claro =** paper-bone fondo / blueprint-deep tinta. **Modo oscuro =** blueprint-deep fondo / paper-bone tinta. **No invert brusco.**

**Tipografía · dual por superficie (decisión F0-F2 cerrada).**

- **Configuración A · clásica · marketing** — Display **Fraunces** · Body **Inter** · Mono **JetBrains Mono**. Landing pública, blog, footer, legal, comunicación. Default cuando `data-surface="marketing"` (o ausente).
- **Configuración B · técnica · app** — Display **Inter Tight** · Body **Geist** · Mono **IBM Plex Mono**. App autenticada (Planificador, Mercado, Monitor, Sugerencias, Configuración, Profesional, Visión). Activa con `<html data-surface="app">`.
- Söhne **descartado en F0-F2**. Reevaluar en F3+ con MRR > 500 €/mes durante 2 meses + presupuesto + A/B con mejora medible.
- Escala Major Third 1.25 → **12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px**.
- Line-height: display 1.05–1.10 · headings 1.20 · body 1.50–1.60 · mono 1.40.

**Spacing.** Escala 4-base: `0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 px`.

**Backgrounds.** Cuadrícula de papel `--paper-grid` 24 px en `body`, 16 px en `.paper-card.gridded`. **Nunca** gradientes vistosos, neón, parallax decorativo, partículas, stock cliché. El motivo decorativo permitido es **isolínea topográfica** (curvas de nivel a 1.25 px, opacidad 0.55, color `blueprint-soft`).

**Borders.** `1 px` (default), `1.5 px` (acento), `2 px` (énfasis). **Nada más grueso.** Color `--line-soft` por defecto, `--blueprint-mid` cuando hay énfasis.

**Radii.** `0 · 2 · 4 · 8 · 12 · 16 · full(9999)`. **Default = 4 px.** Tarjetas 4 px, botones 4 px, badges full. Casi nunca 8+ px.

**Shadows.** *Plano técnico, sin blur amplio.* Solo `gridline 1 px + trazo de tinta blueprint-mid escalonado`:

```
--shadow-paper-sm: 0 0 0 1px var(--paper-grid), 0 1px 0 0 rgba(30,77,122,.08);
--shadow-paper-md: 0 0 0 1px var(--paper-grid), 0 2px 0 0 rgba(30,77,122,.12), 0 4px 0 0 rgba(30,77,122,.04);
```

**Cards.** Fondo `--bg-elev`, borde `1 px var(--line-soft)`, radius `4 px`, padding `24 px`. Variante `.gridded` añade cuadrícula 16 px.

**Hover states.** `primary` botón → background `blueprint-deep → blueprint-mid`. `ghost` botón → background `transparent → grid`. Filas de tabla → background `transparent → grid`. Transición `120 ms`.

**Press / active.** `transform: scale(0.98)` en swatches y elementos copiables. Sin sombras añadidas.

**Focus.** Anillo ámbar **2 px outline + 2 px offset** sobre `*:focus-visible`. Anti-jerga: nunca anillos azules nativos del navegador.

**Animation / motion.** Easing único `cubic-bezier(0.4, 0, 0.2, 1)`. Duraciones `120 / 240 / 480 / 720 ms`. Patrón firma: **trazo de mapa** (SVG `stroke-dasharray` animado tipo *pen-on-paper*) — logo dibujándose, tab indicator deslizando, skeleton de isolíneas. **Veta:** parallax marketing, fades genéricos, neón futurista, partículas decorativas.

**Transparencia y blur.** Solo en `header` sticky (`backdrop-filter: blur(8px)`) y overlay de modal (`rgba(15,42,74,.55)` + `blur(2px)`). Nada más.

**Imagery.** Sin stock cliché (manos en teclado, nubes abstractas, personas mirando pantallas). Imágenes permitidas: **diagramas técnicos**, **planos arquitectónicos**, **fotografía B&W de instalaciones reales** (cuando exista). Tono general: frío azul, sin saturación cálida fuera de los acentos ámbar.

**Layout rules.** Container max `1280 px`, gutters `32 px` (desktop), `16 px` (mobile). Mobile-first 360 px. Header sticky con `z-index: 1100`. Hit targets ≥ 44 px (WCAG 2.2 AA).

**Selection.** `::selection { background: var(--accent); color: var(--paper-bone); }`.

---

## ICONOGRAPHY

**Iconografía · Lucide React F0-F2 (decisión cerrada).** Set base de 24 glifos con `strokeWidth={1.5}`, viewBox 24×24, `currentColor`. Mapeo provisional para 4 protocolos sin equivalente directo:

| Protocolo | Lucide name | Estado |
|---|---|---|
| KNX | `radio-tower` | provisional |
| DALI | `lightbulb` | provisional |
| Modbus | `cable` | provisional |
| BACnet | `network` | provisional |

**Marca visual de provisionalidad:** punto ámbar 4 px en esquina superior derecha del icono. Solo visible al hover en componentes de UI; permanente con tooltip en el showcase.

**Reemplazo F2-F3:** set propio de 24 glifos blueprint-style con idénticas métricas — sustitución invisible.

**Logo.** SVG inline, monograma "A" formada por curvas de nivel topográficas + wordmark `atlaps` lowercase con kerning amplio (`0.08em`). Variantes: `icon`, `horizontal`, `vertical`. Tamaño mínimo `24 px`, favicon `32 px`, PWA `192 / 512`. **Clearspace = 1× altura del monograma.**

**Emoji.** **No usar.** Las únicas excepciones son símbolos técnicos puntuales en mono (`·`, `→`, `°`).

**Unicode chars.** Permitidos como bullets/separadores: `·` (middle dot, separador canónico), `—` (em dash en titulares), `↻` (replay, en demos), `↗` (link externo).

**PNG / raster.** Evitar. Cualquier ilustración nueva se dibuja en SVG con tokens. Las únicas imágenes raster admisibles son fotos reales de instalaciones (fuera del scope v0).

---

## Decisiones cerradas y deferimientos

**Cerradas · F0-F2:**

1. **Tipografía dual por superficie** — A en marketing, B en app, conmutadas por `data-surface`.
2. **Ámbar oscuro = amber-glow** — token `--amber-on-surface` resuelve automáticamente según modo. Auditoría axe-core en CI antes de cerrar v1 del showcase.
3. **Lucide React** para iconos F0-F2 (4 protocolos provisionales con punto ámbar).
4. **Söhne descartado** — Inter Tight como display de B.

**Deferidas · F3+ con criterio cuantitativo:**

- **Set de iconos propio:** activa cuando los 4 provisionales acumulan ≥ 3 reportes UX de ambigüedad.
- **Söhne licenciada:** activa cuando MRR > 500 €/mes × 2 meses + presupuesto aprobado + A/B con mejora.
- **Fine-tune de voz:** activa cuando 50 usuarios reales o 10 instaladores profesionales pasen por onboarding.

No hay aspiraciones vagas — cada deferimiento tiene gatillo medible.
