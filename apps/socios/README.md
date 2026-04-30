# `apps/socios` · Landing privada para socios y colaboradores

> Estado: **vivo (v0)** · Confidencial · No publicar abiertamente.

## Qué es

Página privada `/socios` que presenta Atlaps a futuros socios, business angels, partners y colaboradores estratégicos. Salida del prompt `docs/briefs/landing-socios.md` ejecutado con Design de Claude.

## Dónde vive el contenido servido

El portal Next.js del root del repo sirve el HTML estático desde `public/socios/`:

```
public/socios/
├── index.html             # entrada (renombrado de Socios.html)
├── styles/
│   ├── colors_and_type.css
│   └── socios.css
├── src/                   # módulos JSX (con tweaks-panel)
└── assets/                # logos
```

URL en el deploy Vercel: `https://<project>.vercel.app/socios/`.

## Cómo iterar

1. Reabre Design de Claude con el sistema enlazado (`Frontend design` + `Interactive prototype` + `Make tweakable` + `Save as standalone HTML`).
2. Pega el brief de `docs/briefs/landing-socios.md` y describe los cambios deseados.
3. Cuando descargues el ZIP nuevo, sustituye el contenido de `public/socios/` (los nombres internos deberían mantenerse).
4. Verifica que las referencias a Google Fonts se sustituyen por `/fonts/fonts.css` (script `scripts/sanitize-fonts.sh` o `sed` manual).
5. Commit + push.

## Roadmap

- F0 (hoy) · primera versión publicada en Vercel.
- F1 · iterar tras feedback de operador y de los primeros 3 lectores.
- F2 · añadir guard de acceso (magic-link o password simple) si la confidencialidad lo exige.
- F3 · migrar a ruta Next.js (`app/socios/page.tsx`) si el contenido se vuelve dinámico (datos vivos de tracción, OKRs).

## Pendientes inmediatos

- Reemplazar testimonios placeholder con quotes reales de las primeras 5 entrevistas (gate F0→F1).
- Verificar contraste WCAG 2.2 AA con axe-core en CI.
- Añadir watermark "Documento confidencial" más visible en la versión PDF descargable (futuro).
