// One project box: title, description, tech tags and links.
import type { Project } from "@/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded bg-border/60 px-2 py-0.5 font-mono text-xs">
            {t}
          </li>
        ))}
      </ul>

      {/* One link per entry in the project's "links" list in content.ts */}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {project.links.map((link) => (
          <ProjectLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </article>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline-offset-4 hover:underline"
    >
      {label} ↗
    </a>
  );
}
