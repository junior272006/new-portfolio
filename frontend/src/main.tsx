import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
function App() {
  useEffect(() => {
    
    window.scrollTo(0, 0);

    
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <>
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
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);