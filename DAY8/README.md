# Technical Resume — Portfolio (DAY8)

This project is a professional technical resume and portfolio built with semantic HTML5, vanilla CSS (mobile-first), and minimal JavaScript.

Features
- Mobile-first responsive design
- Semantic structure: header, nav, main, section, article, aside, footer
- Accessible "Skip to content" link and keyboard focus states
- Sticky navigation with hamburger menu using the CSS checkbox hack (no JS)
- Dark mode toggle using CSS variables (checkbox hack)
- Skills grid, project gallery (figure + figcaption), and contact form with HTML5 validation
- High-end animated buttons (Neon and Gradient Border) with micro-interactions

Folder structure
```
DAY8/
  index.html
  css/styles.css
  js/main.js
  assets/* (images/svg placeholders)
  README.md
  COMMIT_LOG.md
```

Deployment
- Recommended: GitHub Pages (branch `main` / `gh-pages`) or Vercel (connect repo and deploy).

Quick preview (local):
```powershell
Set-Location DAY8
python -m http.server 8001
# Open http://localhost:8001 in your browser
```

Git workflow
- This project includes an automated commit script run locally to create 15 atomic commits for a professional commit history. See `COMMIT_LOG.md` for details.
