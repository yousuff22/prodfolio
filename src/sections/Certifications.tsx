// Your certificates as a grid of small cards.
import { content } from "@/content";
import { Section } from "@/components/Section";

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      {/* 1 column on phones, 2 columns from 640px up */}
      <ul className="grid gap-3 sm:grid-cols-2">
        {content.certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent"
          >
            <BadgeIcon />
            <div className="min-w-0">
              <h3 className="text-sm font-medium leading-snug">
                {/* Only becomes a link if "href" is set in content.ts */}
                {cert.href ? (
                  <a href={cert.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {cert.name} ↗
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className="mt-1 text-xs text-muted">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

// A small award-ribbon icon shown on each card
function BadgeIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
