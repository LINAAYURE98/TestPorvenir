# Nexora AI — Landing Page Institucional

> Prueba Técnica · Diseñador UI Web Master · Porvenir 2026  
> Aspirante: Lina Maria Ayure Lara

---

## 📋 Descripción del proyecto

Landing page institucional para **Nexora AI**, plataforma ficticia del sector financiero enfocada en gestión de inversiones inteligentes mediante inteligencia artificial.

El objetivo fue construir una experiencia visual moderna, accesible y completamente responsive, alineada con las tendencias actuales del sector fintech y orientada a transmitir confianza, innovación y solidez institucional.

---

## 🌐 Demo y diseño

| Recurso | Enlace |
|---|---|
| 🎨 Diseño en Figma | [Ver prototipo](https://www.figma.com/design/K0bTYxM78YXHq9v8R2iRIM/Nexora-AI?node-id=0-1&p=f&m=draw) |
| 💻 Repositorio GitHub | [Ver código fuente](#) |

---

## 🗂️ Estructura del proyecto

```
nexora-ai/
├── home.html
├── dist/
│   ├── assets/
│   │   └── img/
│   │   │    ├── hero-bg-desktop.png
│   │   │    ├── hero-bg-mobile.png
│   │   │    └── hero-dashboard-desktop.png
│   │   └── person/
│   │       ├── avatar-maria.png
│   │       ├── avatar-carlos.png
│   │       └── avatar-ana.png
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── scss/
    ├── main.scss
    └── abstracts/
    │   ├── _variables.scss
    │   ├── _base.scss
    │   ├── _fonts.scss
    │   └── _general.scss
    └── layout/
        ├── header/
        │   └── _header.scss
        ├── footer/
        │   └── _footer.scss
        └── section/
            ├── _section-hero.scss
            ├── _section-benefits.scss
            ├── _section-howitworks.scss
            ├── _section-performance.scss
            ├── _section-faq.scss
            ├── _section-testimonials.scss
            └── _section-leadform.scss
```

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica del sitio |
| **CSS3 + Sass** | Estilos, responsive y arquitectura modular |
| **JavaScript** | Interactividad (menú, acordeón FAQ, validación) |
| **Metodología BEM** | Arquitectura CSS organizada y escalable |
| **Figma** | Diseño UI, wireframes y prototipado |
| **Google Fonts** | Tipografías Cormorant Garamond + Outfit |
| **VS Code** | Editor de desarrollo |

---

## 📐 Metodología y arquitectura

### Mobile First
El proyecto fue construido bajo filosofía **Mobile First**: los estilos base están escritos para móvil y se escalan progresivamente mediante `@media (min-width: ...)` para tablet y desktop.

Breakpoints utilizados:
- `480px` — Móvil grande
- `768px` — Tablet
- `1024px` — Desktop pequeño
- `1280px` — Desktop estándar
- `1440px` — Desktop ancho

### BEM + Sass modular
Cada sección tiene su propio archivo SCSS parcial. Las clases siguen la convención:

```
Nexora-[bloque]__[elemento]--[modificador]
```

Ejemplos:
```scss
.Nexora-header__nav
.Nexora-hero__title--highlight
.Nexora-benefits__card
.Nexora-faq__toggle
```

---

## 🎨 Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `$color-bg-primary` | `#0A1628` | Fondo principal |
| `$color-bg-secondary` | `#0A192E` | Secciones alternadas |
| `$color-gold` | `#C9A84C` | Acento — botones, highlights |
| `$color-gold-light` | `#E2C06E` | Hover dorado |
| `$color-text-primary` | `#FFFFFF` | Títulos y texto principal |
| `$color-text-secondary` | `#B8C5D6` | Cuerpo de texto |
| `$color-text-muted` | `#6B7E99` | Texto auxiliar |

---

## ♿ Accesibilidad

Se implementaron las siguientes prácticas WCAG AA:

1. **Etiquetas semánticas** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dl>`, `<blockquote>` con roles y `aria-label` correctos
2. **Atributos ARIA** — `aria-expanded`, `aria-controls`, `aria-required`, `aria-invalid`, `aria-live`, `aria-describedby` en todos los elementos interactivos
3. **Formulario accesible** — `<label>` vinculado con `for`, mensajes de error con `role="alert"`, validación con `aria-invalid` dinámico
4. **Navegación por teclado** — `focus-visible` en todos los interactivos, skip link al contenido principal, acordeón FAQ operable con Enter y Space
5. **Contraste WCAG AA** — texto blanco `#FFFFFF` sobre azul `#0A1628` supera ratio 7:1
6. **`prefers-reduced-motion`** — animaciones desactivadas para usuarios que lo requieran

---

## 🔍 SEO Técnico

1. **Metaetiquetas** — `<title>` con palabra clave, `<meta name="description">` de 155 caracteres, `<html lang="es">`
2. **Jerarquía de encabezados** — un único `<h1>` en el hero, `<h2>` por sección, `<h3>` en cards internas
3. **Imágenes optimizadas** — `alt` descriptivo, `title`, `width`/`height` declarados para prevenir CLS. Above the fold: `loading="eager"` + `fetchpriority="high"`. Below the fold: `loading="lazy"` + `decoding="async"`
4. **`<picture>` responsive** — fuentes separadas para mobile y desktop en el hero, optimizando peso de carga por dispositivo
5. **Anclas semánticas** — IDs en cada sección (`#beneficios`, `#rendimiento`, `#faq`, `#contacto`) para URLs amigables y navegación interna

---

## 📦 Secciones de la landing page

| # | Sección | Descripción |
|---|---|---|
| 1 | **Header** | Navegación sticky con menú hamburguesa en mobile |
| 2 | **Hero** | H1 principal, CTA, stats y mockup del dashboard |
| 3 | **Benefits** | 6 cards de beneficios en grilla responsive |
| 4 | **How It Works** | 3 pasos para comenzar a invertir |
| 5 | **Performance** | 4 métricas de rendimiento comprobado |
| 6 | **FAQ** | Acordeón accesible con 6 preguntas frecuentes |
| 7 | **Testimonials** | 3 testimonios de inversionistas |
| 8 | **Lead Form** | Formulario de consulta con validación |
| 9 | **Footer** | Links institucionales, redes sociales y contacto |

---

## ▶️ Cómo correr el proyecto

```bash
# 1. Clona el repositorio
git clone https://github.com/LINAAYURE98/TestPorvenir

# 2. Entra a la carpeta
cd nexora-ai

# 3. Instala dependencias
npm install

# 4. Compila Sass en modo watch
cd dist
npm run sass

# 5. Abre home.html en tu navegador
```

---

