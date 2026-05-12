import { Heart } from "lucide-react";

const products = [
  {
    id: "aurelius-band",
    category: "RINGS",
    name: "Aurelius Band",
    price: "$980",
    image: "/figmaAssets2/product-aurelius-band.png",
  },
  {
    id: "mani-link-chain",
    category: "NECKLACES",
    name: "Mani Link Chain",
    price: "$1,240",
    image: "/figmaAssets2/product-mani-link-chain.png",
  },
  {
    id: "gilded-drift-cuff",
    category: "BRACELETS",
    name: "Gilded Drift Cuff",
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

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="w-full border-b-[3px] border-[#1d1c12]">
        <div className="mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-12 border-[3px] border-[#1d1c12] bg-[#f8f3e4]">

            {/* Left: Text */}
            <div className="col-span-7 flex flex-col justify-center gap-12 border-r-[3px] border-[#1d1c12] px-12 py-16">
              <div className="flex flex-col">
                <h1 className="[font-family:'Noto_Serif',Helvetica] text-[108px] font-normal leading-[1.0] tracking-[-5px] text-[#1d1c12]">
                  Gold In
                </h1>
                <h1 className="[font-family:'Noto_Serif',Helvetica] text-[108px] font-normal leading-[1.0] tracking-[-5px] text-[#795900] italic">
                  Every
                </h1>
                <h1 className="[font-family:'Noto_Serif',Helvetica] text-[108px] font-normal leading-[1.0] tracking-[-5px] text-[#795900] italic">
                  Hand
                </h1>
              </div>

              <p className="[font-family:'Manrope',Helvetica] text-xl font-normal leading-[1.6] text-[#43664b] max-w-[400px]">
                Discover the raw elegance of hand-forged jewelry. Each piece is a testament to the artisan&apos;s touch and the gold&apos;s eternal spirit.
              </p>

              <div>
                <button
                  data-testid="button-explore-collection"
                  className="[font-family:'Manrope',Helvetica] border-2 border-[#1d1c12] bg-[#795900] px-10 py-5 text-sm font-bold tracking-[1.40px] uppercase text-white hover:bg-[#6d5100] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="col-span-5 min-h-[660px] overflow-hidden">
              <img
                src="/figmaAssets2/hero-right.png"
                alt="Artisanal gold jewelry"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ────────────────────────────────────────── */}
      <section id="collection" className="w-full bg-[#f8f3e4] px-12 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between mb-16">
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-5xl font-normal text-[#1d1c12]">
              New Arrivals
            </h2>
            <a
              href="#"
              data-testid="link-view-all"
              className="[font-family:'Manrope',Helvetica] text-sm font-bold tracking-[1.40px] text-[#795900] border-b border-[#795900] pb-0.5 hover:text-[#1d1c12] hover:border-[#1d1c12] transition-colors uppercase"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                data-testid={`card-product-${product.id}`}
                className="group flex flex-col border-[3px] border-[#1d1c12] bg-[#fef9e9]"
              >
                <div className="relative overflow-hidden border-b-[3px] border-[#1d1c12]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.20px] text-[#43664b] uppercase">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="[font-family:'Noto_Serif',Helvetica] text-2xl font-normal text-[#1d1c12]">
                      {product.name}
                    </h3>
                    <button
                      data-testid={`button-wishlist-${product.id}`}
                      className="text-[#1d1c12] hover:text-[#795900] transition-colors"
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      <Heart size={20} />
                    </button>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] text-lg font-normal text-[#795900]">
                    {product.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESPOKE SERVICES ────────────────────────────────────── */}
      <section id="bespoke" className="w-full border-y-[3px] border-[#1d1c12]">
        <div className="mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-2 border-[3px] border-[#1d1c12]">

            {/* Left: Text */}
            <div className="flex flex-col justify-center gap-8 border-r-[3px] border-[#1d1c12] bg-[#f8f3e4] px-16 py-20">
              <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[4px] text-[#795900] uppercase">
                Bespoke Services
              </p>
              <h2 className="[font-family:'Noto_Serif',Helvetica] text-5xl font-normal leading-[1.15] text-[#1d1c12]">
                Your Story,
                <br />
                Our Gold
              </h2>
              <p className="[font-family:'Manrope',Helvetica] text-lg font-normal leading-[1.7] text-[#43664b] max-w-[400px]">
                Commission a singular piece that carries your history, your name, your soul. Our master goldsmiths transform your vision into heirloom-grade artistry.
              </p>
              <div>
                <button
                  data-testid="button-begin-commission"
                  className="[font-family:'Manrope',Helvetica] border-2 border-[#1d1c12] bg-transparent px-10 py-5 text-sm font-bold tracking-[1.40px] uppercase text-[#1d1c12] hover:bg-[#1d1c12] hover:text-[#fef9e9] transition-colors"
                >
                  Begin a Commission
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="overflow-hidden min-h-[580px]">
              <img
                src="/figmaAssets2/bespoke-services.png"
                alt="Bespoke jewelry creation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ─────────────────────────────────────────────── */}
      <section id="story" className="w-full bg-[#fef9e9] py-20 px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-16 items-center">

            {/* Left: Portrait */}
            <div className="relative border-[3px] border-[#1d1c12] overflow-hidden">
              <img
                src="/figmaAssets2/founder-portrait.png"
                alt="Alessandra Oro — Founder"
                className="w-full h-[640px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-[rgba(29,28,18,0.08)]" />
            </div>

            {/* Right: Quote */}
            <div className="flex flex-col gap-10 px-8">
              <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24V14.4C0 10.56 0.746667 7.22667 2.24 4.4C3.73333 1.57333 6.08 0.16 9.28 0.16V4.16C7.68 4.16 6.45333 4.96 5.6 6.56C4.74667 8.10667 4.32 9.97333 4.32 12.16H9.28V24H0ZM19.04 24V14.4C19.04 10.56 19.7867 7.22667 21.28 4.4C22.7733 1.57333 25.12 0.16 28.32 0.16V4.16C26.72 4.16 25.4933 4.96 24.64 6.56C23.7867 8.10667 23.36 9.97333 23.36 12.16H28.32V24H19.04Z" fill="#795900"/>
              </svg>

              <blockquote className="[font-family:'Noto_Serif',Helvetica] text-3xl font-normal leading-[1.6] text-[#1d1c12]">
                True luxury isn&apos;t found in the machine&apos;s precision, but in the artisan&apos;s imperfection. We don&apos;t just forge gold; we forge legacy.
              </blockquote>

              <div className="border-l-[3px] border-[#795900] pl-6 flex flex-col gap-1">
                <p className="[font-family:'Noto_Serif',Helvetica] text-xl font-normal text-[#1d1c12]">
                  Alessandra Oro
                </p>
                <p className="[font-family:'Manrope',Helvetica] text-sm font-normal tracking-[1px] text-[#43664b] uppercase">
                  Founder &amp; Master Goldsmith
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ARCHIVE ─────────────────────────────────────────── */}
      <section id="archive" className="w-full bg-[#f8f3e4] border-t-[3px] border-[#1d1c12] px-12 py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-5xl font-normal text-[#1d1c12]">
              The Archive
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-base font-normal leading-[1.6] text-[#43664b] max-w-[540px]">
              A curated collection of past masterpieces and historical iterations that define the Mani D&apos;Oro silhouette.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 items-start">
            {archiveItems.map((item) => (
              <div
                key={item.id}
                data-testid={`card-archive-${item.id}`}
                className={`group relative overflow-hidden border-2 border-[#7f7663] cursor-pointer ${item.offset ? "mt-20" : ""}`}
              >
                <img
                  src={item.image}
                  alt={`Archive — ${item.year}`}
                  className="w-full h-[375px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(29,28,18,0)] group-hover:bg-[rgba(29,28,18,0.45)] transition-colors duration-300 flex items-center justify-center">
                  <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.2px] uppercase text-[#fef9e9] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 w-full bg-[linear-gradient(90deg,rgba(121,89,0,1)_0%,rgba(218,172,69,1)_50%,rgba(121,89,0,1)_100%)]" />
    </main>
  );
};
