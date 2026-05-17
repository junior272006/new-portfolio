import { useState } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { label: "à_propos", href: "#about" },
  { label: "compétences", href: "#skills" },
  { label: "formation", href: "#education" },
  { label: "contact", href: "#contact" },
  { label: "terminal", href: "#terminal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      
      {/* Logo */}
      <a
        className="navbar__logo"
        href="#hero"
        onClick={() => handleLinkClick("#hero")}
      >
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
              className="navbar__link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(href);
              }}
            >
              <span className="navbar__link-prefix">./</span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div className="navbar__status">
        <span className="navbar__status-dot" />
        <span>disponible</span>
      </div>

      {/* Burger */}
      <button
        className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="navbar__mobile-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(href);
            }}
          >
            <span className="navbar__mobile-prefix">$ cd </span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}