import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  Accessibility,
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  contact,
  deliveryPillars,
  education,
  experience,
  focusAreas,
  highlights,
  navItems,
  projectWork,
  stackGroups,
  typedRoles
} from "./data/portfolio";

const skillIcons: Record<string, JSX.Element> = {
  Frontend: <Code2 aria-hidden="true" />,
  Backend: <ServerCog aria-hidden="true" />,
  Data: <Database aria-hidden="true" />,
  Tools: <Workflow aria-hidden="true" />,
  Mobile: <Layers3 aria-hidden="true" />,
  Libraries: <Sparkles aria-hidden="true" />,
  "Accessibility & AI": <Accessibility aria-hidden="true" />
};

const focusIcons = [
  <ShieldCheck aria-hidden="true" />,
  <Code2 aria-hidden="true" />,
  <Database aria-hidden="true" />,
  <Workflow aria-hidden="true" />,
  <BadgeCheck aria-hidden="true" />
];

const filters = ["All", ...stackGroups.map((group) => group.label)];

type Project = (typeof projectWork)[number];
type TiltStyle = CSSProperties & {
  "--tilt-x": string;
  "--tilt-y": string;
};

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroTilt, setHeroTilt] = useState<TiltStyle>({
    "--tilt-x": "0deg",
    "--tilt-y": "0deg"
  });

  const activeProject = projectWork[activeProjectIndex];
  const activeRole = typedRoles[roleIndex];
  const typedRole = activeRole.slice(0, typedLength);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight <= 0 ? 0 : window.scrollY / scrollableHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const atFullText = typedLength === activeRole.length;
    const atEmptyText = typedLength === 0;
    const delay = atFullText && !isDeleting ? 1200 : isDeleting ? 34 : 58;

    const timeout = window.setTimeout(() => {
      if (atFullText && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (atEmptyText && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % typedRoles.length);
        return;
      }

      setTypedLength((length) => length + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeRole, isDeleting, typedLength]);

  const visibleGroups = useMemo(() => {
    if (activeFilter === "All") {
      return stackGroups;
    }

    return stackGroups.filter((group) => group.label === activeFilter);
  }, [activeFilter]);

  const handleHeroPointer = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setHeroTilt({
      "--tilt-x": `${(-y * 8).toFixed(2)}deg`,
      "--tilt-y": `${(x * 10).toFixed(2)}deg`
    });
  };

  const resetHeroTilt = () => {
    setHeroTilt({ "--tilt-x": "0deg", "--tilt-y": "0deg" });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Akhil N Muthyala home">
          <span className="brand-mark">AM</span>
          <span>{contact.name}</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.href.slice(1) ? "active" : undefined}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hello">Full-stack software engineer</p>
            <h1 id="hero-title">
              Designing dependable systems for complex product teams.
            </h1>
            <p className="type-line">
              I am a <span>{typedRole}</span>
              <i aria-hidden="true" />
            </p>
            <p className="hero-lede">
              I build accessible React interfaces, dependable .NET services, and SQL-backed
              enterprise workflows for teams modernizing high-stakes products.
            </p>

            <div className="hero-status" aria-label="Current focus">
              <span>Now</span>
              <strong>Deloitte modernization</strong>
              <span>React / .NET / SQL / 508</span>
            </div>

            <div className="cta-row" aria-label="Contact and resume actions">
              <a className="btn primary" href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" />
                Email me
              </a>
              <a className="btn secondary" href={contact.resumeHref}>
                <Download aria-hidden="true" />
                Download CV
              </a>
              <a className="icon-link" href="#about" aria-label="Go to about section">
                <ArrowDown aria-hidden="true" />
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

          <div
            className="hero-stage"
            onPointerLeave={resetHeroTilt}
            onPointerMove={handleHeroPointer}
            style={heroTilt}
          >
            <div className="stage-grid" aria-hidden="true" />
            <div className="hero-image-wrap">
              <img
                src="/developer-workspace.png"
                alt="Dark developer workstation with code, database, cloud, and accessibility panels"
              />
            </div>
            <div className="stage-panel stage-panel-top">
              <Cpu aria-hidden="true" />
              <div>
                <span>System focus</span>
                <strong>Modernization</strong>
              </div>
            </div>
            <div className="stage-panel stage-panel-right">
              <Accessibility aria-hidden="true" />
              <div>
                <span>A11y checks</span>
                <strong>508 ready</strong>
              </div>
            </div>
            <div className="stage-panel stage-panel-bottom">
              <Database aria-hidden="true" />
              <div>
                <span>Data layer</span>
                <strong>SQL tuned</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip section-pad" aria-label="Professional highlights">
          <div className="proof-grid">
            {highlights.map((item, index) => (
              <article className="proof-card interactive-card" key={item.label}>
                <div className="card-icon">{focusIcons[index % focusIcons.length]}</div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section section-pad about-section" aria-labelledby="about-title">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">About Me</p>
              <h2 id="about-title">A practical engineer for polished, reliable web systems.</h2>
            </div>
            <p>
              My work is strongest where product-facing UI, backend business logic, database
              performance, and accessibility need to land together.
            </p>
          </div>

          <div className="about-layout">
            <aside className="profile-card interactive-card" aria-label="Akhil profile">
              <img
                src="/akhil-profile.png"
                alt="Akhil N Muthyala smiling in a light blazer"
              />
              <div className="profile-caption">
                <strong>{contact.name}</strong>
                <span>{contact.role}</span>
              </div>
            </aside>

            <div className="about-copy">
              <p>
                I am a full-stack software engineer focused on enterprise modernization,
                accessibility-minded delivery, and maintainable systems that make complex workflows
                feel usable.
              </p>
              <p>
                Recently, I have been modernizing legacy child-support workflows with ASP.NET Core,
                Razor Pages, JavaScript, SQL Server, Azure DevOps, NVDA, JAWS, and Section 508
                validation.
              </p>
            </div>

            <div className="focus-list">
              {focusAreas.map((area, index) => (
                <article className="focus-item interactive-card" key={area}>
                  <div className="card-icon">{focusIcons[index % focusIcons.length]}</div>
                  <span>{area}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section-pad process-section" aria-labelledby="process-title">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Delivery System</p>
              <h2 id="process-title">A professional structure from intake to release.</h2>
            </div>
            <p>
              The portfolio is built around how I actually work: clarify the workflow, design the
              interface, stabilize the backend, and ship with evidence.
            </p>
          </div>

          <div className="process-grid">
            {deliveryPillars.map((pillar, index) => (
              <article className="process-card interactive-card" key={pillar.title}>
                <span className="step-index">{pillar.kicker}</span>
                <div className="card-icon">{focusIcons[index % focusIcons.length]}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-pad skill-section" aria-labelledby="skills-title">
          <div className="section-heading centered">
            <p className="eyebrow">Professional Skillset</p>
            <h2 id="skills-title">A focused stack for stable web application delivery.</h2>
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
              <article className="skill-card interactive-card" key={group.label}>
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

        <section id="projects" className="section section-pad project-section" aria-labelledby="projects-title">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 id="projects-title">Case studies with real delivery constraints.</h2>
            </div>
            <p>
              Choose a project to review the scope, delivery impact, and stack behind each system.
            </p>
          </div>

          <div className="case-study-shell">
            <div className="case-tabs" role="tablist" aria-label="Project case studies">
              {projectWork.map((project, index) => (
                <button
                  className={activeProjectIndex === index ? "active" : ""}
                  key={project.title}
                  onClick={() => setActiveProjectIndex(index)}
                  role="tab"
                  type="button"
                  aria-controls="active-project-panel"
                  aria-selected={activeProjectIndex === index}
                >
                  <span>0{index + 1}</span>
                  <strong>{project.company}</strong>
                  <small>{project.title}</small>
                </button>
              ))}
            </div>

            <article className="case-panel" id="active-project-panel" role="tabpanel">
              <ProjectPreview project={activeProject} index={activeProjectIndex} />
              <div className="case-copy">
                <div className="project-meta">
                  <span>{activeProject.company}</span>
                  <span>{activeProject.period}</span>
                </div>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.summary}</p>
                <div className="impact-grid">
                  {activeProject.impact.slice(0, 3).map((item) => (
                    <div key={item}>
                      <Check aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="stack-list" aria-label={`${activeProject.title} technology stack`}>
                  {activeProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
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
                <article className="timeline-item interactive-card" key={`${job.organization}-${job.period}`}>
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
                  <article className="education-card interactive-card" key={item.school}>
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

        <section id="resume" className="section section-pad resume-section" aria-labelledby="resume-title">
          <div className="section-heading centered">
            <p className="eyebrow">Resume</p>
            <h2 id="resume-title">A refined snapshot for hiring teams.</h2>
            <p>Download the PDF or open it in the browser for the full version.</p>
          </div>

          <div className="resume-panel interactive-card">
            <div className="resume-preview" aria-hidden="true">
              <FileText />
              <span>PDF</span>
            </div>
            <div className="resume-copy">
              <h3>{contact.name}</h3>
              <p>{contact.role}</p>
              <div className="contact-actions">
                <a className="btn primary" href={contact.resumeHref}>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
                <a className="btn secondary" href={contact.resumeHref} target="_blank" rel="noreferrer">
                  <ArrowUpRight aria-hidden="true" />
                  Open PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="contact-glyph" aria-hidden="true">
            AM
          </div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Build something dependable together.</h2>
          <p>
            I am open to full-stack, frontend, and .NET software engineering opportunities where
            product quality, accessibility, and backend reliability matter.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              {contact.email}
            </a>
            <button className="btn secondary" type="button" onClick={handleCopyEmail}>
              {copiedEmail ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copiedEmail ? "Copied" : "Copy email"}
            </button>
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
        <small>Case Study 0{index + 1}</small>
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
