import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { projectWork } from "../data/portfolio";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(projectWork.map((p) => p.category)))];

export function Work() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projectWork : projectWork.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="section-inner">
        <p className="section-label mono" data-reveal>
          // 02 — work
        </p>
        <h2 id="work-title" className="section-title" data-reveal data-reveal-delay="1">
          Project work shaped by{" "}
          <em>real workflows.</em>
        </h2>
        <p className="section-sub" data-reveal data-reveal-delay="2">
          Selected case studies from enterprise modernization, full-stack delivery, academic
          support, and React/.NET application development.
        </p>

        <div
          className="filter-bar"
          role="tablist"
          aria-label="Filter projects by category"
          data-reveal
          data-reveal-delay="2"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`filter-btn mono${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-list">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="project-card card"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <div className="project-num mono" aria-hidden="true">
                0{projectWork.indexOf(project) + 1}
              </div>

              <div className="project-body">
                <div className="project-top">
                  <div className="project-badges">
                    <span className="category-badge mono">{project.category}</span>
                    <span className="period-badge mono">{project.period}</span>
                  </div>
                  <p className="project-company">{project.company}</p>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="impact-list" aria-label="Key outcomes">
                  {project.impact.slice(0, 3).map((item) => (
                    <li key={item}>
                      <Check size={14} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
