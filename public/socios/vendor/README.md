# public/socios/vendor

UMD builds de React 18.3.1 self-hosted para la landing privada `/socios/`.

## Procedencia

- `react.production.min.js` · React 18.3.1 · MIT · npm tarball `https://registry.npmjs.org/react/-/react-18.3.1.tgz` (`package/umd/react.production.min.js`).
- `react-dom.production.min.js` · ReactDOM 18.3.1 · MIT · npm tarball `https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz` (`package/umd/react-dom.production.min.js`).

## Por qué no CDN

CSP de `vercel.json` exige `script-src 'self'` sin `unsafe-eval`. Eso descarta `unpkg.com` y `@babel/standalone` (transformación en runtime). Los JSX se compilan en build con `esbuild` (`scripts/build-socios.sh`) y los runtimes se sirven desde el mismo dominio con `integrity` SHA-384.

## Regeneración

```bash
bash scripts/build-socios.sh
```

El script descarga los UMD si faltan, recalcula `integrity`, transforma cada `*.jsx` (factory `React.createElement`, sin `--bundle`) y concatena en `public/socios/bundle.js`.

## Versionado

React/ReactDOM 18.3.x — la versión está fijada en el script. Para subir mayor:

1. Editar URLs en `scripts/build-socios.sh`.
2. Borrar `public/socios/vendor/*.js` para forzar redescarga.
3. `bash scripts/build-socios.sh`.
4. Validar `pnpm build` y smoke E2E sobre `/socios/`.
