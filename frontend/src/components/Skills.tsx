import { type ReactNode } from "react";
import {
  FaReact, FaPython, FaPhp, FaFigma, FaLayerGroup,
  FaDatabase, FaServer, FaProjectDiagram,
  FaNetworkWired, FaExchangeAlt, FaSitemap, FaWindows,
  FaLinux, FaShieldAlt, FaLock,
  FaGithub, FaCode,
} from "react-icons/fa";
import {
  SiTypescript, SiMysql, SiWireshark,
  SiPostman, SiPhpmyadmin, SiVsco,
} from "react-icons/si";
import { MdRouter } from "react-icons/md";
import "../styles/Skills.css";

interface SkillItem {
  icon: ReactNode;
  label: string;
}

interface SkillCategory {
  icon: ReactNode;
  title: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    icon: <FaReact />,
    title: "Développement Web",
    skills: [
      { icon: <FaReact />,      label: "React" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaPython />,     label: "Python (scripts)" },
      { icon: <FaPhp />,        label: "PHP (bases)" },
      { icon: <FaFigma />,      label: "Figma (UI/UX)" },
      { icon: <FaLayerGroup />, label: "Applications fullstack" },
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Bases de données",
    skills: [
      { icon: <SiMysql />,         label: "MySQL" },
      { icon: <FaDatabase />,        label: "Oracle Database (notions)" },
      { icon: <FaProjectDiagram />,label: "Modélisation BDD" },
      { icon: <FaDatabase />,      label: "Requêtes SQL (CRUD)" },
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: "Réseaux & Systèmes",
    skills: [
      { icon: <MdRouter />,         label: "Cisco Packet Tracer" },
      { icon: <FaExchangeAlt />,    label: "Routage & commutation" },
      { icon: <FaSitemap />,        label: "Modèle OSI / TCP-IP" },
      { icon: <FaNetworkWired />,   label: "Adressage IP & sous-réseaux" },
      { icon: <FaWindows />,        label: "Windows Server 2019" },
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersécurité",
    skills: [
      { icon: <FaLinux />,      label: "Linux Kali & Ubuntu" },
      { icon: <FaShieldAlt />,  label: "OWASP Top 10 (bases)" },
      { icon: <SiWireshark />,  label: "Wireshark (analyse trafic)" },
      { icon: <FaServer />,     label: "Nmap (découverte réseau)" },
      { icon: <FaLock />,       label: "Sécurité SSH / services" },
    ],
  },
  {
    icon: <FaCode />,
    title: "Outils",
    skills: [
      { icon: <FaGithub />,        label: "Git / GitHub" },
      { icon: <SiVsco />, label: "VS Code" },
      { icon: <SiPostman />,       label: "Postman" },
      { icon: <SiPhpmyadmin />,    label: "phpMyAdmin" },
      { icon: <FaDatabase />,        label: "Oracle SQL Developer" },
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
          <div key={String(cat.title)} className="skill-card">
            <div className="skill-card__header">
              <span className="skill-card__cat-icon">{cat.icon}</span>
              <h3 className="skill-card__title">{cat.title}</h3>
            </div>
            <ul className="skill-card__list">
              {cat.skills.map((skill) => (
                <li key={String(skill.label)} className="skill-card__item">
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