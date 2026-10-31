# `/public/fonts/` — tipografía self-host (fontsource)

Fuentes oficiales del sistema, servidas desde el propio dominio. **Cero requests a CDNs externos.** Licencias y origen: [`docs/design/FUENTES.md`](../../docs/design/FUENTES.md).

## Inventario WOFF2

Generados con `pnpm fonts:sync` desde paquetes `@fontsource-variable/*` y `@fontsource/ibm-plex-mono` (versión exacta en `package.json`).

| Archivo | Familia | Eje / peso |
| --- | --- | --- |
| `fraunces-latin{,-ext}-opsz-normal.woff2` | Fraunces | opsz + wght 100–900 |
| `inter-latin{,-ext}-wght-normal.woff2` | Inter | wght 100–900 |
| `jetbrains-mono-latin{,-ext}-wght-normal.woff2` | JetBrains Mono | wght 100–800 |
| `inter-tight-latin{,-ext}-wght-normal.woff2` | Inter Tight | wght 100–900 |
| `geist-latin{,-ext}-wght-normal.woff2` | Geist | wght 100–900 |
| `ibm-plex-mono-latin{,-ext}-{400,500}-normal.woff2` | IBM Plex Mono | 400 / 500 |

`fonts.css` declara `@font-face` con `font-display: swap`, subconjuntos latin + latin-ext y los mismos nombres de familia que `tokens.css` (sin sufijo «Variable»).

## Regenerar

```bash
pnpm install
pnpm fonts:sync
```

No usar Google Fonts ni `fonts.gstatic.com`.
