# `vendor/` · React UMD self-host (showcase)

Builds UMD de React 18.3.1 descargados por `scripts/build-showcase.sh` desde el
registro npm oficial. Se sirven como `<script src="vendor/...">` con SRI
`sha384` desde `showcase.html` para eliminar la dependencia CDN de unpkg
documentada en `docs/architecture/decisions/010-build-tooling-and-test-stack.md` §62.

## Procedencia

| Archivo                          | Origen                                                                           |
|----------------------------------|----------------------------------------------------------------------------------|
| `react.production.min.js`        | `https://registry.npmjs.org/react/-/react-18.3.1.tgz` · `package/umd/`           |
| `react-dom.production.min.js`    | `https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz` · `package/umd/`   |

## Licencia

Ambos archivos son MIT (Meta Platforms, Inc. y colaboradores). Ver
<https://github.com/facebook/react/blob/main/LICENSE>.

## Regeneración

```bash
pnpm build:showcase
```

Idempotente: solo descarga si los archivos faltan. Para forzar refresco, borra
`packages/design-system/vendor/` y reejecuta.

> Estos archivos están en `.gitignore`; son artefactos generados, no fuente.
