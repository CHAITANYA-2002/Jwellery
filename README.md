# Mani D'Oro — Artisanal Gold Jewellery Storefront

> A premium e-commerce showcase for handcrafted gold jewellery. Designed with a luxury editorial "Obsidian & Gold" aesthetic, utilizing a modern full-stack TypeScript architecture.

<div align="center">
  <em>Elegance • Heritage • Craftsmanship</em>
</div>

---

## 🔗 Live Showcase

| Environment | URL |
|---|---|
| **Production** | [mdoro.netlify.app](https://mdoro.netlify.app/) |
| **Development** | `http://localhost:5000` |

---

## ✨ Feature Highlights

### 🛍️ Cart & Reservation System
- **Global State Management:** Seamless state tracking via React Context (`CartContext`).
- **Dynamic Slide-in Cart Drawer:** Features smooth spring animations, quantity controls, size adjustments, and real-time subtotal calculations.
- **Visual Feedback:** Animated badge counter in the top navigation bar updates instantly upon adding items.

### 📸 Premium Dynamic Gallery
- **Touch-Responsive Swiping:** Built for a mobile-first experience, allowing users to effortlessly swipe through product galleries.
- **Interactive Lightbox:** Full-screen, tap-to-zoom image lightbox for a meticulous inspection of craftsmanship, mirroring high-end e-commerce standards.
- **Intuitive Navigation:** Prev/Next navigation overlaid directly on product frames, combined with synced dot indicators and a thumbnail grid.

### 📱 Fully Responsive "Obsidian & Gold" UI
- **Mobile-First Excellence:** A meticulously crafted layout ensuring a flawless experience on devices of any size.
- **Custom Navigation:** Features a sleek hamburger menu tailored for mobile users without compromising the luxury aesthetic.
- **Color Palette:** Curated harmonious colors—Obsidian (`#1d1c12`), Cream (`#fef9e9`), and Artisanal Gold (`#795900`)—providing a rich, immersive visual environment.
- **Typography:** Noto Serif (Editorial) paired with Manrope (Minimal UI).

### 💬 Client Engagement & Customization
- **WhatsApp Integration:** One-tap enquiry button that seamlessly pre-fills product details (Name, Price, Size) and the direct page link for swift communication.
- **Bespoke Commissions:** Dedicated inquiry forms allowing for personalized sizing and custom gemstone alterations.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (Lightweight, near-instant page transitions)
- **State Management:** TanStack Query, React Context
- **Styling:** Tailwind CSS v3, Framer Motion (Micro-animations), Radix UI (Accessible Primitives)
- **Icons:** Lucide React, React Icons

### Backend & Database
- **Server:** Node.js, Express 5, TypeScript
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM (Type-safe SQL queries)
- **Fallback:** In-memory storage system (ensures the app runs seamlessly even without an active DB connection)

### Build & Deployment
- **Bundler:** Vite 7
- **CI/CD:** GitHub Actions, Netlify integration

---

## 🏗️ Core Architecture

The repository is structured into distinct domains for maximum scalability and developer ergonomics:

```text
jwellery/
├── client/         # React application (Vite root)
│   ├── src/
│   │   ├── components/  # Reusable UI elements (Cart, Navbar, Lightbox)
│   │   ├── hooks/       # Custom React hooks (use-toast, use-mobile)
│   │   ├── lib/         # Utility functions and CartContext
│   │   └── pages/       # Route components (Home, Product Detail)
├── server/         # Express API, routing, and storage logic
│   ├── routes.ts   # API endpoints definition
│   └── storage.ts  # Interface for DB / In-memory data layer
├── shared/         # Unified TypeScript types and Drizzle schemas
│   └── schema.ts   # Shared data models between client and server
└── public/         # High-resolution product assets and brand media
```

---

## 🔌 API Summary

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve the full artisanal catalogue. |
| `GET` | `/api/products/:id` | Fetch specific piece details by its unique identifier. |
| `POST` | `/api/products` | Create a new catalogue entry (Protected/Internal use). |

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Jwellery.git
cd Jwellery
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
Create a `.env` file in the root directory. If you want to use PostgreSQL instead of the in-memory fallback, provide your connection string:
```env
DATABASE_URL=postgres://user:password@localhost:5432/jwellery_db
```

### 4. Run Development Server
```bash
npm run dev
```
*This command concurrently starts the Express backend and the Vite frontend middleware on `http://localhost:5000`.*

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🌍 Deployment Strategy

- **Static Front-End (Netlify/GitHub Pages):** Built as a Vite Single Page Application (SPA). Client-side routing is supported via a custom `404.html` redirection trick.
- **Full-Stack Node Server:** Can be deployed to any Node.js hosting provider (Render, Heroku, Railway). Ensure `DATABASE_URL` is configured for persistent PostgreSQL storage.

---

## 🤝 Contributing

We welcome contributions to enhance the aesthetic and functional quality of Mani D'Oro.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

<div align="center">
  <p>Crafted with precision & passion.</p>
</div>
