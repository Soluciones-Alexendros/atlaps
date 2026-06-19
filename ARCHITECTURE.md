# Arquitectura de Atlaps

> _Atlas de aplicaciones domóticas capaces de funcionar independientemente y de
> arrollar cooperativamente._ · Iniciativa Alexendros, S.L. · Comunitat Valenciana.

Este documento describe la arquitectura del monorepo Atlaps: sus pilares, cómo
navegarlo, la estrategia multi-protocolo de domótica, el backend objetivo, las
decisiones tomadas y los riesgos. Para el plan temporal por fases ver
[`ROADMAP.md`](ROADMAP.md); para las decisiones detalladas ver [`docs/adr/`](docs/adr/).

## 1. Visión

Atlaps es un atlas SaaS de domótica multi-protocolo. La tesis de producto: cada
aplicación del atlas debe poder operar de forma independiente y, a la vez,
componerse con las demás ("arrollar cooperativamente"). El producto se articula
sobre una app autenticada (la _platform app_) que orquesta múltiples protocolos
de automatización del edificio bajo una experiencia única.

## 2. Pilares de la platform app

La app autenticada (`apps/platform/`, hoy placeholder · F1–F4) se organiza en
cinco pilares conceptuales que estructuran tanto la UI como el dominio:

1. **Dispositivos y descubrimiento** — inventario de equipos por protocolo,
   emparejamiento y normalización de capacidades a un modelo común.
2. **Topología y zonas** — modelo del edificio (zonas, estancias, agrupaciones)
   sobre el que se proyectan los dispositivos.
3. **Automatizaciones y escenas** — reglas, escenas y orquestación de eventos
   entre dispositivos heterogéneos.
4. **Observabilidad y telemetría** — estado en tiempo real, históricos,
   diagnóstico y alertas.
5. **Administración y acceso** — identidad, roles, multi-tenant y auditoría.

Estos pilares son el contrato funcional que las integraciones de protocolo deben
satisfacer; cada protocolo aporta un adaptador que mapea su modelo nativo al
modelo común de los pilares 1–2.

## 3. Estructura del monorepo

Gestionado con **pnpm workspaces** (`pnpm-workspace.yaml`: `apps/*`,
`packages/*`). El objetivo declarado es **Turborepo** pleno; hoy la raíz actúa
además como portal Next.js (ver ADR 010 y §7 Decisiones).

```
Atlaps/
├── apps/                      productos finales desplegables
│   ├── socios/                presentación privada para socios (servida por el portal) · ✅ F0
│   ├── web/                   landing pública atlaps.com · placeholder · F1
│   └── platform/              app autenticada (5 pilares · §2) · placeholder · F1–F4
├── packages/
│   └── design-system/         showcase, tokens, ui_kits, preview, logo, iconos
├── docs/
│   ├── adr/                   Architecture Decision Records (MADR 4.0.0)
│   ├── briefs/                briefs operativos para Design de Claude
│   └── tokens.md              referencia humana de tokens
├── app/                       portal Next.js de la raíz (índice navegable + /socios)
├── components/ui/             primitivos shadcn (futuro)
├── lib/utils.ts               helper cn
├── public/                    assets servidos por el portal (fonts WOFF2, logos, socios)
├── scripts/                   build-socios.sh, build-showcase.sh, fetch-fonts.sh
└── (config raíz)              package.json, tsconfig, next.config.ts, eslint, vitest, playwright
```

### Cómo navegarlo

| Si quieres…                                      | Mira…                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------- |
| Presentación de socios (privada)                 | `apps/socios/` → contenido vivo en `public/socios/`                  |
| Landing pública atlaps.com                       | `apps/web/` + `docs/briefs/prototype-landing-app.md`                 |
| App autenticada (5 pilares)                      | `apps/platform/` + `docs/briefs/prototype-landing-app.md` (sección B)|
| Design system con Design de Claude               | `packages/design-system/` + `docs/briefs/design-system.md`           |
| Tokens, paleta, tipografía                       | `docs/tokens.md` y `packages/design-system/tokens.css`               |
| Decisiones de marca y técnicas                   | `docs/adr/`                                                          |

## 4. Estrategia multi-protocolo

Atlaps integra protocolos de domótica heterogéneos tras un modelo de dominio
común. Protocolos objetivo:

- **KNX** — bus cableado estándar en edificación profesional.
- **Matter** — capa de interoperabilidad sobre IP (Thread/Wi-Fi).
- **Zigbee** y **Z-Wave** — malla inalámbrica de bajo consumo.
- **IP** — dispositivos nativos sobre red (cámaras, controladores).
- **Modbus** — automatización industrial y energía.
- **BACnet** — gestión de edificios (HVAC, climatización).
- **DALI** — control de iluminación direccionable.

Patrón arquitectónico: cada protocolo se encapsula en un **adaptador** que
traduce su modelo nativo (dispositivos, capacidades, eventos) al modelo común de
los pilares §2. Esto aísla las particularidades de cada bus y permite añadir
protocolos sin tocar el núcleo. El protocolo propio de composición se publicará
por separado como **`atlaps/abp`** (Apache-2.0), fuera de este repositorio
propietario (ventana F4–F6).

## 5. Frontend

- **Framework:** Next.js 15.5.x App Router + TypeScript 5.9 + Tailwind v4
  (`@theme`). React 19.
- **Componentes:** shadcn/ui + Radix UI primitives + Lucide React (iconos
  provisionales).
- **Estética:** _blueprint_ (azul de plano arquitectónico + pergamino + ámbar
  señalético). Marca independiente, no derivada (ADR 007).
- **Tipografía dual** (ADR 008): A · marketing (Fraunces + Inter + JetBrains
  Mono) y B · app autenticada (Inter Display + Geist + IBM Plex Mono).
- **Fuentes self-host** (SIL OFL 1.1) en `public/fonts/`, sin requests a CDN
  externos (RGPD-compliant).

## 6. Backend objetivo

Self-host en **VPS Hetzner CX32** (Falkenstein, FR/DE) — ver ADR 006:

- **Supabase** self-host — datos, autenticación e identidad multi-tenant.
- **GlitchTip** self-host — observabilidad de errores (compatible Sentry).
- **Trigger.dev** self-host — jobs y orquestación de eventos/automatizaciones.

En F0 el frontend se despliega en **Vercel** (preview por PR) sin variables de
entorno. El backend self-host entra a partir de F2.

## 7. Decisiones (ADR)

Las decisiones se registran en `docs/adr/` con formato **MADR 4.0.0** (ADR 0001):

- **005** — LLM: Mistral La Plateforme UE managed → Scaleway L40S Paris self-host
  (umbrales 2/4, F6+).
- **006** — Backend self-host en Hetzner (Supabase + GlitchTip + Trigger.dev).
- **007** — Marca independiente _blueprint_ (no derivada de Vergina Imperial).
- **008** — Tipografía dual A/B + amber-glow.
- **009** — Fijado de dependencias (versiones exactas, lockfile determinista).
- **010** — Build tooling y stack de test (Turborepo objetivo, Vitest, Playwright).

Decisión transversal vigente: la raíz del repo funciona hoy como **portal
Next.js** además de workspace root; la separación plena hacia Turborepo con la
platform app aislada está en el roadmap (F1).

## 8. Calidad y CI/CD

- **Estático:** ESLint flat 9 (`next/core-web-vitals` + `next/typescript`) +
  `@typescript-eslint` + `eslint-plugin-tailwindcss` + `eslint-plugin-jsx-a11y` +
  Prettier 3 + `tsc --noEmit`.
- **Tests:** Vitest (unit) + Playwright (e2e) + `@axe-core/playwright` (a11y).
- **Pre-commit:** husky 9 + lint-staged + commitlint (`config-conventional`).
- **CI:** GitHub Actions `.github/workflows/ci.yml` — lint · typecheck · test ·
  build · audit en Node 22, pnpm 10, runners self-hosted (`[self-hosted, ts]`).
- **Dependabot:** bumps semanales de npm + github-actions.
- **Despliegue:** Vercel con Git integration (preview por PR).

## 9. Threat model básico

Activos: código propietario, credenciales de despliegue, datos de socios y, a
futuro, datos de dispositivos de clientes (multi-tenant).

- **Bypass de autorización en middleware** — mitigado al cerrar CVE-2025-29927
  (Next.js ≥ 15.5.15). El `middleware.ts` no debe ser el único punto de control;
  la autorización se valida también en capa de datos (Supabase RLS, F2+).
- **Cache poisoning** — cubierto por el mismo bump de Next.js.
- **Inyección / XSS** — CSP estricta sin `unsafe-eval` en `vercel.json`; React
  escapa por defecto.
- **Clickjacking** — `X-Frame-Options: DENY`.
- **Sniffing de tipo** — `X-Content-Type-Options: nosniff`.
- **Transporte** — HSTS forzado.
- **Fuga por terceros** — fuentes self-host (sin CDN externos); RGPD-compliant.
- **Cadena de suministro** — versiones fijadas (ADR 009), lockfile determinista,
  Dependabot, `pnpm audit --audit-level=high` en CI.
- **Divulgación de vulnerabilidades** — canal privado en `SECURITY.md`.
- **Superficie de protocolos (F2+)** — cada adaptador de bus (KNX, Modbus,
  BACnet…) es una superficie de ataque sobre la red del edificio; se aislará por
  adaptador con validación de entrada y límites de privilegio.

## 10. Riesgos

- **Deuda de migración a Turborepo** — la raíz mezcla portal Next.js y workspace
  root; la separación plena (F1) puede requerir reestructurar imports y build.
- **Placeholders de producto** — `apps/web/` y `apps/platform/` aún sin código;
  el grueso del valor de producto está por construir (F1–F4).
- **Self-host del backend** — operar Supabase + GlitchTip + Trigger.dev en un
  único VPS Hetzner concentra responsabilidad operativa (backups, parches,
  disponibilidad) en el operador.
- **Heterogeneidad de protocolos** — mantener adaptadores para 8 protocolos con
  ciclos de vida y certificaciones distintos (Matter, Z-Wave) es costoso.
- **Tokens duplicados** — `app/globals.css` duplica tokens de
  `packages/design-system/tokens.css`; pendiente single-source (F6).
- **Dependencias de assets externos** — unpkg/Babel residuales en
  `public/socios/`, pendientes de drop con esbuild (F6).
- **Seguridad estática reducida** — CodeQL + Dependency Review desactivados hasta
  repo público / GHAS / SAST alternativo.
