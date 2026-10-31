# Fuentes, iconos e imágenes · Atlaps

### Propósito de este documento

- **Objetivos:** Registrar licencia, origen y empaquetado de tipografías, iconos e imágenes redistribuibles en el repo.
- **Estructura:** Tipografías → iconos → imágenes → regeneración.
- **Contenido a integrar según contexto:** Familias del ADR 008. Empaquetado vía fontsource (sin Google Fonts en runtime ni en scripts).

## Tipografías (SIL OFL 1.1)

| Familia        | Config      | Paquete npm                                 | Pesos / ejes   | Subconjuntos     |
| -------------- | ----------- | ------------------------------------------- | -------------- | ---------------- |
| Fraunces       | A · display | `@fontsource-variable/fraunces@5.3.0`       | 100–900 · opsz | latin, latin-ext |
| Inter          | A · body    | `@fontsource-variable/inter@5.3.0`          | 100–900        | latin, latin-ext |
| JetBrains Mono | A · mono    | `@fontsource-variable/jetbrains-mono@5.3.0` | 100–800        | latin, latin-ext |
| Inter Tight    | B · display | `@fontsource-variable/inter-tight@5.3.0`    | 100–900        | latin, latin-ext |
| Geist          | B · body    | `@fontsource-variable/geist@5.3.0`          | 100–900        | latin, latin-ext |
| IBM Plex Mono  | B · mono    | `@fontsource/ibm-plex-mono@5.3.0`           | 400, 500       | latin, latin-ext |

- **Cadena de respaldo** (sin cambio): ver `packages/design-system/tokens.css` (`Georgia` / `system-ui` / `ui-monospace`).
- **`font-display`:** `swap` en todos los `@font-face` de [`public/fonts/fonts.css`](../../public/fonts/fonts.css).
- **Itálicas:** no había `@font-face` italic en el inventario previo; se mantiene solo `font-style: normal`.
- **Origen de autoría:** Undercase Type (Fraunces), Rasmus Andersson (Inter / Inter Tight), JetBrains, Vercel (Geist), IBM (Plex Mono). Redistribución vía fontsource; licencias OFL en los paquetes npm.
- **Regenerar WOFF2 en `public/fonts/`:** `pnpm fonts:sync` (`scripts/sync-fonts-from-fontsource.sh`).

## Iconos

| Recurso                   | Origen                      | Licencia             | Notas                                                                                |
| ------------------------- | --------------------------- | -------------------- | ------------------------------------------------------------------------------------ |
| Lucide (briefs / roadmap) | Lucide Icons                | ISC                  | Uso documentado; set propio previsto. Sin binarios Lucide en el árbol de producción. |
| Pictogramas SVG de marca  | Iniciativa Alexendros, S.L. | Propietaria del repo | `public/logos/`, `public/socios/assets/`                                             |

## Imágenes

| Recurso             | Origen                      | Licencia                |
| ------------------- | --------------------------- | ----------------------- |
| Logos y favicon SVG | Iniciativa Alexendros, S.L. | Propietaria (`LICENSE`) |
| OG source SVG       | Iniciativa Alexendros, S.L. | Propietaria             |

No hay PNG/JPG/WebP de capturas de paneles (Vercel, Supabase) ni URLs de preview en `public/` ni en snapshots e2e.

## Carga en runtime

- Portal y `apps/web`: `@import` de `packages/design-system/fonts.css` desde `globals.css` (URLs `/fonts/*.woff2`).
- `/socios/` y HTML del design-system: `public/fonts/fonts.css` (misma hoja; `pnpm fonts:sync` alinea WOFF2).
- Cero peticiones a `fonts.googleapis.com` / `fonts.gstatic.com`.
