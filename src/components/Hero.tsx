import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { contact, typedRoles } from "../data/portfolio";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeRole = typedRoles[roleIndex];
  const typedRole = activeRole.slice(0, typedLength);

  useEffect(() => {
    const atFull = typedLength === activeRole.length;
    const atEmpty = typedLength === 0;
    const delay = atFull && !isDeleting ? 1200 : isDeleting ? 38 : 52;

    const timeout = window.setTimeout(() => {
      if (atFull && !isDeleting) {
        setIsDeleting(true);
        return;
      }
      if (atEmpty && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % typedRoles.length);
        return;
      }
      setTypedLength((l) => l + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeRole, isDeleting, typedLength]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Animated background blobs */}
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-blob-2" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-text" data-reveal>
          <p className="hero-greeting" aria-label="Greeting">
            Hello, I'm&nbsp;👋
          </p>

          <h1 className="hero-name">
            <span className="hero-name-grad">Akhil N</span>
            <span className="hero-name-plain">
              Muthyala<span className="accent-dot" aria-hidden="true">.</span>
            </span>
          </h1>

          <p className="hero-sub">Full Stack Angular &amp; .NET Developer</p>

          <p className="hero-bio">
            I build enterprise-grade web applications that are accessible,
            maintainable, and reliable under real-world conditions.
          </p>

          <p className="hero-typed" aria-label="Current focus">
            <span className="mono">{typedRole}</span>
            <i className="cursor" aria-hidden="true" />
          </p>

          <div className="hero-ctas">
            <a href="#work" className="btn-primary">
              <ArrowDown size={16} aria-hidden="true" />
              See My Work
            </a>
            <a
              href={contact.resumeHref}
              className="btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
            <a
              href={contact.github}
              className="btn-ghost"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="hero-companies" aria-label="Previous employers">
            <span>Worked at</span>
            {["Deloitte", "SITEK Inc", "EKU", "Dot Spiders"].map((c) => (
              <span key={c} className="company-tag">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrap" aria-hidden="true" data-reveal data-reveal-delay="2">
          <div className="hero-photo-ring" />
          <div className="hero-photo-card">
            <img
              src="/akhil-profile.png"
              alt="Akhil N Muthyala"
              width="380"
              height="380"
              loading="eager"
            />
            <div className="hero-photo-badge">
              <i className="status-dot" aria-hidden="true" />
              <span className="mono">Available for roles</span>
            </div>
          </div>
          <div className="hero-photo-deco" aria-hidden="true">
            <span className="mono">React · .NET · SQL</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <a href="#currently" className="hero-scroll-hint" aria-label="Scroll down">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
