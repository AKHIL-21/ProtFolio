import { Accessibility, Code2, Database, ServerCog, Workflow } from "lucide-react";
import { aboutParagraphs, profileStats, serviceCards, workflowNotes } from "../data/portfolio";

const SERVICE_ICONS = [
  <Workflow size={20} aria-hidden="true" />,
  <Code2 size={20} aria-hidden="true" />,
  <ServerCog size={20} aria-hidden="true" />,
  <Database size={20} aria-hidden="true" />
];

export function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="section-inner">
        <p className="section-label mono" data-reveal>
          // 01 — about
        </p>
        <h2 id="about-title" className="section-title" data-reveal data-reveal-delay="1">
          Full-stack engineering with a{" "}
          <em>modernization mindset.</em>
        </h2>

        <div className="about-layout">
          <div className="about-copy" data-reveal data-reveal-delay="2">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <blockquote className="about-quote">
              "I like systems that feel calm to use — clear forms, predictable
              validation, fast data retrieval, useful error states, and code
              another developer can maintain without guesswork."
            </blockquote>
          </div>

          <div className="about-photo" data-reveal data-reveal-delay="3" aria-hidden="true">
            <img
              src="/portfolio-command-center.png"
              alt="Developer workspace showing code and architecture panels"
              loading="lazy"
            />
            <div className="about-photo-caption">
              <Accessibility size={14} />
              <span className="mono">React / .NET / SQL / Section 508</span>
            </div>
          </div>
        </div>

        <div className="stats-row" aria-label="Professional highlights">
          {profileStats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-block card"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <strong className="stat-value">{stat.value}</strong>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="services-block">
          <h3 className="subsection-title" data-reveal>
            What I Do
          </h3>
          <div className="services-grid">
            {serviceCards.map((service, i) => (
              <article
                key={service.title}
                className="service-card card"
                data-reveal
                data-reveal-delay={String((i % 2) + 1)}
              >
                <span className="service-icon">{SERVICE_ICONS[i]}</span>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="workflow-strip" aria-label="Engineering principles" data-reveal>
          {workflowNotes.map((note, i) => (
            <div key={note} className="workflow-step">
              <span className="workflow-num mono">0{i + 1}</span>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
