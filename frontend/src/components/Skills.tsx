import "../styles/Skills.css";

interface SkillItem {
  icon: string;
  label: string;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    icon: "</>" ,
    title: "Développement Web",
    skills: [
      { icon: "⚛", label: "React / TypeScript" },
      { icon: "🐍", label: "Python (scripts)" },
      { icon: "🐘", label: "PHP (bases)" },
      { icon: "🎨", label: "Figma (UI/UX)" },
      { icon: "🔗", label: "Applications fullstack" },
    ],
  },
  {
    icon: "🗄",
    title: "Bases de données",
    skills: [
      { icon: "🐬", label: "MySQL" },
      { icon: "🔶", label: "Oracle Database (notions)" },
      { icon: "📐", label: "Modélisation BDD" },
      { icon: "📋", label: "Requêtes SQL (CRUD)" },
    ],
  },
  {
    icon: "🌐",
    title: "Réseaux & Systèmes",
    skills: [
      { icon: "📡", label: "Cisco Packet Tracer" },
      { icon: "🔀", label: "Routage & commutation" },
      { icon: "🧱", label: "Modèle OSI / TCP-IP" },
      { icon: "🔢", label: "Adressage IP & sous-réseaux" },
      { icon: "🖥", label: "Windows Server 2019" },
    ],
  },
  {
    icon: "🔐",
    title: "Cybersécurité",
    skills: [
      { icon: "🐧", label: "Linux Kali & Ubuntu" },
      { icon: "🌍", label: "OWASP Top 10 (bases)" },
      { icon: "📡", label: "Wireshark (analyse trafic)" },
      { icon: "🔍", label: "Nmap (découverte réseau)" },
      { icon: "🔒", label: "Sécurité SSH / services" },
    ],
  },
  {
    icon: "⚙",
    title: "Outils",
    skills: [
      { icon: "🐙", label: "Git / GitHub" },
      { icon: "📝", label: "VS Code" },
      { icon: "📮", label: "Postman" },
      { icon: "🗃", label: "phpMyAdmin" },
      { icon: "🔶", label: "Oracle SQL Developer" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <span className="skills__num">03 //</span>
        <h2 className="skills__title">Compétences</h2>
      </div>

      <div className="skills__grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <div className="skill-card__header">
              <span className="skill-card__cat-icon">{cat.icon}</span>
              <h3 className="skill-card__title">{cat.title}</h3>
            </div>
            <ul className="skill-card__list">
              {cat.skills.map((skill) => (
                <li key={skill.label} className="skill-card__item">
                  <div className="skill-card__item-top">
                    <span className="skill-card__item-icon">{skill.icon}</span>
                    <span className="skill-card__item-label">{skill.label}</span>
                  </div>
                  <div className="skill-card__bar">
                    <div className="skill-card__bar-fill" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}