#!/usr/bin/env bash
# Comprueba la meta-sección canónica «Propósito de este documento» en los markdowns P1.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

files=(
  README.md
  AGENTS.md
  ARCHITECTURE.md
  CONTRIBUTING.md
  SECURITY.md
  CHANGELOG.md
  CODE_OF_CONDUCT.md
  SUPPORT.md
  RELEASE.md
  ROADMAP.md
  DECISIONS.md
  .github/PULL_REQUEST_TEMPLATE.md
  docs/README.md
  docs/adr/README.md
  docs/guides/desarrollo.md
  docs/guides/calidad.md
  docs/runbooks/ci-despliegue.md
  docs/runbooks/incidente.md
  docs/architecture/decisions/011-alineacion-canon-p1.md
)

missing=0
for f in "${files[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "Falta el fichero contractual: $f" >&2
    missing=1
    continue
  fi
  if ! grep -q "Propósito de este documento" "$f"; then
    echo "Falta la meta-sección «Propósito de este documento» en $f" >&2
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  exit 1
fi

echo "Docs P1: meta-sección Propósito presente en ${#files[@]} ficheros."
