# Tokens · Atlaps Design System

Referencia compacta. Fuente de verdad: `tokens.css` (raíz) y `app/globals.css`.

## Color

| Token | Hex | Uso primario |
| --- | --- | --- |
| `--color-blueprint-deep` | `#0F2A4A` | superficie primaria oscura · tinta papel cuadrícula |
| `--color-blueprint-mid` | `#1E4D7A` | acciones primarias · headers |
| `--color-blueprint-soft` | `#3A7BB8` | hover · interactividad · enlaces |
| `--color-paper-bone` | `#F5F1E8` | superficie clara · pergamino |
| `--color-paper-grid` | `#E8E0CC` | gridlines · sombras suaves · bordes |
| `--color-amber-signal` | `#C77D2C` | acento · dispositivos activos · CTA secundario |
| `--color-amber-glow` | `#E89642` | hover ámbar · estados de éxito energético |
| `--color-ink-graphite` | `#1A1F2E` | texto base modo claro |
| `--color-ink-pencil` | `#5C6B7F` | texto secundario · anotaciones |
| `--color-success` | `#2F8F5C` | estado positivo |
| `--color-warning` | `#C77D2C` | estado de aviso (alias amber-signal) |
| `--color-danger` | `#B23A48` | estado de error |
| `--color-info` | `#3A7BB8` | estado informativo (alias blueprint-soft) |

Reglas:

- Ámbar por debajo del 10% de superficie.
- Modo claro: `paper-bone` fondo · `blueprint-deep` tinta.
- Modo oscuro: `blueprint-deep` fondo · `paper-bone` tinta (no invert brusco).
- Contraste WCAG 2.2 AA: 4.5:1 texto normal · 3:1 texto grande.

## Tipografía

- Display: `--font-display` → Fraunces (A) o Söhne / Inter Display (B)
- Body: `--font-body` → Inter (A) o Geist (B)
- Mono: `--font-mono` → JetBrains Mono (A) o IBM Plex Mono (B)

Escala Major Third (1.25): 12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px.

Line-height: display/hero 1.05–1.10 · headings 1.20 · body 1.50–1.60 · mono 1.40.

## Spacing

Escala (px): 0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96.

## Radii

0 · 2 · 4 · 8 · 12 · 16 · 9999 (full).

## Border widths

1 · 1.5 · 2 px. Nada más grueso.

## Shadows

Estilo plano técnico — gridlines `--paper-grid` 1 px o trazo de tinta `--blueprint-mid`. NO blur amplio.

## Z-index

dropdown 1000 · sticky 1100 · modal 1200 · popover 1300 · tooltip 1400 · toast 1500.

## Motion

- Easing default: `--ease-default` = `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Duración micro: `--duration-micro` = 240 ms
- Duración macro: `--duration-macro` = 480 ms
- Patrones: trazo de mapa (stroke-dasharray) · NO parallax, NO partículas, NO neón.
