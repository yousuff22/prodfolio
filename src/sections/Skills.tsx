// Shows your skills grouped by category. Each skill is a small chip with its logo
// in the brand's color. On hover the chip lifts and its border takes that color.
import { content } from "@/content";
import { Section } from "@/components/Section";
import { skillIcons } from "./skillIcons";

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="divide-y divide-dashed divide-border border-y border-dashed border-border">
        {content.skills.map((group) => (
          // Phones: category name above the chips. 640px and up: name in a left column.
          <div
            key={group.category}
            className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <h3 className="pt-1.5 text-sm font-medium text-muted">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillChip key={skill} name={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillChip({ name }: { name: string }) {
  const entry = skillIcons[name];
  const Icon = entry?.icon;

  return (
    <li
      // "--brand" is a CSS variable used for the logo color and the hover border.
      // Black logos have no color set, so they fall back to the normal text color.
      style={{ "--brand": entry?.color ?? "var(--foreground)" } as React.CSSProperties}
      className="group flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--brand)"
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-(--brand) transition-transform duration-200 group-hover:scale-110"
        />
      ) : (
        // Fallback for skills that don't have a logo yet
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      )}
      {name}
    </li>
  );
}
