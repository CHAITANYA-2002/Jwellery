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
    category: "Bracelets",
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
    category: "Earrings",
    name: "Molten Hoops",
    description: "Textured gold earrings sculpted to capture light in motion.",
    price: "$890",
    image: "/figmaAssets/molten-hoops---textured-gold-earrings.png",
    isNew: false,
  },
  {
    id: "artisanal-close",
    category: "Rings",
    name: "Oro Signet Ring",
    description: "A bold signet with hand-engraved heritage motifs in solid gold.",
    price: "$1,080",
    image: "/figmaAssets/close-up-of-artisanal-gold-jewelry-on-a-person.png",
    isNew: false,
  },
];

const CATEGORIES = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

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

        {/* ── HERO BANNER ────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden flex items-end"
          style={{ minHeight: "360px", background: "#f5f0e4" }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(/figmaAssets/the-aurelius-chain---detailed-gold-link-necklace.png)",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              filter: "grayscale(40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(245,240,228,1) 30%, rgba(245,240,228,0.6) 70%, rgba(245,240,228,0.2) 100%)" }}
          />

          <div className="relative mx-auto w-full max-w-[1280px] px-8 pb-16 pt-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8">
              <a
                href="/"
                data-testid="link-breadcrumb-home"
                className="opacity-40 hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1d1c12" }}
              >
                Home
              </a>
              <span style={{ color: "#1d1c12", opacity: 0.3, fontSize: "11px" }}>/</span>
              <span
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#795900" }}
              >
                Collection
              </span>
            </nav>

            <div className="flex flex-col gap-4 max-w-2xl">
              <p
                className="section-label"
                style={{ color: "#795900" }}
              >
                Mani D&apos;Oro
              </p>
              <h1
                style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "clamp(48px,6vw,80px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#1d1c12" }}
              >
                The Collection
              </h1>
              <p
                style={{ fontFamily: "'Manrope', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#5a6b4e", maxWidth: "460px" }}
              >
                Each piece is a dialogue between material and maker — gold surrendering to the artisan&apos;s will, becoming singular, becoming yours.
              </p>
            </div>
          </div>
        </section>

        {/* ── THIN GOLD RULE ─────────────────────────────────── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />

        {/* ── FILTERS + SORT BAR ─────────────────────────────── */}
        <section className="w-full sticky top-[80px] z-40" style={{ background: "rgba(254,249,233,0.96)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(29,28,18,0.07)" }}>
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="flex items-center justify-between h-14">

              {/* Category filters */}
              <div className="flex items-center gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    data-testid={`filter-${cat.toLowerCase()}`}
                    onClick={() => setActiveCategory(cat)}
                    className="relative px-4 py-1.5 transition-colors"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: activeCategory === cat ? "#1d1c12" : "#1d1c12",
                      opacity: activeCategory === cat ? 1 : 0.4,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-px"
                        style={{ background: "#795900" }}
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
                  className="flex items-center gap-2 py-1"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#1d1c12",
                    opacity: 0.6,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Sort: {sortLabel}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M1 1L5 5L9 1" stroke="#1d1c12" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {sortOpen && (
                  <div
                    className="absolute right-0 top-8 w-48 py-2 z-50"
                    style={{ background: "#fef9e9", boxShadow: "0 8px 32px rgba(29,28,18,0.1)", border: "1px solid rgba(29,28,18,0.08)" }}
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        data-testid={`sort-${opt.value}`}
                        onClick={() => { setSort(opt.value); setSortOpen(false); }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#f5f0e4] transition-colors"
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "11px",
                          fontWeight: opt.value === sort ? 700 : 400,
                          letterSpacing: "0.1em",
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
        <section className="w-full py-16">
          <div className="mx-auto max-w-[1280px] px-8">

            {/* Count */}
            <p
              className="mb-10"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "#1d1c12", opacity: 0.4 }}
            >
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            {filtered.length === 0 ? (
              <div className="py-32 flex flex-col items-center gap-4">
                <p style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "24px", color: "#1d1c12", opacity: 0.4 }}>
                  No pieces in this category yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-x-5 gap-y-14">
                {filtered.map((product) => (
                  <article
                    key={product.id}
                    data-testid={`card-product-${product.id}`}
                    className="product-card relative overflow-hidden cursor-pointer"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* New badge */}
                    {product.isNew && (
                      <div
                        className="absolute top-4 left-4 z-10 px-3 py-1"
                        style={{
                          background: "#795900",
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
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

                    {/* Cinematic hover overlay */}
                    <div className="product-card-overlay" />

                    {/* Hover details */}
                    <div className="product-card-details">
                      <p
                        className="mb-2"
                        style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a84c" }}
                      >
                        {product.category}
                      </p>
                      <h3
                        className="mb-2 leading-snug"
                        style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#fef9e9" }}
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
                        <span
                          style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "18px", color: "#c9a84c" }}
                        >
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
                            border: "1px solid rgba(254,249,233,0.5)",
                            padding: "8px 16px",
                            background: "none",
                            cursor: "pointer",
                            transition: "all 0.2s",
                          }}
                        >
                          View Piece
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Static labels below grid */}
            {filtered.length > 0 && (
              <div
                className="grid grid-cols-3 gap-x-5 mt-0"
                style={{ marginTop: 0 }}
              >
                {filtered.map((product) => (
                  <div
                    key={`label-${product.id}`}
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(29,28,18,0.1)" }}
                  >
                    <p
                      className="mb-1"
                      style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#43664b" }}
                    >
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <h3
                        style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "20px", fontWeight: 400, color: "#1d1c12" }}
                      >
                        {product.name}
                      </h3>
                      <span
                        style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "16px", fontWeight: 400, color: "#795900" }}
                      >
                        {product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── EDITORIAL PULL QUOTE ──────────────────────────── */}
        <section
          className="w-full py-24"
          style={{ background: "linear-gradient(to bottom, #ede8d8, #f5f0e4)" }}
        >
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="flex flex-col items-center text-center gap-8 max-w-[680px] mx-auto">
              <svg width="32" height="22" viewBox="0 0 40 28" fill="none">
                <path d="M0 28V16.8C0 12.32 0.873333 8.43111 2.62 5.13333C4.36667 1.83556 7.09333 0.186667 10.8 0.186667V4.85333C8.96 4.85333 7.52667 5.78667 6.53333 7.65333C5.54 9.45778 5.04 11.6356 5.04 14.1867H10.8V28H0ZM22.2 28V16.8C22.2 12.32 23.0733 8.43111 24.82 5.13333C26.5667 1.83556 29.2933 0.186667 33 0.186667V4.85333C31.16 4.85333 29.7267 5.78667 28.7333 7.65333C27.74 9.45778 27.24 11.6356 27.24 14.1867H33V28H22.2Z" fill="#795900" opacity="0.35"/>
              </svg>
              <p
                style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "clamp(22px,2.8vw,32px)", fontWeight: 400, lineHeight: 1.65, color: "#1d1c12" }}
              >
                Gold does not hurry. Neither do we. Every piece in this collection was made with the patience of the craft and the intention of legacy.
              </p>
              <div
                className="flex flex-col items-center gap-1 pt-4"
                style={{ borderTop: "1px solid rgba(121,89,0,0.25)", paddingLeft: "40px", paddingRight: "40px" }}
              >
                <p style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "15px", color: "#1d1c12" }}>Elena Moretti</p>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#43664b" }}>Founder &amp; Creative Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BESPOKE CTA STRIP ─────────────────────────────── */}
        <section className="w-full py-20" style={{ background: "#1d1c12" }}>
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="section-label" style={{ color: "#c9a84c" }}>Bespoke Commission</p>
                <h2
                  style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, color: "#fef9e9", lineHeight: 1.2 }}
                >
                  Can&apos;t find your perfect piece?
                  <br />
                  Let us make it.
                </h2>
              </div>
              <a
                href="/#bespoke"
                data-testid="link-begin-commission"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1d1c12",
                  background: "#c9a84c",
                  padding: "18px 40px",
                  display: "inline-block",
                  transition: "background 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                Begin a Commission
              </a>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-30" />

        <FooterSection />
      </div>
    </div>
  );
};
