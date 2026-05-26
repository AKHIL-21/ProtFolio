import { useMemo, useState } from "react";
import {
  Accessibility,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  contact,
  education,
  experience,
  focusAreas,
  highlights,
  navItems,
  projectWork,
  stackGroups
} from "./data/portfolio";

const skillIcons: Record<string, JSX.Element> = {
  Frontend: <Code2 aria-hidden="true" />,
  Backend: <ServerCog aria-hidden="true" />,
  Data: <Database aria-hidden="true" />,
  Tools: <Workflow aria-hidden="true" />,
  Mobile: <Smartphone aria-hidden="true" />,
  Libraries: <Sparkles aria-hidden="true" />,
  "Accessibility & AI": <Accessibility aria-hidden="true" />
};

const filters = ["All", ...stackGroups.map((group) => group.label)];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleGroups = useMemo(() => {
    if (activeFilter === "All") {
      return stackGroups;
    }

    return stackGroups.filter((group) => group.label === activeFilter);
  }, [activeFilter]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Akhil N Muthyala home">
          <span className="brand-mark">AM</span>
          <span>{contact.name}</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{contact.location} / Available for software engineering roles</p>
            <h1 id="hero-title">{contact.role}</h1>
            <p className="hero-lede">
              I build responsive React interfaces and reliable .NET backends for complex,
              data-driven workflows. Recent work includes modernizing state child support
              systems, shipping surety bond management tools, and improving accessibility,
              performance, and release quality.
            </p>
            <div className="cta-row" aria-label="Contact and resume actions">
              <a className="btn primary" href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" />
                Email Akhil
              </a>
              <a className="btn secondary" href={contact.resumeHref}>
                <Download aria-hidden="true" />
                Resume
              </a>
            </div>
            <div className="contact-inline" aria-label="Contact details">
              <span>
                <MapPin aria-hidden="true" />
                {contact.location}
              </span>
              <a href={`tel:${contact.phone}`}>
                <Phone aria-hidden="true" />
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </div>

          <FlowVisual />
        </section>

        <section className="metric-strip" aria-label="Career highlights">
          {highlights.map((item) => (
            <div key={item.label} className="metric">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section section-pad" aria-labelledby="focus-title">
          <div className="section-heading compact">
            <p className="eyebrow">Engineering Focus</p>
            <h2 id="focus-title">Practical full-stack delivery</h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <div className="focus-item" key={area}>
                <ShieldCheck aria-hidden="true" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section section-alt section-pad" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2 id="work-title">Projects pulled from real delivery experience</h2>
            <p>
              A mix of enterprise modernization, product workflows, and full-stack learning systems
              built with React, TypeScript, ASP.NET Core, and SQL Server.
            </p>
          </div>
          <div className="project-grid">
            {projectWork.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta">
                  <span>{project.company}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="stack-list" aria-label={`${project.title} technology stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-pad" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Technical Stack</p>
            <h2 id="skills-title">React frontends, .NET services, and SQL-backed systems</h2>
            <p>
              The strongest pattern across the resumes is hands-on work across UI, APIs, databases,
              accessibility, and release tooling.
            </p>
          </div>
          <div className="filter-bar" role="tablist" aria-label="Skill filters">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                role="tab"
                type="button"
                aria-selected={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {visibleGroups.map((group) => (
              <article className="skill-card" key={group.label}>
                <div className="skill-heading">
                  {skillIcons[group.label]}
                  <h3>{group.label}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section section-alt section-pad"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">A timeline of building, mentoring, and shipping</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.organization}-${job.period}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <BriefcaseBusiness />
                </div>
                <div>
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.title}</h3>
                  <p className="timeline-org">
                    {job.organization} / {job.location}
                  </p>
                  <p>{job.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-pad" aria-labelledby="education-title">
          <div className="section-heading compact">
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Computer science foundation</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <GraduationCap aria-hidden="true" />
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.credential}</p>
                  <span>
                    {item.detail} / {item.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Build something dependable together</h2>
            <p>
              I am strongest where product-facing UI, enterprise backend logic, and database
              performance meet. Reach out for full-stack, frontend, or .NET software engineering
              opportunities.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              {contact.email}
            </a>
            <a className="btn secondary" href={`tel:${contact.phone}`}>
              <Phone aria-hidden="true" />
              {contact.phone}
            </a>
            <a className="text-link" href={contact.resumeHref}>
              Resume
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function FlowVisual() {
  const layers = [
    { label: "React UI", items: ["TypeScript", "Reusable forms", "Accessible states"] },
    { label: ".NET API", items: ["Razor Pages", "REST services", "Validation logic"] },
    { label: "SQL Server", items: ["Stored procedures", "Query tuning", "Reliable data"] }
  ];

  return (
    <aside className="flow-visual" aria-label="Full-stack delivery visual">
      <div className="visual-topline">
        <span>Modernization Pipeline</span>
        <span>Live stack</span>
      </div>
      <div className="flow-layers">
        {layers.map((layer, index) => (
          <div className="flow-layer" key={layer.label}>
            <div className="layer-count">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h3>{layer.label}</h3>
              {layer.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="signal-row" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="visual-footer">
        <span>WCAG</span>
        <span>CI/CD</span>
        <span>Azure DevOps</span>
      </div>
    </aside>
  );
}

export default App;
