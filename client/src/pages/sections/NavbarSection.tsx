import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export const NavbarSection = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (active = false) => ({
    fontFamily: "'Manrope', sans-serif",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#1d1c12",
    textDecoration: "none",
    opacity: active ? 1 : 0.55,
    transition: "opacity 0.2s",
    cursor: "pointer",
  });

  const isCollection = location === "/collection";

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        height: "80px",
        background: scrolled ? "rgba(254,249,233,0.96)" : "#fef9e9",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(29,28,18,0.08)" : "none",
        transition: "all 0.3s",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <a
          href="/collection"
          data-testid="link-nav-collection"
          style={linkStyle(isCollection)}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = isCollection ? "1" : "0.55")}
        >
          Collection
        </a>
        <a
          href="/#bespoke"
          data-testid="link-nav-bespoke"
          style={linkStyle()}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
        >
          Bespoke
        </a>
        <a
          href="/#archive"
          data-testid="link-nav-archive"
          style={linkStyle()}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
        >
          The Archive
        </a>
      </nav>

      <a
        href="/"
        data-testid="link-logo"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Noto Serif', Georgia, serif",
          fontSize: "22px",
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: "#1d1c12",
          textDecoration: "none",
        }}
      >
        Mani D&apos;Oro
      </a>

      <nav style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        <a
          href="/#story"
          data-testid="link-nav-the-story"
          style={linkStyle()}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
        >
          The Story
        </a>
        <a
          href="#"
          data-testid="link-nav-journal"
          style={linkStyle()}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
        >
          Journal
        </a>
        <a
          href="/#contact"
          data-testid="link-nav-contact"
          style={linkStyle()}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
