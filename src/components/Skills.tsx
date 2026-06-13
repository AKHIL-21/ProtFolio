import type { CSSProperties } from "react";
import { Accessibility, Code2, Database, ServerCog, Sparkles, Workflow } from "lucide-react";
import { stackGroups } from "../data/portfolio";

type LogoStyle = CSSProperties & { "--skill-color": string };

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const SKILL_LOGOS: Record<string, { src?: string; initials: string; color: string }> = {
  "React.js": { src: `${DEVICON}/react/react-original.svg`, initials: "Re", color: "#61dafb" },
  TypeScript: { src: `${DEVICON}/typescript/typescript-original.svg`, initials: "TS", color: "#3178c6" },
  JavaScript: { src: `${DEVICON}/javascript/javascript-original.svg`, initials: "JS", color: "#f7df1e" },
  HTML5: { src: `${DEVICON}/html5/html5-original.svg`, initials: "H5", color: "#e34f26" },
  CSS3: { src: `${DEVICON}/css3/css3-original.svg`, initials: "C3", color: "#1572b6" },
  Bootstrap: { src: `${DEVICON}/bootstrap/bootstrap-original.svg`, initials: "Bs", color: "#7952b3" },
  jQuery: { src: `${DEVICON}/jquery/jquery-original.svg`, initials: "jQ", color: "#0769ad" },
  Angular: { src: `${DEVICON}/angularjs/angularjs-original.svg`, initials: "Ng", color: "#dd0031" },
  "C#": { src: `${DEVICON}/csharp/csharp-original.svg`, initials: "C#", color: "#9b4fca" },
  ".NET": { src: `${DEVICON}/dotnetcore/dotnetcore-original.svg`, initials: ".N", color: "#512bd4" },
  "ASP.NET Core": { src: `${DEVICON}/dotnetcore/dotnetcore-original.svg`, initials: "AS", color: "#512bd4" },
  "ASP.NET MVC": { src: `${DEVICON}/dotnetcore/dotnetcore-original.svg`, initials: "MV", color: "#512bd4" },
  "Razor Pages": { src: `${DEVICON}/dot-net/dot-net-original.svg`, initials: "Rz", color: "#512bd4" },
  "Node.js": { src: `${DEVICON}/nodejs/nodejs-original.svg`, initials: "Nd", color: "#5fa04e" },
  "SQL Server": { src: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-original.svg`, initials: "SQL", color: "#cc2927" },
  SQLite: { src: `${DEVICON}/sqlite/sqlite-original.svg`, initials: "Lite", color: "#003b57" },
  SQL: { src: `${DEVICON}/azuresqldatabase/azuresqldatabase-original.svg`, initials: "SQL", color: "#0078d4" },
  "Entity Framework Core": { src: `${DEVICON}/dotnetcore/dotnetcore-original.svg`, initials: "EF", color: "#512bd4" },
  "Azure DevOps": { src: `${DEVICON}/azuredevops/azuredevops-original.svg`, initials: "Az", color: "#0078d7" },
  Git: { src: `${DEVICON}/git/git-original.svg`, initials: "Git", color: "#f05032" },
  GitHub: { src: `${DEVICON}/github/github-original.svg`, initials: "GH", color: "#c9d1d9" },
  Jira: { src: `${DEVICON}/jira/jira-original.svg`, initials: "Jr", color: "#0052cc" },
  "Visual Studio": { src: `${DEVICON}/visualstudio/visualstudio-original.svg`, initials: "VS", color: "#5c2d91" },
  "VS Code": { src: `${DEVICON}/vscode/vscode-original.svg`, initials: "VC", color: "#007acc" },
  "React Query": { src: `${DEVICON}/react/react-original.svg`, initials: "RQ", color: "#ff4154" },
  MobX: { src: `${DEVICON}/mobx/mobx-original.svg`, initials: "Mx", color: "#ff9955" },
  Axios: { src: `${DEVICON}/axios/axios-plain.svg`, initials: "Ax", color: "#5a29e4" },
  JWT: { initials: "JWT", color: "#fb015b" },
  "Material UI": { src: `${DEVICON}/materialui/materialui-original.svg`, initials: "MUI", color: "#007fff" },
  JAWS: { initials: "JA", color: "#2457e6" },
  NVDA: { initials: "NV", color: "#0284a8" },
  WCAG: { initials: "W3", color: "#005a9c" },
  "Section 508": { initials: "508", color: "#079669" },
  "AI-Assisted Code Review": { initials: "AI", color: "#8b5cf6" },
  "Claude Code": { initials: "CC", color: "#d97706" },
  "Prompt-Driven Development": { initials: "Pr", color: "#e34b6d" }
};

const GROUP_ICONS: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={18} aria-hidden="true" />,
  Backend: <ServerCog size={18} aria-hidden="true" />,
  Data: <Database size={18} aria-hidden="true" />,
  Delivery: <Workflow size={18} aria-hidden="true" />,
  Libraries: <Sparkles size={18} aria-hidden="true" />,
  "Accessibility & AI": <Accessibility size={18} aria-hidden="true" />
};

function SkillBadge({ item }: { item: string }) {
  const logo = SKILL_LOGOS[item] ?? {
    initials: item
      .split(/[\s./&-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase(),
    color: "#6366f1"
  };

  return (
    <span className="skill-badge">
      <span
        className={`skill-logo${logo.src ? " has-img" : ""}`}
        style={{ "--skill-color": logo.color } as LogoStyle}
        aria-hidden="true"
      >
        {logo.src && (
          <img
            src={logo.src}
            alt=""
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement?.classList.remove("has-img");
            }}
          />
        )}
        <b>{logo.initials}</b>
      </span>
      <span className="skill-name">{item}</span>
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="section-inner">
        <p className="section-label mono" data-reveal>
          // 03 — skills
        </p>
        <h2 id="skills-title" className="section-title" data-reveal data-reveal-delay="1">
          A practical stack for{" "}
          <em>web application delivery.</em>
        </h2>
        <p className="section-sub" data-reveal data-reveal-delay="2">
          Tools and technologies from the resume, grouped by how they show up in real work.
        </p>

        <div className="skill-groups">
          {stackGroups.map((group, i) => (
            <article
              key={group.label}
              className="skill-group card"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <div className="skill-group-head">
                <span className="skill-group-icon">{GROUP_ICONS[group.label]}</span>
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>
              <div className="skill-badge-list">
                {group.items.map((item) => (
                  <SkillBadge item={item} key={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
