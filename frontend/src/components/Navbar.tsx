import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { label: "à_propos", href: "#about" },
  { label: "compétences", href: "#skills" },
  { label: "formation", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo */}
      <a className="navbar__logo" href="#hero" onClick={() => handleLinkClick("#hero")}>
        <span className="navbar__logo-bracket">[</span>
        <span className="navbar__logo-path">~/</span>
        <span className="navbar__logo-name">junior_nguetta</span>
        <span className="navbar__logo-bracket">]</span>
        <span className="navbar__logo-cursor" />
      </a>

      {/* Desktop links */}
      <ul className="navbar__links">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`navbar__link ${activeSection === href.replace("#", "") ? "navbar__link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
            >
              <span className="navbar__link-prefix">./</span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Status badge */}
      <div className="navbar__status">
        <span className="navbar__status-dot" />
        <span>disponible</span>
      </div>

      {/* Burger mobile */}
      <button
        className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
          >
            <span className="navbar__mobile-prefix">$ cd </span>{label}
          </a>
        ))}
      </div>
    </nav>
  );
};