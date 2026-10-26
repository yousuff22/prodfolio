// Lists every project from content.ts as a card.
import { content } from "@/content";
import { Section } from "@/components/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* 1 column on phones, 2 columns from the "sm" breakpoint (640px) up */}
      <div className="grid gap-4 sm:grid-cols-2">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
