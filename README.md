
````
# Blinkit — Frontend Clone

Production-ready front-end clone of the Blinkit homepage UI, built with React + Vite and styled using Tailwind CSS. This repo contains the static frontend (no backend) and a deployable build currently hosted on Netlify.

Live demo: https://blinkit-site.netlify.app/ (deployed). :contentReference[oaicite:1]{index=1}  
Source: https://github.com/CodeFiroz/blinkit. :contentReference[oaicite:2]{index=2}

---

## Quick overview — TL;DR
- Purpose: Pixel-accurate Blinkit homepage **UI clone** for portfolio / learning.
- Scope: Frontend only — static interactions, responsive layout, and Tailwind-driven components.
- Live: Netlify demo (link above). :contentReference[oaicite:3]{index=3}

---

## Tech stack
- **Framework:** React (Vite template)
- **Styling:** Tailwind CSS
- **Bundler / Dev server:** Vite
- **Deployment:** Netlify (demo)

---

## Features
- Responsive homepage layout (mobile-first).
- Recreated header, hero, category grid, and product tiles.
- Utility-first styling with Tailwind for rapid iteration.
- Clean, componentized React structure for easy extension.

---

## Prerequisites
- Node.js >= 18 (recommended)
- npm (or yarn / pnpm if you prefer — adjust commands accordingly)

---

## Local setup (developer workflow)
1. Clone the repo
   ```bash
   git clone https://github.com/CodeFiroz/blinkit.git
   cd blinkit
````

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the dev server

   ```bash
   npm run dev
   ```

   Vite will start a local dev server and provide a local URL.

4. Build for production

   ```bash
   npm run build
   ```

5. Preview the production build locally

   ```bash
   npm run preview
   ```

> Tip: If you use `pnpm` or `yarn`, swap `npm install` and the script runner accordingly.

---


(Exact structure may vary — inspect `src/` for component names and layout.)

---

## Deployment

This project is easily hosted on static hosts (Netlify, Vercel, GitHub Pages). The live demo is deployed on Netlify. ([blinkit-site.netlify.app][2])

Suggested Netlify flow:

* Connect GitHub repo → Automatic builds on push
* Build command: `npm run build`
* Publish directory: `dist`

---

## Contribution & issues

* This is a portfolio/learning project. If you want to contribute, open an issue or submit a PR with clear scope and screenshots.
* Keep PRs focused: style, accessibility fixes, component refactors, or responsive bug fixes only.


## License

MIT — use it, fork it, and don’t sue me.

---

## Contact

Owner: `CodeFiroz` — see repository on GitHub for contact and issues. ([GitHub][1])

```
