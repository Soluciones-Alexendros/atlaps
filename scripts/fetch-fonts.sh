#!/usr/bin/env bash
# ============================================================
# Atlaps · Descarga self-host de fuentes WOFF2 desde Google Fonts
# ============================================================
# Ejecuta este script DESDE LA RAÍZ DEL REPO:
#   bash scripts/fetch-fonts.sh
#
# Requisitos: bash, curl, sed, grep. Sin dependencias externas.
# Resultado: 7 archivos .woff2 en public/fonts/
#
# Las fuentes se descargan directamente desde fonts.gstatic.com,
# que es donde Google sirve los WOFF2 reales (extraídos del CSS
# generado por fonts.googleapis.com con UA simulado a Chrome).
#
# Licencias: SIL Open Font License 1.1 para todas. Detalle en
# public/fonts/README.md.
# ============================================================

set -euo pipefail

OUT_DIR="public/fonts"
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"

mkdir -p "$OUT_DIR"

fetch_vf() {
  local family="$1"   # "Fraunces" — nombre URL-encoded
  local axes="$2"     # "opsz,wght" o "wght"
  local range="$3"    # "9..144,100..900" o "100..900"
  local out="$4"      # "fraunces-variable.woff2"

  local css_url="https://fonts.googleapis.com/css2?family=${family}:${axes}@${range}&display=swap"
  echo ""
  echo "=== ${family} ==="
  echo "CSS: $css_url"

  local woff2_url
  woff2_url=$(curl -fsSL -H "User-Agent: $UA" "$css_url" | grep -oE 'https://fonts\.gstatic\.com/[^)]+\.woff2' | head -n1)

  if [[ -z "$woff2_url" ]]; then
    echo "  ⚠ no se encontró URL .woff2 para ${family}"
    return 1
  fi

  echo "WOFF2: $woff2_url"
  curl -fsSL -H "User-Agent: $UA" -o "$OUT_DIR/$out" "$woff2_url"
  echo "  → $OUT_DIR/$out ($(stat --printf='%s' "$OUT_DIR/$out") bytes)"
}

fetch_static() {
  local family="$1"   # "IBM+Plex+Mono"
  local weight="$2"   # "400"
  local out="$3"      # "ibm-plex-mono-400.woff2"

  local css_url="https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap"
  echo ""
  echo "=== ${family} ${weight} ==="
  echo "CSS: $css_url"

  local woff2_url
  woff2_url=$(curl -fsSL -H "User-Agent: $UA" "$css_url" | grep -oE 'https://fonts\.gstatic\.com/[^)]+\.woff2' | head -n1)

  if [[ -z "$woff2_url" ]]; then
    echo "  ⚠ no se encontró URL .woff2 para ${family} ${weight}"
    return 1
  fi

  echo "WOFF2: $woff2_url"
  curl -fsSL -H "User-Agent: $UA" -o "$OUT_DIR/$out" "$woff2_url"
  echo "  → $OUT_DIR/$out ($(stat --printf='%s' "$OUT_DIR/$out") bytes)"
}

# ===== Configuración A · marketing =====
fetch_vf "Fraunces"           "opsz,wght" "9..144,100..900" "fraunces-variable.woff2"
fetch_vf "Inter"              "wght"      "100..900"        "inter-variable.woff2"
fetch_vf "JetBrains+Mono"     "wght"      "100..800"        "jetbrains-mono-variable.woff2"

# ===== Configuración B · app autenticada =====
fetch_vf "Inter+Tight"        "wght"      "100..900"        "inter-tight-variable.woff2"
fetch_vf "Geist"              "wght"      "100..900"        "geist-variable.woff2"

# ===== IBM Plex Mono (no es VF en Google Fonts; se descargan estáticos) =====
fetch_static "IBM+Plex+Mono"  "400"       "ibm-plex-mono-400.woff2"
fetch_static "IBM+Plex+Mono"  "500"       "ibm-plex-mono-500.woff2"

echo ""
echo "================================================"
echo "✅ Descarga completada. Verifica:"
ls -la "$OUT_DIR"/*.woff2
echo ""
echo "Para validar que la cadena de carga es 100% local:"
echo "  grep -r 'fonts.googleapis\\|fonts.gstatic' . --include='*.html' --include='*.css'"
echo "  (debería devolver vacío)"
echo "================================================"
