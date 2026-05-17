import { useState, useRef, useEffect } from "react";
import "../styles/Terminal.css";

interface Line {
  type: "input" | "output" | "error";
  content: string;
}

const RESPONSES: Record<string, string[]> = {
  help: [
    "Commandes disponibles :",
    "  help       → affiche cette aide",
    "  about      → qui suis-je ?",
    "  projects   → mes projets",
    "  skills     → mes compétences",
    "  contact    → me contacter",
    "  clear      → vider le terminal",
  ],
  about: [
    "Junior N'Guetta — Étudiant en Cybersécurité & SSI",
    "INP-HB / Yamoussoukro, Côte d'Ivoire",
    "Passionné par la Blue Team, les réseaux et le développement Fullstack.",
    "Double profil : développement web + sécurité informatique.",
  ],
  projects: [
    "[ 01 ] Site vitrine e-commerce       → https://e-commerce-djassaman.vercel.app/",
    "[ 02 ] 2ALSYConnect                  → https://2alsy.vercel.app/",
    "[ 03 ] Speakmate                     → https://speakmate-seven.vercel.app/",
    "[ 04 ] Config & sécurisation SSH     → rapport disponible en téléchargement",
  ],
  skills: [
    "Développement  : React, TypeScript, Python, PHP",
    "Bases données  : MySQL, Oracle, SQL",
    "Réseaux        : Cisco, OSI/TCP-IP, Adressage IP",
    "Cybersécurité  : Linux Kali & Ubuntu, Wireshark, Nmap, OWASP",
    "Outils         : Git, VS Code, Postman",
  ],
  contact: [
    "Email     → junior27nguetta@gmail.com",
    "WhatsApp  → +225 05 74 09 31 19",
    "LinkedIn  → linkedin.com/in/kadjo-junior-n-guetta-1024ba378",
  ],
};

const WELCOME = [
  "╔══════════════════════════════════════════╗",
  "║   junior_nguetta@portfolio:~$            ║",
  "║   Bienvenue sur mon portfolio terminal   ║",
  "╚══════════════════════════════════════════╝",
  "",
  "Tapez 'help' pour voir les commandes disponibles.",
  "",
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(
    WELCOME.map((l) => ({ type: "output", content: l }))
  );
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "input", content: cmd }];

    if (trimmed === "clear") {
      setLines(WELCOME.map((l) => ({ type: "output", content: l })));
      return;
    }

    if (trimmed === "") {
      setLines([...newLines]);
      return;
    }

    if (RESPONSES[trimmed]) {
      RESPONSES[trimmed].forEach((line) => {
        newLines.push({ type: "output", content: line });
      });
    } else {
      newLines.push({
        type: "error",
        content: `commande introuvable : '${trimmed}'. Tapez 'help' pour de l'aide.`,
      });
    }

    newLines.push({ type: "output", content: "" });
    setLines(newLines);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      if (input.trim()) setHistory((h) => [input, ...h]);
      setHistoryIndex(-1);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="terminal-section__header">
        <span className="terminal-section__num">07 //</span>
        <h2 className="terminal-section__title">Terminal</h2>
      </div>

      <div
        className="terminal-window"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-window__bar">
          <span className="terminal-window__dot terminal-window__dot--red" />
          <span className="terminal-window__dot terminal-window__dot--yellow" />
          <span className="terminal-window__dot terminal-window__dot--green" />
          <span className="terminal-window__bar-title">
            junior_nguetta@portfolio:~
          </span>
        </div>

        <div className="terminal-window__body">
          {lines.map((line, i) => (
            <div key={i} className={`terminal-line terminal-line--${line.type}`}>
              {line.type === "input" && (
                <span className="terminal-prompt">
                  <span className="terminal-prompt__user">junior@portfolio</span>
                  <span className="terminal-prompt__sep">:</span>
                  <span className="terminal-prompt__path">~</span>
                  <span className="terminal-prompt__dollar">$</span>
                </span>
              )}
              <span className="terminal-line__text">{line.content}</span>
            </div>
          ))}

          <div className="terminal-line terminal-line--input">
            <span className="terminal-prompt">
              <span className="terminal-prompt__user">junior@portfolio</span>
              <span className="terminal-prompt__sep">:</span>
              <span className="terminal-prompt__path">~</span>
              <span className="terminal-prompt__dollar">$</span>
            </span>

            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}