# Mani D'Oro — Artisanal Gold Jewellery Storefront

> A premium e-commerce showcase for handcrafted gold jewellery. Designed with a luxury editorial "Obsidian & Gold" aesthetic and built with a modern full-stack TypeScript architecture.

---

## 🔗 Live Showcase

| Environment | URL |
|---|---|
| **Production** | [mdoro.netlify.app](https://mdoro.netlify.app/) |
| **Development** | `http://localhost:5000` |

---

## ✨ Feature Highlights

### 🛍️ Cart & Reservation
- Global state management via **React Context** (`CartContext`).
- Slide-in **Cart Drawer** with spring animations, quantity controls, and real-time subtotal.
- Animated **badge counter** in the navbar for immediate visual feedback.

### 📸 Dynamic Gallery
- **Prev / Next navigation** overlaid on product frames.
- **Synced Dot Indicators** and thumbnail grid for multiple viewing methods.
- High-fidelity image scaling and transitions.

### 💬 Client Engagement
- **WhatsApp Integration**: One-tap enquiry button that pre-fills product details (Name, Price, Size) and the direct page link.
- **Bespoke Commissions**: Custom inquiry forms for personalized sizing and gemstone alterations.

### 🎨 Design System
- **Palette**: Obsidian (`#1d1c12`), Cream (`#fef9e9`), and Artisanal Gold (`#795900`).
- **Typography**: Noto Serif (Editorial) paired with Manrope (Minimal UI).
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Wouter (Routing), TanStack Query (State).
- **Styling**: Tailwind CSS v3, Framer Motion (Animations), Radix UI (Primitives).
- **Backend**: Express 5 (Node.js), TypeScript.
- **Database**: PostgreSQL with Drizzle ORM.
- **Build/CI**: Vite 7, GitHub Actions, Netlify.

---

## 🏗️ Core Architecture

### 1. Project Layout
- `client/`: React application (Vite root).
- `server/`: Express API and storage logic.
- `shared/`: Unified TypeScript types and Drizzle schemas.
- `public/`: High-resolution product assets and brand media.

### 2. Implementation Logic
- **Routing**: Lightweight client-side routing using `wouter` for near-instant page transitions.
- **Storage Layer**: Implements an `IStorage` interface with both a **PostgreSQL** provider and an **In-memory fallback**, allowing the app to run seamlessly even without a database connection.
- **Cart Context**: Client-side persistence that keys items by a `(id, size)` tuple to support multiple variants of the same piece.

---

## 🔌 API Summary

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve the full artisanal catalogue. |
| `GET` | `/api/products/:id` | Fetch specific piece details by slug ID. |
| `POST` | `/api/products` | Create a new catalogue entry (Protected/Internal). |

---

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    git clone https://github.com/<your-username>/Jwellery.git
    npm install
    ```
2.  **Run Development**:
    ```bash
    npm run dev
    ```
    *Starts the Express server + Vite middleware on `localhost:5000`.*
3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

---

## 🌍 Deployment

- **Static (Netlify/GitHub Pages)**: Built as a Vite SPA. Client-side routing is supported via `404.html` redirection.
- **Full-Stack**: Can be deployed as a Node.js app. Set `DATABASE_URL` in environment variables to enable PostgreSQL persistence.

---

## 📜 License

MIT © Mani D'Oro
