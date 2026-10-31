# Inventario de seguridad · 2026-10-31

### Propósito de este documento

- **Objetivos:** Fijar el inventario de solo lectura del repo público Atlaps (manifiestos, secretos plantilla, estilos en línea, CSP) sin valores sensibles.
- **Estructura:** Árbol → manifiestos → env → estilos → CSP → tweaks → hallazgos gitleaks.
- **Contenido a integrar según contexto:** Resultado de la fase 0/1 del hardening. Sin secretos, sin correos personales completos, sin rutas de casa.

## Árbol relevante

| Ruta                                 | Rol                                                |
| ------------------------------------ | -------------------------------------------------- |
| `app/`                               | Portal Next.js (índice, legales, `api/contacto`)   |
| `apps/web/`                          | Landing scaffold `@atlaps/web`                     |
| `apps/socios/`                       | Solo README; contenido en `public/socios/`         |
| `apps/platform/`                     | Placeholder                                        |
| `packages/design-system/`            | Tokens, showcase HTML, `tweaks-panel.jsx`, ui_kits |
| `lib/contacto/`, `lib/rate-limit.ts` | Validación y límite de `POST /api/contacto`        |
| `public/fonts/`                      | WOFF2 + `fonts.css` (fontsource)                   |
| `middleware.ts`                      | CSP con nonce (fase 5 → `proxy.ts`)                |

## Manifiestos y lockfiles

| Manifiesto                                               | Notas                                           |
| -------------------------------------------------------- | ----------------------------------------------- |
| `package.json` (raíz)                                    | Next 16.4.1, React 19.2.7, fontsource 5.3.0     |
| `apps/web/package.json`                                  | `@atlaps/web`, Next 16.4.1                      |
| `pnpm-workspace.yaml`                                    | `apps/*`, `packages/*` + overrides de seguridad |
| `pnpm-lock.yaml`                                         | Lock canónico                                   |
| `apps/socios`, `apps/platform`, `packages/design-system` | Sin `package.json` propio                       |

SBOM resumido: `pnpm list --recursive` (ejecutar en CI/local; no se pegan versiones transitivas aquí). Overrides vigentes: vite, fast-uri, postcss, brace-expansion, js-yaml, nanoid, browserslist, undici, sharp, source-map-js, zod, baseline-browser-mapping.

## Variables de entorno (solo nombres)

- Raíz (`.env.example`): `NEXT_PUBLIC_BASE_URL`, `RESEND_API_KEY`, `CONTACTO_FROM`, `CONTACTO_TO` (+ comentarios `VERCEL_ENV`, `NODE_ENV`, `CI`).
- `apps/web/.env.example`: `NEXT_PUBLIC_SITE_URL` (+ mismos comentarios).
- No hay `.env` / `.env.local` versionados. Cero `*.pem` / `*.key` / `*.p12` / dumps SQL en el árbol.

## Secret scanning / gitleaks

- GitHub Secret scanning (API): 0 abiertas (2026-10-31).
- `gitleaks detect --no-banner --redact --log-opts="--all"`: **0 hallazgos** (informe en [`gitleaks-2026-10-31.md`](./gitleaks-2026-10-31.md)).

## Estilos en línea y HTML peligroso

`dangerouslySetInnerHTML`: **0** en el repo.

### `public/socios/src/` — clasificación

| Fichero        | Líneas (aprox.)                                                      | Decisión                                                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app.jsx`      | panel Tweaks (64–84), `<style>` caveats (87–89)                      | **Anotar:** panel solo si `postMessage` de edit-mode; no es UI de producción por defecto. El `<style>` condicional de `.caveat` → **pasa a clase** en fase 5 (`.caveats-hidden` en `html`). |
| `socios-a.jsx` | logo, hero margin, caveat margin, claim soft                         | **Pasa a clase** (utilidades de layout/marca en CSS de socios).                                                                                                                             |
| `socios-b.jsx` | anchos de columna tabla, métricas grid, tipografía de cifras, notas  | **Pasa a clase** (tabla OKR / métricas).                                                                                                                                                    |
| `socios-c.jsx` | caja mono, anchos th, CTA flex, formulario éxito/error, footer marca | **Pasa a clase** salvo el `filter` del logo en oscuro (**anotar:** depende de `theme` en runtime; candidato a `html[data-theme=dark] .logo-icon`).                                          |

### `packages/design-system/`

| Fichero                                                   | Decisión                                                                                                                    |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `tweaks-panel.jsx`                                        | Infra de desarrollo / showcase. Estilos inline y `<style>{__TWEAKS_STYLE}</style>` **anotar: no producción** (véase abajo). |
| `preview/*.html`, `ui_kits/*/index.html`, `showcase.html` | CSS de documentación; fuera del App Router de producción. **Anotar: solo design-system.**                                   |

## Tweaks en producción

- `scripts/build-socios.sh` empaqueta solo `socios-a|b|c` + `app.jsx`. **No** incluye `packages/design-system/tweaks-panel.jsx`.
- `scripts/build-showcase.sh` sí incluye `tweaks-panel.jsx` → artefacto de design-system, no desplegado como portal Vercel.
- Conclusión: **`tweaks-panel.jsx` no llega a la build de producción del portal.** El panel inline de `public/socios/src/app.jsx` sí viaja en el bundle, pero solo se monta tras `__activate_edit_mode`. Fase 5: reforzar exclusión / no montar en prod.

## Superficies CSP (estado 2026-10-31)

| Superficie                  | Emisor                    | Notas                                                                    |
| --------------------------- | ------------------------- | ------------------------------------------------------------------------ |
| Portal (matcher middleware) | `middleware.ts`           | CSP de bloqueo con nonce + `strict-dynamic`; `style-src 'unsafe-inline'` |
| `/socios/*`                 | `next.config.ts`          | CSP estática; `script-src 'self'`; `style-src 'unsafe-inline'`           |
| Cabeceras estáticas         | `next.config.ts`          | HSTS, Referrer-Policy, Permissions-Policy, XFO DENY, COOP/CORP           |
| `apps/web`                  | `apps/web/next.config.ts` | CSP estática propia                                                      |

## Datos personales / rutas privadas (revisión)

- Eliminadas referencias a `~/.claude/...` en docs y READMEs (fase 1).
- Correos corporativos de canal (`security@` / `contacto@` en dominio del producto) se conservan: son el canal público ([SECURITY.md](../../SECURITY.md)).
- Sin capturas de paneles Vercel/Supabase ni URLs de preview en `public/`, `docs/`, tests e2e o Storybook (inexistente).
