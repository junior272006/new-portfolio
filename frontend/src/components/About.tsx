import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <span className="about__num">01 //</span>
        <h2 className="about__title">A propos de moi</h2>
      </div>

      <div className="about__content">
        <p className="about__text">
          J'ai été initialement orienté vers le développement web, un domaine dans lequel j'ai appris
          à concevoir des applications, comprendre les logiques de programmation et travailler sur des
          projets concrets. Cependant, au-delà du développement, c'est la cybersécurité qui a toujours
          suscité le plus d'intérêt chez moi.
        </p>
        <p className="about__text">
          Après deux années de formation en BTS IDA (Informatique Développeur d'Applications), j'ai
          décidé de poursuivre mon parcours à l'INP-HB afin de me spécialiser davantage et d'approfondir
          mes compétences dans le domaine de la cybersécurité.
        </p>
        <p className="about__text">
          Aujourd'hui, je construis mon profil à la croisée du développement et de la sécurité
          informatique. Cette double compétence me permet de mieux comprendre les systèmes dans leur
          globalité : les concevoir, les analyser et surtout les protéger.
        </p>
        <p className="about__text">
          Mon objectif est de progresser dans les domaines de la cybersécurité offensive et défensive,
          tout en continuant à renforcer mes bases en développement pour devenir un professionnel capable
          d'intervenir sur l'ensemble du cycle de vie d'un système sécurisé.
        </p>
      </div>
    </section>
  );
}