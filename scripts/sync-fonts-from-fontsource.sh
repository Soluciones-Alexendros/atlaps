#!/usr/bin/env bash
# Atlaps · copia WOFF2 latin + latin-ext desde @fontsource(-variable) a public/fonts/.
# Sin Google Fonts. Ejecutar tras pnpm install desde la raíz del repo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/fonts"
VF="$ROOT/node_modules/@fontsource-variable"
ST="$ROOT/node_modules/@fontsource/ibm-plex-mono/files"

need() {
  local src="$1"
  if [[ ! -f "$src" ]]; then
    echo "faltan fuentes fontsource: $src (¿pnpm install?)" >&2
    exit 1
  fi
}

mkdir -p "$OUT"

copy() {
  local src="$1" dest="$2"
  need "$src"
  cp -f "$src" "$OUT/$dest"
  echo "  → $dest ($(wc -c <"$OUT/$dest") bytes)"
}

echo "Sincronizando fuentes desde fontsource → public/fonts/"

# Configuración A · marketing (Fraunces con eje opsz como antes)
copy "$VF/fraunces/files/fraunces-latin-opsz-normal.woff2" "fraunces-latin-opsz-normal.woff2"
copy "$VF/fraunces/files/fraunces-latin-ext-opsz-normal.woff2" "fraunces-latin-ext-opsz-normal.woff2"
copy "$VF/inter/files/inter-latin-wght-normal.woff2" "inter-latin-wght-normal.woff2"
copy "$VF/inter/files/inter-latin-ext-wght-normal.woff2" "inter-latin-ext-wght-normal.woff2"
copy "$VF/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2" "jetbrains-mono-latin-wght-normal.woff2"
copy "$VF/jetbrains-mono/files/jetbrains-mono-latin-ext-wght-normal.woff2" "jetbrains-mono-latin-ext-wght-normal.woff2"

# Configuración B · app
copy "$VF/inter-tight/files/inter-tight-latin-wght-normal.woff2" "inter-tight-latin-wght-normal.woff2"
copy "$VF/inter-tight/files/inter-tight-latin-ext-wght-normal.woff2" "inter-tight-latin-ext-wght-normal.woff2"
copy "$VF/geist/files/geist-latin-wght-normal.woff2" "geist-latin-wght-normal.woff2"
copy "$VF/geist/files/geist-latin-ext-wght-normal.woff2" "geist-latin-ext-wght-normal.woff2"
copy "$ST/ibm-plex-mono-latin-400-normal.woff2" "ibm-plex-mono-latin-400-normal.woff2"
copy "$ST/ibm-plex-mono-latin-ext-400-normal.woff2" "ibm-plex-mono-latin-ext-400-normal.woff2"
copy "$ST/ibm-plex-mono-latin-500-normal.woff2" "ibm-plex-mono-latin-500-normal.woff2"
copy "$ST/ibm-plex-mono-latin-ext-500-normal.woff2" "ibm-plex-mono-latin-ext-500-normal.woff2"

# Retirar WOFF2 heredados del script de Google Fonts (nombres antiguos).
for obsolete in \
  fraunces-variable.woff2 \
  inter-variable.woff2 \
  jetbrains-mono-variable.woff2 \
  inter-tight-variable.woff2 \
  geist-variable.woff2 \
  ibm-plex-mono-400.woff2 \
  ibm-plex-mono-500.woff2
do
  if [[ -f "$OUT/$obsolete" ]]; then
    rm -f "$OUT/$obsolete"
    echo "  × eliminado $obsolete"
  fi
done

# Hoja canónica → copia estática para /socios y HTML del design-system
if [[ -f "$ROOT/packages/design-system/fonts.css" ]]; then
  cp -f "$ROOT/packages/design-system/fonts.css" "$OUT/fonts.css"
  echo "  → fonts.css (desde packages/design-system/fonts.css)"
fi

echo "Listo."
