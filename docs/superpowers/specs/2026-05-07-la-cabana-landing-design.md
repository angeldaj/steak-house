# La Cabaña — Steak House — Diseño de Landing

**Fecha:** 2026-05-07
**Estado:** Aprobado para implementación

## Contexto

Restaurante "La Cabaña - Steak House" (Venezuela). Marca con identidad rústica de cabaña, parrilla a leña, paleta de marrones oscuros. Operan delivery activo (WhatsApp 0412-2365725, Instagram @lacabanasteakhouse).

Objetivo: sitio web informativo orientado a conversión hacia los canales existentes (WhatsApp e Instagram), sin formularios ni e-commerce en esta versión.

## Stack

- **Framework:** Next.js 16 (App Router) — ya instalado
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Animaciones:** framer-motion
- **Imágenes:** `next/image`
- **Idioma:** solo español

## Arquitectura del sitio

```
/        → Landing one-page (storytelling completo)
/menu    → Carta completa con categorías
```

No habrá página de chefs en esta versión.

## Sistema de diseño

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `bg-base` | `#1a0f0a` | Fondo principal oscuro |
| `bg-surface` | `#2a1810` | Superficies elevadas |
| `bg-elevated` | `#3d2418` | Cards, elementos destacados |
| `accent-ember` | `#c2410c` | CTAs primarios (naranja brasa) |
| `accent-gold` | `#d4a574` | Acentos, líneas, detalles |
| `text-cream` | `#f5e6d3` | Texto principal sobre oscuro |
| `text-muted` | `#a89080` | Texto secundario |
| `kraft` | `#c4a57b` | Secciones contraste (papel kraft) |

### Tipografía

- **Display/Headings:** serif rústica (Cormorant Garamond o Playfair Display)
- **Body:** sans-serif (Inter o Geist)
- **Acento decorativo:** script display (Caveat o similar) — uso moderado

Headings con `clamp()` para escala fluida responsive.

### Detalles visuales

- Grain noise sutil en fondos oscuros
- Bordes `rounded-lg`
- `CabinDivider`: separador SVG inspirado en el techo del logo

## Estructura de carpetas

```
app/
├── layout.tsx              # fonts, metadata, Header, Footer
├── page.tsx                # landing one-page
├── menu/
│   └── page.tsx
└── globals.css             # tailwind + tokens CSS

components/
├── ui/                     # shadcn (button, card, tabs, sheet, badge, ...)
├── layout/
│   ├── header.tsx          # nav sticky con Sheet mobile
│   └── footer.tsx
├── sections/               # secciones de la landing
│   ├── hero.tsx
│   ├── welcome.tsx
│   ├── services.tsx
│   ├── featured-dishes.tsx
│   ├── delivery-banner.tsx
│   └── contact.tsx
├── menu/
│   ├── menu-tabs.tsx       # client, tabs + filtro búsqueda
│   └── dish-card.tsx       # reutilizable (también en featured-dishes)
└── shared/
    ├── section-heading.tsx # heading + eyebrow + divider
    ├── cabin-divider.tsx   # SVG separador motivo cabaña
    ├── reveal.tsx          # wrapper framer-motion fade-up on scroll
    └── whatsapp-cta.tsx    # botón con número 0412-2365725

lib/
├── data/
│   ├── dishes.ts           # placeholders del menú
│   └── services.ts
└── utils.ts                # cn() de shadcn
```

## Landing `/` — secciones (en orden)

1. **Hero** — Imagen full-bleed del interior con techo de madera. Tagline + dual CTA ("Ver Menú" / "Pedir Delivery"). Animación: texto fade-up, imagen ken-burns sutil.
2. **Bienvenida / La Cabaña** — Storytelling corto (parrilla a leña, ambiente, propuesta). Imagen del logo en bolsa kraft junto al texto.
3. **Servicios** — 3 cards: Salón / Delivery / Eventos. Cada card con icono, título, descripción breve, CTA.
4. **Platos destacados** — Grid 3-4 platos (Lomo de Cerdo, Salmón, Salpicón, etc.). Foto + nombre + precio. CTA → `/menu`.
5. **Delivery banner** — Sección oscura full-width con sello "Tenemos Delivery a toda la ciudad" + botón WhatsApp grande.
6. **Contacto / Visítanos** — Mapa placeholder, horarios, dirección, teléfono, redes.

## Página `/menu`

- Hero compacto (banner + título "Nuestra Carta")
- Tabs sticky: Entradas · Carnes · Pastas · Mariscos · Acompañantes · Postres · Bebidas
- Grid responsive de platos (1 → 2 → 3 columnas)
- Card de plato: imagen, nombre, descripción corta, precio, badges opcionales ("Especialidad", "Picante", "Recomendado")
- Búsqueda client-side (filtro por nombre/descripción)
- CTA flotante mobile sticky-bottom: "Pedir por WhatsApp"

Componentes shadcn: Tabs, Card, Badge, Input, ScrollArea.

## Responsive

Mobile-first como pilar, no afterthought.

| Componente | Mobile | Tablet (md ≥768) | Desktop (lg ≥1024) |
|---|---|---|---|
| Header | Logo + hamburger → Sheet | Nav inline compacto | Nav completo + CTA |
| Hero | Imagen 80vh, CTAs stacked | Texto izquierda, full bleed | Full bleed con texto izq |
| Servicios | 1 col stacked | 2 col grid | 3 col grid |
| Platos destacados | 1 col carousel swipe | 2 col grid | 3-4 col grid |
| Menú grid | 1 col, tabs scroll horizontal | 2 col, tabs inline | 3 col, tabs inline sticky |
| Footer | Stacked | 2 col | 4 col |

Cuidados específicos:
- CTA WhatsApp flotante sticky-bottom en `/menu`
- `next/image` con `sizes` correctos
- Touch targets ≥ 44px
- Headings con `clamp(2rem, 6vw, 4.5rem)`
- `prefers-reduced-motion` respetado en todas las animaciones
- Tabs del menú: scroll horizontal con snap en mobile

## Animaciones (framer-motion)

Patrones reutilizables:
- `<Reveal>`: fade + translate-y on scroll, `once: true`
- Stagger en grids
- Hero: ken-burns sutil
- Hover cards: scale 1.02 + lift de sombra
- Header: shrink + backdrop-blur al scrollear
- Tabs del menú: layout animation al cambiar categoría
- Delivery banner: stamp "A toda la ciudad" rota in

Restricciones:
- Respetan `prefers-reduced-motion`
- Sin parallax pesado en mobile

## Datos

Placeholders realistas tematizados (categorías y platos coherentes con steak house). Definidos en `lib/data/dishes.ts` y `lib/data/services.ts`. Usuario reemplaza con datos reales después.

Categorías del menú (placeholder):
- Entradas
- Carnes (cortes de res, cerdo, pollo)
- Pastas
- Mariscos
- Acompañantes
- Postres
- Bebidas (incluye vinos)

## CTAs y conversión

- Todas las CTAs primarias enlazan a WhatsApp (`https://wa.me/584122365725`) o Instagram (`https://instagram.com/lacabanasteakhouse`)
- Botón WhatsApp centralizado en `<WhatsAppCTA>` para cambiar número en un solo lugar
- Sin formularios, sin backend

## No incluido en esta versión

- Pedido online / carrito
- Reservaciones online
- Bilingüe (solo español)
- Página de chefs
- Blog / noticias
- CMS

## Próximo paso

Plan de implementación detallado vía writing-plans.
