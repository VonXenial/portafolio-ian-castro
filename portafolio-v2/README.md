# Ian Castro - Portafolio V2

Un portafolio profesional y moderno construido con **Astro**, **Tailwind CSS** y **Lenis** (Smooth Scroll). Este proyecto está diseñado con la estética "Old Money Futurism", combinando un diseño corporativo elegante con un alto rendimiento técnico.

## 🚀 Tecnologías Principales

- [Astro](https://astro.build) - Framework web ultrarrápido y enfocado en contenido (SSG).
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario para un diseño ágil y responsivo.
- [Lenis](https://lenis.studiofreight.com/) - Biblioteca ligera para smooth scrolling.
- [Lucide Icons](https://lucide.dev/) - Íconos vectoriales modernos y ligeros.

## ✨ Características

- **Diseño "Old Money Futurism"**: Paleta de colores basada en tonos borgoña (burgundy), piedra (stone) y oscuros corporativos, transmitiendo elegancia y profesionalismo.
- **Rendimiento Óptimo**:
  - Imágenes optimizadas dinámicamente con el componente `<Image />` de `astro:assets` (formatos WebP, redimensionamiento automático).
  - Puntuaciones perfectas en Lighthouse (FCP, LCP optimizados).
  - Carga asíncrona de fuentes web (Google Fonts) para evitar bloqueos en el renderizado inicial.
- **UI/UX Responsiva y Dinámica**:
  - Menú de navegación móvil con efecto `backdrop-blur`.
  - Barra de progreso de lectura (scroll progresivo en la parte superior).
  - Micro-interacciones y animaciones hover en imágenes, certificaciones y botones.
- **SEO & Accesibilidad**:
  - Estructura semántica de HTML5.
  - Diseño `mobile-first` totalmente escalable.

## 🧞 Comandos de Desarrollo

Todos los comandos deben ejecutarse desde la terminal dentro de esta carpeta (`/portafolio-v2`).

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321`. |
| `npm run build` | Compila el sitio para producción (genera la carpeta estática `dist/`). |
| `npm run preview` | Previsualiza localmente cómo quedará tu sitio tras el *build* de producción. |

## 📁 Estructura del Proyecto

```text
/
├── public/          # Recursos estáticos que no son procesados por Astro (ej. favicon).
├── src/
│   ├── layouts/     # Plantillas globales (Layout.astro).
│   ├── pages/       # Rutas de navegación (index.astro, donde viven las secciones).
│   └── styles/      # CSS Global y variables de Tailwind (global.css).
├── package.json     # Manifiesto de dependencias y scripts.
└── astro.config.mjs # Archivo principal de configuración de Astro.
```

## 🌐 Despliegue

Este proyecto está optimizado y listo para ser desplegado en producción a través de [Vercel](https://vercel.com). La plataforma detectará automáticamente la configuración de Astro y usará los comandos predeterminados de compilación (`npm run build`).

---
*Desarrollado para la presentación profesional de Ian Castro.*
