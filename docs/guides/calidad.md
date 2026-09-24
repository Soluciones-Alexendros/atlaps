# Guía: calidad y cobertura

### Propósito de este documento

- **Objetivos:** Fijar el significado de los jobs `quality` / `test` / `build` / `smoke` y el umbral de cobertura de la flota.
- **Estructura:** Gate de cobertura → tabla de jobs del pipeline principal → comprobaciones locales.
- **Contenido a integrar según contexto:** Adapta umbrales de este repo. No copies gates de otro paquete. No bajes el objetivo de flota por debajo del 70 %.

## Gate de cobertura

Objetivo de flota: **≥ 70 %** (líneas). Este repositorio aún no endurece umbrales en
`vitest.config.ts` (baseline F0: portal + socios, `apps/web` y `apps/platform`
placeholder). Cuando se añada el gate, no lo bajes por debajo del mínimo de flota.

```bash
pnpm test -- --coverage
```

## Jobs del pipeline principal

| Job       | Qué hace                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `quality` | actionlint, format, lint, typecheck (raíz + `apps/web`), validate-docs, `pnpm audit --audit-level=high` |
| `test`    | Vitest (unit / integración ligera)                                                                      |
| `build`   | `pnpm build` (portal + socios) y `apps/web`; sube artefacto `.next`                                     |
| `smoke`   | Rebuild + Playwright (chromium) + axe                                                                   |

El job `audit` (zizmor + actionlint sobre workflows) queda aparte y no se renombra.
Husky y el preview de Vercel no se tocan en un PR de plataforma.

## Comprobación local equivalente

```bash
make lint
make test
make validate-docs
pnpm build
```
