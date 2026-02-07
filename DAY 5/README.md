# DevConf 2026 — Conference Website

Project: A production-ready, responsive conference website built with HTML, CSS (OOCSS), and a small amount of JavaScript.

Features
- Responsive layout: Mobile (<768px), Tablet (768–1024px), Desktop (>1024px)
- OOCSS architecture: separation of structure (`.o-*`), components (`.c-*`) and utilities (`.u-*`)
- Smooth transitions: `transition` on buttons, cards and nav
- Animations: `@keyframes fadeUp` (hero/entrance) and `@keyframes pulseGlow` (attention)
- Glassmorphism via `backdrop-filter` on navigation
- Decorative UI using `::before` and `::after` on section headings
- Accessible mobile nav (hamburger) with small JS toggle

Files
- `index.html` — main page
- `styles.css` — OOCSS + variables + animations
- `main.js` — mobile nav + reveal-on-scroll

How to view
1. Open `day4/DAY 5/index.html` in a modern browser (Chrome, Edge, Safari).
2. For best visuals, open on desktop and mobile sizes to see responsive breakpoints.

Notes
- Images referenced in the page use existing workspace images (e.g. `images/DAY1/*`). Replace with optimized art for production.
- Add real demo link by hosting the folder (GitHub Pages or static host).

Screenshots
- (Add screenshots here after you open the page)

License
- MIT (add your license as needed)
