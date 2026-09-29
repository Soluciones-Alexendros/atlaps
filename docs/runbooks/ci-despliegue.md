# Runbook: CI y despliegue

### Propósito de este documento

- **Objetivos:** Diagnosticar jobs rojos del pipeline principal y el preview de Vercel sin tocar org settings.
- **Estructura:** Fallos `quality` / `test` / `build` / `smoke` → Vercel → Renovate.
- **Contenido a integrar según contexto:** Adapta comandos de este monorepo. No reescribas pins SHA ni hagas force-push. No actives Dependabot version-updates.

## Jobs `quality` / `test` / `build` / `smoke` en rojo

1. Reproduce en local los comandos de la [guía de calidad](../guides/calidad.md).
2. `quality` + format: `pnpm format` y vuelve a `pnpm format:check`.
3. `quality` + lint/typecheck: corrige en el árbol que falló (raíz vs `apps/web`).
4. `quality` + validate-docs: falta la meta-sección «Propósito de este documento» en un markdown contractual.
5. `quality` + audit: no silencies `pnpm audit --audit-level=high`; parchea o justifica con ADR.
6. `test`: añade o ajusta Vitest; no borres tests para poner CI en verde.
7. `build`: `pnpm build` incluye `scripts/build-socios.sh` (necesita red la primera vez para vendor React UMD).
8. `smoke` + Playwright: el servidor es `pnpm start` sobre el build; revisa `playwright-report/`.

No hagas force-push para «arreglar» CI. No toques branch protection ni settings de la organización.

## Despliegue (Vercel)

- Preview por PR mediante Git integration. Versionado en git ≠ promote a producción.
- Variables de entorno (Resend, etc.) se configuran en el panel de Vercel, no en este repositorio.
- `.env.example` documenta las claves; no commitees `.env.local`.

## Renovate

Configuración en `.github/renovate.json` (presets de `infraestructura-stack` + managers `npm` y `github-actions`). No hay Dependabot de version-updates.
