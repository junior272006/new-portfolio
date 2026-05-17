import "../styles/Experience.css";

const experiences = [
  {
    role: "Stagiaire Développeur Web",
    company: "Afrique Informatique Bureautique",
    location: "Abidjan, Côte d'Ivoire",
    period: "Septembre 2025 — Décembre 2025",
    description:
      "Stage de développement web réalisé dans le cadre de ma soutenance de BTS IDA, avec participation à la conception et au développement d'applications et interfaces web.",
    missions: [
      "Développement et intégration d'interfaces web",
      "Participation à des projets de développement d'applications",
      "Manipulation et gestion de bases de données",
      "Maintenance et amélioration de fonctionnalités existantes",
      "Travail en environnement collaboratif",
    ],
    techs: ["React", "TypeScript", "Mantine UI", "Python", "MySQL", "Git", "Figma"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <span className="experience__num">05 //</span>
        <h2 className="experience__title">Expérience</h2>
      </div>

      <div className="experience__list">
        {experiences.map((exp, i) => (
          <div key={i} className="experience__card">
            <div className="experience__card-header">
              <div>
                <h3 className="experience__role">{exp.role}</h3>
                <span className="experience__company">{exp.company}</span>
              </div>
              <div className="experience__meta">
                <span className="experience__location"> {exp.location}</span>
                <span className="experience__period"> {exp.period}</span>
              </div>
            </div>

            <p className="experience__desc">{exp.description}</p>

            <ul className="experience__missions">
              {exp.missions.map((m, j) => (
                <li key={j} className="experience__mission">
                  <span className="experience__mission-arrow">▸</span> {m}
                </li>
              ))}
            </ul>

            <div className="experience__techs">
              {exp.techs.map((tech) => (
                <span key={tech} className="experience__tech">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}