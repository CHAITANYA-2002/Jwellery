import { useState } from "react";
import { NavbarSection } from "./sections/NavbarSection";
import { FooterSection } from "./sections/FooterSection";
import { motion, AnimatePresence } from "framer-motion";

export const ContactPage = (): JSX.Element => {
  const [form, setForm] = useState({ name: "", email: "", message: "", interest: "bespoke commission" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const WHATSAPP_NUMBER = "919000000000";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20a%20Mani%20D%27Oro%20bespoke%20commission.`;

  return (
    <div className="w-full min-h-screen bg-[#fcfaf2] text-[#1a1614]">
      <NavbarSection />

      {/* ── CINEMATIC HERO (WARM EDITORIAL) ────────────────── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1a1614]/5 z-10" />
          <img
            src="/bespoke/consultation-dark.png"
            alt="Atelier"
            className="w-full h-full object-cover grayscale opacity-20 scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf2] via-transparent to-[#fcfaf2] z-20" />
        </div>

        <div className="relative z-30 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#b39359] font-['Manrope',sans-serif] block mb-8"
          >
            The Conversation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(56px,10vw,110px)] font-normal leading-[0.9] mb-10 text-[#1a1614]"
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            Connect with <br />
            <span className="italic text-[#b39359]">the Artisans</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-px h-28 bg-gradient-to-b from-[#b39359] to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ── MAIN CONTENT (WARM LAYOUT) ─────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* LEFT: INFORMATION & HERITAGE */}
          <div className="flex flex-col gap-20">
            <div className="max-w-md relative">
              <div className="absolute -left-12 top-0 w-px h-full bg-[#b39359]/20 hidden xl:block" />
              <h2 className="text-4xl font-normal italic mb-8 leading-tight text-[#1a1614]" style={{ fontFamily: "'Noto Serif', serif" }}>
                "Every artifact is a shared vision between jeweler and collector."
              </h2>
              <p className="text-sm text-[#1a1614]/60 leading-relaxed font-['Manrope',sans-serif]">
                Mani D’Oro remains a family-led atelier. We operate from the historical marble corridors of Kishangarh and the design heart of Milano. We welcome your inquiries on custom commissions, heritage repairs, or atelier visits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase font-['Manrope',sans-serif]">Milano Atelier</span>
                <div className="text-[13px] text-[#1a1614]/80 leading-relaxed space-y-2 font-['Manrope',sans-serif]">
                  <p className="font-bold text-[#1a1614]">Via Montenapoleone 8</p>
                  <p>Design & Creative Office</p>
                  <p className="opacity-60">milano@manidoro.com</p>
                  <p className="opacity-60">+39 02 7600 0000</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase font-['Manrope',sans-serif]">Rajasthan Foundry</span>
                <div className="text-[13px] text-[#1a1614]/80 leading-relaxed space-y-2 font-['Manrope',sans-serif]">
                  <p className="font-bold text-[#1a1614]">Kishangarh, India</p>
                  <p>Craft & Stone Forging Center</p>
                  <p className="opacity-60">rajasthan@manidoro.com</p>
                  <p className="opacity-60">+91 1463 240000</p>
                </div>
              </div>
            </div>

            {/* Premium WhatsApp Button */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-6 text-[#1a1614] no-underline transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-[#b39359]/30 flex items-center justify-center group-hover:bg-[#b39359]/5 transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b39359" strokeWidth="1">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b39359]">Direct Correspondence</span>
                <span className="text-base font-normal italic group-hover:text-[#b39359] transition-colors" style={{ fontFamily: "'Noto Serif', serif" }}>WhatsApp the Master Goldsmith</span>
              </div>
            </a>
          </div>

          {/* RIGHT: ELEGANT FORM (WARM IVORY) */}
          <div className="relative p-12 bg-[#f5f0e1]/40 border border-[#b39359]/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(179,147,89,0.05)]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center flex flex-col items-center justify-center h-full min-h-[550px]"
                >
                  <div className="w-24 h-24 border border-[#b39359]/30 rounded-full flex items-center justify-center mb-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b39359" strokeWidth="1">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-4xl font-normal italic mb-4 text-[#1a1614]" style={{ fontFamily: "'Noto Serif', serif" }}>Dialogue Initiated.</h3>
                  <p className="text-sm text-[#1a1614]/50 max-w-xs mb-12 leading-relaxed">
                    Our concierge is reviewing your request. Expect a handwritten electronic response within 12 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b39359] border-b border-[#b39359]/20 hover:border-[#b39359] pb-1 transition-all"
                  >
                    Return to Form
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-12"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-normal text-[#1a1614]" style={{ fontFamily: "'Noto Serif', serif" }}>Atelier Commission</h3>
                    <p className="text-xs text-[#1a1614]/40 font-['Manrope',sans-serif]">Please describe the nature of your inquiry in detail.</p>
                  </div>

                  <div className="space-y-10">
                    <div className="flex flex-col gap-4 relative group">
                      <label className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="bg-transparent border-b border-[#1a1614]/10 py-4 text-sm focus:border-[#b39359] outline-none transition-all placeholder:text-[#1a1614]/15"
                        placeholder="Jean Aurelius"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>

                    <div className="flex flex-col gap-4 relative group">
                      <label className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase">Electronic Mail</label>
                      <input 
                        type="email" 
                        required
                        className="bg-transparent border-b border-[#1a1614]/10 py-4 text-sm focus:border-[#b39359] outline-none transition-all placeholder:text-[#1a1614]/15"
                        placeholder="curator@heirloom.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>

                    <div className="flex flex-col gap-6">
                      <label className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase">Enquiry Directive</label>
                      <div className="flex flex-wrap gap-3">
                        {["Bespoke", "Heritage", "Catalogue", "Tour"].map(opt => (
                          <button 
                            key={opt}
                            type="button"
                            onClick={() => setForm(f => ({ ...f, interest: opt.toLowerCase() }))}
                            className={`text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-500 ${
                              form.interest === opt.toLowerCase() 
                              ? "bg-[#b39359] text-[#fcfaf2]" 
                              : "bg-[#1a1614]/5 text-[#1a1614]/40 hover:bg-[#1a1614]/10"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label className="text-[10px] font-bold tracking-[0.2em] text-[#b39359] uppercase">Design Narrative</label>
                      <textarea 
                        required
                        rows={5}
                        className="bg-transparent border-b border-[#1a1614]/10 py-4 text-sm focus:border-[#b39359] outline-none transition-all resize-none placeholder:text-[#1a1614]/15 leading-relaxed"
                        placeholder="Describe your design intent, heirloom references, or custom gemstone requests..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#1a1614] text-[#fcfaf2] py-6 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#332d2a] transition-all duration-500 shadow-xl"
                  >
                    Initiate Connection
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERIC MAP ────────────────────────────────── */}
      <section className="bg-[#f5f0e1] py-32 border-t border-[#b39359]/10">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="flex flex-col items-center text-center gap-8 mb-20">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#b39359]">The Heritage Core</span>
            <h2 className="text-5xl font-normal leading-tight text-[#1a1614]" style={{ fontFamily: "'Noto Serif', serif" }}>
              Kishangarh <span className="italic text-[#b39359]">Rajasthan</span>
            </h2>
            <p className="text-sm text-[#1a1614]/50 max-w-lg leading-relaxed font-['Manrope',sans-serif]">
              In the heart of Rajasthan's white-marble quarries, our artisans forge gold and stone in a tradition that predates modern machinery.
            </p>
          </div>

          <div className="relative w-full aspect-[21/8] border border-[#b39359]/20 overflow-hidden shadow-2xl group">
            <iframe
              src="https://maps.google.com/maps?q=Kishangarh,Rajasthan,India&t=m&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(0.2) contrast(1.1) brightness(0.95)" }}
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#f5f0e1] via-transparent to-[#f5f0e1] opacity-60" />
            
            {/* Elegant compass mark */}
            <div className="absolute bottom-10 left-10 p-6 bg-[#fcfaf2]/90 backdrop-blur-md border border-[#b39359]/20 hidden md:flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#b39359]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1a1614]">Foundry Coordinates</span>
              </div>
              <span className="text-[9px] text-[#1a1614]/40 font-['Manrope',sans-serif]">26.5724° N, 74.8638° E // THE MARBLE HUB</span>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};
