export interface Project {
  slug: string;
  title: string;
  description: { es: string; en: string };
  fullDescription: { es: string; en: string };
  category: 'own' | 'collab';
  status: 'completed' | 'in-progress';
  images: string[];
  techs: string[];
  tools: string[];
  demo?: string;
  code?: string;
  color: 'primary' | 'secondary' | 'highlight' | 'accent';
  timeWorked: { es: string; en: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'e-commerce-api',
    title: 'E-Commerce API',
    description: {
      es: 'API RESTful para plataforma de comercio electrónico con microservicios, autenticación JWT y pasarela de pagos.',
      en: 'RESTful API for e-commerce platform with microservices, JWT authentication, and payment gateway.',
    },
    fullDescription: {
      es: 'Arquitectura de microservicios diseñada para escalar. Incluye módulos de autenticación con JWT y refresh tokens, integración con pasarela de pagos (Stripe), panel administrativo con reportes en tiempo real, y documentación completa con Swagger. Desplegado en AWS con CI/CD automatizado.',
      en: 'Microservices architecture designed to scale. Includes JWT authentication with refresh tokens, Stripe payment gateway integration, admin panel with real-time reports, and complete Swagger documentation. Deployed on AWS with automated CI/CD.',
    },
    category: 'own',
    status: 'completed',
    images: [],
    techs: ['Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Stripe', 'Swagger'],
    tools: ['VS Code', 'Insomnia', 'Git', 'GitHub'],
    demo: '#',
    code: '#',
    color: 'primary',
    timeWorked: { es: '4 meses', en: '4 months' },
    featured: true,
  },
  {
    slug: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: {
      es: 'Panel de análisis de datos en tiempo real con gráficos interactivos, filtros dinámicos y exportación de reportes.',
      en: 'Real-time data analytics dashboard with interactive charts, dynamic filters, and report exports.',
    },
    fullDescription: {
      es: 'Dashboard con visualizaciones complejas usando D3.js y WebSockets para actualizaciones en tiempo real. Soporte para múltiples fuentes de datos, filtros dinámicos encadenados, exportación a PDF/Excel y diseño responsivo optimizado para pantallas grandes.',
      en: 'Dashboard with complex D3.js visualizations and WebSockets for real-time updates. Multi-datasource support, chained dynamic filters, PDF/Excel export, and responsive design optimized for large screens.',
    },
    category: 'own',
    status: 'completed',
    images: [],
    techs: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Node.js'],
    tools: ['VS Code', 'Git', 'GitHub', 'Figma'],
    demo: '#',
    code: '#',
    color: 'secondary',
    timeWorked: { es: '3 meses', en: '3 months' },
    featured: true,
  },
  {
    slug: 'mobile-delivery',
    title: 'Mobile App Delivery',
    description: {
      es: 'App móvil para seguimiento de entregas en tiempo real con geolocalización, notificaciones push y chat.',
      en: 'Mobile app for real-time delivery tracking with geolocation, push notifications, and integrated chat.',
    },
    fullDescription: {
      es: 'Aplicación móvil multiplataforma con seguimiento GPS en tiempo real, sistema de notificaciones push, chat entre repartidor y cliente, y panel web para gestión de rutas. Integración con Google Maps API y Firebase para sincronización.',
      en: 'Cross-platform mobile app with real-time GPS tracking, push notification system, rider-customer chat, and web panel for route management. Google Maps API and Firebase integration for synchronization.',
    },
    category: 'collab',
    status: 'in-progress',
    images: [],
    techs: ['React Native', 'Firebase', 'Google Maps API', 'Expo'],
    tools: ['VS Code', 'Git', 'GitHub', 'Insomnia'],
    demo: '#',
    code: '#',
    color: 'highlight',
    timeWorked: { es: '6 meses (en curso)', en: '6 months (ongoing)' },
  },
  {
    slug: 'landing-fintech',
    title: 'Landing Fintech Startup',
    description: {
      es: 'Sitio web ultra-rápido para startup fintech con animaciones scroll-triggered, blog integrado y formulario de contacto.',
      en: 'Ultra-fast website for fintech startup with scroll-triggered animations, integrated blog, and contact form.',
    },
    fullDescription: {
      es: 'Landing page optimizada para conversión con puntuación Lighthouse 98+. Animaciones elaboradas con GSAP y ScrollTrigger, sistema de blog con MDX, formulario de contacto con validaciones y CMS headless para gestión de contenido.',
      en: 'Conversion-optimized landing page with 98+ Lighthouse score. Elaborate GSAP + ScrollTrigger animations, MDX blog system, contact form with validations, and headless CMS for content management.',
    },
    category: 'collab',
    status: 'completed',
    images: [],
    techs: ['Astro', 'Tailwind CSS', 'GSAP', 'MDX'],
    tools: ['VS Code', 'Git', 'GitHub', 'Figma'],
    demo: '#',
    code: '#',
    color: 'accent',
    timeWorked: { es: '6 semanas', en: '6 weeks' },
  },
  {
    slug: 'sistema-inventario',
    title: 'Sistema de Inventario',
    description: {
      es: 'CRUD completo para gestión de inventario con escaneo QR, alertas de stock bajo y reportes automatizados.',
      en: 'Full CRUD inventory management system with QR scanning, low stock alerts, and automated reports.',
    },
    fullDescription: {
      es: 'Sistema ERP ligero para PyMEs con gestión de productos, proveedores y movimientos de stock. Escaneo QR para entrada/salida de productos, alertas automáticas configurables, reportes PDF programados y API REST documentada.',
      en: 'Lightweight ERP system for SMEs with product, supplier, and stock movement management. QR scanning for product in/out, configurable automated alerts, scheduled PDF reports, and documented REST API.',
    },
    category: 'collab',
    status: 'completed',
    images: [],
    techs: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Prisma'],
    tools: ['VS Code', 'Insomnia', 'Git', 'GitHub'],
    demo: '#',
    code: '#',
    color: 'primary',
    timeWorked: { es: '5 meses', en: '5 months' },
  },
  {
    slug: 'portfolio-generator',
    title: 'Portfolio Generator',
    description: {
      es: 'Herramienta open-source para generar portafolios personalizados desde un archivo de configuración JSON.',
      en: 'Open-source tool for generating customized portfolios from a JSON configuration file.',
    },
    fullDescription: {
      es: 'CLI y template engine que lee un JSON estructurado y genera un portafolio estático listo para deploy. Múltiples temas disponibles, soporte para MDX, generación de SEO automática y pipeline de build optimizado. Publicado en npm.',
      en: 'CLI and template engine that reads a structured JSON and generates a static portfolio ready for deployment. Multiple themes, MDX support, automatic SEO generation, and optimized build pipeline. Published on npm.',
    },
    category: 'collab',
    status: 'in-progress',
    images: [],
    techs: ['Astro', 'TypeScript', 'MDX', 'Node.js'],
    tools: ['VS Code', 'Git', 'GitHub', 'Obsidian'],
    demo: '#',
    code: '#',
    color: 'secondary',
    timeWorked: { es: '3 meses (en curso)', en: '3 months (ongoing)' },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, limit);
}
