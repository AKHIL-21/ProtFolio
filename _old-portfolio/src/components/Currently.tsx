import { currently } from "../data/portfolio";

export function Currently() {
  return (
    <section id="currently" className="currently" aria-label="Current status">
      <div className="section-inner">
        <p className="section-label mono" aria-hidden="true">
          // status
        </p>
        <div className="currently-grid">
          {currently.map((item, i) => (
            <article
              key={item.label}
              className="currently-card card"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="currently-label mono">{item.label}</span>
              <strong className="currently-value">{item.value}</strong>
              <p className="currently-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
