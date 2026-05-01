#!/usr/bin/env bash
# Atlaps · build showcase — drop CDN runtime, bundle JSX con esbuild.
# Genera:
#   packages/design-system/vendor/react{,-dom}.production.min.js (self-host UMD)
#   packages/design-system/showcase-bundle.js (concatenado de 8 JSX)
#   packages/design-system/showcase.html regenerado con SRI integrity
#
# Patrón espejo de scripts/build-socios.sh (ver ADR 010 §62).
# Ejecuta: pnpm build:showcase  (o bash scripts/build-showcase.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DS="$ROOT/packages/design-system"
VENDOR="$DS/vendor"
SRC="$DS/src"
OUT_BUNDLE="$DS/showcase-bundle.js"
HTML_OUT="$DS/showcase.html"

mkdir -p "$VENDOR"

# 1) React UMD self-host (idempotente: solo descargar si falta)
if [ ! -f "$VENDOR/react.production.min.js" ]; then
  TMP=$(mktemp -d)
  curl -sL https://registry.npmjs.org/react/-/react-18.3.1.tgz \
    | tar -xz -C "$TMP" --strip-components=1 package/umd
  cp "$TMP/umd/react.production.min.js" "$VENDOR/"
  rm -rf "$TMP"
fi
if [ ! -f "$VENDOR/react-dom.production.min.js" ]; then
  TMP=$(mktemp -d)
  curl -sL https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz \
    | tar -xz -C "$TMP" --strip-components=1 package/umd
  cp "$TMP/umd/react-dom.production.min.js" "$VENDOR/"
  rm -rf "$TMP"
fi

REACT_SRI=$(openssl dgst -sha384 -binary "$VENDOR/react.production.min.js" | openssl base64 -A)
REACT_DOM_SRI=$(openssl dgst -sha384 -binary "$VENDOR/react-dom.production.min.js" | openssl base64 -A)

# 2) Bundle JSX. Sin --bundle: solo transformación JSX → JS (classic, React.createElement).
#    React/ReactDOM se proveen como globals UMD por <script>; los JSX comparten
#    globals entre sí (Logo, IcSun, SectionBrand, useTweaks, etc.) y se concatenan
#    en el mismo orden de los antiguos <script type="text/babel">.
BUILD_TMP=$(mktemp -d)
ENTRIES=(
  "$DS/tweaks-panel.jsx"
  "$SRC/icons.jsx"
  "$SRC/logo.jsx"
  "$SRC/sections-1.jsx"
  "$SRC/sections-2.jsx"
  "$SRC/components.jsx"
  "$SRC/patterns.jsx"
  "$SRC/app.jsx"
)

i=0
for entry in "${ENTRIES[@]}"; do
  base="$(basename "$entry" .jsx)"
  out="$BUILD_TMP/$(printf '%02d-%s.js' "$i" "$base")"
  npx --yes esbuild "$entry" \
    --loader:.jsx=jsx \
    --jsx=transform \
    --jsx-factory=React.createElement \
    --jsx-fragment=React.Fragment \
    --target=es2020 \
    --minify \
    > "$out"
  i=$((i + 1))
done

{
  printf '/* Atlaps showcase bundle · generado por scripts/build-showcase.sh — NO editar */\n'
  cat "$BUILD_TMP"/*.js
} > "$OUT_BUNDLE"
rm -rf "$BUILD_TMP"

# 3) Regenerar showcase.html con SRI computado.
#    Reemplaza el bloque entre <div id="root"></div> y </body> con scripts self-host.
python3 - "$HTML_OUT" "$REACT_SRI" "$REACT_DOM_SRI" <<'PY'
import re, sys, pathlib
path, react_sri, react_dom_sri = sys.argv[1], sys.argv[2], sys.argv[3]
src = pathlib.Path(path).read_text(encoding='utf-8')

new_block = (
    '  <div id="root"></div>\n\n'
    f'  <script src="vendor/react.production.min.js" integrity="sha384-{react_sri}" crossorigin="anonymous"></script>\n'
    f'  <script src="vendor/react-dom.production.min.js" integrity="sha384-{react_dom_sri}" crossorigin="anonymous"></script>\n'
    '  <script src="showcase-bundle.js"></script>\n'
)

pattern = re.compile(r'  <div id="root"></div>.*?(?=</body>)', re.DOTALL)
out, n = pattern.subn(new_block, src, count=1)
if n != 1:
    sys.exit(f"build-showcase: no se pudo localizar el bloque #root..</body> en {path}")
pathlib.Path(path).write_text(out, encoding='utf-8')
PY

echo "[build-showcase] OK · vendor + showcase-bundle.js + showcase.html regenerados"
