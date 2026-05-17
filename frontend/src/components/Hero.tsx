import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Badge disponible */}
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        Disponible pour missions &amp; stages
      </div>

      {/* Photo de profil */}
      <div className="hero__avatar">
        <img src="/profil.jpg" alt="Junior N'Guetta" />
      </div>

      {/* Nom */}
      <h1 className="hero__name">
        <span className="hero__name-last">N'GUETTA</span>
        <span className="hero__name-first">Junior</span>
      </h1>

      {/* Sous-titre */}
      <p className="hero__subtitle">
        // Étudiant en Cybersécurité &amp; SSI · EFSPC / INP-HB · Blue Team &amp; Fullstack
      </p>

      {/* Boutons */}
      <div className="hero__btns">
        <a href="#projects" className="hero__btn hero__btn--primary">
          &lt;/&gt; Voir mes projets
        </a>
        <a href="/cv.pdf" download className="hero__btn hero__btn--outline">
          &#x1F4C4; Télécharger CV
        </a>
        <a
          href="https://www.linkedin.com/in/kadjo-junior-n-guetta-1024ba378"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__btn hero__btn--outline"
        >
           LinkedIn
        </a>
      </div>
    </section>
  );
}