import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Download, GraduationCap } from "lucide-react";
import { certifications, contact, education, experience } from "../data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="resume section" aria-labelledby="resume-title">
      <div className="section-inner">
        <p className="section-label mono" data-reveal>
          // 04 — resume
        </p>
        <h2 id="resume-title" className="section-title" data-reveal data-reveal-delay="1">
          Experience built around{" "}
          <em>reliable delivery.</em>
        </h2>

        <div className="resume-actions" data-reveal data-reveal-delay="2">
          <a href={contact.resumeHref} className="btn-primary">
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
          <a href={contact.resumeHref} target="_blank" rel="noreferrer" className="btn-ghost">
            <ArrowUpRight size={16} aria-hidden="true" />
            Open Resume
          </a>
        </div>

        <div className="resume-layout">
          <div className="timeline-col">
            <h3 className="resume-col-title" data-reveal>
              Experience
            </h3>
            <ol className="timeline" aria-label="Work experience">
              {experience.map((job, i) => (
                <li
                  key={`${job.organization}-${job.period}`}
                  className="timeline-entry card"
                  data-reveal
                  data-reveal-delay={String((i % 2) + 1)}
                >
                  <div className="timeline-node" aria-hidden="true">
                    <BriefcaseBusiness size={16} />
                  </div>
                  <div className="timeline-body">
                    <span className="timeline-period mono">{job.period}</span>
                    <h4>{job.title}</h4>
                    <p className="timeline-org">
                      {job.organization} · {job.location}
                    </p>
                    <p>{job.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="resume-side">
            <h3 className="resume-col-title" data-reveal>
              Education
            </h3>
            <div className="edu-list">
              {education.map((item, i) => (
                <article
                  key={item.school}
                  className="edu-card card"
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                >
                  <GraduationCap size={20} aria-hidden="true" className="edu-icon" />
                  <div>
                    <h4>{item.school}</h4>
                    <p>{item.credential}</p>
                    <span className="edu-detail mono">
                      {item.detail} · {item.location}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="resume-col-title cert-heading" data-reveal>
              Certifications
            </h3>
            <div className="cert-list">
              {certifications.map((cert, i) => (
                <article
                  key={cert.title}
                  className="cert-card card"
                  data-reveal
                  data-reveal-delay={String((i % 3) + 1)}
                >
                  <BadgeCheck size={18} aria-hidden="true" className="cert-icon" />
                  <div>
                    <h4>{cert.title}</h4>
                    <p>{cert.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
