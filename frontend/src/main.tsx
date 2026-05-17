import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      <div
        style={{
          color: "#00ff41",
          fontSize: "1.1rem",
          letterSpacing: "2px",
          marginBottom: "2rem",
        }}
      >
        <span style={{ opacity: 0.4 }}>~/</span>junior_nguetta
      </div>

      <div
        style={{
          width: "200px",
          height: "2px",
          background: "rgba(0,255,65,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#00ff41",
            animation: "loaderBar 1.5s ease-in-out forwards",
            boxShadow: "0 0 10px rgba(0,255,65,0.6)",
          }}
        />
      </div>

      <div
        style={{
          color: "rgba(0,255,65,0.4)",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          marginTop: "1rem",
        }}
      >
        INITIALISATION...
      </div>

      <style>{`
        @keyframes loaderBar {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Terminal />
        <Footer />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);