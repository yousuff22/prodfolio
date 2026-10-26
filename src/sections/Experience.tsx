// Your work history: one card per job, most recent first.
// Each card: logo tile, company + role, dates + location, what you did, and tech tags.
import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { content, type Job } from "@/content";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* Dashed lines above, below and between the cards */}
      <div className="divide-y divide-dashed divide-border border-y border-dashed border-border">
        {content.experience.map((job) => (
          <JobCard key={`${job.company}-${job.role}`} job={job} />
        ))}
      </div>
    </Section>
  );
}

function JobCard({ job }: { job: Job }) {
  const isCurrent = job.period.includes("Present");

  return (
    // Negative margin + matching padding: the hover background reaches a little past the
    // text on both sides (less on phones, so it doesn't touch the screen edges)
    <article className="group -mx-2 rounded-lg px-2 py-5 transition-colors hover:bg-card sm:-mx-4 sm:px-4">
      <div className="flex items-start gap-4">
        <LogoTile job={job} />

        {/* Phones: everything stacked. 640px and up: dates and location move to the right. */}
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="font-semibold">{job.company}</h3>
            <p className="text-sm text-muted">{job.role}</p>
          </div>
          <div className="shrink-0 text-xs text-muted sm:text-right">
            <p className="flex items-center gap-1.5 font-mono sm:justify-end">
              {/* A small glowing dot for a job you're still doing */}
              {isCurrent && (
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
              )}
              {job.period}
            </p>
            <p className="mt-0.5">{job.location}</p>
          </div>
        </div>
      </div>

      {/* sm:pl-14 lines the text up with the company name (tile 40px + gap 16px) */}
      <div className="mt-4 sm:pl-14">
        <ul className="space-y-2 text-sm leading-relaxed text-muted">
          {job.points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span aria-hidden="true" className="select-none text-accent">
                •
              </span>
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {job.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs transition-colors group-hover:border-accent/40"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// The small rounded square on the left: the company logo, or its first letter.
// The logo only shows if its file really exists in public/ (so no broken image icon).
function LogoTile({ job }: { job: Job }) {
  const hasLogo = !!job.logo && existsSync(path.join(process.cwd(), "public", job.logo));

  return (
    // Logos get a white tile so they look right in dark mode too
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-border font-semibold text-accent shadow-sm transition-transform group-hover:-translate-y-0.5 ${
        hasLogo ? "bg-white" : "bg-background"
      }`}
    >
      {hasLogo && job.logo ? (
        <Image src={job.logo} alt={`${job.company} logo`} width={40} height={40} className="h-full w-full object-contain p-1" />
      ) : (
        job.company[0]
      )}
    </div>
  );
}
