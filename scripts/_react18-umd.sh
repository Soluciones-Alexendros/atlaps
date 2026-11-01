# shellcheck shell=bash
# Copia los UMD de React 18.3.1 desde node_modules (lockfile), sin curl.
# Uso: source desde build-socios / build-showcase; llama copy_react18_umd DEST_DIR
copy_react18_umd() {
  local dest="${1:?dest dir}"
  mkdir -p "$dest"
  local react_root react_dom_root
  react_root="$(
    node -e "console.log(require('path').dirname(require.resolve('react-umd-18/package.json')))"
  )"
  react_dom_root="$(
    node -e "console.log(require('path').dirname(require.resolve('react-dom-umd-18/package.json')))"
  )"
  local react_js="$react_root/umd/react.production.min.js"
  local react_dom_js="$react_dom_root/umd/react-dom.production.min.js"
  if [[ ! -f "$react_js" || ! -f "$react_dom_js" ]]; then
    echo "error: UMD de react-umd-18 / react-dom-umd-18 no encontrados en node_modules" >&2
    echo "       ejecuta: pnpm install" >&2
    return 1
  fi
  cp "$react_js" "$dest/react.production.min.js"
  cp "$react_dom_js" "$dest/react-dom.production.min.js"
}
