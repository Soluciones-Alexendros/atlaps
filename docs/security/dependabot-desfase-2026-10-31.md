# Dependabot · desfase UI vs lock (2026-10-31)

### Propósito de este documento

- **Objetivos:** Explicar por qué Security > Dependabot sigue mostrando críticas/altas aunque el lock ya está parchado.
- **Estructura:** Estado local → mapa GHSA → acción para Alejandro.
- **Contenido a integrar según contexto:** Fase 3 hardening. Sin secretos.

## Estado local (código)

| Comprobación                                      | Resultado                                                  |
| ------------------------------------------------- | ---------------------------------------------------------- |
| `pnpm audit --audit-level high`                   | Exit 0 (1 moderate restante; no bloquea)                   |
| OSV-Scanner `pnpm-lock.yaml` + `osv-scanner.toml` | Sin issues (minimatch GHSA-g3hv-75wg-m249 filtrado: major) |

Versiones efectivas en lock (main / esta rama): `next@16.4.1`, `vite@≥8.1.6` (8.3.5), `undici@7.30.1`, `zod@4.6.7`, `sharp@0.35.5`, `source-map-js@1.2.2`, `brace-expansion@1.1.21` / `@5.0.12`. Overrides en `pnpm-workspace.yaml`.

## Mapa de alertas abiertas (UI, creadas 2026-10-25)

| GHSA                                      | Paquete         | Parche            | Manifiestos en la alerta     | Cubierto en lock         |
| ----------------------------------------- | --------------- | ----------------- | ---------------------------- | ------------------------ |
| GHSA-673q-mjm6-r5xr                       | next            | 16.4.1            | package.json, apps/web, lock | sí                       |
| GHSA-2464-fhr4-w9xw                       | next            | 16.4.1            | idem                         | sí                       |
| GHSA-vcvr-r3jv-pc5j                       | next            | 16.3.6            | idem                         | sí (16.4.1)              |
| GHSA-p3m5-59mp-jv5r                       | next            | 16.4.1            | idem                         | sí                       |
| GHSA-cjq9-62q9-8jv4                       | next            | 16.3.8            | idem                         | sí                       |
| GHSA-587h-7wmj-h5pm                       | vite            | 8.1.6             | package.json, lock           | sí                       |
| GHSA-xjj6-f33q-929c                       | undici          | 7.30.1            | lock                         | sí (override)            |
| GHSA-mrhx-c7xc-m3w5                       | zod             | 4.6.6             | lock                         | sí (override)            |
| GHSA-wq5f-xc86-pv6w                       | sharp           | 0.35.5            | lock                         | sí (override)            |
| GHSA-68fv-2mgg-jv7q                       | source-map-js   | 1.2.2             | lock                         | sí (override)            |
| GHSA-6j4f-fj2g-mc7p / GHSA-qhr7-859c-m2p7 | brace-expansion | 1.1.19+ / 5.0.10+ | lock                         | sí (overrides por rango) |

Las alertas no se han reescaneado tras el saneamiento del 31-10 (`#61`). No se suben versiones «por subir» en este PR.

## Dependencias sin uso

Revisión de dependencias directas: ninguna candidata a retirar en esta fase (tooling de lint/test/build y fontsource en uso).

## Para Alejandro

1. Tras fusionar a `main`, forzar reescaneo del grafo de Dependabot (o esperar al job diario) hasta **0 críticas y 0 altas** en la UI.
2. No crear `dependabot.yml` (Renovate en flota).
