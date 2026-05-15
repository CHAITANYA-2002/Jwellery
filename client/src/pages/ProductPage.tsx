import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { NavbarSection } from "./sections/NavbarSection";
import { FooterSection } from "./sections/FooterSection";

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isNew: boolean;
}

export const ProductPage = ({ params }: { params: { id: string } }): JSX.Element => {
  const [, setLocation] = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"heritage" | "materials" | "sourcing">("heritage");
  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "", size: "Standard", note: "" });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  // Load product from API, with static client fallback
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${params.id}`);
        if (res.ok) {
          const contentType = res.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await res.json();
            setProduct(data);
            setLoading(false);
            return;
          }
        }
        throw new Error("Invalid response form or status");
      } catch (err) {
        console.warn("Failed fetching product from API, loading static fallback...", err);
        // Fallback static products
        const staticProducts: any[] = [
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
            description: "Molten gold shaped by hand � no two are exactly alike.",
            price: "$740",
            image: "/figmaAssets2/product-gilded-drift-cuff.png",
            isNew: true,
      },
          {
            id: "unisex-gold-bracelet",
            category: "Bracelets",
            name: "Unisex Gold Bracelet",
            description: "A timeless unisex statement, meticulously balanced with heavy solid gold links.",
            price: "$1,420",
            image: "/products/bracelet-unisex-1.jpg",
            isNew: true,
            gallery: [
          "/products/bracelet-unisex-1.jpg",
          "/products/bracelet-unisex-2.jpg",
          "/products/bracelet-unisex-3.jpg",
          "/products/bracelet-unisex-4.jpg"
        ]
      },
          {
            id: "bar-pendant",
            category: "Pendants",
            name: "Bar Pendant",
            description: "A sleek, architectural vertical gold bar with subtle hand-struck facets.",
            price: "$850",
            image: "/products/pendant-bar-pendant-cover.jpg",
            isNew: true,
            gallery: [
          "/products/pendant-bar-pendant-1.jpg",
          "/products/pendant-bar-pendant-2.jpg",
          "/products/pendant-bar-pendant-3.jpg",
          "/products/pendant-bar-pendant-4.jpg"
        ]
      },
          {
            id: "bird-pendant",
            category: "Pendants",
            name: "Bird Pendant",
            description: "A delicate avian silhouette poised in solid gold, capturing the grace of flight.",
            price: "$890",
            image: "/products/pendant-bird-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-bird-pendant-1.jpg",
          "/products/pendant-bird-pendant-2.jpg",
          "/products/pendant-bird-pendant-3.jpg",
          "/products/pendant-bird-pendant-4.jpg"
        ]
      },
          {
            id: "boat-pendant",
            category: "Pendants",
            name: "Boat Pendant",
            description: "A maritime heritage motif sculpted with flowing curves and satin reflections.",
            price: "$940",
            image: "/products/pendant-boat-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-boat-pendant-1.jpg",
          "/products/pendant-boat-pendant-2.jpg",
          "/products/pendant-boat-pendant-3.jpg",
          "/products/pendant-boat-pendant-4.jpg"
        ]
      },
          {
            id: "butterfly-pendant",
            category: "Pendants",
            name: "Butterfly Pendant",
            description: "Intricately openworked butterfly wings reflecting pure light with every movement.",
            price: "$920",
            image: "/products/pendant-butterfly-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-butterfly-pendant-1.jpg",
          "/products/pendant-butterfly-pendant-2.jpg",
          "/products/pendant-butterfly-pendant-3.jpg",
          "/products/pendant-butterfly-pendant-4.jpg"
        ]
      },
          {
            id: "fish-pendant",
            category: "Pendants",
            name: "Fish Pendant",
            description: "A symbolic heritage fish motif, intricately carved with exquisite attention to detail.",
            price: "$920",
            image: "/products/pendant-fish-pendant-cover.jpg",
            isNew: true,
            gallery: [
          "/products/pendant-fish-pendant-1.jpg",
          "/products/pendant-fish-pendant-2.jpg",
          "/products/pendant-fish-pendant-3.jpg",
          "/products/pendant-fish-pendant-4.jpg"
        ]
      },
          {
            id: "flower-pendant",
            category: "Pendants",
            name: "Flower Pendant",
            description: "A blooming floral medallion detailed with hand-engraved petals in high-carat gold.",
            price: "$860",
            image: "/products/pendant-flower-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-flower-pendant-1.jpg",
          "/products/pendant-flower-pendant-2.jpg",
          "/products/pendant-flower-pendant-3.jpg",
          "/products/pendant-flower-pendant-4.jpg"
        ]
      },
          {
            id: "leaf-pendant",
            category: "Pendants",
            name: "Leaf Pendant",
            description: "Natural botanical elegance preserved in solid gold with lifelike vein texturing.",
            price: "$840",
            image: "/products/pendant-leaf-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-leaf-pendant-1.jpg",
          "/products/pendant-leaf-pendant-2.jpg",
          "/products/pendant-leaf-pendant-3.jpg",
          "/products/pendant-leaf-pendant-4.jpg"
        ]
      },
          {
            id: "moon-pendant",
            category: "Pendants",
            name: "Moon Pendant",
            description: "A celestial crescent cast with a gentle, dreamlike hammered patina.",
            price: "$960",
            image: "/products/pendant-moon-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-moon-pendant-1.jpg",
          "/products/pendant-moon-pendant-2.jpg",
          "/products/pendant-moon-pendant-3.jpg",
          "/products/pendant-moon-pendant-4.jpg"
        ]
      },
          {
            id: "pendant-set",
            category: "Pendants",
            name: "Pendant Set",
            description: "A magnificent matching ensemble of handcrafted pendants for layered elegance.",
            price: "$1,450",
            image: "/products/pendant-pendant-set-cover.jpg",
            isNew: true,
            gallery: [
          "/products/pendant-pendant-set-1.jpg",
          "/products/pendant-pendant-set-2.jpg",
          "/products/pendant-pendant-set-3.jpg",
          "/products/pendant-pendant-set-4.jpg"
        ]
      },
          {
            id: "plus-pendant",
            category: "Pendants",
            name: "Plus Pendant",
            description: "A modern geometric cross accent radiating bold symmetry and timeless style.",
            price: "$780",
            image: "/products/pendant-plus-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-plus-pendant-1.jpg",
          "/products/pendant-plus-pendant-2.jpg",
          "/products/pendant-plus-pendant-3.jpg",
          "/products/pendant-plus-pendant-4.jpg"
        ]
      },
          {
            id: "snake-pendant",
            category: "Pendants",
            name: "Snake Pendant",
            description: "A serpentine masterpiece coiling with mesmerizing texture and serpentine allure.",
            price: "$1,120",
            image: "/products/pendant-snake-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-snake-pendant-1.jpg",
          "/products/pendant-snake-pendant-2.jpg",
          "/products/pendant-snake-pendant-3.jpg",
          "/products/pendant-snake-pendant-4.jpg"
        ]
      },
          {
            id: "spiral-pendant",
            category: "Pendants",
            name: "Spiral Pendant",
            description: "An infinite golden spiral symbolizing continuous motion and artisanal harmony.",
            price: "$880",
            image: "/products/pendant-spiral-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-spiral-pendant-1.jpg",
          "/products/pendant-spiral-pendant-2.jpg",
          "/products/pendant-spiral-pendant-3.jpg",
          "/products/pendant-spiral-pendant-4.jpg"
        ]
      },
          {
            id: "star-pendant",
            category: "Pendants",
            name: "Star Pendant",
            description: "A brilliant celestial starburst capturing warm internal glows from every angle.",
            price: "$910",
            image: "/products/pendant-star-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-star-pendant-1.jpg",
          "/products/pendant-star-pendant-2.jpg",
          "/products/pendant-star-pendant-3.jpg",
          "/products/pendant-star-pendant-4.jpg"
        ]
      },
          {
            id: "tiger-pendant",
            category: "Pendants",
            name: "Tiger Pendant",
            description: "A fierce and majestic tiger crest, masterfully struck with bold Milanese heritage.",
            price: "$1,280",
            image: "/products/pendant-tiger-pendant-cover.png",
            isNew: true,
            gallery: [
          "/products/pendant-tiger-pendant-1.jpg",
          "/products/pendant-tiger-pendant-2.jpg",
          "/products/pendant-tiger-pendant-3.jpg",
          "/products/pendant-tiger-pendant-4.jpg"
        ]
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
        const found = staticProducts.find(p => p.id === params.id);
        if (found) {
          setProduct(found);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.id]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.email) return;
    setInquirySubmitted(true);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#fef9e9]">
        <div className="text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-t border-[#c9a84c] rounded-full animate-spin" />
          <p className="text-xs font-bold tracking-[0.2em] text-[#1d1c12]/40 uppercase font-['Manrope',sans-serif]">Loading Piece...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-[#fef9e9]">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl font-normal italic text-[#1d1c12]" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>Artifact Missing</h2>
          <p className="text-sm text-[#1d1c12]/60">The requested creation cannot be located in our catalog.</p>
          <button onClick={() => setLocation("/collection")} className="luxury-btn-gold" style={{ background: "#9c7a2b" }}>Return to Collection</button>
        </div>
      </div>
    );
  }

  const getGalleryImages = (prod: any) => {
    if (prod.gallery && Array.isArray(prod.gallery) && prod.gallery.length > 0) {
      return prod.gallery;
    }
    if (prod.id === "unisex-gold-bracelet") {
      return [
        "/products/bracelet-unisex-1.jpg",
        "/products/bracelet-unisex-2.jpg",
        "/products/bracelet-unisex-3.jpg",
        "/products/bracelet-unisex-4.jpg",
      ];
    }
    return [
      prod.image,
      "/bespoke/sketch-design.png",
      "/figmaAssets/jeweler-working-on-a-custom-piece.png",
    ];
  };

  return (
    <div className="w-full min-h-screen bg-[#fef9e9]">
      <NavbarSection />

      {/* Spacing for navbar */}
      <div className="pt-20" />

      {/* Breadcrumbs */}
      <div className="w-full py-6 bg-[#f8f3e4] border-b border-[#1d1c12]/5">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase font-['Manrope',sans-serif] text-[#1d1c12]/50">
          <div className="flex items-center gap-2">
            <span className="hover:text-[#c9a84c] cursor-pointer" onClick={() => setLocation("/")}>Home</span>
            <span>/</span>
            <span className="hover:text-[#c9a84c] cursor-pointer" onClick={() => setLocation("/collection")}>Collection</span>
            <span>/</span>
            <span className="text-[#1d1c12]/80">{product.name}</span>
          </div>
          <span className="text-[#795900]">Catalog // MT-AR-{product.id.slice(0, 4).toUpperCase()}</span>
        </div>
      </div>

      {/* Main product display section */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: VISUAL GALLERY (col-span-6) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
            
            {/* Primary Large Image Frame */}
            <div className="relative border border-[#1d1c12]/10 bg-[#fef9e9]/50 aspect-[4/5] overflow-hidden group">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "brightness(0.97) contrast(1.01)" }}
              />
              
              {/* Corner accent lines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#c9a84c]/50" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#c9a84c]/50" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#c9a84c]/50" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#c9a84c]/50" />
            </div>

            {/* Interactive Thumbnail Gallery Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {getGalleryImages(product).map((img: string, idx: number) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square bg-[#fef9e9]/80 border overflow-hidden cursor-pointer group relative transition-all ${
                    (selectedImage || product.image) === img 
                      ? 'border-[#c9a84c] ring-2 ring-[#c9a84c]/30' 
                      : 'border-[#1d1c12]/10 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt={`Detail ${idx + 1}`} />
                  <div className="absolute inset-0 bg-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: REFINED EDITORIAL METADATA (col-span-6) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-8">
            
            {/* Title block */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#795900] font-['Manrope',sans-serif]">
                Handforged // {product.category}
              </span>
              <h1 
                className="text-[clamp(36px,4.5vw,56px)] font-normal text-[#1d1c12] tracking-[-0.01em] leading-tight"
                style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
              >
                {product.name}
              </h1>
              <div className="flex justify-between items-baseline border-b border-[#1d1c12]/10 pb-4">
                <span className="text-2xl text-[#795900] font-light font-['Noto_Serif',serif]">{product.price}</span>
                <span className="text-[10px] font-bold tracking-widest text-[#1d1c12]/50 uppercase font-['Manrope',sans-serif]">Inclusive of custom fitting</span>
              </div>
            </div>

            {/* Core Description */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#1d1c12]/80 leading-relaxed font-['Manrope',sans-serif]">
                {product.description}
              </p>
              <p className="text-xs text-[#1d1c12]/50 leading-relaxed font-['Manrope',sans-serif]">
                Crafted entirely by hand under the direct oversight of Creative Director Alessandra Oro. Imprinted with the signature hammered patina of Mani D'Oro, each piece holds microscopic, unique variations that record its slow creation.
              </p>
            </div>

            {/* Editorial Specifications Tabs */}
            <div className="flex flex-col gap-4 border-t border-[#1d1c12]/10 pt-6">
              <div className="flex gap-6 border-b border-[#1d1c12]/5 pb-2">
                {[
                  { value: "heritage", label: "Heritage Details" },
                  { value: "materials", label: "Spec Materials" },
                  { value: "sourcing", label: "Ethical Sourcing" }
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value as any)}
                    className="text-[10px] font-bold tracking-widest uppercase transition-all pb-1.5 font-['Manrope',sans-serif]"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: activeTab === tab.value ? "#795900" : "#1d1c12]/40",
                      borderBottom: activeTab === tab.value ? "2px solid #c9a84c" : "2px solid transparent",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="text-xs text-[#1d1c12]/70 leading-relaxed font-['Manrope',sans-serif] min-h-[120px]">
                {activeTab === "heritage" && (
                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    <li>Individually hammered at temperatures exceeding 1,000°C in our Kishangarh foundry.</li>
                    <li>Slight structural variations ensure zero duplicates exist worldwide.</li>
                    <li>Officially registered in the Mani D'Oro historical archives.</li>
                    <li>Accompanied by original hand-drawn gouache sketching prints.</li>
                  </ul>
                )}
                {activeTab === "materials" && (
                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    <li>Solid high-carat Yellow Gold or custom blended 18k Red-Gold.</li>
                    <li>Signature low-reflective satin patina.</li>
                    <li>Gemstones cut with antique step-cut facets for warm internal glows.</li>
                    <li>Stamped with the official atelier hallmark of Milanese excellence.</li>
                  </ul>
                )}
                {activeTab === "sourcing" && (
                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    <li>Ethically mined gold in partnership with certified artisanal small-scale miners.</li>
                    <li>Gemstones are fully traceable from mine-to-market with Kimberly certificates.</li>
                    <li>Recycled metal components to minimize planetary footprints.</li>
                    <li>Direct fair-trade wages paid to local craftsmen in Milano and Rajasthan.</li>
                  </ul>
                )}
              </div>
            </div>

            {/* ATELIER COMMISSION / INQUIRY FORM (Tied to Bespoke Concept) */}
            <div className="bg-[#f8f3e4] border border-[#1d1c12]/10 p-6 md:p-8 flex flex-col gap-5 mt-4">
              
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-normal text-[#1d1c12]" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
                  Inquire About This Piece
                </h3>
                <p className="text-[10px] text-[#1d1c12]/50 font-['Manrope',sans-serif]">
                  Request custom sizing, gemstone alterations, or initial consult bookings.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-4 animate-fade-in">
                  <div className="w-12 h-12 border border-[#795900]/50 bg-[#795900]/5 rounded-full flex items-center justify-center text-[#795900]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-[#1d1c12]">Inquiry Logged</h4>
                    <p className="text-xs text-[#1d1c12]/60">Our liaison will email or message you shortly with sizing quotes.</p>
                  </div>
                  <button 
                    onClick={() => setInquirySubmitted(false)}
                    className="font-['Manrope',sans-serif] text-[9px] font-bold tracking-widest uppercase border border-[#795900]/30 text-[#795900] py-2 px-4 hover:border-[#795900] transition-colors"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inq-name" className="text-[9px] font-bold tracking-widest text-[#1d1c12]/60 uppercase font-['Manrope',sans-serif]">Your Name</label>
                      <input
                        id="inq-name"
                        type="text"
                        required
                        placeholder="e.g. Jean"
                        value={inquiryForm.name}
                        onChange={e => setInquiryForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-[#fef9e9]/70 border border-[#1d1c12]/10 py-2.5 px-3 font-['Manrope',sans-serif] text-xs outline-none focus:border-[#795900]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inq-email" className="text-[9px] font-bold tracking-widest text-[#1d1c12]/60 uppercase font-['Manrope',sans-serif]">Your Email</label>
                      <input
                        id="inq-email"
                        type="email"
                        required
                        placeholder="e.g. user@domain.com"
                        value={inquiryForm.email}
                        onChange={e => setInquiryForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-[#fef9e9]/70 border border-[#1d1c12]/10 py-2.5 px-3 font-['Manrope',sans-serif] text-xs outline-none focus:border-[#795900]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inq-size" className="text-[9px] font-bold tracking-widest text-[#1d1c12]/60 uppercase font-['Manrope',sans-serif]">Desired Sizing</label>
                      <select
                        id="inq-size"
                        value={inquiryForm.size}
                        onChange={e => setInquiryForm(f => ({ ...f, size: e.target.value }))}
                        className="w-full bg-[#fef9e9]/70 border border-[#1d1c12]/10 py-2.5 px-3 font-['Manrope',sans-serif] text-xs outline-none"
                      >
                        <option value="Small">Small (5 - 6 US Ring / 15cm wrist)</option>
                        <option value="Standard">Standard (7 US Ring / 17cm wrist)</option>
                        <option value="Large">Large (8 - 9 US Ring / 19cm wrist)</option>
                        <option value="Custom sizing">Custom Sizing (Inquire below)</option>
                      </select>
                    </div>
                    <div className="flex flex-col justify-end">
                      <button 
                        type="submit"
                        className="w-full bg-[#795900] hover:bg-[#634900] text-[#fef9e9] font-['Manrope',sans-serif] text-[10px] font-bold tracking-widest uppercase py-3 transition-colors border-0 cursor-pointer"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inq-note" className="text-[9px] font-bold tracking-widest text-[#1d1c12]/60 uppercase font-['Manrope',sans-serif]">Inquiry Customization / Notes</label>
                    <textarea
                      id="inq-note"
                      placeholder="e.g. Please use raw Colombian Emerald instead of White Diamond..."
                      rows={2}
                      value={inquiryForm.note}
                      onChange={e => setInquiryForm(f => ({ ...f, note: e.target.value }))}
                      className="w-full bg-[#fef9e9]/70 border border-[#1d1c12]/10 py-2.5 px-3 font-['Manrope',sans-serif] text-xs outline-none resize-none focus:border-[#795900]"
                    />
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
