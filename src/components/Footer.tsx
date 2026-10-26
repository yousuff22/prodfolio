// The small line of text at the very bottom of the page.
import { content } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      Built by {content.name} with Next.js & Tailwind CSS.
    </footer>
  );
}
