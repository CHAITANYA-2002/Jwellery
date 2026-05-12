const footerGroups = [
  {
    title: "The Brand",
    links: ["Brand Story", "Our Process", "Journal"],
  },
  {
    title: "Assistance",
    links: ["Contact", "Shipping", "Returns"],
  },
  {
    title: "Social",
    links: ["Instagram", "Pinterest"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer id="contact" className="w-full bg-[#1d1c12]">
      <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-10">

        <div className="grid grid-cols-4 gap-12 pb-14" style={{ borderBottom: "1px solid rgba(254,249,233,0.1)" }}>

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <span
              className="text-xl font-normal text-[#fef9e9]"
              style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
            >
              Mani D&apos;Oro
            </span>
            <p
              className="text-sm font-normal leading-relaxed text-[#fef9e9]/50 max-w-[220px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              A digital atelier specializing in heritage-grade jewelry crafted for the modern individual.
            </p>
          </div>

          {/* Nav columns */}
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-5">
              <h3
                className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#795900]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[13px] font-normal tracking-[0.08em] text-[#fef9e9]/55 hover:text-[#fef9e9] transition-colors"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex items-center justify-between pt-8">
          <p
            className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#fef9e9]/30"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © 2024 Mani D&apos;Oro. All rights reserved.
          </p>
          <p
            className="text-[10px] font-normal tracking-[0.15em] uppercase text-[#fef9e9]/30"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Website by hqblocks.in
          </p>
        </div>
      </div>
    </footer>
  );
};
