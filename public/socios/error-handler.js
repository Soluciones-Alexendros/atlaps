// CSP-safe diagnostic shim · cargado antes de bundle.js para capturar
// errores JS y rejections que de otro modo se perderían en producción
// (la CSP de vercel.json bloquea scripts inline en script-src 'self').
window.__atlapsErrors = [];
window.addEventListener("error", function (e) {
  window.__atlapsErrors.push({ msg: e.message, src: e.filename + ":" + e.lineno });
  document.documentElement.setAttribute("data-bundle-error", "1");
});
window.addEventListener("unhandledrejection", function (e) {
  window.__atlapsErrors.push({ msg: String(e.reason) });
  document.documentElement.setAttribute("data-bundle-error", "1");
});
