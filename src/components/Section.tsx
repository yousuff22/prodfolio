// A shared wrapper so every section has the same spacing and heading style.
type SectionProps = {
  id: string; // used by the navbar links, e.g. href="#projects"
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    // scroll-mt-24 leaves room for the sticky navbar when jumping to this section
    <section id={id} className="scroll-mt-24 py-12">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
