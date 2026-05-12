import { useState, useEffect } from "react";

export const NavbarSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 h-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#fef9e9]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(29,28,18,0.08)]"
          : "bg-[#fef9e9]"
      }`}
    >
      <nav className="flex items-center gap-10">
        {[
          { label: "Collection", href: "#collection" },
          { label: "Bespoke", href: "#bespoke" },
          { label: "The Archive", href: "#archive" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            data-testid={`link-nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-['Manrope',sans-serif] text-[11px] font-bold tracking-[0.18em] text-[#1d1c12] uppercase opacity-75 hover:opacity-100 transition-opacity"
          >
            {label}
          </a>
        ))}
      </nav>

      <a href="/" data-testid="link-logo" className="absolute left-1/2 -translate-x-1/2">
        <span className="font-['Noto_Serif',Georgia,serif] text-[22px] font-normal tracking-[0.02em] text-[#1d1c12]">
          Mani D&apos;Oro
        </span>
      </a>

      <nav className="flex items-center gap-10">
        {[
          { label: "The Story", href: "#story" },
          { label: "Journal", href: "#" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            data-testid={`link-nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-['Manrope',sans-serif] text-[11px] font-bold tracking-[0.18em] text-[#1d1c12] uppercase opacity-75 hover:opacity-100 transition-opacity"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};
