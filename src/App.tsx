import { type CSSProperties, type ReactNode, useEffect, useMemo, useState } from "react";
import {
  Accessibility,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Database,
  Download,
  FileText,
  GraduationCap,
  Github,
  Layers3,
  Mail,
  MapPin,
  Moon,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow
} from "lucide-react";
import {
  aboutParagraphs,
  certifications,
  contact,
  education,
  experience,
  githubProfile,
  navItems,
  profileStats,
  projectWork,
  serviceCards,
  stackGroups,
  typedRoles,
  workflowNotes
} from "./data/portfolio";

const sectionIcons: Record<string, ReactNode> = {
  about: <Sparkles aria-hidden="true" />,
  resume: <FileText aria-hidden="true" />,
  work: <BriefcaseBusiness aria-hidden="true" />,
  skills: <Code2 aria-hidden="true" />,
  contact: <Mail aria-hidden="true" />
};

const serviceIcons = [
  <Workflow aria-hidden="true" />,
  <Layers3 aria-hidden="true" />,
  <ServerCog aria-hidden="true" />,
  <Database aria-hidden="true" />
];

const skillIcons: Record<string, ReactNode> = {
  Frontend: <Code2 aria-hidden="true" />,
  Backend: <ServerCog aria-hidden="true" />,
  Data: <Database aria-hidden="true" />,
  Delivery: <Workflow aria-hidden="true" />,
  Libraries: <Sparkles aria-hidden="true" />,
  "Accessibility & AI": <Accessibility aria-hidden="true" />
};

const projectCategories = [
  "All",
  ...Array.from(new Set(projectWork.map((project) => project.category)))
];

type Theme = "dark" | "light";
type SkillLogoStyle = CSSProperties & { "--skill-color": string };

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillLogos: Record<string, { src?: string; initials: string; color: string }> = {
  "React.js": { src: `${deviconBase}/react/react-original.svg`, initials: "Re", color: "#61dafb" },
  TypeScript: { src: `${deviconBase}/typescript/typescript-original.svg`, initials: "TS", color: "#3178c6" },
  JavaScript: { src: `${deviconBase}/javascript/javascript-original.svg`, initials: "JS", color: "#f7df1e" },
  HTML5: { src: `${deviconBase}/html5/html5-original.svg`, initials: "H5", color: "#e34f26" },
  CSS3: { src: `${deviconBase}/css3/css3-original.svg`, initials: "C3", color: "#1572b6" },
  Bootstrap: { src: `${deviconBase}/bootstrap/bootstrap-original.svg`, initials: "Bs", color: "#7952b3" },
  jQuery: { src: `${deviconBase}/jquery/jquery-original.svg`, initials: "jQ", color: "#0769ad" },
  Angular: { src: `${deviconBase}/angularjs/angularjs-original.svg`, initials: "Ng", color: "#dd0031" },
  "C#": { src: `${deviconBase}/csharp/csharp-original.svg`, initials: "C#", color: "#9b4fca" },
  ".NET": { src: `${deviconBase}/dotnetcore/dotnetcore-original.svg`, initials: ".N", color: "#512bd4" },
  "ASP.NET Core": { src: `${deviconBase}/dotnetcore/dotnetcore-original.svg`, initials: "AS", color: "#512bd4" },
  "ASP.NET MVC": { src: `${deviconBase}/dotnetcore/dotnetcore-original.svg`, initials: "MV", color: "#512bd4" },
  "Razor Pages": { src: `${deviconBase}/dot-net/dot-net-original.svg`, initials: "Rz", color: "#512bd4" },
  "Node.js": { src: `${deviconBase}/nodejs/nodejs-original.svg`, initials: "Nd", color: "#5fa04e" },
  "SQL Server": { src: `${deviconBase}/microsoftsqlserver/microsoftsqlserver-original.svg`, initials: "SQL", color: "#cc2927" },
  SQLite: { src: `${deviconBase}/sqlite/sqlite-original.svg`, initials: "Lite", color: "#003b57" },
  SQL: { src: `${deviconBase}/azuresqldatabase/azuresqldatabase-original.svg`, initials: "SQL", color: "#0078d4" },
  "Entity Framework Core": { src: `${deviconBase}/dotnetcore/dotnetcore-original.svg`, initials: "EF", color: "#512bd4" },
  "Azure DevOps": { src: `${deviconBase}/azuredevops/azuredevops-original.svg`, initials: "Az", color: "#0078d7" },
  Git: { src: `${deviconBase}/git/git-original.svg`, initials: "Git", color: "#f05032" },
  GitHub: { src: `${deviconBase}/github/github-original.svg`, initials: "GH", color: "#181717" },
  Jira: { src: `${deviconBase}/jira/jira-original.svg`, initials: "Jr", color: "#0052cc" },
  "Visual Studio": { src: `${deviconBase}/visualstudio/visualstudio-original.svg`, initials: "VS", color: "#5c2d91" },
  "VS Code": { src: `${deviconBase}/vscode/vscode-original.svg`, initials: "VC", color: "#007acc" },
  "React Query": { src: `${deviconBase}/react/react-original.svg`, initials: "RQ", color: "#ff4154" },
  MobX: { src: `${deviconBase}/mobx/mobx-original.svg`, initials: "Mx", color: "#ff9955" },
  Axios: { src: `${deviconBase}/axios/axios-plain.svg`, initials: "Ax", color: "#5a29e4" },
  JWT: { initials: "JWT", color: "#fb015b" },
  "Material UI": { src: `${deviconBase}/materialui/materialui-original.svg`, initials: "MUI", color: "#007fff" },
  JAWS: { initials: "JA", color: "#2457e6" },
  NVDA: { initials: "NV", color: "#0284a8" },
  WCAG: { initials: "W3", color: "#005a9c" },
  "Section 508": { initials: "508", color: "#079669" },
  "AI-Assisted Code Review": { initials: "AI", color: "#8b5cf6" },
  "Claude Code": { initials: "CC", color: "#d97706" },
  "Prompt-Driven Development": { initials: "Pr", color: "#e34b6d" }
};

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === "undefined") {
      return "about";
    }

    const hash = window.location.hash.replace("#", "");
    return navItems.some((item) => item.id === hash) ? hash : "about";
  });
  const [showSidebarDetails, setShowSidebarDetails] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  const activeRole = typedRoles[roleIndex];
  const typedRole = activeRole.slice(0, typedLength);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", theme === "dark" ? "#060a16" : "#eef4ff");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const syncSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (navItems.some((item) => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", syncSectionFromHash);

    return () => window.removeEventListener("hashchange", syncSectionFromHash);
  }, []);

  useEffect(() => {
    const atFullText = typedLength === activeRole.length;
    const atEmptyText = typedLength === 0;
    const delay = atFullText && !isDeleting ? 1150 : isDeleting ? 36 : 54;

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

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="ambient-grid" aria-hidden="true" />
      <div className="portfolio-frame">
        <Sidebar
          copiedEmail={copiedEmail}
          onCopyEmail={handleCopyEmail}
          showDetails={showSidebarDetails}
          typedRole={typedRole}
          onToggleDetails={() => setShowSidebarDetails((value) => !value)}
        />

        <main className="content-card">
          <button
            className="theme-toggle"
            onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span>{theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</span>
            <strong>{theme === "dark" ? "Light" : "Dark"}</strong>
          </button>

          <nav className="tabbar" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <button
                className={activeSection === item.id ? "active" : ""}
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                type="button"
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {sectionIcons[item.id]}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="panel-content">
            {activeSection === "about" && <AboutPanel />}
            {activeSection === "resume" && <ResumePanel />}
            {activeSection === "work" && <WorkPanel />}
            {activeSection === "skills" && <SkillsPanel />}
            {activeSection === "contact" && (
              <ContactPanel copiedEmail={copiedEmail} onCopyEmail={handleCopyEmail} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({
  copiedEmail,
  onCopyEmail,
  onToggleDetails,
  showDetails,
  typedRole
}: {
  copiedEmail: boolean;
  onCopyEmail: () => void;
  onToggleDetails: () => void;
  showDetails: boolean;
  typedRole: string;
}) {
  return (
    <aside className="sidebar-card" aria-label="Profile summary">
      <button
        className="details-toggle"
        onClick={onToggleDetails}
        type="button"
        aria-expanded={showDetails}
      >
        <span>{showDetails ? "Hide Contacts" : "Show Contacts"}</span>
        <ChevronDown aria-hidden="true" />
      </button>

      <div className="avatar-frame">
        <img src="/akhil-profile.png" alt="Akhil N Muthyala" />
      </div>

      <div className="identity">
        <p className="eyebrow">Portfolio</p>
        <h1>{contact.name}</h1>
        <p className="role-pill">{contact.role}</p>
        <p className="typed-role" aria-label="Current professional focus">
          <span>{typedRole}</span>
          <i aria-hidden="true" />
        </p>
      </div>

      <div className={`sidebar-details ${showDetails ? "open" : ""}`}>
        <div className="contact-list">
          <ContactItem
            icon={<Mail aria-hidden="true" />}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactItem
            icon={<Github aria-hidden="true" />}
            label="GitHub"
            value={contact.githubLabel}
            href={contact.github}
          />
          <ContactItem
            icon={<Phone aria-hidden="true" />}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phoneHref}`}
          />
          <ContactItem
            icon={<MapPin aria-hidden="true" />}
            label="Location"
            value={contact.location}
          />
          <ContactItem
            icon={<CalendarDays aria-hidden="true" />}
            label="Availability"
            value="Open to full-stack and .NET roles"
          />
        </div>

        <div className="sidebar-actions">
          <a className="action-button primary" href={contact.resumeHref}>
            <Download aria-hidden="true" />
            Resume
          </a>
          <button className="action-button ghost" onClick={onCopyEmail} type="button">
            {copiedEmail ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copiedEmail ? "Copied" : "Copy Email"}
          </button>
        </div>
      </div>
    </aside>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value
}: {
  href?: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="contact-item" href={href}>
        {content}
      </a>
    );
  }

  return <div className="contact-item">{content}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </header>
  );
}

function AboutPanel() {
  return (
    <section className="panel-section" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="About Me"
        title="Full-stack engineering with a modernization mindset."
      >
        I combine clean interface work, backend delivery, database tuning, accessibility, and
        release support so business-critical systems feel easier to use and maintain.
      </SectionHeading>

      <div className="about-grid">
        <div className="about-copy">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="workspace-card">
          <img
            src="/portfolio-command-center.png"
            alt="Full-stack software engineering command center with code, database, cloud, and security panels"
          />
          <div className="signal-node node-code" aria-hidden="true">
            <Code2 />
          </div>
          <div className="signal-node node-data" aria-hidden="true">
            <Database />
          </div>
          <div className="signal-node node-a11y" aria-hidden="true">
            <Accessibility />
          </div>
          <div className="workspace-caption">
            <ShieldCheck aria-hidden="true" />
            <span>React / .NET / SQL / Accessibility</span>
          </div>
        </div>
      </div>

      <div className="stats-grid" aria-label="Professional highlights">
        {profileStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="section-subhead">
        <h3>What I Do</h3>
        <p>Practical strengths shaped by real projects, releases, and production-like defects.</p>
      </div>

      <div className="service-grid">
        {serviceCards.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span className="card-icon">{serviceIcons[index]}</span>
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="workflow-strip" aria-label="Workflow notes">
        {workflowNotes.map((note, index) => (
          <div key={note}>
            <span>0{index + 1}</span>
            <strong>{note}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumePanel() {
  return (
    <section className="panel-section" aria-labelledby="resume-title">
      <SectionHeading eyebrow="Resume" title="Experience built around reliable delivery.">
        A resume-backed timeline covering enterprise modernization, full-stack development,
        teaching support, certifications, and computer science education.
      </SectionHeading>

      <div className="resume-actions">
        <a className="action-button primary" href={contact.resumeHref}>
          <Download aria-hidden="true" />
          Download Resume
        </a>
        <a className="action-button ghost" href={contact.resumeHref} target="_blank" rel="noreferrer">
          <ArrowUpRight aria-hidden="true" />
          Open Resume
        </a>
      </div>

      <div className="resume-layout">
        <div className="timeline-column">
          <div className="section-subhead compact">
            <h3>Experience</h3>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.organization}-${job.period}`}>
                <span className="timeline-node" aria-hidden="true">
                  <BriefcaseBusiness />
                </span>
                <div>
                  <p className="period">{job.period}</p>
                  <h4>{job.title}</h4>
                  <p className="organization">
                    {job.organization} / {job.location}
                  </p>
                  <p>{job.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="resume-side">
          <div className="section-subhead compact">
            <h3>Education</h3>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <GraduationCap aria-hidden="true" />
                <div>
                  <h4>{item.school}</h4>
                  <p>{item.credential}</p>
                  <span>
                    {item.detail} / {item.location}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="section-subhead compact cert-heading">
            <h3>Certifications</h3>
          </div>
          <div className="cert-list">
            {certifications.map((certificate) => (
              <article className="cert-card" key={certificate.title}>
                <BadgeCheck aria-hidden="true" />
                <div>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function WorkPanel() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectWork;
    }

    return projectWork.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="panel-section" aria-labelledby="work-title">
      <SectionHeading eyebrow="Portfolio" title="Project work shaped by real workflows.">
        Selected case studies from enterprise modernization, full-stack product delivery, academic
        support, and React/.NET application development.
      </SectionHeading>

      <GithubContributionPanel />

      <div className="filter-bar" role="tablist" aria-label="Project categories">
        {projectCategories.map((category) => (
          <button
            className={activeCategory === category ? "active" : ""}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual" aria-hidden="true">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <strong>0{index + 1}</strong>
              <div className="mock-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-company">{project.company}</p>
              <p>{project.summary}</p>
              <ul className="impact-list">
                {project.impact.slice(0, 3).map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GithubContributionPanel() {
  const maxLanguageCount = Math.max(...githubProfile.languageStats.map((item) => item.value));
  const contributionCells = Array.from({ length: 98 }, (_, index) => {
    if (index % 17 === 0 || index % 23 === 0) {
      return 4;
    }

    if (index % 7 === 0 || index % 11 === 0) {
      return 3;
    }

    if (index % 5 === 0 || index % 13 === 0) {
      return 2;
    }

    if (index % 3 === 0) {
      return 1;
    }

    return 0;
  });

  return (
    <section className="github-panel" aria-labelledby="github-title">
      <div className="github-heading">
        <span className="card-icon">
          <Github aria-hidden="true" />
        </span>
        <div>
          <p className="eyebrow">GitHub Activity</p>
          <h3 id="github-title">Open-source footprint and contribution graph.</h3>
          <p>
            Public GitHub work across TypeScript, C#, Java, React, .NET, and portfolio projects.
          </p>
        </div>
        <a className="action-button ghost" href={githubProfile.url} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
          View Profile
        </a>
      </div>

      <div className="github-content">
        <div className="github-stat-grid" aria-label="GitHub profile statistics">
          <article>
            <strong>{githubProfile.publicRepos}</strong>
            <span>public repositories</span>
          </article>
          <article>
            <strong>{githubProfile.joined}</strong>
            <span>profile created</span>
          </article>
          <article>
            <strong>{githubProfile.lastUpdated}</strong>
            <span>latest public update</span>
          </article>
        </div>

        <div className="github-graph-card" aria-label={`Contribution-style activity grid for ${githubProfile.username}`}>
          <div className="github-graph-title">
            <Github aria-hidden="true" />
            <div>
              <strong>@{githubProfile.username}</strong>
              <span>Contribution activity snapshot</span>
            </div>
          </div>
          <div className="contribution-grid" aria-hidden="true">
            {contributionCells.map((level, index) => (
              <span data-level={level} key={`${level}-${index}`} />
            ))}
          </div>
          <div className="contribution-legend" aria-hidden="true">
            <span>Less</span>
            <i data-level="0" />
            <i data-level="1" />
            <i data-level="2" />
            <i data-level="3" />
            <i data-level="4" />
            <span>More</span>
          </div>
        </div>

        <div className="language-panel">
          <h4>Repository Languages</h4>
          <div className="language-list">
            {githubProfile.languageStats.map((language) => (
              <div className="language-row" key={language.label}>
                <span>{language.label}</span>
                <div aria-hidden="true">
                  <i style={{ width: `${(language.value / maxLanguageCount) * 100}%` }} />
                </div>
                <strong>{language.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="github-repo-list">
          {githubProfile.featuredRepos.map((repo) => (
            <article className="github-repo-card" key={repo.name}>
              <div>
                <h4>{repo.name}</h4>
                <p>
                  {repo.language} / Updated {repo.updated}
                </p>
              </div>
              <div className="repo-actions">
                <a href={repo.url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}>
                  <Github aria-hidden="true" />
                </a>
                {repo.homepage ? (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live site for ${repo.name}`}
                  >
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsPanel() {
  return (
    <section className="panel-section" aria-labelledby="skills-title">
      <SectionHeading eyebrow="Skills" title="A practical stack for web application delivery.">
        Tools and technologies from the resume, grouped by how they show up in real work.
      </SectionHeading>

      <div className="skills-grid">
        {stackGroups.map((group) => (
          <article className="skill-card" key={group.label}>
            <div className="skill-head">
              <span className="card-icon">{skillIcons[group.label]}</span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.summary}</p>
              </div>
            </div>
            <div className="skill-rail" aria-hidden="true">
              <span />
            </div>
            <div className="tag-list">
              {group.items.map((item) => (
                <SkillBadge item={item} key={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillBadge({ item }: { item: string }) {
  const logo = skillLogos[item] ?? {
    initials: item
      .split(/[\s./&-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase(),
    color: "#4f8cff"
  };

  return (
    <span className="skill-token">
      <span
        className={`skill-logo-badge ${logo.src ? "has-image" : ""}`}
        style={{ "--skill-color": logo.color } as SkillLogoStyle}
        aria-hidden="true"
      >
        {logo.src ? (
          <img
            src={logo.src}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement?.classList.add("logo-error");
            }}
          />
        ) : null}
        <b>{logo.initials}</b>
      </span>
      <span>{item}</span>
    </span>
  );
}

function ContactPanel({
  copiedEmail,
  onCopyEmail
}: {
  copiedEmail: boolean;
  onCopyEmail: () => void;
}) {
  return (
    <section className="panel-section contact-panel" aria-labelledby="contact-title">
      <SectionHeading eyebrow="Contact" title="Ready to build dependable software.">
        I am open to full-stack, frontend, and .NET software engineering opportunities where
        product quality, accessibility, and backend reliability matter.
      </SectionHeading>

      <div className="contact-hero">
        <div className="contact-monogram" aria-hidden="true">
          AM
        </div>
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.role}</p>
        </div>
      </div>

      <div className="contact-methods">
        <ContactMethod
          icon={<Mail aria-hidden="true" />}
          title="Email"
          value={contact.email}
          href={`mailto:${contact.email}`}
        />
        <ContactMethod
          icon={<Github aria-hidden="true" />}
          title="GitHub"
          value={contact.githubLabel}
          href={contact.github}
        />
        <ContactMethod
          icon={<Phone aria-hidden="true" />}
          title="Phone"
          value={contact.phone}
          href={`tel:${contact.phoneHref}`}
        />
        <ContactMethod
          icon={<MapPin aria-hidden="true" />}
          title="Location"
          value={contact.location}
        />
      </div>

      <div className="contact-actions-main">
        <a className="action-button primary" href={`mailto:${contact.email}`}>
          <Mail aria-hidden="true" />
          Email Me
        </a>
        <a className="action-button ghost" href={contact.github} target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
          GitHub
        </a>
        <button className="action-button ghost" type="button" onClick={onCopyEmail}>
          {copiedEmail ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copiedEmail ? "Copied" : "Copy Email"}
        </button>
        <a className="action-button ghost" href={contact.resumeHref}>
          <Download aria-hidden="true" />
          Resume
        </a>
      </div>
    </section>
  );
}

function ContactMethod({
  href,
  icon,
  title,
  value
}: {
  href?: string;
  icon: ReactNode;
  title: string;
  value: string;
}) {
  const content = (
    <>
      <span className="card-icon">{icon}</span>
      <span>
        <small>{title}</small>
        <strong>{value}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="contact-method" href={href}>
        {content}
      </a>
    );
  }

  return <div className="contact-method">{content}</div>;
}

export default App;
