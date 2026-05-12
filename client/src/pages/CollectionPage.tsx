import { useState } from "react";
import { NavbarSection } from "./sections/NavbarSection";
import { FooterSection } from "./sections/FooterSection";

const ALL_PRODUCTS = [
  {
    id: "aurelius-band",
    category: "Rings",
    name: "Aurelius Band",
    description: "Hand-hammered 22k gold with a whispered patina of antiquity.",
    price: "$980",
    image: "/figmaAssets2/product-aurelius-band.png",
    isNew: true,
  },
  {
    id: "mani-link-chain",
    category: "Necklaces",
    name: "Mani Link Chain",
    description: "Each link forged individually, carrying the mark of its maker.",
    price: "$1,240",
    image: "/figmaAssets2/product-mani-link-chain.png",
    isNew: true,
  },
  {
    id: "gilded-drift-cuff",
    category: "Cuffs & Bangles",
    name: "Gilded Drift Cuff",
    description: "Molten gold shaped by hand — no two are exactly alike.",
    price: "$740",
    image: "/figmaAssets2/product-gilded-drift-cuff.png",
    isNew: true,
  },
  {
    id: "aurelius-chain",
    category: "Necklaces",
    name: "The Aurelius Chain",
    description: "A heritage link necklace cast in 18k gold-plated silver alloy.",
    price: "$1,240",
    image: "/figmaAssets/the-aurelius-chain---detailed-gold-link-necklace.png",
    isNew: false,
  },
  {
    id: "molten-hoops",
    category: "Rings",
    name: "Molten Hoops",
    description: "Textured gold earrings sculpted to capture light in motion.",
    price: "$890",
    image: "/figmaAssets/molten-hoops---textured-gold-earrings.png",
    isNew: false,
  },
  {
    id: "oro-signet",
    category: "Rings",
    name: "Oro Signet Ring",
    description: "A bold signet with hand-engraved heritage motifs in solid gold.",
    price: "$1,080",
    image: "/figmaAssets/close-up-of-artisanal-gold-jewelry-on-a-person.png",
    isNew: false,
  },
];

const CATEGORIES = [
  { label: "All Objects", value: "All" },
  { label: "Rings", value: "Rings" },
  { label: "Necklaces", value: "Necklaces" },
  { label: "Cuffs & Bangles", value: "Cuffs & Bangles" },
  { label: "Bespoke Commissions", value: "Bespoke Commissions" },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "New Arrivals", value: "new" },
];

function parsePrice(p: string) {
  return parseInt(p.replace(/[^0-9]/g, ""), 10);
}

export const CollectionPage = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);

  let filtered = ALL_PRODUCTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  if (sort === "new") filtered = [...filtered].sort((a) => (a.isNew ? -1 : 1));

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Featured";

  return (
    <div className="w-full min-h-screen" style={{ background: "#fef9e9" }}>
      <NavbarSection />

      <div style={{ paddingTop: "80px" }}>

        {/* ── SELECTED ARTIFACTS HERO ─────────────────────────── */}
        <section
          className="w-full"
          style={{ background: "#fef9e9", borderBottom: "1px solid rgba(29,28,18,0.09)" }}
        >
          <div className="mx-auto max-w-[1280px] px-8">
            {/* Top row: breadcrumb */}
            <div
              className="flex items-center gap-2 pt-10 pb-8"
              style={{ borderBottom: "1px solid rgba(29,28,18,0.07)" }}
            >
              <a
                href="/"
                data-testid="link-breadcrumb-home"
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d1c12", opacity: 0.35, textDecoration: "none" }}
              >
                Mani D&apos;Oro Atelier
              </a>
              <span style={{ color: "#1d1c12", opacity: 0.2, fontSize: "11px" }}>/</span>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d1c12", opacity: 0.35 }}>
                Collections
              </span>
            </div>

            {/* Split hero row */}
            <div className="grid grid-cols-2 gap-16 pt-12 pb-14 items-end">
              {/* Left: heading */}
              <div>
                <h1
                  style={{
                    fontFamily: "'Noto Serif', Georgia, serif",
                    fontSize: "clamp(52px,6.5vw,88px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.0,
                    letterSpacing: "-0.02em",
                    color: "#1d1c12",
                  }}
                >
                  Selected
                  <br />
                  Artifacts
                </h1>
              </div>

              {/* Right: description */}
              <div className="flex flex-col gap-5 pb-2 pl-8" style={{ borderLeft: "1px solid rgba(29,28,18,0.1)" }}>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "#1d1c12",
                    opacity: 0.65,
                  }}
                >
                  A curated assembly of permanent pieces, hand-forged in our Milanese studio. Each artifact is an intersection of ancient goldsmithing techniques and sharp, architectural silhouettes.
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#795900",
                  }}
                >
                  {ALL_PRODUCTS.length} objects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTERS + SORT BAR ─────────────────────────────── */}
        <section
          className="w-full sticky top-[80px] z-40"
          style={{ background: "rgba(254,249,233,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(29,28,18,0.08)" }}
        >
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="flex items-center justify-between h-14">

              {/* Category filters */}
              <div className="flex items-center gap-0">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    data-testid={`filter-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveCategory(cat.value)}
                    className="relative px-4 py-2"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#1d1c12",
                      opacity: activeCategory === cat.value ? 1 : 0.38,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                  >
                    {cat.label}
                    {activeCategory === cat.value && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-[1.5px]"
                        style={{ background: "#1d1c12" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  data-testid="button-sort"
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#1d1c12",
                    opacity: 0.55,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                >
                  Sort: {sortLabel}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M1 1L5 5L9 1" stroke="#1d1c12" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {sortOpen && (
                  <div
                    className="absolute right-0 top-9 w-48 py-2 z-50"
                    style={{ background: "#fef9e9", boxShadow: "0 8px 32px rgba(29,28,18,0.12)", border: "1px solid rgba(29,28,18,0.08)" }}
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        data-testid={`sort-${opt.value}`}
                        onClick={() => { setSort(opt.value); setSortOpen(false); }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#f5f0e4] transition-colors"
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "10px",
                          fontWeight: opt.value === sort ? 700 : 400,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: opt.value === sort ? "#795900" : "#1d1c12",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCT GRID ───────────────────────────────────── */}
        <section className="w-full py-14">
          <div className="mx-auto max-w-[1280px] px-8">

            {filtered.length === 0 ? (
              <div className="py-32 flex flex-col items-center gap-4">
                <p style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "24px", fontStyle: "italic", color: "#1d1c12", opacity: 0.35 }}>
                  No pieces in this category yet.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-x-5 gap-y-14">
                  {filtered.map((product) => (
                    <article
                      key={product.id}
                      data-testid={`card-product-${product.id}`}
                      className="product-card relative overflow-hidden cursor-pointer"
                      style={{ aspectRatio: "3/4" }}
                    >
                      {product.isNew && (
                        <div
                          className="absolute top-4 left-4 z-10 px-3 py-1"
                          style={{
                            background: "#795900",
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: "9px",
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "#fef9e9",
                          }}
                        >
                          New
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="product-card-overlay" />
                      <div className="product-card-details">
                        <p
                          className="mb-2"
                          style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c" }}
                        >
                          {product.category}
                        </p>
                        <h3
                          className="mb-2 leading-snug"
                          style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "22px", fontStyle: "italic", fontWeight: 400, color: "#fef9e9" }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="mb-5 leading-relaxed"
                          style={{ fontFamily: "'Manrope', sans-serif", fontSize: "13px", color: "rgba(254,249,233,0.65)" }}
                        >
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "18px", color: "#c9a84c" }}>
                            {product.price}
                          </span>
                          <button
                            data-testid={`button-view-${product.id}`}
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#fef9e9",
                              border: "1px solid rgba(254,249,233,0.45)",
                              padding: "8px 16px",
                              background: "none",
                              cursor: "pointer",
                            }}
                          >
                            View Piece
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Labels below grid */}
                <div className="grid grid-cols-3 gap-x-5">
                  {filtered.map((product) => (
                    <div
                      key={`label-${product.id}`}
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(29,28,18,0.09)" }}
                    >
                      <p
                        className="mb-1"
                        style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#43664b" }}
                      >
                        {product.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <h3 style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "19px", fontWeight: 400, fontStyle: "italic", color: "#1d1c12" }}>
                          {product.name}
                        </h3>
                        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "13px", fontWeight: 500, color: "#795900" }}>
                          {product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── THE BESPOKE ALCHEMY ────────────────────────────── */}
        <section
          className="w-full"
          style={{ background: "#232919" }}
        >
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="grid grid-cols-2 gap-0 items-stretch" style={{ minHeight: "400px" }}>

              {/* Left: text content */}
              <div className="flex flex-col justify-center gap-7 py-16 pr-16">
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    opacity: 0.8,
                  }}
                >
                  Bespoke Services
                </p>
                <h2
                  style={{
                    fontFamily: "'Noto Serif', Georgia, serif",
                    fontSize: "clamp(32px,3.8vw,52px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    color: "#fef9e9",
                  }}
                >
                  The Bespoke
                  <br />
                  Alchemy
                </h2>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "rgba(254,249,233,0.55)",
                    maxWidth: "400px",
                  }}
                >
                  Mani D&apos;Oro offers a full bespoke commission service — every dimension, alloy, and motif tailored to your vision. A dialogue between artisan and collector, culminating in a piece that exists nowhere else in the world.
                </p>
                <a
                  href="#"
                  data-testid="link-book-consultation"
                  className="flex items-center gap-3 w-fit group"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    textDecoration: "none",
                  }}
                >
                  Book a Consultation
                  <svg
                    width="24"
                    height="10"
                    viewBox="0 0 24 10"
                    fill="none"
                    style={{ transition: "transform 0.25s" }}
                    className="group-hover:translate-x-1"
                  >
                    <path d="M0 5H22M18 1L22 5L18 9" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>

              {/* Right: jeweler photo */}
              <div
                className="relative overflow-hidden"
                style={{ minHeight: "400px" }}
              >
                <img
                  src="/figmaAssets/jeweler-working-on-a-custom-piece.png"
                  alt="Jeweler at work"
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
                {/* Subtle left-to-right fade from dark bg */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #232919 0%, transparent 28%)" }}
                />
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
};
