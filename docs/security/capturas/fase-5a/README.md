# Capturas fase 5a · proxy, errores y CSP Report-Only

- `after/`: 404 y 500 (`global-error`) a 1280×900 (`d`) y 390×900 (`m`), claro y oscuro, tras el PR.
- 404: `/ruta-inexistente-visual`. 500: cookie de sesión `atlaps-force-global-error=1` (dispara `global-error`).
- La CSP de bloqueo se mantiene; `Content-Security-Policy-Report-Only` es más estricta (sin `unsafe-inline` en style).
- Fase 5b (bloqueo estricto) solo cuando la preview no dé avisos CSP.
