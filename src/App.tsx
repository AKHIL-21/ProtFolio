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

const focusIcons = [
  <ShieldCheck aria-hidden="true" />,
  <Code2 aria-hidden="true" />,
  <Database aria-hidden="true" />,
  <Workflow aria-hidden="true" />,
  <Sparkles aria-hidden="true" />
];

const filters = ["All", ...stackGroups.map((group) => group.label)];

type Project = (typeof projectWork)[number];

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
          <div className="hero-profile">
            <div className="avatar-frame" aria-hidden="true">
              <span>AM</span>
            </div>
            <div>
              <span className="profile-kicker">Hey, I am</span>
              <strong>{contact.name}</strong>
              <small>{contact.location}</small>
            </div>
          </div>

          <p className="eyebrow">Portfolio / Software Engineering</p>
          <h1 id="hero-title">{contact.name}</h1>
          <p className="role-line">I am a Software Engineer |</p>
          <p className="hero-lede">
            I build accessible React interfaces, reliable .NET services, and SQL-backed
            workflows for teams modernizing complex enterprise systems.
          </p>

          <div className="cta-row" aria-label="Contact and resume actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              Email me
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

          <div className="orbit-panel" aria-hidden="true">
            <span className="orbit-glyph">{"<>"}</span>
            <span>React</span>
            <span>.NET</span>
            <span>SQL</span>
            <span>Azure</span>
          </div>
        </section>

        <section className="work-glow section-pad" aria-labelledby="focus-title">
          <div className="section-heading centered">
            <p className="eyebrow">Work Experience</p>
            <h2 id="focus-title">Practical full-stack delivery with a product mindset.</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <article className="highlight-card" key={item.label}>
                <div className="card-icon">{focusIcons[index % focusIcons.length]}</div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-pad" aria-labelledby="focus-list-title">
          <div className="focus-layout">
            <div className="section-heading">
              <p className="eyebrow">Build Focus</p>
              <h2 id="focus-list-title">What I bring into a delivery team.</h2>
            </div>
            <div className="focus-list">
              {focusAreas.map((area, index) => (
                <div className="focus-item" key={area}>
                  <div className="card-icon">{focusIcons[index % focusIcons.length]}</div>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section section-pad project-section" aria-labelledby="work-title">
          <div className="section-heading centered">
            <p className="eyebrow">Selected Work</p>
            <h2 id="work-title">Recent projects shaped around usable systems.</h2>
            <p>
              Enterprise modernization, product workflow tools, and full-stack learning systems
              built across React, TypeScript, ASP.NET Core, and SQL Server.
            </p>
          </div>

          <div className="project-stack">
            {projectWork.map((project, index) => (
              <article
                className={`project-feature ${index % 2 === 1 ? "reverse" : ""}`}
                key={project.title}
              >
                <ProjectPreview project={project} index={index} />
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.company}</span>
                    <span>{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul>
                    {project.impact.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="stack-list" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-pad" aria-labelledby="skills-title">
          <div className="section-heading centered">
            <p className="eyebrow">Technical Stack</p>
            <h2 id="skills-title">Tools I use to turn requirements into stable releases.</h2>
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
          className="section section-pad career-section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading centered">
            <p className="eyebrow">Career</p>
            <h2 id="experience-title">A timeline of building, mentoring, and shipping.</h2>
          </div>

          <div className="career-grid">
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

            <aside id="education" className="education-panel" aria-labelledby="education-title">
              <p className="eyebrow">Education</p>
              <h2 id="education-title">Computer science foundation.</h2>
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
            </aside>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="contact-glyph" aria-hidden="true">
            AM
          </div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Build something dependable together.</h2>
          <p>
            I am strongest where product-facing UI, enterprise backend logic, and database
            performance meet. Reach out for full-stack, frontend, or .NET software engineering
            opportunities.
          </p>
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

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  const rows = project.stack.slice(0, 4);

  return (
    <div className="project-preview" aria-hidden="true">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-title">
        <small>Project 0{index + 1}</small>
        <strong>{project.company}</strong>
      </div>
      <div className="preview-chart">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="preview-table">
        {rows.map((row) => (
          <div key={row}>
            <span>{row}</span>
            <i />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
