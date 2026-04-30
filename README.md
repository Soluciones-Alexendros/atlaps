# Atlaps · Design System

> **Atlaps** = **At**las + a**pps**. *Atlas de aplicaciones domóticas capaces de funcionar independientemente y de arrollar cooperativamente.*

Sistema de diseño del producto **Atlaps** (atlas SaaS de domótica multi-protocolo) de **Iniciativa Alexendros, S.L.** Comunitat Valenciana, España.

Estética **blueprint** (plano arquitectónico) — independiente de la marca corporativa Alexendros (Vergina Imperial). ADR 007.

## Estado

- Versión: `0.1.0` · 2026-04-30
- Fase del producto: F0 · pre-lanzamiento (bootstrap 4-may-2026)
- Output v0 generado con Design de Claude: `Atlaps Design System.html`
- Reenviable a Design de Claude para iterar.

## Estructura

```
Atlaps/
├── Atlaps Design System.html   # showcase v0 single-page (Design output)
├── tokens.css                  # tokens Tailwind v4 @theme
├── tweaks-panel.jsx            # infra "Make tweakable" (Design)
├── src/                        # módulos JSX del showcase v0
│   ├── app.jsx
│   ├── components.jsx
│   ├── icons.jsx
│   ├── logo.jsx
│   ├── patterns.jsx
│   ├── sections-1.jsx
│   └── sections-2.jsx
├── app/                        # Next.js 15 App Router (scaffold)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/ui/              # shadcn primitives (futuro)
├── lib/utils.ts                # cn helper
├── public/                     # assets estáticos
├── design-system/              # documentación del sistema
│   ├── BRIEF-DESIGN-SYSTEM.md  # brief enviado a Design (system)
│   ├── BRIEF-PROTOTYPE.md      # brief enviado a Design (landing+app)
│   └── TOKENS.md               # referencia de tokens
└── docs/
    └── ADR-007-marca-independiente-blueprint.md
```

## Sistema cromático (resumen)

| Token | Hex | Uso |
| --- | --- | --- |
| `--blueprint-deep` | `#0F2A4A` | superficie primaria oscura · tinta papel cuadrícula |
| `--blueprint-mid` | `#1E4D7A` | acciones primarias · headers landing |
| `--blueprint-soft` | `#3A7BB8` | hover · interactividad · enlaces |
| `--paper-bone` | `#F5F1E8` | superficie clara · pergamino |
| `--paper-grid` | `#E8E0CC` | gridlines · sombras suaves |
| `--amber-signal` | `#C77D2C` | acento · dispositivos activos · CTA secundario |
| `--amber-glow` | `#E89642` | hover ámbar · estados de éxito energético |
| `--ink-graphite` | `#1A1F2E` | texto base modo claro |
| `--ink-pencil` | `#5C6B7F` | texto secundario · anotaciones |

Reglas: ámbar por debajo del 10% de superficie. Modo oscuro = blueprint-deep. Modo claro = paper-bone. WCAG 2.2 AA.

## Tipografía

Dos configuraciones a comparar (decidir D1):

- **A · clásica:** Display Fraunces · Body Inter · Mono JetBrains Mono
- **B · técnica:** Display Söhne / Inter Display · Body Geist · Mono IBM Plex Mono

Escala Major Third (1.25): 12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 · 61 px.

## Cómo trabajar

### Ver el showcase v0

```bash
xdg-open "Atlaps Design System.html"   # Linux
open "Atlaps Design System.html"       # macOS
```

### Desarrollar (Next.js 15)

```bash
pnpm install
pnpm dev
```

### Reenviar a Design de Claude

Este repo está preparado para conectarse a la herramienta **Design de Claude**:

1. **Drag a folder** este directorio completo, o
2. **Link code on GitHub** si está publicado en `Alexendros/atlaps-design-system`.

Skills recomendadas en Design: **Frontend design** + **Interactive prototype** + **Save as standalone HTML** (+ **Make tweakable** opcional).

NO seleccionar el design system "Vergina Imperial" — es marca distinta, prohibida por ADR 007.

## Documentos clave

- **Brief Design System:** [`design-system/BRIEF-DESIGN-SYSTEM.md`](./design-system/BRIEF-DESIGN-SYSTEM.md)
- **Brief Prototipo landing+app:** [`design-system/BRIEF-PROTOTYPE.md`](./design-system/BRIEF-PROTOTYPE.md)
- **Tokens:** [`design-system/TOKENS.md`](./design-system/TOKENS.md)
- **ADR 007 marca independiente:** [`docs/ADR-007-marca-independiente-blueprint.md`](./docs/ADR-007-marca-independiente-blueprint.md)

## Vinculaciones

- **Cuaderno operador** (privado): `~/.claude/cuadernos/atlaps/`
- **Doc de implementación MVP** (Notion privado): página "Atlaps · Documento de Implementación del MVP"
- **Producto principal** (repo privado, pendiente): `Alexendros/atlaps`
- **Atlaps Bridge Protocol** (repo público Apache-2.0, pendiente): `atlaps/abp`

## Restricciones de marca

- NO mezclar con paletas púrpura/oro de Vergina Imperial.
- NO gradientes vistosos como fondo dominante.
- NO neón sci-fi, parallax decorativo, partículas, stock cliché.
- NO anglicismos gratuitos. Castellano peninsular sin voseo.

## Licencia

Proprietario. Iniciativa Alexendros, S.L. Ver [`LICENSE`](./LICENSE).

(El protocolo abierto `atlaps/abp` está bajo Apache-2.0 en repo separado.)
