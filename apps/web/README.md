# `apps/web` · Landing pública atlaps.com

> Estado: **scaffold W1 Día L** (1-may-2026 · pre-arranque F1)
> Plan rector: `~/.claude/plans/planificar-w1-apps-web-landing-twinkling-sketch.md`

## Stack

- Next.js 15.5.15 App Router · React 19.2.5 · TypeScript 5.9.3
- Tailwind v4 (`@theme`) + tokens compartidos desde `packages/design-system/tokens.css`
- Workspace pnpm (`@atlaps/web`)

## Comandos

```bash
# desde la raíz del monorepo
pnpm install                              # primera vez tras añadir el workspace
pnpm --filter @atlaps/web dev             # http://localhost:3100
pnpm --filter @atlaps/web build
pnpm --filter @atlaps/web typecheck
pnpm --filter @atlaps/web lint
```

## Estructura W1

```
apps/web/
├── package.json                    # @atlaps/web private
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.example
├── .gitignore
└── app/
    ├── layout.tsx                  # metadata SEO + skip-link a11y
    ├── globals.css                 # tailwind + tokens design-system
    ├── page.tsx                    # landing (scaffold Día L · 12 secciones Día X)
    ├── robots.ts
    └── sitemap.ts
```

## Roadmap W1 (8-14 may)

- **L 8-may** ✅ Scaffold workspace + boot mínimo
- **M 9-may** Header + Hero + Pilares + Protocolos belt + Footer
- **X 10-may** Cómo funciona + Pricing + ABP + Transparencia + Testimonios + FAQ
- **J 11-may** /api/waitlist + Supabase + Resend transactional
- **V 12-may** i18n es/en + 3 MDX cornerstone + JSON-LD
- **S 13-may** Tests vitest + Playwright + axe + Vercel project + DNS
- **D 14-may** Hardening + GlitchTip + go-live atlaps.com

## Sección /socios

La presentación privada para socios vive hoy en `public/socios/` (servida por el portal root). Decisión migración pendiente para F2-F3:

- (a) ruta protegida dentro de `apps/web` con auth real
- (b) deploy separado en `socios.atlaps.com`

Default: (b) durante F1-F3, (a) cuando se introduzca auth.

Brief operativo: `docs/briefs/prototype-landing-app.md` §A.
