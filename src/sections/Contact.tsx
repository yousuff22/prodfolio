// A short invitation to get in touch, with your email and social links.
import { content } from "@/content";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose leading-relaxed text-muted">
        {content.contactNote}
      </p>

      {/* break-all stops a long email address from overflowing on small phones */}
      <a
        href={`mailto:${content.email}`}
        className="mt-4 inline-block break-all text-lg font-medium text-accent underline-offset-4 hover:underline"
      >
        {content.email}
      </a>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {content.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
