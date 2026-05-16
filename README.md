# Mani D'Oro — Artisanal Gold Jewellery Storefront

> A premium, full-stack e-commerce showcase for handcrafted gold jewellery. Built with React 18, TypeScript, Express 5, Drizzle ORM, and Vite. Designed with an editorial "Obsidian & Gold" aesthetic.

---

## Table of Contents

1. [Overview](#overview)
2. [Live Demo](#live-demo)
3. [Feature Highlights](#feature-highlights)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Pages & Routes](#pages--routes)
7. [Architecture](#architecture)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Database](#database)
   - [Cart System](#cart-system)
8. [API Reference](#api-reference)
9. [Design System](#design-system)
10. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running in Development](#running-in-development)
    - [Building for Production](#building-for-production)
11. [Environment Variables](#environment-variables)
12. [Deployment](#deployment)
    - [GitHub Pages (Static SPA)](#github-pages-static-spa)
    - [Netlify](#netlify)
    - [Full-Stack (Node + DB)](#full-stack-node--db)
13. [Product Catalogue Management](#product-catalogue-management)
14. [Contributing](#contributing)
15. [License](#license)

---

## Overview

**Mani D'Oro** (Italian: *Hands of Gold*) is a luxury jewellery brand storefront that presents handcrafted gold pieces with the visual gravitas of a high-end editorial magazine. Every interaction — from image galleries to the cart drawer — is designed to feel premium, tactile, and intentional.

The project is a **full-stack TypeScript monorepo** with:
- A **React SPA** client served through Vite
- An **Express 5** API server with product CRUD endpoints
- A **PostgreSQL** database managed by **Drizzle ORM**
- A **static fallback catalogue** so the frontend works perfectly without a database (ideal for GitHub Pages / Netlify static deployments)

---

## Live Demo

| Platform | URL |
|---|---|
| GitHub Pages | `https://mdoro.netlify.app/` |
| Netlify | Configured via `netlify.toml` |
| Local Dev | `http://localhost:5000` |

---

## Feature Highlights

### 🛍️ Cart & Reservation System
- Global cart state powered by React Context (`CartContext`)
- Slide-in **cart drawer** from the right with smooth spring animation
- Per-item quantity controls (+ / −), individual remove, and clear-all
- Real-time subtotal calculation
- Cart **badge counter** in the navbar with a spring-pop animation on update
- Cart persists across page navigation within the session

### 📸 Product Image Gallery
- **Prev / Next arrow navigation** overlaid on the main product image
- **Dot pagination indicator** at the bottom — active dot expands to a pill
- **Thumbnail grid** (3–4 columns) synced to the main image index
- All three navigation methods (arrows, dots, thumbnails) stay in sync

### 💬 WhatsApp Enquiry
- One-tap WhatsApp button on every product page
- Pre-fills a message with: product name (bold), category, price, selected size, and a direct link to the product page
- Opens in a new tab; works on both mobile (WhatsApp app) and desktop (WhatsApp Web)

### 📋 Product Detail Page
- Editorial breadcrumbs with catalogue reference number
- Three-tab specification panel: **Heritage Details**, **Spec Materials**, **Ethical Sourcing**
- Bespoke inquiry form (name, email, size, custom notes)
- Inquiry confirmation state with animated success feedback

### 🗺️ Navigation
- Centred logo with hover scale + gold glow effect
- Responsive **hamburger menu** with staggered link animation on mobile
- Cart icon in both desktop right-nav and mobile toolbar
- Active route highlighting

### 🎨 Design & Animation
- Warm editorial palette: `#fef9e9` (cream), `#1d1c12` (ink), `#c9a84c` / `#795900` (gold)
- Noto Serif (headings) + Manrope (UI labels) font pairing
- Corner accent lines on image frames
- All interactive elements have hover transitions (colour, opacity, scale, lift)
- Mobile-first responsive layout across all pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| **UI Framework** | React 18 with TypeScript |
| **Routing** | [Wouter](https://github.com/molefrog/wouter) (lightweight client-side router) |
| **State Management** | React Context API (Cart) + TanStack React Query (server state) |
| **Styling** | Tailwind CSS v3 + vanilla inline styles for component-level overrides |
| **UI Primitives** | Radix UI (accessible headless components) |
| **Build Tool** | Vite 7 |
| **Backend** | Express 5 (TypeScript via `tsx`) |
| **ORM** | Drizzle ORM |
| **Database** | PostgreSQL (via `pg`) |
| **Schema Validation** | Zod + drizzle-zod |
| **Forms** | React Hook Form + `@hookform/resolvers` |
| **Icons** | Lucide React + React Icons |
| **Animations** | Framer Motion + Tailwind CSS `animate-*` |
| **Type Safety** | TypeScript 5.6, strict mode |

---

## Project Structure

```
jwellery/
├── client/                        # React SPA (Vite root)
│   ├── public/                    # Static assets served at /
│   │   ├── logo.png
│   │   ├── products/              # Product photo galleries
│   │   │   ├── bracelet-unisex-*.jpg
│   │   │   ├── pendant-bar-pendant-*.jpg
│   │   │   └── ... (all pendant galleries)
│   │   ├── figmaAssets/           # Hero & editorial images
│   │   ├── figmaAssets2/          # Additional product images
│   │   └── bespoke/               # Bespoke commission images
│   └── src/
│       ├── main.tsx               # React entry point
│       ├── App.tsx                # Router, CartProvider, CartDrawer
│       ├── index.css              # Global styles & design tokens
│       ├── lib/
│       │   ├── CartContext.tsx    # Global cart state (Context + Provider)
│       │   └── queryClient.ts     # TanStack Query client config
│       ├── components/
│       │   ├── CartDrawer.tsx     # Slide-in cart sidebar
│       │   └── ui/                # Radix-based shadcn/ui primitives
│       ├── hooks/                 # Custom React hooks
│       └── pages/
│           ├── ManiDOroHome.tsx   # Landing page (wrapper)
│           ├── CollectionPage.tsx # Full product catalogue grid
│           ├── ProductPage.tsx    # Individual product detail
│           ├── BespokePage.tsx    # Custom commission page
│           ├── ContactPage.tsx    # Contact form page
│           ├── not-found.tsx      # 404 page
│           └── sections/
│               ├── NavbarSection.tsx       # Fixed top navigation
│               ├── MainContentSection.tsx  # Homepage hero & sections
│               └── FooterSection.tsx       # Site footer
│
├── server/                        # Express backend
│   ├── index.ts                   # App entry, middleware, HTTP server
│   ├── routes.ts                  # API route handlers
│   ├── storage.ts                 # Data access layer (Drizzle + in-memory fallback)
│   ├── static.ts                  # Static file serving in production
│   └── vite.ts                    # Vite dev server integration
│
├── shared/                        # Shared types between client & server
│   └── schema.ts                  # Drizzle schema + Zod insert schemas
│
├── script/
│   └── build.ts                   # Custom build script (Vite + esbuild)
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions → GitHub Pages CI/CD
│
├── drizzle.config.ts              # Drizzle Kit configuration
├── netlify.toml                   # Netlify deployment config
├── vite.config.ts                 # Vite build config (aliases, root, outDir)
├── tailwind.config.ts             # Tailwind theme extensions
├── tsconfig.json                  # TypeScript project config
└── package.json                   # Scripts, dependencies
```

---

## Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `ManiDOroHome` | Landing page with hero, featured pieces, brand story |
| `/collection` | `CollectionPage` | Full product grid with category filters |
| `/product/:id` | `ProductPage` | Product detail: gallery, specs, cart, WhatsApp, inquiry |
| `/bespoke` | `BespokePage` | Custom commission process & enquiry |
| `/contact` | `ContactPage` | Contact form and atelier location |
| `*` | `NotFound` | 404 fallback |

---

## Architecture

### Frontend

The client is a **single-page application** built with Vite and React. Routing is handled client-side by **Wouter** — a minimal alternative to React Router with a near-identical API.

```
App.tsx
  └── QueryClientProvider       ← TanStack Query cache
        └── TooltipProvider     ← Radix tooltip context
              └── CartProvider  ← Global cart state
                    ├── CartDrawer  ← Always-mounted slide-in panel
                    └── Router
                          └── Switch (Wouter)
                                ├── / → ManiDOroHome
                                ├── /collection → CollectionPage
                                ├── /product/:id → ProductPage
                                ├── /bespoke → BespokePage
                                ├── /contact → ContactPage
                                └── * → NotFound
```

**Path aliases** (configured in `vite.config.ts`):

| Alias | Resolves to |
|---|---|
| `@/` | `client/src/` |
| `@shared/` | `shared/` |
| `@assets/` | `attached_assets/` |

### Backend

The Express server (`server/index.ts`) is a standard Node.js HTTP server that:

1. Parses JSON bodies (with raw body access for webhook signatures)
2. Logs all `/api/*` requests with method, path, status, and duration
3. Registers API routes from `routes.ts`
4. In **development**: integrates the Vite dev server as middleware (HMR, fast refresh)
5. In **production**: serves the pre-built `dist/public/` directory as static files

The server listens on `PORT` (default `5000`) on all interfaces (`0.0.0.0`).

### Database

The database layer uses **Drizzle ORM** with PostgreSQL. The schema is defined in `shared/schema.ts` so it can be imported by both the server and used to derive TypeScript types across the project.

**Tables:**

```typescript
// Users (for future admin/auth support)
users {
  id       varchar  PRIMARY KEY  DEFAULT gen_random_uuid()
  username text     NOT NULL UNIQUE
  password text     NOT NULL
}

// Products
products {
  id          varchar  PRIMARY KEY
  category    text     NOT NULL
  name        text     NOT NULL
  description text     NOT NULL
  price       text     NOT NULL    // stored as display string e.g. "$980"
  image       text     NOT NULL    // relative path to public asset
  is_new      boolean  NOT NULL DEFAULT true
}
```

**Storage layer** (`server/storage.ts`) implements an `IStorage` interface with:
- `getProducts()` — fetch all products
- `getProduct(id)` — fetch single product by slug ID
- `createProduct(data)` — insert a new product
- In-memory fallback (`MemStorage`) for development without a database

### Cart System

The cart is managed entirely on the **client side** using React Context. There is no backend persistence — this is intentional for a jewellery atelier model where "Add to Cart" represents a reservation intent, not an immediate transaction.

**`CartContext.tsx`** exports:

```typescript
interface CartContextValue {
  items: CartItem[];          // Current cart contents
  isOpen: boolean;            // Drawer visibility
  openCart: () => void;
  closeCart: () => void;
  addItem: (item) => void;    // Adds or increments quantity
  removeItem: (id, size) => void;
  updateQuantity: (id, size, qty) => void;
  clearCart: () => void;
  totalItems: number;         // Sum of all quantities
  totalPrice: number;         // Numeric sum (parses price strings)
}
```

Items are keyed by `(id, size)` tuple — the same product in different sizes are separate line items.

---

## API Reference

Base URL: `http://localhost:5000`

### `GET /api/products`

Returns all products from the database.

**Response** `200 OK`
```json
[
  {
    "id": "bar-pendant",
    "category": "Pendants",
    "name": "Bar Pendant",
    "description": "A sleek, architectural vertical gold bar...",
    "price": "$850",
    "image": "/products/pendant-bar-pendant-cover.jpg",
    "isNew": true
  }
]
```

---

### `GET /api/products/:id`

Returns a single product by its slug ID.

**Response** `200 OK` — product object  
**Response** `404 Not Found` — `{ "message": "Product not found" }`

---

### `POST /api/products`

Creates a new product. Validates body against `insertProductSchema` (Zod).

**Request Body**
```json
{
  "id": "custom-piece",
  "category": "Rings",
  "name": "Custom Piece",
  "description": "...",
  "price": "$1,200",
  "image": "/products/custom.jpg",
  "isNew": true
}
```

**Response** `201 Created` — created product object  
**Response** `400 Bad Request` — validation error message

---

## Design System

The brand visual identity is built around the **"Obsidian & Gold"** palette:

| Token | Value | Usage |
|---|---|---|
| Cream | `#fef9e9` | Page background, card fills |
| Ink | `#1d1c12` | Primary text, borders |
| Gold (light) | `#c9a84c` | Accents, active states, rings |
| Gold (dark) | `#795900` | CTA buttons, price text |
| Amber | `#9c7a2b` | Hover states |

**Typography:**

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Headings | Noto Serif | 400 (Regular) | Italic for editorial emphasis |
| UI / Labels | Manrope | 400, 700 | Wide `letter-spacing` for uppercase labels |

**Spacing conventions:**
- Tracking: `0.18em – 0.25em` for uppercase labels
- All CTAs use `uppercase` + `letter-spacing` for typographic distinction
- Borders: `1px solid rgba(29,28,18,0.08–0.12)` (very subtle ink)

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 9
- **PostgreSQL** ≥ 14 *(only required for full-stack mode; optional for static/SPA mode)*

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/Jwellery.git
cd Jwellery

# Install all dependencies
npm install
```

### Running in Development

```bash
npm run dev
```

This starts the Express server on `http://localhost:5000`. In development mode:
- Vite dev server is mounted as Express middleware
- Hot Module Replacement (HMR) is active
- API requests to `/api/*` are handled by Express
- All other requests are served by Vite

If no `DATABASE_URL` is configured, the server falls back to an **in-memory product store** — the frontend also has its own static catalogue fallback, so the app runs fully without a database.

### Building for Production

```bash
npm run build
```

This runs `script/build.ts` which:
1. **Vite** builds the React SPA into `dist/public/`
2. **esbuild** compiles the Express server into `dist/index.cjs`

To run the production build locally:

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Database connection (optional — app runs without it)
DATABASE_URL=postgresql://user:password@localhost:5432/manidoro

# Server port (defaults to 5000)
PORT=5000

# Set by Vite for GitHub Pages base path
VITE_BASE=/Jwellery/
```

| Variable | Required | Default | Description |
|---|---|---|---|
| `DATABASE_URL` | No | — | PostgreSQL connection string |
| `PORT` | No | `5000` | HTTP server port |
| `VITE_BASE` | No | `/` | Base path for Vite (needed for GitHub Pages subdirectory hosting) |

---

## Deployment

### GitHub Pages (Static SPA)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on every push to `main`.

**What it does:**
1. Checks out the repo
2. Installs dependencies
3. Runs `npx vite build` with `VITE_BASE=/Jwellery/`
4. Copies `index.html` → `404.html` (enables SPA client-side routing on GitHub Pages)
5. Deploys `dist/public/` to the `github-pages` environment

**To enable:**
1. Go to your repository **Settings → Pages**
2. Set source to **GitHub Actions**
3. Push to `main` — the workflow triggers automatically

> **Note:** In this static mode, the Express API is not available. The frontend uses its built-in static product catalogue fallback.

---

### Netlify

`netlify.toml` is pre-configured:

```toml
[build]
  command = "npx vite build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirect rule ensures all routes are handled by the React SPA (prevents 404 on direct URL access). Same static-only mode applies.

**To deploy:**
1. Connect your GitHub repo to Netlify
2. Netlify auto-detects `netlify.toml` — no manual config needed
3. Every push to `main` triggers a new deploy

---

### Full-Stack (Node + DB)

To run the complete stack with the PostgreSQL database:

1. Provision a PostgreSQL database (e.g., Supabase, Railway, Neon, or self-hosted)
2. Set `DATABASE_URL` in your environment
3. Push the schema:
   ```bash
   npm run db:push
   ```
4. Build and start:
   ```bash
   npm run build
   npm start
   ```

---

## Product Catalogue Management

### Via API

```bash
# Create a new product
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "id": "lotus-ring",
    "category": "Rings",
    "name": "Lotus Ring",
    "description": "Hand-carved lotus motif in 22k gold.",
    "price": "$1,100",
    "image": "/products/lotus-ring-cover.jpg",
    "isNew": true
  }'
```

### Adding Gallery Images

Products with multiple gallery images need a `gallery` array. This is currently added in the static fallback data in `ProductPage.tsx`. To add gallery support to the database, extend the `products` schema with a `gallery` JSON column.

**Gallery naming convention for `/public/products/`:**
```
pendant-{slug}-cover.{ext}   ← thumbnail / main image
pendant-{slug}-1.jpg         ← gallery image 1
pendant-{slug}-2.jpg         ← gallery image 2
pendant-{slug}-3.jpg         ← gallery image 3
pendant-{slug}-4.jpg         ← gallery image 4
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

**Code style:**
- TypeScript strict mode — no implicit `any`
- Components use inline styles for design-system-specific values, Tailwind classes for layout
- Keep component files under ~400 lines; extract sub-components where needed

---

## License

MIT © Mani D'Oro
