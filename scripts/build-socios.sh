#!/usr/bin/env bash
# Atlaps · build socios — drop CDN runtime, bundle JSX with esbuild.
# Genera:
#   public/socios/vendor/react{,-dom}.production.min.js (self-host UMD)
#   public/socios/bundle.js (concatenado: socios-a + socios-b + socios-c + app)
#   public/socios/styles/colors_and_type.css (copia de packages/design-system/colors_and_type.css)
#   public/socios/index.html (regenerado con SRI integrity)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VENDOR="$ROOT/public/socios/vendor"
SRC="$ROOT/public/socios/src"
OUT_BUNDLE="$ROOT/public/socios/bundle.js"
TOKENS_SRC="$ROOT/packages/design-system/colors_and_type.css"
TOKENS_OUT="$ROOT/public/socios/styles/colors_and_type.css"
HTML_OUT="$ROOT/public/socios/index.html"

mkdir -p "$VENDOR"

# 1) React UMD self-host (idempotente: solo descargar si falta)
if [ ! -f "$VENDOR/react.production.min.js" ]; then
  TMP=$(mktemp -d)
  curl -sL https://registry.npmjs.org/react/-/react-18.3.1.tgz | tar -xz -C "$TMP" --strip-components=1 package/umd
  cp "$TMP/umd/react.production.min.js" "$VENDOR/"
  rm -rf "$TMP"
fi
if [ ! -f "$VENDOR/react-dom.production.min.js" ]; then
  TMP=$(mktemp -d)
  curl -sL https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz | tar -xz -C "$TMP" --strip-components=1 package/umd
  cp "$TMP/umd/react-dom.production.min.js" "$VENDOR/"
  rm -rf "$TMP"
fi

REACT_SRI=$(openssl dgst -sha384 -binary "$VENDOR/react.production.min.js" | openssl base64 -A)
REACT_DOM_SRI=$(openssl dgst -sha384 -binary "$VENDOR/react-dom.production.min.js" | openssl base64 -A)

# 2) Bundle JSX (4 entradas independientes, cada una expone `window.X`).
#    Sin --bundle: solo transformación JSX → JS (classic, React.createElement).
#    React/ReactDOM se proveen como globals UMD por <script>.
BUILD_TMP=$(mktemp -d)
for f in socios-a socios-b socios-c app; do
  npx --yes esbuild "$SRC/$f.jsx" \
    --loader:.jsx=jsx \
    --jsx=transform \
    --jsx-factory=React.createElement \
    --jsx-fragment=React.Fragment \
    --target=es2020 \
    --minify \
    > "$BUILD_TMP/$f.js"
done

{
  printf '/* Atlaps socios bundle · generado por scripts/build-socios.sh — NO editar */\n'
  cat "$BUILD_TMP/socios-a.js" "$BUILD_TMP/socios-b.js" "$BUILD_TMP/socios-c.js" "$BUILD_TMP/app.js"
} > "$OUT_BUNDLE"
rm -rf "$BUILD_TMP"

# 3) Tokens single-source: regenerar colors_and_type.css de socios desde el canónico.
{
  printf '/* Generado por scripts/build-socios.sh desde packages/design-system/colors_and_type.css — NO editar */\n'
  cat "$TOKENS_SRC"
} > "$TOKENS_OUT"

# 4) Regenerar index.html con SRI computado
cat > "$HTML_OUT" <<HTML
<!doctype html>
<html lang="es" data-theme="light" data-surface="marketing">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Atlaps · Socios y colaboradores · v0.1</title>
<meta name="description" content="Documento confidencial v0.1 · landing privada para socios, advisors, partners y evaluadores institucionales." />
<meta name="robots" content="noindex, nofollow" />
<base href="/socios/" />
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />

<!-- Fonts: Configuración A (marketing) -->
<link rel="stylesheet" href="/fonts/fonts.css" />

<!-- Tokens del design system (regenerado en build) -->
<link rel="stylesheet" href="styles/colors_and_type.css" />
<link rel="stylesheet" href="styles/socios.css" />
</head>
<body>

<div id="root"></div>

<noscript>
  <div style="padding:32px;font-family:Inter,system-ui,sans-serif;color:#0F2A4A;background:#F5F1E8">
    <h1 style="font-family:Fraunces,Georgia,serif">Atlaps · Documento confidencial v0.1</h1>
    <p>Esta página requiere JavaScript activado para mostrar el contenido interactivo. Si quieres recibir el dossier PDF equivalente, escribe a socios@atlaps.com</p>
  </div>
</noscript>

<script src="vendor/react.production.min.js" integrity="sha384-${REACT_SRI}" crossorigin="anonymous"></script>
<script src="vendor/react-dom.production.min.js" integrity="sha384-${REACT_DOM_SRI}" crossorigin="anonymous"></script>
<script>
window.__atlapsErrors = [];
window.addEventListener("error", function (e) {
  window.__atlapsErrors.push({ msg: e.message, src: e.filename + ":" + e.lineno });
  document.documentElement.setAttribute("data-bundle-error", "1");
});
window.addEventListener("unhandledrejection", function (e) {
  window.__atlapsErrors.push({ msg: String(e.reason) });
  document.documentElement.setAttribute("data-bundle-error", "1");
});
</script>
<script src="bundle.js"></script>

</body>
</html>
HTML

echo "[build-socios] OK · vendor + bundle.js + tokens + index.html regenerados"
