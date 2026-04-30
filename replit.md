# Vrindavan Eco Plates

A high-conversion marketing site for an eco-friendly leaf-plate brand
(reference: vistaraku.co.in). White + green palette, mobile-first.

## Tech Stack
- **Frontend**: React 19 + Vite 8
- **Routing**: react-router-dom v7 (BrowserRouter)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Animation**: framer-motion
- **Icons**: react-icons (`fi`, `fa`, `gi`, `lu`)
- **Map**: Leaflet (raster OSM tiles — no API key, no WebGL needed)

## Project Structure
- `index.html` — HTML entry point with SEO meta tags
- `src/main.jsx` — React entry point
- `src/App.jsx` — Router + `ScrollToHashOrTop` helper for cross-page hash nav
- `src/pages/HomePage.jsx` — landing page composition
- `src/pages/ProductsPage.jsx` — full catalog with sticky category filter
- `src/sections/` — `Hero`, `Products`, `About`, `Benefits`, `Process`,
  `Testimonials`, `FinalCTA` (contact), `Footer`
- `src/components/` — reusable UI: `Navbar`, `Logo`, `ProductCard`,
  `WhatsAppButton`, `CallButton`, `MapBackground`, `StickyWhatsApp`
- `src/data/site.js` — brand info, contact, `mapOpenUrl`, helpers
- `src/data/products.json` — 13 products with `category` + `featured` flag
- `src/data/categories.js` — filter list with labels
- `src/data/productImages.js` — Vite glob loader for `src/assets/products/*`
- `src/assets/products/` — 13 product images
- `src/index.css` — Tailwind theme + custom utilities (`.bg-grain`,
  `.scrollbar-none`, Leaflet pin styles)

## Key Behaviors
- **Featured-on-home, all-on-products**: home `Products` section shows the 3
  `featured` items + a "Show all products" link to `/products`.
- **Category filter**: `ProductsPage` filters by `?category=plates|bowls|boxes|cutlery|cups`.
  Sticky filter bar with per-category counts and animated card grid.
- **Cross-page hash nav**: navbar links like `/#about` work from any page —
  `ScrollToHashOrTop` runs after `pathname/hash` change and uses
  `scrollIntoView({ behavior: "auto" })` for instant landing.
- **Map background on contact**: `FinalCTA` renders a Leaflet map of Vrindavan
  underneath the green CTA card, with a soft white veil. "Open in Maps"
  button opens Google Maps in a new tab.

## Replit Setup
- Vite dev server binds to `0.0.0.0:5000` and accepts all hosts.
- Workflow `Start application` runs `npm run dev`.
- Deployment is `static` — `npm run build` produces `dist/`.

## Commands
- `npm run dev` — start the dev server
- `npm run build` — build the production bundle to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
