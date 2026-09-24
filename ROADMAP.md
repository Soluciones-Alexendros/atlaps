# Roadmap de Atlaps

### Propósito de este documento

- **Objetivos:** Reflejar el plan por fases del producto (F0–Fn) de forma trazable en git.
- **Estructura:** Fases con estado (completo / en curso / planificado).
- **Contenido a integrar según contexto:** La fuente operativa vive en Notion. No reordenes fases en un PR de plataforma.

> _Atlas de aplicaciones domóticas capaces de funcionar independientemente y de
> arrollar cooperativamente._ · Iniciativa Alexendros, S.L.

Plan por fases del producto Atlaps. Es un plan vivo: las prioridades pueden
reordenarse según contexto comercial (memoria IVACE INNOVA-CV TEIC) y técnico.
La fuente operativa canónica vive en Notion (Documento de Implementación del
MVP); este fichero es el reflejo trazable en repositorio.

Convención de estado: ✅ completo · 🟡 en curso · ⏳ planificado.

## F0 — Bootstrap · ✅ completo (4-may-2026)

Monorepo, design system v0, presentación de socios y plumbing productivo.

- ✅ Repo y monorepo organizados (`apps/`, `packages/`, `docs/`).
- ✅ Design System v0 generado con Design de Claude (showcase + ui_kits + preview).
- ✅ Self-host de 7 WOFF2 (Fraunces, Inter, Inter Tight, Geist, JetBrains Mono,
  IBM Plex Mono 400/500) bajo SIL OFL 1.1, sin CDN externos (RGPD-compliant).
- ✅ Presentación de socios v0 publicada en `apps/socios/`.
- ✅ Vercel deploy preview por PR (proyecto `atlaps`, team `alexendros`).

Plumbing productivo (PR #2 + PR #4):

- ✅ Seguridad — Next.js 15.1.0 → 15.5.15 (cierra CVE-2025-29927: bypass de
  autorización en middleware + cache poisoning). `pnpm audit --audit-level=high`: 0 hits.
- ✅ Lockfile determinista (`pnpm-lock.yaml` commiteado).
- ✅ Linting & format — ESLint flat 9 + Prettier 3 + `tsc --noEmit` en CI.
- ✅ Pre-commit hooks — husky 9 + lint-staged + commitlint conventional.
- ✅ CI GitHub Actions — `.github/workflows/ci.yml` (Node 22, pnpm 10) en push y PR.
- ✅ Security headers — `middleware.ts` (CSP nonce) + `next.config.ts` (HSTS,
  X-Frame-Options DENY, CSP para `/socios`).
- ✅ Renovate — bumps semanales de npm + github-actions.

### Pendientes de cierre arrastrados desde F0

- ⏳ Forgejo pull-mirror tras siguiente ejecución de `bootstrap-org-and-mirrors.sh`
  (requiere PATs del operador).
- ⏳ Memoria IVACE INNOVA-CV TEIC (deadline original 5-may-2026).
- ⏳ ADR 008 firmado (tipografía dual A/B + amber-glow) — ya redactado en `docs/architecture/decisions/`.

## F1 — Landings públicas y placeholders de producto · ⏳ planificado

- ⏳ `apps/web/` — landing pública atlaps.com (hoy placeholder).
  Brief en `docs/briefs/prototype-landing-app.md`.
- ⏳ `apps/platform/` — app autenticada (5 pilares; hoy placeholder).
  Brief en `docs/briefs/prototype-landing-app.md` (sección B).
- ⏳ Repo público del protocolo `atlaps/abp` (Apache-2.0, separado).
- ⏳ Migración a Turborepo plena (hoy el root sirve como portal Next.js; ver ADR 010).

## F2 — App autenticada multi-protocolo · ⏳ planificado

- ⏳ Esqueleto de los 5 pilares de la platform app.
- ⏳ Integración progresiva de protocolos domóticos: KNX, Matter, Zigbee, Z-Wave,
  IP, Modbus, BACnet, DALI.
- ⏳ Backend objetivo en VPS Hetzner CX32 (Falkenstein): Supabase self-host
  (datos/auth), GlitchTip self-host (observabilidad de errores) y Trigger.dev
  self-host (jobs/orquestación). Ver ADR 006.

## F3 — Producción y operación · ⏳ planificado

- ⏳ Endurecimiento de seguridad y observabilidad de extremo a extremo.
- ⏳ Estabilización del protocolo `atlaps/abp` de cara a su publicación.
- ⏳ Cobertura de tests: Vitest smoke + Playwright smoke + axe-core + Lighthouse
  (plan #61 F7).

## F4 — Escalado · ⏳ planificado

- ⏳ Publicación de `atlaps/abp` bajo Apache-2.0 (ventana F4–F6 cuando estabilice).
- ⏳ Single-source de tokens en `packages/design-system/tokens.css` (plan #61 F6).
- ⏳ Drop de unpkg/Babel en `public/socios/` con esbuild (plan #61 F6).

## Más allá (F6+) · ⏳ exploratorio

- ⏳ LLM: Mistral La Plateforme UE managed → Scaleway L40S Paris self-host con
  umbrales 2/4. Ver ADR 005.
- ⏳ Reactivación de CodeQL + Dependency Review cuando: (a) el repo sea público,
  (b) se contrate GHAS, o (c) se sustituya por SAST alternativo (semgrep, snyk).

## Completado

- [x] 2026-05-04 · F0 bootstrap del monorepo y plumbing productivo.
- [x] 2026-05-29 · Canon de documentación de repositorio aplicado (homologación).
