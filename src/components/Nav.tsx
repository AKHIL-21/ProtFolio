import { FileText, Layers, Mail, Moon, Sparkles, Sun, User } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About", Icon: User },
  { href: "#work", label: "Work", Icon: Layers },
  { href: "#skills", label: "Skills", Icon: Sparkles },
  { href: "#resume", label: "Resume", Icon: FileText },
  { href: "#contact", label: "Contact", Icon: Mail }
];

export function Nav({
  activeSection,
  theme,
  onThemeToggle
}: {
  activeSection: string;
  theme: "dark" | "light";
  onThemeToggle: () => void;
}) {
  return (
    <>
      <header className="nav" role="banner">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" aria-label="Back to top">
            AM
          </a>

          <nav aria-label="Main navigation" className="nav-desktop">
            <ul className="nav-links" role="list">
              {NAV_LINKS.map(({ href, label }) => {
                const id = href.slice(1);
                return (
                  <li key={id}>
                    <a
                      href={href}
                      className={activeSection === id ? "active" : ""}
                      aria-current={activeSection === id ? "page" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav-right">
            <span className="availability-pill" aria-label="Open to work">
              <i aria-hidden="true" />
              Open to work
            </span>
            <button
              className="theme-btn"
              onClick={onThemeToggle}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {NAV_LINKS.map(({ href, label, Icon }) => {
          const id = href.slice(1);
          return (
            <a
              key={id}
              href={href}
              className={`mobile-nav-item${activeSection === id ? " active" : ""}`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
