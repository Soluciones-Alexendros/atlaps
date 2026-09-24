# Changelog

### Propósito de este documento

- **Objetivos:** Registrar cambios destacables con Keep a Changelog / SemVer.
- **Estructura:** `[Sin publicar]` → versiones etiquetadas.
- **Contenido a integrar según contexto:** Conserva el historial. Añade entradas bajo `[Sin publicar]`; no reescribas versiones publicadas.

Todos los cambios destacables de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog 1.1.0](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto se adhiere a [SemVer 2.0.0](https://semver.org/lang/es/).

## [Sin publicar]

### Añadido

- Alineación al canon P1: jobs CI `quality` / `test` / `build` / `smoke`,
  `AGENTS.md`, guides/runbooks, ADRs en `docs/architecture/decisions/`,
  meta-sección Propósito y CODEOWNERS `* @Alexendros`.

### Cambiado

- CI (`ci` y `e2e`) corre en `ubuntu-latest` en lugar de runners self-hosted offline.

### Obsoleto

- (pendiente)

### Eliminado

- (pendiente)

### Corregido

- (pendiente)

### Seguridad

- Next.js y `eslint-config-next` a 16.3.4 (RCE critical en 16.2.9).
- Overrides de pnpm 11 movidos a `pnpm-workspace.yaml` y actualizados (postcss, js-yaml, nanoid, brace-expansion, fast-uri, browserslist, undici, sharp).

## [0.1.0] — 2026-MM-DD

### Añadido

- Versión inicial del repositorio con canon de documentación aplicado.

[Sin publicar]: https://github.com/Iniciativas-Alexendros/saas-atlaps/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Iniciativas-Alexendros/saas-atlaps/releases/tag/v0.1.0
