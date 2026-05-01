# Atlaps

> _Atlas de aplicaciones domóticas capaces de funcionar independientemente y de arrollar cooperativamente._
>
> Iniciativa Alexendros, S.L. · Comunitat Valenciana · Bootstrap F0 4-may-2026.

Repositorio monorepo del producto **Atlaps**: design system, landings y aplicaciones del atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, IP, Modbus, BACnet, DALI).

## Estructura

```
Atlaps/
├── apps/                           # productos finales desplegables
│   ├── socios/                     # presentación privada para socios (servida por el portal)
│   ├── web/                        # landing pública atlaps.com (placeholder · F1)
│   └── platform/                   # app autenticada (5 pilares · placeholder · F1-F4)
│
├── packages/                       # piezas compartidas entre apps
│   └── design-system/              # showcase, tokens, ui_kits, preview, logo, iconos
│
├── docs/                           # documentación canónica
│   ├── adr/                        # Architecture Decision Records
│   ├── briefs/                     # briefs operativos para Design de Claude
│   └── tokens.md                   # referencia humana de tokens
│
├── public/                         # assets servidos por el portal Next.js del root
│   ├── fonts/                      # 7 WOFF2 self-host (SIL OFL 1.1)
│   ├── logos/                      # SVG compartidos
│   ├── socios/                     # contenido vivo de apps/socios servido por el portal
│   └── favicon.svg
│
├── app/                            # portal Next.js del root
│   ├── layout.tsx
│   ├── page.tsx                    # índice navegable a apps + recursos
│   └── globals.css                 # tokens duplicados de packages/design-system/tokens.css
│
├── components/ui/                  # primitivos shadcn (futuro)
├── lib/utils.ts                    # cn helper
├── scripts/
│   └── fetch-fonts.sh              # descarga WOFF2 desde Google Fonts (build-time)
│
├── package.json                    # workspace root (Next.js portal)
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── LICENSE                         # propietario · Iniciativa Alexendros, S.L.
└── README.md
```

## Quién va dónde

| Si quieres...                                    | Mira...                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Ver la presentación de socios (privada)          | `apps/socios/README.md` → contenido en `public/socios/`                             |
| Construir / iterar la landing pública atlaps.com | `apps/web/` (placeholder) + `docs/briefs/prototype-landing-app.md`                  |
| Construir / iterar la app autenticada            | `apps/platform/` (placeholder) + `docs/briefs/prototype-landing-app.md` (sección B) |
| Iterar el design system con Design de Claude     | `packages/design-system/` + `docs/briefs/design-system.md`                          |
| Consultar tokens, paleta, tipografía             | `docs/tokens.md` y `packages/design-system/tokens.css`                              |
| Conocer las decisiones de marca                  | `docs/adr/`                                                                         |
| Descargar / regenerar las fuentes self-host      | `bash scripts/fetch-fonts.sh`                                                       |

## Stack

- **Framework portal:** Next.js 15.5.15 App Router + TypeScript 5.9 + Tailwind v4 (`@theme`). React 19.
- **Componentes:** shadcn/ui + Radix UI primitives + Lucide React (provisional iconos).
- **Estética:** **blueprint** (azul plano arquitectónico + pergamino + ámbar señalético). Marca independiente, no derivada de Vergina Imperial. Ver ADR 007.
- **Tipografía dual:**
  - **A · marketing** — Fraunces + Inter + JetBrains Mono.
  - **B · app autenticada** — Inter Display + Geist + IBM Plex Mono.
- **Self-host de fuentes** (SIL OFL 1.1) en `public/fonts/`. Sin requests a CDN externos. RGPD-compliant.
- **Calidad:** ESLint flat 9 (`next/core-web-vitals` + `next/typescript` vía `FlatCompat`) + `@typescript-eslint` + `eslint-plugin-tailwindcss` + `eslint-plugin-jsx-a11y` + Prettier 3 + `tsc --noEmit`.
- **Pre-commit:** husky 9 + lint-staged 15 + commitlint 19 con `@commitlint/config-conventional`.
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml` — lint + typecheck + test + build + audit en Node 22, pnpm 10) + Dependabot semanal (npm + github-actions). Vercel preview por PR.
- **Security headers:** `vercel.json` con HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy, CSP estricta sin `unsafe-eval`.
- **Backend objetivo:** Supabase self-host + GlitchTip self-host + Trigger.dev self-host en VPS Hetzner CX32 Falkenstein FR/DE. Ver ADR 006 (cuaderno operador).
- **LLM:** Mistral La Plateforme UE managed → Scaleway L40S Paris self-host con umbrales 2/4 (F6+). Ver ADR 005.

## Cómo arrancar localmente

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

El portal Next.js sirve:

- `/` → home con índice de recursos del monorepo.
- `/socios/` → presentación privada para socios.
- `/fonts/*` → fuentes self-host.
- `/logos/*` → SVG.

## Cómo desplegar

Vercel + Git integration. Conectar `https://github.com/Alexendros/Atlaps`. Vercel detecta Next.js automáticamente.

- **Build command:** `next build` (default).
- **Install command:** `pnpm install`.
- **Output:** `.next` (default).
- **Variables de entorno:** ninguna en F0.

## Vinculaciones

- **GitHub:** [`Alexendros/Atlaps`](https://github.com/Alexendros/Atlaps) (privado).
- **Forgejo (espejo):** `git.alexendros.me/Alexendros/Atlaps` (pull-mirror cada 8h).
- **Notion (canónico operativo):** Atlaps · Documento de Implementación del MVP.
- **Cuaderno operador (privado):** `~/.claude/cuadernos/atlaps/`.
- **Repo público del protocolo:** `atlaps/abp` (Apache-2.0, separado, F1+).

## Licencia

Propietario. Ver [`LICENSE`](LICENSE).

El protocolo `atlaps/abp` se publicará por separado bajo Apache-2.0 cuando se estabilice (F4–F6).

## Estado del bootstrap (1-may-2026)

### F0 — completo

- ✅ Repo y monorepo organizados.
- ✅ Design System v0 generado con Design de Claude (showcase + ui_kits + preview).
- ✅ Self-host de 7 WOFF2 (Fraunces, Inter, Inter Tight, Geist, JetBrains Mono, IBM Plex Mono 400/500).
- ✅ Presentación de socios v0 publicada en `apps/socios/`.
- ✅ Vercel deploy preview por PR (proyecto `atlaps` team `alexendros`).

### Plumbing productivo (PR #2 + PR #4 mergeados 1-may-2026)

- ✅ **Seguridad** — Next.js bumpeado 15.1.0 → 15.5.15 (cierra CVE-2025-29927 middleware authorization bypass + cache poisoning). `pnpm audit --audit-level=high`: 0 hits.
- ✅ **Lockfile determinista** — `pnpm-lock.yaml` generado y commiteado.
- ✅ **Linting & format** — ESLint flat 9 + Prettier 3 + `tsc --noEmit` cableados en CI.
- ✅ **Pre-commit hooks** — husky 9 + lint-staged 15 + commitlint conventional.
- ✅ **CI GitHub Actions** — `.github/workflows/ci.yml` (Node 22, pnpm 10) en push y PR.
- ✅ **Security headers** — `vercel.json` con 6 headers (HSTS + X-Frame + X-Content-Type + Referrer-Policy + Permissions-Policy + CSP).
- ✅ **Dependabot** — bumps semanales de npm + github-actions.

### Pendientes

- ⏳ Forgejo pull-mirror tras siguiente ejecución de `bootstrap-org-and-mirrors.sh` (PATs operador).
- ⏳ Memoria IVACE INNOVA-CV TEIC (deadline 5-may-2026).
- ⏳ Drop de unpkg/Babel en `public/socios/` con esbuild (plan #61 F6).
- ⏳ Tokens single-source `packages/design-system/tokens.css` (plan #61 F6).
- ⏳ Vitest 3 smoke + Playwright 2 smoke + axe-core + Lighthouse (plan #61 F7).
- ⏳ ADR 008 firmado (tipografía dual A/B + amber-glow).
- ⏳ `apps/web/` (landing pública atlaps.com) y `apps/platform/` (app autenticada) aún sin código.
- ⏳ CodeQL + Dependency Review reactivables cuando: (a) repo se haga público, (b) GHAS contratado, o (c) reemplazo por SAST alternativo (semgrep, snyk).
