import { useState } from "react";
import { NavbarSection } from "./sections/NavbarSection";
import { FooterSection } from "./sections/FooterSection";

export const ContactPage = (): JSX.Element => {
  const [form, setForm] = useState({ name: "", email: "", message: "", interest: "general" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const WHATSAPP_NUMBER = "447700900000";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20a%20Mani%20D%27Oro%20bespoke%20commission.`;

  return (
    <div className="w-full min-h-screen" style={{ background: "#1a1c12" }}>
      <NavbarSection />

      {/* ── FULL-PAGE ATMOSPHERIC BACKGROUND ─────────────── */}
      <div style={{ paddingTop: "80px", position: "relative", minHeight: "100vh" }}>

        {/* Background: layered dark texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/figmaAssets/jeweler-working-on-a-custom-piece.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 60% 40%, rgba(121,89,0,0.08) 0%, transparent 70%), linear-gradient(to bottom, #1a1c12 0%, #1e2116 40%, #1a1c12 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1280px] px-8 py-20">

          {/* ── PAGE HEADER ──────────────────────────────── */}
          <div className="mb-16">
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "16px",
              }}
            >
              Mani D&apos;Oro Atelier
            </p>
            <h1
              style={{
                fontFamily: "'Noto Serif', Georgia, serif",
                fontSize: "clamp(52px,6vw,84px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#fef9e9",
              }}
            >
              Let&apos;s Begin
              <br />
              a Dialogue
            </h1>
          </div>

          {/* ── TWO-COLUMN LAYOUT ─────────────────────────── */}
          <div className="grid grid-cols-12 gap-8 items-start">

            {/* LEFT: contact info + WhatsApp */}
            <div className="col-span-4 flex flex-col gap-8">

              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp"
                className="group flex items-center gap-4 p-6 transition-all duration-300"
                style={{
                  background: "rgba(37,211,102,0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(37,211,102,0.2)",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.15)";
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.08)";
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.2)";
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#25d366",
                    borderRadius: "50%",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#25d366",
                      marginBottom: "4px",
                    }}
                  >
                    WhatsApp
                  </p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "13px", color: "rgba(254,249,233,0.65)" }}>
                    Chat with our atelier directly
                  </p>
                </div>
                <svg
                  className="ml-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ opacity: 0.5, transition: "transform 0.2s" }}
                >
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="#25d366" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>

              {/* Contact details — glassmorphism card */}
              <div
                style={{
                  background: "rgba(254,249,233,0.04)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(254,249,233,0.09)",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Serif', Georgia, serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#fef9e9",
                    marginBottom: "20px",
                  }}
                >
                  Visit the Atelier
                </h3>
                {[
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 118 4a1.5 1.5 0 010 3.5z" fill="rgba(201,168,76,0.7)"/>
                      </svg>
                    ),
                    label: "Address",
                    value: "Via Montenapoleone 8, Milan, Italy",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 3h12v10H2V3zm0 0l6 5 6-5" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "atelier@manidoro.com",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 2h2.5l1 3-1.5 1.5A9 9 0 009 10l1.5-1.5 3 1V12c0 .5-.5 2-2 2A12 12 0 012 3c0-1.5 1-2 1-2z" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                      </svg>
                    ),
                    label: "Phone",
                    value: "+39 02 7600 0000",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" fill="none"/>
                        <path d="M8 4v4l3 2" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Hours",
                    value: "Mon–Sat, 10:00–19:00",
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 mb-5 last:mb-0">
                    <div className="mt-0.5 flex-shrink-0">{icon}</div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "rgba(201,168,76,0.65)",
                          marginBottom: "3px",
                        }}
                      >
                        {label}
                      </p>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "13px", color: "rgba(254,249,233,0.6)", lineHeight: 1.5 }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div
                className="flex items-center gap-5 px-6 py-4"
                style={{
                  background: "rgba(254,249,233,0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(254,249,233,0.07)",
                }}
              >
                {["Instagram", "Pinterest"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    data-testid={`link-social-${s.toLowerCase()}`}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(254,249,233,0.4)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(201,168,76,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(254,249,233,0.4)")}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: contact form — glassmorphism */}
            <div
              className="col-span-8 p-10"
              style={{
                background: "rgba(254,249,233,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(254,249,233,0.09)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-8 py-16 text-center">
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      border: "1px solid rgba(201,168,76,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                      <path d="M2 10L10 18L26 2" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Noto Serif', Georgia, serif",
                        fontSize: "28px",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#fef9e9",
                        marginBottom: "12px",
                      }}
                    >
                      Message Received
                    </h3>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "14px", color: "rgba(254,249,233,0.5)", lineHeight: 1.8 }}>
                      Our atelier will be in touch within 24 hours.<br />
                      For urgent inquiries, reach us on WhatsApp.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    data-testid="button-send-another"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      border: "1px solid rgba(201,168,76,0.35)",
                      padding: "12px 24px",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2
                      style={{
                        fontFamily: "'Noto Serif', Georgia, serif",
                        fontSize: "26px",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#fef9e9",
                        marginBottom: "8px",
                      }}
                    >
                      Send a Message
                    </h2>
                    <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "13px", color: "rgba(254,249,233,0.4)", lineHeight: 1.7 }}>
                      For bespoke commissions, press enquiries, or general correspondence.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Interest selector */}
                    <div>
                      <label
                        style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", display: "block", marginBottom: "10px" }}
                      >
                        Nature of Enquiry
                      </label>
                      <div className="flex gap-3 flex-wrap">
                        {["Bespoke Commission", "General Enquiry", "Press & Media", "Stockist"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            data-testid={`interest-${opt.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setForm(f => ({ ...f, interest: opt.toLowerCase() }))}
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              fontSize: "10px",
                              fontWeight: 700,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              padding: "8px 16px",
                              background: form.interest === opt.toLowerCase()
                                ? "rgba(201,168,76,0.15)"
                                : "rgba(254,249,233,0.04)",
                              border: form.interest === opt.toLowerCase()
                                ? "1px solid rgba(201,168,76,0.5)"
                                : "1px solid rgba(254,249,233,0.1)",
                              color: form.interest === opt.toLowerCase()
                                ? "#c9a84c"
                                : "rgba(254,249,233,0.45)",
                              cursor: "pointer",
                              transition: "all 0.2s",
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { field: "name" as const, label: "Full Name", placeholder: "Your name", type: "text" },
                        { field: "email" as const, label: "Email", placeholder: "your@email.com", type: "email" },
                      ].map(({ field, label, placeholder, type }) => (
                        <div key={field}>
                          <label
                            htmlFor={`field-${field}`}
                            style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", display: "block", marginBottom: "8px" }}
                          >
                            {label}
                          </label>
                          <input
                            id={`field-${field}`}
                            type={type}
                            data-testid={`input-${field}`}
                            value={form[field]}
                            onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                            placeholder={placeholder}
                            required
                            style={{
                              width: "100%",
                              background: "rgba(254,249,233,0.05)",
                              border: "1px solid rgba(254,249,233,0.1)",
                              padding: "13px 16px",
                              fontFamily: "'Manrope', sans-serif",
                              fontSize: "13px",
                              color: "#fef9e9",
                              outline: "none",
                              transition: "border-color 0.2s",
                              boxSizing: "border-box",
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)")}
                            onBlur={e => (e.currentTarget.style.borderColor = "rgba(254,249,233,0.1)")}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="field-message"
                        style={{ fontFamily: "'Manrope', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", display: "block", marginBottom: "8px" }}
                      >
                        Your Message
                      </label>
                      <textarea
                        id="field-message"
                        data-testid="input-message"
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us about your vision, your story, what you are looking for..."
                        required
                        style={{
                          width: "100%",
                          background: "rgba(254,249,233,0.05)",
                          border: "1px solid rgba(254,249,233,0.1)",
                          padding: "13px 16px",
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "13px",
                          color: "#fef9e9",
                          outline: "none",
                          resize: "none",
                          transition: "border-color 0.2s",
                          boxSizing: "border-box",
                          lineHeight: 1.7,
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(254,249,233,0.1)")}
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-2">
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "10px", color: "rgba(254,249,233,0.25)", letterSpacing: "0.05em" }}>
                        We respond within 24 hours
                      </p>
                      <button
                        type="submit"
                        data-testid="button-submit-contact"
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "#1d1c12",
                          background: "#c9a84c",
                          padding: "16px 36px",
                          border: "none",
                          cursor: "pointer",
                          transition: "background 0.25s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#b89640")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom decorative gold rule before footer */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-20" />
        <FooterSection />
      </div>
    </div>
  );
};
