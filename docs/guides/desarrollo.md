# Guía: desarrollo local

### Propósito de este documento

- **Objetivos:** Arrancar el monorepo en local (pnpm, Node 22) y saber qué documento actualizar según el tipo de cambio.
- **Estructura:** Requisitos → arranque → comprobaciones antes del PR → tabla «dónde documentar».
- **Contenido a integrar según contexto:** Adapta Node, lockfile y scripts de este repo. No copies un setup npm de otra CLI. No cambies la estética blueprint ni las fuentes self-host.

## Requisitos

- Node.js ≥ 22 (`engines.node`)
- pnpm 11 (`packageManager` en `package.json`)
- Copia `.env.example` a `.env.local` si vas a probar el formulario de contacto (Resend). Sin `RESEND_API_KEY` el endpoint falla cerrado en producción.

## Arranque

```bash
pnpm install
pnpm dev
# http://localhost:3000  → índice
# http://localhost:3000/socios/  → presentación privada
```

Rutas del portal: `/`, `/socios/`, `/fonts/*`, `/logos/*`.

## Antes de abrir un PR

```bash
pnpm format:check && pnpm lint && pnpm typecheck
pnpm test && pnpm build
# smoke local (necesita el build previo):
pnpm test:e2e
```

O `make lint && make test && make validate-docs`. Hooks husky: Conventional Commits y lint-staged.

## Dónde documentar

| Cambio                                      | Documento                                    |
| ------------------------------------------- | -------------------------------------------- |
| Arranque, contratos, enlace de producto     | `README.md`                                  |
| Decisión transversal (marca, deps, tooling) | ADR en `docs/architecture/decisions/`        |
| Contrato de agentes                         | `AGENTS.md`                                  |
| Fallo de CI, Vercel o incidente             | runbook en `docs/runbooks/`                  |
| Tokens / showcase                           | `docs/tokens.md` + `packages/design-system/` |
