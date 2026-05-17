import "../styles/Education.css";

interface Formation {
  icon: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  skills?: string[];
}

const formations: Formation[] = [
  {
    icon: ">_",
    degree: "Cycle Technicien Supérieur en Cybersécurité",
    school: "INP-HB",
    location: "Yamoussoukro, Côte d'Ivoire",
    period: "Depuis mars 2026",
    description:
      "Formation spécialisée en cybersécurité orientée systèmes, réseaux et sécurité informatique. Approche axée sur la compréhension des infrastructures, la sécurisation des systèmes et les bases du hacking éthique.",
  },
  {
    icon: "</>",
    degree: "BTS Informatique Développeur d'Applications (IDA)",
    school: "Pigier Plateau",
    location: "Abidjan, Côte d'Ivoire",
    period: "Octobre 2023 – Août 2025",
    description: "Formation axée sur le développement d'applications web et logicielles.",
    skills: [
      "Développement web et applications",
      "Programmation orientée projet",
      "Bases de données",
      "Analyse et conception de solutions informatiques",
    ],
  },
  {
    icon: "#",
    degree: "Baccalauréat Scientifique",
    school: "Lycée Scientifique de Yamoussoukro",
    location: "Yamoussoukro, Côte d'Ivoire",
    period: "Septembre 2020 – Juillet 2023",
    description:
      "Formation scientifique avec renforcement des bases en mathématiques et sciences, ayant servi de fondation pour mon parcours en informatique.",
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="education__header">
        <span className="education__num">04 //</span>
        <h2 className="education__title">Formation</h2>
      </div>

      <div className="education__timeline">
        {formations.map((f, index) => (
          <div key={index} className="edu-card">
            {/* Ligne verticale + point */}
            <div className="edu-card__line">
              <div className="edu-card__dot" />
              {index < formations.length - 1 && <div className="edu-card__connector" />}
            </div>

            {/* Contenu */}
            <div className="edu-card__body">
              <div className="edu-card__top">
                <span className="edu-card__icon">{f.icon}</span>
                <div>
                  <h3 className="edu-card__degree">{f.degree}</h3>
                  <div className="edu-card__meta">
                    <span className="edu-card__school">{f.school}</span>
                    <span className="edu-card__sep">·</span>
                    <span className="edu-card__location">// {f.location}</span>
                    <span className="edu-card__sep">·</span>
                    <span className="edu-card__period">{f.period}</span>
                  </div>
                </div>
              </div>

              <p className="edu-card__desc">{f.description}</p>

              {f.skills && (
                <ul className="edu-card__skills">
                  {f.skills.map((s) => (
                    <li key={s} className="edu-card__skill">
                      <span className="edu-card__bullet">▸</span> {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}