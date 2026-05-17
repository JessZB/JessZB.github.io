# JESSZB.DEV Portfolio (v2)

Portafolio single-page para desarrollador full-stack que fusiona la estética venezolana con el anime cyberpunk. La arepa como ícono central, representando la construcción capa por capa del software. El branding central es **JESSZB.DEV** (con "ZB" destacado en color rosado/rojo).

## Project Overview

- **Aesthetic:** "Cyberpunk Arepa Shop". Mezcla de Anime/Cyberpunk, elementos culturales venezolanos y minimalismo japonés.
- **Theme Switching:** El sitio cuenta con dos temas principales que cambian drásticamente la web (colores, sombras, íconos, textos, etc.):
  - **Arepa-tropical** (Light Theme)
  - **Midnight-coffee** (Dark Theme)
- **Core Tech Stack:**
  - **Framework:** Astro 6.3+ (Pure `.astro` components, no React).
  - **CSS:** Tailwind CSS 4.3+ (CSS-based configuration en `global.css`).
  - **Animations:** GSAP 3.15+ (Scroll-driven animations).
  - **Language:** TypeScript 5.8+.
  - **i18n:** JSON files en `src/data/` (`es.json`, `en.json`).

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

### Styling & Themes (Tailwind 4)
- **Tailwind 4** is configured directly in `src/styles/global.css` using the `@theme` block.
- **Custom Colors & Shadows:** Use the custom design tokens defined in `global.css` for both *Arepa-tropical* and *Midnight-coffee* themes.
- **Utilities:** Custom utilities like `section-container`, `btn-primary`, and `glow-text` are defined in `global.css`.
- Hover interactions should include lift (`translateY(-6px)`), glow, and enhanced shadow.

### Animations (GSAP)
- Animations are handled by GSAP in `src/layouts/Layout.astro`.
- To animate an element on scroll, use the following data attributes:
  - `data-animate`: Fade in from bottom.
  - `data-animate-left`: Fade in from left.
  - `data-animate-right`: Fade in from right.
  - `data-animate-stagger`: Staggered fade in for children.
- **Theme Curtain Animation:** Al cambiar de tema de forma brusca, se utilizará una animación de telón (ej. "Sirviendo café" o "Haciendo las arepas") con un loader/spinner apropiado.

### Internationalization (i18n)
- Text content is stored in `src/data/es.json` and `src/data/en.json`.
- El sistema debe detectar automáticamente el idioma del usuario y permitir el cambio mediante un interruptor (que también puede activar el telón de carga).
- Generar solo textos de ejemplo temporales durante el desarrollo; el cliente ajustará las traducciones finales.

### SEO
- Uso estricto de un SEO profesional para garantizar carga rápida y posicionamiento adecuado. Las configuraciones SEO deben estar centralizadas.

### File Structure
- `src/components/`: Modular UI sections (Hero, About, Projects, etc.).
- `src/data/`: i18n JSON files.
- `src/layouts/`: Base layout templates.
- `src/pages/`: Main entry points (`index.astro` and `projects/[slug].astro`).
- `src/scripts/`: Client-side scripts like `i18n-engine.ts` and `theme-init.ts`.
- `src/styles/`: Global CSS and Tailwind configuration.
- `public/`: Static assets (fonts, icons, images).

## Sections & Content Guidelines

### 1. Hero / Sobre Mí (Combinados)
- Mostrar inmediatamente el nombre "JESSZB.DEV", título ("> Full-Stack Developer_") y biografía.
- Incluir un avatar anime SVG estilo chibi, CTAs, e insignias ("Disponible para proyectos").

### 2. Habilidades & Stack Tecnológico
- Agrupar tecnologías por categorías (Frontend, Backend, Base de Datos, Soft Skills).
- **Prohibido usar progress bars o porcentajes de habilidades.** Presentarlas con descripciones como "Tecnologías con las que he trabajado".
- Preparar para futuro feature de tooltip: Al pasar el cursor, mostrar "ver trabajos/proyectos implicados".

### 3. Herramientas
- Grid con herramientas frecuentes: Opencode, Gemini CLI, VS Code, Antigravity, Git, Github, Obsidian, Insomnia, Prisma.

### 4. Proyectos & Detalles
- **Página principal (Cards):** Cada card debe incluir un carrusel/slider automático de imágenes leyendo un array de URLs del JSON. Al hacer hover, mostrar el botón "Ver detalles". Filtros por categorías (Reina Pepiada, Pelua, Dominó).
- **Página de Detalle (`projects/[slug].astro`):**
  - Descripción completa y tiempo trabajado.
  - Botones de DEMO y CÓDIGO.
  - Galería multimedia (imágenes o YouTube).
  - Stack tecnológico y herramientas utilizadas (conectado con Habilidades).
  - Botón de regreso al inicio.
  - Sección "Otros proyectos" con diseño similar al listado principal.

### 5. Timeline Laboral
- Timeline vertical con gradientes y nodos (ícono de arepa), alternando entradas izquierda/derecha.

### 6. Contacto & Footer
- **Contacto:** Formulario estilizado como terminal de anime con inputs brillantes y mensaje de éxito "¡Sugoi!".
- **Footer:** Logo JESSZB.DEV, banderas de Venezuela, links sociales y easter egg (contador de arepas clickeable).

## Key Files
- `astro.config.mjs`: Astro configuration with Tailwind Vite plugin.
- `src/styles/global.css`: The "Source of Truth" for styles and Tailwind 4 theme.
- `src/layouts/Layout.astro`: Base HTML structure and GSAP orchestration.
- `PRD.MD` / `plan.md`: Comprehensive design document, roadmap, and project requirements.
