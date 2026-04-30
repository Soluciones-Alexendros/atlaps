# `apps/web` · Landing pública atlaps.com

> Estado: **placeholder** · pendiente de construir en F1.

## Qué será

Sitio público de marketing en `atlaps.com`. Hereda el design system de `packages/design-system/`.

## Brief

Ejecutar con Design de Claude: `docs/briefs/prototype-landing-app.md` (sección A · Landing pública).

## Stack previsto

- Next.js 15 App Router + TypeScript + Tailwind v4 (`@theme`)
- shadcn/ui + Radix UI primitives
- Configuración tipográfica A (Fraunces + Inter + JetBrains Mono)
- next-intl (es default, en como segunda)
- Vercel deploy con dominio `atlaps.com`

## Estructura prevista cuando se cree

```
apps/web/
├── package.json (Next.js 15 propio)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # /
│   │   ├── precios/page.tsx            # /precios
│   │   ├── docs/[...slug]/page.tsx     # /docs/...
│   │   ├── comunidad/page.tsx          # /comunidad
│   │   └── layout.tsx
│   ├── api/
│   │   └── waitlist/route.ts           # POST waitlist
│   └── globals.css                     # importa tokens del design system
├── content/                            # MDX cornerstone
├── components/                          # locales a esta app
├── lib/
└── public/                              # assets propios + logos compartidos
```

## Hitos roadmap

- F1 (8-may → 29-may): scaffold + landing v0 + waitlist Supabase + Resend + 3 MDX cornerstone.
- F2: completar 12 MDX cornerstone, integración Stripe checkout para Solo, page de pricing definitiva.
- F3: blog, comunidad, docs API ABP.

## Sección /socios

La presentación privada para socios vive en `apps/socios/` (servida en F0 desde `public/socios/`). Cuando se construya `apps/web/`, decidir si:
- (a) Migrar `/socios` como ruta protegida dentro de la app web pública.
- (b) Mantener `/socios` como deploy separado en subdominio (`socios.atlaps.com`).

Default propuesto: (b) durante F1-F3, (a) cuando se introduzca auth real.
