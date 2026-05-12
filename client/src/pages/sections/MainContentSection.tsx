const products = [
  {
    id: "aurelius-band",
    category: "Rings",
    name: "Aurelius Band",
    description: "Hand-hammered 22k gold with a whispered patina of antiquity.",
    price: "$980",
    image: "/figmaAssets2/product-aurelius-band.png",
  },
  {
    id: "mani-link-chain",
    category: "Necklaces",
    name: "Mani Link Chain",
    description: "Each link forged individually, carrying the mark of its maker.",
    price: "$1,240",
    image: "/figmaAssets2/product-mani-link-chain.png",
  },
  {
    id: "gilded-drift-cuff",
    category: "Bracelets",
    name: "Gilded Drift Cuff",
    description: "Molten gold shaped by hand — no two are exactly alike.",
    price: "$740",
    image: "/figmaAssets2/product-gilded-drift-cuff.png",
  },
];

const archiveItems = [
  { id: "archive-1", year: "Circa 2012", image: "/figmaAssets2/archive-1.png", offset: false },
  { id: "archive-2", year: "Circa 2015", image: "/figmaAssets2/archive-2.png", offset: true },
  { id: "archive-3", year: "Circa 2018", image: "/figmaAssets2/archive-3.png", offset: false },
  { id: "archive-4", year: "Circa 2021", image: "/figmaAssets2/archive-4.png", offset: true },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="relative w-full bg-[#fef9e9]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="w-full">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-12 min-h-[720px] bg-[#f5f0e4]">

            {/* Left: Text panel */}
            <div
              className="col-span-7 flex flex-col justify-center gap-10 px-14 py-20"
              style={{ borderRight: "1px solid rgba(29,28,18,0.12)" }}
            >
              <div className="flex flex-col leading-none">
                <h1
                  className="text-[clamp(72px,8vw,112px)] font-normal text-[#1d1c12] tracking-[-0.04em]"
                  style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: 1.0 }}
                >
                  Gold In
                </h1>
                <h1
                  className="text-[clamp(72px,8vw,112px)] font-normal text-[#795900] italic tracking-[-0.04em]"
                  style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: 1.0 }}
                >
                  Every
                </h1>
                <h1
                  className="text-[clamp(72px,8vw,112px)] font-normal text-[#795900] italic tracking-[-0.04em]"
                  style={{ fontFamily: "'Noto Serif', Georgia, serif", lineHeight: 1.0 }}
                >
                  Hand
                </h1>
              </div>

              <p
                className="text-lg leading-relaxed text-[#5a6b4e] max-w-[380px]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
              >
                Discover the raw elegance of hand-forged jewelry. Each piece is a testament to the artisan&apos;s touch and the gold&apos;s eternal spirit.
              </p>

              <div>
                <button
                  data-testid="button-explore-collection"
                  className="luxury-btn-gold"
                >
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right: Hero image — contained, no overflow */}
            <div className="col-span-5 relative overflow-hidden">
              <img
                src="/figmaAssets2/hero-right.png"
                alt="Artisanal gold jewelry craftsmanship"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ filter: "grayscale(15%) contrast(1.05)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THIN GOLD RULE ─────────────────────────────────── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />

      {/* ── NEW ARRIVALS ────────────────────────────────────── */}
      <section id="collection" className="w-full py-24 bg-[#fef9e9]">
        <div className="mx-auto max-w-[1280px] px-8">

          <div className="flex items-baseline justify-between mb-14">
            <h2
              className="text-[clamp(32px,4vw,48px)] font-normal text-[#1d1c12]"
              style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
            >
              New Arrivals
            </h2>
            <a
              href="#"
              data-testid="link-view-all"
              className="font-['Manrope',sans-serif] text-[11px] font-bold tracking-[0.18em] uppercase text-[#795900] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#795900] after:origin-left after:transition-transform hover:after:scale-x-0 after:scale-x-100 pb-px"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <article
                key={product.id}
                data-testid={`card-product-${product.id}`}
                className="product-card relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
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
                    className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c9a84c] mb-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {product.category}
                  </p>
                  <h3
                    className="text-2xl font-normal text-[#fef9e9] mb-2 leading-snug"
                    style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm text-[#fef9e9]/70 mb-4 leading-relaxed"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-lg font-normal text-[#c9a84c]"
                      style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                    >
                      {product.price}
                    </span>
                    <button
                      data-testid={`button-view-${product.id}`}
                      className="font-['Manrope',sans-serif] text-[10px] font-bold tracking-[0.2em] uppercase text-[#fef9e9] border border-[#fef9e9]/60 px-4 py-2 hover:bg-[#fef9e9]/10 transition-colors"
                    >
                      View Product
                    </button>
                  </div>
                </div>

                {/* Default: subtle label at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300"
                  style={{ opacity: 1 }}
                >
                  <div className="flex items-end justify-between" />
                </div>
              </article>
            ))}
          </div>

          {/* Below cards: names always visible */}
          <div className="grid grid-cols-3 gap-5 mt-0">
            {products.map((product) => (
              <div key={`label-${product.id}`} className="pt-4 pb-1" style={{ borderTop: "1px solid rgba(29,28,18,0.1)" }}>
                <p
                  className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#43664b] mb-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl font-normal text-[#1d1c12]"
                    style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                  >
                    {product.name}
                  </h3>
                  <span
                    className="text-base font-normal text-[#795900]"
                    style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                  >
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESPOKE SERVICES ────────────────────────────────── */}
      <section
        id="bespoke"
        className="w-full py-0"
        style={{ background: "linear-gradient(to bottom, #f5f0e4, #ede8d8)" }}
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-2 items-stretch">

            {/* Left: Text */}
            <div className="flex flex-col justify-center gap-8 py-20 pr-16">
              <p className="section-label">Bespoke Services</p>
              <h2
                className="text-[clamp(36px,4vw,54px)] font-normal leading-[1.1] text-[#1d1c12]"
                style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
              >
                Your Story,
                <br />
                Our Gold
              </h2>
              <p
                className="text-base leading-[1.85] text-[#5a6b4e] max-w-[380px]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Commission a singular piece that carries your history, your name, your soul. Our master goldsmiths transform your vision into heirloom-grade artistry.
              </p>
              <div>
                <button
                  data-testid="button-begin-commission"
                  className="luxury-btn-outline"
                >
                  Begin a Commission
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
              <img
                src="/figmaAssets2/bespoke-services.png"
                alt="Bespoke jewelry creation"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#795900]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER / QUOTE ─────────────────────────────────── */}
      <section id="story" className="w-full py-28 bg-[#ede8d8]">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-2 gap-20 items-center">

            {/* Left: Large portrait */}
            <div className="relative overflow-hidden" style={{ boxShadow: "0 8px 48px rgba(29,28,18,0.12)" }}>
              <img
                src="/figmaAssets2/founder-portrait.png"
                alt="Alessandra Oro — Founder"
                className="w-full object-cover object-top"
                style={{ height: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,28,18,0.3)] to-transparent" />
            </div>

            {/* Right: Quote */}
            <div className="flex flex-col gap-10">
              <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
                <path d="M0 28V16.8C0 12.32 0.873333 8.43111 2.62 5.13333C4.36667 1.83556 7.09333 0.186667 10.8 0.186667V4.85333C8.96 4.85333 7.52667 5.78667 6.53333 7.65333C5.54 9.45778 5.04 11.6356 5.04 14.1867H10.8V28H0ZM22.2 28V16.8C22.2 12.32 23.0733 8.43111 24.82 5.13333C26.5667 1.83556 29.2933 0.186667 33 0.186667V4.85333C31.16 4.85333 29.7267 5.78667 28.7333 7.65333C27.74 9.45778 27.24 11.6356 27.24 14.1867H33V28H22.2Z" fill="#795900" opacity="0.5"/>
              </svg>

              <blockquote
                className="text-[clamp(20px,2.5vw,30px)] font-normal leading-[1.65] text-[#1d1c12]"
                style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
              >
                The beauty of Mani D&apos;Oro lies in the intentional imperfection. We do not chase machine-made precision; we chase the soul of the hand.
              </blockquote>

              <div
                className="pt-6 flex flex-col gap-1"
                style={{ borderTop: "1px solid rgba(121,89,0,0.3)" }}
              >
                <p
                  className="text-base font-normal text-[#1d1c12]"
                  style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                >
                  Elena Moretti
                </p>
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#43664b]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Founder &amp; Creative Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ARCHIVE ─────────────────────────────────────── */}
      <section id="archive" className="w-full py-24 bg-[#fef9e9]">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="flex flex-col gap-3 mb-14">
            <h2
              className="text-[clamp(32px,4vw,48px)] font-normal text-[#1d1c12]"
              style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
            >
              The Archive
            </h2>
            <p
              className="text-sm leading-relaxed text-[#5a6b4e] max-w-[500px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              A curated collection of past masterpieces and historical iterations that define the Mani D&apos;Oro silhouette.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 items-start">
            {archiveItems.map((item) => (
              <div
                key={item.id}
                data-testid={`card-archive-${item.id}`}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  marginTop: item.offset ? "80px" : "0",
                  boxShadow: "0 2px 16px rgba(29,28,18,0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={`Archive — ${item.year}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: "375px" }}
                />
                <div className="absolute inset-0 bg-[rgba(29,28,18,0)] group-hover:bg-[rgba(29,28,18,0.4)] transition-all duration-500 flex items-center justify-center">
                  <span
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#fef9e9] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  className="mt-3"
                  style={{ borderTop: "1px solid rgba(127,118,99,0.3)", paddingTop: "10px" }}
                >
                  <p
                    className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7f7663]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ───────────────────────────────────────── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-60" />
    </main>
  );
};
