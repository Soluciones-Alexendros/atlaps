# AGENTS.md

### Propósito de este documento

- **Objetivos:** Fijar el contrato operativo para agentes de código y el rol Mantenedor: fuentes de verdad, autonomía, comandos y Definition of Done.
- **Estructura:** Destinatarios → fuentes de verdad → unidad de trabajo → autonomía → stack y comandos → convenciones → layout → Definition of Done.
- **Contenido a integrar según contexto:** Adapta layout, scripts pnpm y umbrales de este monorepo Next.js. No copies un `AGENTS.md` de landing pública ni reescribas la estética blueprint. No toques `LICENSE` ni secretos de Vercel/Resend.

**Destinatarios:** agentes de código y el rol Mantenedor que trabajen en este repositorio.  
**Propósito:** contrato operativo. Homogeneizamos **nombres y contratos**, no el producto ni la API.

## Fuentes de verdad (orden)

1. [README.md](./README.md) — producto, arranque y contratos
2. Este archivo
3. [ARCHITECTURE.md](./ARCHITECTURE.md)
4. [docs/architecture/decisions/](./docs/architecture/decisions/) — ADRs; el stub [`DECISIONS.md`](./DECISIONS.md) y [`docs/adr/`](./docs/adr/) apuntan aquí
5. [CONTRIBUTING.md](./CONTRIBUTING.md)
6. [SECURITY.md](./SECURITY.md)

No reinventes requisitos. Si falta ancla, paras y preguntas.

## Unidad de trabajo

```
Objetivo: <resultado verificable>
Traza: <ADR / issue>
Alcance: <archivos>
Exclusiones: <qué no harás>
Pruebas: pnpm test / pnpm test:e2e
Criterio de cierre: CI quality + test + build + smoke verdes
```

Una sesión = una unidad cohesiva. PR pequeño. Mensajes al humano y commits en español (Conventional Commits).

## Autonomía

**Puedes sin preguntar**

- Tests que fijan comportamiento ya aceptado
- Corregir lint/format/typecheck causados por tu cambio
- Docs de guía/runbook en español
- Refactors locales que no cambien rutas públicas ni la marca blueprint

**Requiere confirmación**

- Cambiar tokens, tipografía dual o la marca blueprint → ADR previo
- Dependencia runtime nueva (versiones exactas, ADR 009)
- Tocar husky, commitlint o los pins SHA de Actions
- Secretos, Resend, o variables de Vercel (no se gestionan en este repo)

## Stack y comandos

- Node ≥ 22, pnpm 11 (`packageManager`), Next.js 16 App Router, TypeScript 6, Tailwind v4, Vitest, Playwright
- Coverage: objetivo de flota **≥ 70 %**. Este repo aún no endurece el gate de Vitest (baseline F0); no lo bajes si se añade.

```bash
pnpm install
pnpm format:check && pnpm lint && pnpm typecheck
pnpm test && pnpm build && pnpm test:e2e
# o: make lint && make test && make validate-docs
```

CI principal (`.github/workflows/ci.yml`): jobs `quality`, `test`, `build`, `smoke`. El job `audit` (actionlint + zizmor) queda aparte. Deploy: Vercel Git integration (preview por PR).

## Convenciones

- Ramas `feat/` `fix/` `docs/` `chore/` (los agentes Cloud usan `cursor/…`)
- Hooks husky: commitlint (Conventional Commits), lint-staged en pre-commit
- Idioma: docs y mensajes de PR en castellano peninsular; términos técnicos consagrados se mantienen
- No commitees `.next/`, `coverage/`, `public/socios/bundle.js` ni secretos
- CODEOWNERS: `* @Alexendros`

## Layout

```
app/                       portal Next.js (índice + /socios)
apps/socios|web|platform   productos (socios vivo; web/platform placeholder)
packages/design-system/    tokens, showcase, ui_kits
docs/architecture/decisions/  ADRs (MADR 4.0.0)
docs/guides/               desarrollo, calidad
docs/runbooks/             CI/despliegue, incidente
docs/briefs/               briefs operativos (Design de Claude)
public/                    fonts WOFF2, logos, socios
```

## Definition of Done

- Criterios de la traza cumplidos
- Jobs `quality`, `test`, `build` y `smoke` verdes
- Docs canónicos actualizados si cambia el contrato
- Sin secretos en el diff
