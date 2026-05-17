import "../styles/Projects.css";

interface Project {
  type: "web" | "tech";
  title: string;
  description: string;
  status: "en cours" | "terminé";
  demo?: string;
  github?: string;
  file?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    type: "web",
    title: "Site vitrine e-commerce",
    description: "Site vitrine e-commerce pour Djassaman. Interface moderne avec catalogue produits.",
    status: "en cours",
    demo: "https://e-commerce-djassaman.vercel.app/",
    github: "https://github.com/junior272006/e-commerce",
    tags: ["React", "TypeScript", "Vercel"],
  },
  {
    type: "web",
    title: "2ALSYConnect",
    description: "Plateforme de communication entre les anciens élèves du Lycée Scientifique de Yamoussoukro.",
    status: "en cours",
    demo: "https://2alsy.vercel.app/",
    github: "https://github.com/junior272006/2alsy",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    type: "web",
    title: "Speakmate",
    description: "Plateforme de mise en relation avec des tuteurs en anglais pour améliorer sa pratique orale.",
    status: "en cours",
    demo: "https://speakmate-seven.vercel.app/",
    github: "https://github.com/junior272006/speakmate",
    tags: ["React", "TypeScript", "Vercel"],
  },
  {
    type: "tech",
    title: "Configuration & sécurisation SSH",
    description: "Documentation technique sur la configuration et la sécurisation du service SSH sur un serveur Ubuntu.",
    status: "en cours",
    file: "/garde.docx",
    tags: ["Linux", "SSH", "Ubuntu", "Cybersécurité"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <span className="projects__num">02 //</span>
        <h2 className="projects__title">Mes projets</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card project-card--${project.type}`}>
            {/* Top */}
            <div className="project-card__top">
              <span className={`project-card__badge project-card__badge--${project.type}`}>
                {project.type === "web" ? "// web" : "// technique"}
              </span>
              <span className={`project-card__status project-card__status--${project.status === "terminé" ? "done" : "wip"}`}>
                {project.status === "en cours" ? "● en cours" : "✓ terminé"}
              </span>
            </div>

            {/* Titre */}
            <h3 className="project-card__title">{project.title}</h3>

            {/* Description */}
            <p className="project-card__desc">{project.description}</p>

            {/* Tags */}
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>

            {/* Liens */}
            <div className="project-card__links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  ↗ Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  ⌥ GitHub
                </a>
              )}
              {project.file && (
                <a href={project.file} download className="project-card__link project-card__link--download">
                  ↓ Télécharger le rapport
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}