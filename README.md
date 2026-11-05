# Portafolio — Alexis Estrada Rubio

Professional portfolio of Alexis Estrada Rubio, Frontend Engineer (React, TypeScript, JavaScript).
The site content is in Spanish; code and technical documentation are in English.

**Live site:** https://alexisestradarubio.github.io/portafolio-app/

## Features

- Single-page layout with anchored sections: about, experience, case studies, skills and contact.
- **Component view:** a toggle that outlines every React component on the page with its name and props, to show how the site is composed.
- Light and dark themes, saved in `localStorage` and applied before first paint.
- CV downloads in Spanish and English.
- Accessible by default: semantic landmarks, skip link, visible focus states, keyboard-operable menus and `prefers-reduced-motion` support.

## Tech stack

- [React 19](https://react.dev) with TypeScript
- [Vite](https://vite.dev) for development and builds
- [Tailwind CSS 4](https://tailwindcss.com) with design tokens defined as CSS variables in `src/index.css`
- ESLint (typescript-eslint, react-hooks, react-refresh)
- GitHub Actions + GitHub Pages for deployment

## Getting started

Requirements: Node.js 22 or later.

```bash
npm install
npm run dev
```

The dev server serves the site under the GitHub Pages base path: http://localhost:5173/portafolio-app/

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
The base path `/portafolio-app/` is set in `vite.config.ts`.

## Project structure

```
public/
  cv/                 Downloadable CV files (Spanish and English)
  favicon.svg
  og-image.png        Social preview image (1200×630)
src/
  components/         Reusable UI: Nav, Section, CvDownload, Inspectable, toggles…
  context/            Theme and component-view state (context, provider, hook)
  data/               All page content, separated from the UI
  images/             Icon components
  sections/           One component per page section
  types/              Content types
  index.css           Design tokens, type scale and base styles
```

To update the content (experience, case studies, skills, links), edit the files in `src/data/`. The sections render whatever those files contain.
