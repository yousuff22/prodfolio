// The bar at the top: your name, section links and the theme toggle, all on one row.
import { content, navSections } from "@/content";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    // sticky + backdrop-blur: the bar stays at the top and blurs content scrolling under it
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-2xl items-center justify-between gap-2 px-4 py-3">
        {/* First name on phones (to save space), full name from 640px up */}
        <a href="#top" className="shrink-0 font-semibold">
          <span className="sm:hidden">{content.firstName}</span>
          <span className="hidden sm:inline">{content.name}</span>
        </a>

        <div className="flex min-w-0 items-center gap-1 sm:gap-3">
          {/* If you add many links later, this row scrolls sideways instead of overflowing */}
          <div className="flex min-w-0 overflow-x-auto [scrollbar-width:none]">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 px-2 py-1 text-sm text-muted transition-colors hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
