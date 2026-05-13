# Plan: Arepa.dev Portfolio

## 1. Visión General

Portafolio single-page para desarrollador full-stack que fusiona la estética venezolana con el anime cyberpunk. La arepa como ícono central — algo que se construye capa por capa, igual que el software.

**Palabras clave de diseño:** arepa, Venezuela, anime

---

## 2. Concepto de Diseño: "Cyberpunk Arepa Shop"

Un portafolio que mezcla tres mundos visuales:
- **Anime/Cyberpunk:** Fondos oscuros, neon glows, UI futurista
- **Venezuela:** Calidez cultural, colores de la bandera, la arepa como ícono
- **Minimalismo japonés:** Tipografía limpia, espacio negativo, storytelling con scroll

**Metáfora:** Una arepera venezolana iluminada por neón en una ciudad cyberpunk. Las arepas doradas brillan bajo carteles amarillos de neón.

---

## 3. Stack Tecnológico

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Framework | **Astro 6+** | Ultra-rápido, componentes .astro puros |
| CSS | **Tailwind CSS 4+** | Utility-first, tokens de color custom, CSS-based config |
| Animaciones | **GSAP** (scroll) | Scroll-driven animations, sin dependencia React |
| Iconos | **SVG Inline** | Ligero, sin dependencias, renderizado directo |
| Fuentes | **Chakra Petch** (headings) + **Inter** (body) | Futuristic + legible |
| i18n | JSON files + script de carga | Preparado para multi-idioma |
| Deploy | **Vercel o Netlify** | Deploy gratuito, CI/CD automático |

> **Nota:** No se usa React en este proyecto — todos los componentes son `.astro` puros.

---

## 4. Paleta de Colores — "Tropical Anime"

```
Background:      #1A1A2E   (Deep Charcoal)
Surface:         #16213E   (Dark Slate)
Deep:            #0F0F23   (Near Black)

Primary:         #F5C542   (Warm Gold — arepa color)
Gold Light:      #FFD966   (Highlight)

Secondary:       #16A085   (Teal Blue — caribeño)
Teal Light:      #1ABC9C   (Highlight)

Accent:          #E74C3C   (Coral Red — bandera)
Red Light:       #FF6B6B   (Highlight)

Highlight:       #9B59B6   (Lavender — anime magic)
Lavender Light:  #BB8FCE   (Highlight)

Text Primary:    #FAF3E0   (Cream White)
Text Secondary:  #CBD5E0   (Bright Gray — alto contraste)
Text Muted:      #8896AB   (Subtle)
```

---

## 5. Estructura de Archivos

```
arepa-portafolio/
├── public/
│   ├── favicon.svg              # Arepa neon icon
│   ├── fonts/                   # Chakra Petch, Inter
│   └── images/                  # Project images
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Hero con typing animation
│   │   ├── About.astro          # Bio con avatar anime
│   │   ├── Skills.astro         # Barras nivel RPG-style
│   │   ├── Tools.astro          # Grid herramientas
│   │   ├── TechStack.astro      # Stack organizado
│   │   ├── Projects.astro       # Cards con filtros
│   │   ├── Timeline.astro       # Experiencia laboral
│   │   ├── Contact.astro        # Formulario terminal
│   │   ├── Navbar.astro         # Navegación sticky
│   │   └── Footer.astro         # Footer con easter egg
│   ├── data/
│   │   ├── es.json              # Español
│   │   └── en.json              # Inglés
│   ├── layouts/
│   │   └── Layout.astro         # Layout base
│   ├── styles/
│   │   └── global.css           # Tailwind + custom CSS
│   └── pages/
│       └── index.astro          # Single-page
├── astro.config.mjs
└── package.json
```

---

## 6. Secciones — Especificación Detallada

### 6.1 Hero / Landing
- Fondo oscuro con partículas animadas (estrellas bandera venezolana)
- Título "AREPA.DEV" con glow neon dorado
- Subtítulo typing animation: `> Full-Stack Developer_`
- Avatar anime SVG estilo chibi con bandera en el pelo
- CTAs: "Ver Proyectos" (sólido) + "Contactar" (outline)
- Partículas flotantes con colores de la bandera

### 6.2 Sobre Mí
- Layout split: Ilustración SVG a la izquierda, bio a la derecha
- Bio con tono personal venezolano
- Badge "Disponible para proyectos" con pulso
- Stats: Años, Proyectos, Arepas (∞)
- Tags de tecnologías con colores

### 6.3 Habilidades
- Grid 2x2 cards
- Cada categoría con icono y color distintivo
- Barras de nivel estilo RPG/anime
- Gradientes vibrantes en las barras
- Animación de llenado al hacer scroll

### 6.4 Herramientas
- Grid 6 columnas (responsive: 2→3→4→6)
- Cards compactas con icono + nombre + categoría
- Colores por tipo de herramienta
- Hover con lift y glow

### 6.5 Stack Tecnológico
- Grid 3x2 cards
- Categorías: Frontend, Backend, DevOps, Mobile, Testing, Lenguajes
- Cada tecnología como badge con tooltip de nivel
- Bordes coloreados por categoría

### 6.6 Proyectos
- Filtros por categorías "arepa": Reina Pepiada, Pelua, Dominó
- Cards con imagen placeholder temática
- Badges de categoría y estado
- Overlay en hover con botones Demo/Código
- Tags de tecnologías

### 6.7 Timeline Laboral
- Línea vertical con gradiente dorado→teal→lavender
- Entries alternados izquierda/derecha
- Nodos circulares con icono de arepa
- Período, cargo, empresa, descripción, tecnologías

### 6.8 Contacto
- Formulario estilizado como terminal de anime
- Labels tipo `echo "¿Cuál es tu nombre?"`
- Inputs con foco glow dorado
- Mensaje de éxito estilo anime: "¡Sugoi!"
- Links alternativos de contacto

### 6.9 Footer
- Logo + tagline
- Banderas de Venezuela (colores)
- Social links
- Copyright
- Easter egg: Contador de arepas clickeable

---

## 7. Sistema i18n

```typescript
// Estructura JSON
{
  "hero": {
    "title": "AREPA.DEV",
    "subtitle": "Full-Stack Developer"
  },
  "about": { ... },
  "skills": { ... },
  // ...
}
```

- Archivos: `es.json`, `en.json`
- Implementado pero sin toggle visible por ahora
- Preparado para activación futura

---

## 8. Animaciones

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Hero particles | CSS | Estrellas flotantes con parallax |
| Typing effect | JS | Typewriter en subtítulo |
| Skill bars | IntersectionObserver | Llenado animado al scroll |
| Cards | CSS/Framer | Hover lift + glow |
| Timeline | IntersectionObserver | Fade-in staggered |
| Project filter | JS | Animación de escala al filtrar |
| Navbar | CSS | Show/hide en scroll direction |
| Neon glow | CSS Keyframes | Pulsing box-shadow |

---

## 9. Elementos Visuales Específicos

### Arepa (ícono central)
- Favicon: SVG con gradiente dorado
- Nodos timeline: Icono de arepa
- Loading spinner: Arepa rotando (opcional)

### Banderas/Temática Venezuela
- Estrellas de la bandera como partículas
- Tepuy silueta en About (watermark)
- Tres franjas de colores en Footer

### Anime
- Speed lines en transiciones (CSS)
- Speech bubble tooltips
- "Power level" skill meters
- Scanline/CRT opcional en hero
- Mensaje "¡Sugoi!" en contacto

---

## 10. Dependencias

```json
{
  "dependencies": {
    "astro": "^6.3.1",
    "@astrojs/tailwind": "^6.0.2",
    "gsap": "^3.15.0",
    "sharp": "^0.34.5"
  },
  "devDependencies": {
    "tailwindcss": "^4.3.0",
    "typescript": "^5.8.0"
  }
}
```

---

## 11. Mejoras Realizadas (Auditoría Visual)

### Problemas Identificados y Soluciones

| Problema | Solución |
|----------|----------|
| Dependencias desactualizadas | Migración a Astro 6 + Tailwind CSS 4 + TypeScript 5.8 |
| Fondos de sección planos | Gradientes `.section-alt` y `.section-dark` con líneas divisoras luminosas |
| Texto se perdía con fondo | `text-secondary` #A0AEC0 → #CBD5E0 (20% más brillante) |
| Cards sin profundidad | `box-shadow` + gradiente en fondo + borde coloreado |
| Iconos casi invisibles | `bg-{color}/10` → `bg-{color}/20` + `shadow-lg` |
| Hover sutil | Aumentado a `translateY(-6px)` + glow + shadow enhanced |
| Imágenes placeholder invisibles | Gradientes con tinte de color por categoría + patrón decorativo |
| Tags sin contraste | `bg-bg-deep` + `border-white/10` + `font-medium` |
| Barras de skill planas | Gradientes de 3 colores + sombra + borde visible |

---

## 12. Comandos

```bash
# Desarrollo
pnpm dev

# Build producción
pnpm build

# Preview build
pnpm preview
```

> **Nota:** Antes del primer `pnpm dev`, ejecuta `pnpm approve-builds` para autorizar los build scripts de sharp/esbuild.

---

## 13. URLs de Referencia

- Behance Anime Portfolios: https://www.behance.net/search/projects?search=anime+portfolio+website
- Awwwards Venezuela: https://www.awwwards.com/websites/Venezuela/
- Coolors Palette: https://coolors.co/generate

---

**Fecha de creación:** Mayo 2026  
**Autor:** Jesús Ordosgoitty  
**Estado:** 🔄 Migrado a Tailwind 4 + Astro 6
