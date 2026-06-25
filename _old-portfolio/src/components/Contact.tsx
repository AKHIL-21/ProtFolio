import { useState } from "react";
import { Check, Copy, Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/portfolio";

function ContactMethod({
  href,
  icon,
  label,
  value
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span>
        <small className="mono">{label}</small>
        <strong>{value}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="contact-method card">
        {content}
      </a>
    );
  }
  return <div className="contact-method card">{content}</div>;
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="section-inner contact-inner">
        <p className="section-label mono" data-reveal>
          // 05 — contact
        </p>
        <h2 id="contact-title" className="section-title" data-reveal data-reveal-delay="1">
          Ready to build{" "}
          <em>dependable software.</em>
        </h2>
        <p className="section-sub" data-reveal data-reveal-delay="2">
          Open to full-stack, frontend, and .NET engineering opportunities where product quality,
          accessibility, and backend reliability matter.
        </p>

        <div className="contact-monogram" data-reveal data-reveal-delay="2" aria-hidden="true">
          AM
        </div>

        <div className="contact-who" data-reveal data-reveal-delay="3">
          <strong>{contact.name}</strong>
          <span>{contact.role}</span>
        </div>

        <div
          className="contact-methods"
          data-reveal
          data-reveal-delay="3"
          aria-label="Contact information"
        >
          <ContactMethod
            icon={<Mail size={18} aria-hidden="true" />}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactMethod
            icon={<Github size={18} aria-hidden="true" />}
            label="GitHub"
            value={contact.githubLabel}
            href={contact.github}
          />
          <ContactMethod
            icon={<Phone size={18} aria-hidden="true" />}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phoneHref}`}
          />
          <ContactMethod
            icon={<MapPin size={18} aria-hidden="true" />}
            label="Location"
            value={contact.location}
          />
        </div>

        <div className="contact-ctas" data-reveal data-reveal-delay="4">
          <a href={`mailto:${contact.email}`} className="btn-primary">
            <Mail size={16} aria-hidden="true" />
            Email Me
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
          <button className="btn-ghost" type="button" onClick={handleCopy}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Copied!" : "Copy Email"}
          </button>
          <a href={contact.resumeHref} className="btn-ghost">
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <footer className="site-footer" data-reveal>
          <p className="mono">
            Built with React + TypeScript + Vite
            <span aria-hidden="true"> · </span>
            <a href={contact.github} target="_blank" rel="noreferrer">
              Source on GitHub
            </a>
          </p>
          <p>© {new Date().getFullYear()} Akhil N Muthyala</p>
        </footer>
      </div>
    </section>
  );
}
