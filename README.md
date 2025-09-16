# CalcuRM – PWA (UI Mejorada)
- UI: header sticky, segmentados lb/kg & redondeo, KPI grid, motion, safe-areas.
- Funciona offline (SW) e instalable (manifest).

## Ejecutar local
- `python -m http.server 8080` → http://localhost:8080
- o `npx http-server -p 8080`

## GitHub Pages
- Sube: index.html, manifest.webmanifest, sw.js, /icons/
- Settings → Pages → Deploy from a branch (root).

## Instalación
- iOS (Safari): Compartir → Añadir a pantalla de inicio.
- Android (Chrome): Menú → Instalar app.

## Forzar actualización
- Sube `CACHE_NAME` en sw.js y vuelve a publicar.
