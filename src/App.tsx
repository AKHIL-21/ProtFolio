import { useMemo, useRef, useEffect, useState } from "react";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Currently } from "./components/Currently";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";

const SECTION_IDS = ["hero", "currently", "about", "work", "skills", "resume", "contact"];

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const sectionIds = useMemo(() => SECTION_IDS, []);
  const activeSection = useActiveSection(sectionIds);
  const glowRef = useRef<HTMLDivElement>(null);

  useScrollReveal();

  // Cursor glow — follow mouse with smooth lag
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", next === "dark" ? "#0d0d0f" : "#f8f5ff");
      window.localStorage.setItem("portfolio-theme", next);
      return next;
    });
  };

  // Apply theme on first render
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = theme;
  }

  return (
    <div className="site">
      {/* Cursor glow — hidden on touch devices via CSS */}
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      <Nav activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Currently />
        <About />
        <Work />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
