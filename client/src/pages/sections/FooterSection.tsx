const footerGroups = [
  {
    title: "Discovery",
    links: ["Brand Story", "Our Process", "Contact"],
  },
  {
    title: "Client Care",
    links: ["Shipping", "Returns"],
  },
  {
    title: "Connect",
    links: ["Instagram", "Pinterest"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer id="contact" className="w-full" style={{ background: "#1a1c12" }}>
      <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-0">

        <div
          className="grid gap-12 pb-14"
          style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1fr", borderBottom: "1px solid rgba(254,249,233,0.07)" }}
        >
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <span
              style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "20px", fontWeight: 400, letterSpacing: "0.01em", color: "#fef9e9" }}
            >
              Mani D&apos;Oro
            </span>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                lineHeight: 1.8,
                color: "rgba(254,249,233,0.35)",
                maxWidth: "220px",
              }}
            >
              An atelier dedicated to the preservation of artisanal excellence.
            </p>
          </div>

          {/* Nav columns */}
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-5">
              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(254,249,233,0.9)",
                  marginBottom: "4px",
                }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                        color: "rgba(254,249,233,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(254,249,233,0.85)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(254,249,233,0.45)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-6">
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(254,249,233,0.22)",
            }}
          >
            © 2024 Mani D&apos;Oro. Website by hqblocks.in
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                data-testid={`link-footer-${label.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(254,249,233,0.22)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(254,249,233,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(254,249,233,0.22)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
