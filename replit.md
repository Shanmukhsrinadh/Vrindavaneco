# Vrindavaneco

A React + Vite starter app.

## Tech Stack
- **Frontend**: React 19 + Vite 8
- **Build tool**: Vite (with React Compiler via Babel preset)
- **Linting**: ESLint

## Project Structure
- `index.html` — HTML entry point
- `src/main.jsx` — React entry point
- `src/App.jsx` — Main App component
- `src/App.css`, `src/index.css` — Styles
- `public/` — Static assets
- `vite.config.js` — Vite configuration

## Replit Setup
- The Vite dev server is configured to bind to `0.0.0.0:5000` and accept all hosts (required for the Replit preview proxy).
- A workflow named `Start application` runs `npm run dev` on port 5000.
- Deployment is configured as `static` — `npm run build` produces the `dist/` directory which is served as the production site.

## Commands
- `npm run dev` — start the dev server
- `npm run build` — build the production bundle to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
