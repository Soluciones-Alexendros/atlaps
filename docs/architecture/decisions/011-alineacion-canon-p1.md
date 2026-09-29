# ADR 011 · Alineación al canon P1 de plataforma

### Propósito de este documento

- **Objetivos:** Registrar la decisión de alinear este SaaS privado al contrato P0+P1 de flota.
- **Estructura:** Contexto → decisión → consecuencias.
- **Contenido a integrar según contexto:** No reescribe producto ni LICENSE. El esqueleto `repo-standard` no era accesible (404); se aplicó el contrato resumido de la oleada.

- Estado: accepted
- Fecha: 2026-09-24
- Decisores: Alejandro · Soluciones Alexendros
- Etiquetas: plataforma, ci, documentación

## Contexto y planteamiento del problema

La flota Soluciones-Alexendros unifica nombres de jobs CI (`quality` / `test` /
`build` / `smoke`), CODEOWNERS, Renovate, docs P1 y la meta-sección «Propósito
de este documento». Este repositorio ya tenía plumbing (lint, Vitest,
Playwright, Renovate, husky) pero el pipeline era un job monolítico `ci` + `e2e`
y faltaban `AGENTS.md`, guides/runbooks y la carpeta canónica de ADRs.

`Soluciones-Alexendros/repo-standard` no es accesible con el token de los
agentes (404). Se aplica el contrato P0+P1 resumido de la oleada.

## Drivers de la decisión

- Homogeneizar contratos sin reescribir el producto Atlaps.
- Conservar pins SHA, husky, zizmor y el preview de Vercel.
- Perfil P1 (SaaS privado): no se exige P2 nuevo; CoC y SUPPORT ya existían.

## Opciones consideradas

- Esperar a que `repo-standard` sea público — bloquea la oleada.
- Reescribir el pipeline y el producto a la vez — fuera de alcance.
- Aplicar P0+P1 del contrato resumido, conservando el plumbing existente.

## Resultado de la decisión

Opción elegida: aplicar P0+P1 del contrato resumido.

- Jobs canónicos en `.github/workflows/ci.yml`.
- ADRs en `docs/architecture/decisions/` (stub en `docs/adr/` y `DECISIONS.md`).
- CODEOWNERS `* @Alexendros`.
- Meta-sección Propósito en markdowns contractuales.

### Consecuencias positivas

- CI y docs alineados con el resto de la flota JS.
- Trazabilidad de decisiones en un path único.

### Consecuencias negativas

- El job `smoke` reconstruye el portal (artefacto `.next` no es portable entre jobs).
- Coverage ≥ 70 % queda documentado, sin gate Vitest en este PR (baseline F0).
