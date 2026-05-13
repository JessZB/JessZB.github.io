# Arepa.dev Portfolio (v2)

Portafolio single-page para desarrollador full-stack que fusiona la estética venezolana con el anime cyberpunk. La arepa como ícono central, representando la construcción capa por capa del software.

## Project Overview

- **Aesthetic:** "Cyberpunk Arepa Shop" (Neon glows, dark backgrounds, Venezuelan cultural elements, RPG-style UI).
- **Core Tech Stack:**
  - **Framework:** Astro 6.3+ (Pure `.astro` components, no React).
  - **CSS:** Tailwind CSS 4.3+ (CSS-based configuration in `global.css`).
  - **Animations:** GSAP 3.15+ (Scroll-driven animations loaded via CDN in `Layout.astro`).
  - **Language:** TypeScript 5.8+.
  - **i18n:** JSON files in `src/data/` (`es.json`, `en.json`).

## Building and Running

This project uses `pnpm` as the package manager.

- **Development:** `pnpm dev` - Starts the Astro dev server.
- **Production Build:** `pnpm build` - Generates a static site in the `dist/` directory.
- **Preview:** `pnpm preview` - Previews the production build locally.

> **Note:** Before the first `pnpm dev`, you may need to run `pnpm approve-builds` to authorize build scripts for dependencies like `sharp`.

## Development Conventions

### Component Architecture
- All components are located in `src/components/`.
- Use `.astro` files for components. Avoid adding frontend frameworks (React, Vue, etc.) unless strictly necessary.
- Components should be modular and self-contained, receiving data via `Astro.props`.

### Styling (Tailwind 4)
- **Tailwind 4** is configured directly in `src/styles/global.css` using the `@theme` block.
- **Custom Colors & Shadows:** Use the custom design tokens defined in `global.css` (e.g., `primary`, `secondary`, `accent`, `highlight`, `glow-text`, `card-base`).
- **Utilities:** Custom utilities like `section-container`, `btn-primary`, and `glow-text` are defined in `global.css`.

### Animations (GSAP)
- Animations are handled by GSAP in `src/layouts/Layout.astro`.
- To animate an element on scroll, use the following data attributes:
  - `data-animate`: Fade in from bottom.
  - `data-animate-left`: Fade in from left.
  - `data-animate-right`: Fade in from right.
  - `data-animate-stagger`: Staggered fade in for children.

### Internationalization (i18n)
- Text content is stored in `src/data/es.json` and `src/data/en.json`.
- Current implementation defaults to Spanish (`es`). To add/modify content, update both JSON files and use the translations in components.

### File Structure
- `src/components/`: Modular UI sections (Hero, About, Projects, etc.).
- `src/data/`: i18n JSON files.
- `src/layouts/`: Base layout templates.
- `src/pages/`: Main entry points (only `index.astro` for this single-page app).
- `src/styles/`: Global CSS and Tailwind configuration.
- `public/`: Static assets (fonts, icons).

## Key Files
- `astro.config.mjs`: Astro configuration with Tailwind Vite plugin.
- `src/styles/global.css`: The "Source of Truth" for styles and Tailwind 4 theme.
- `src/layouts/Layout.astro`: Base HTML structure and GSAP orchestration.
- `plan.md`: Comprehensive design document and roadmap.
