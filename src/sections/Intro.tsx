// The first thing visitors see: avatar, first name + age, role, 3 bullet points and links.
import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { SiGithub, SiX, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMail, LuFileText } from "react-icons/lu";
import { content, type Social } from "@/content";

// Which logo to show for each kind of social link
const socialIcons = {
  github: SiGithub,
  x: SiX,
  linkedin: FaLinkedinIn,
  leetcode: SiLeetcode,
} satisfies Record<Social["icon"], unknown>;

export function Intro() {
  const introSocials = content.socials.filter((s) => s.showInIntro);

  return (
    <section className="pb-12">
      {/* With a banner, the avatar overlaps its bottom edge (like a profile header).
          relative z-10 keeps the avatar drawn on top of the banner. */}
      <div className={`relative z-10 ${content.banner ? "-mt-10 pl-4 sm:-mt-12" : "pt-12"}`}>
        <Avatar />
      </div>

      <div className="mt-4">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {content.firstName}
          <span
            title="Age"
            className="rounded-md border border-border px-2 py-0.5 font-mono text-sm font-normal text-muted"
          >
            {content.age}
          </span>
        </h1>
        <p className="mt-1 text-accent">{content.role}</p>
      </div>

      <ul className="mt-8 space-y-3">
        {content.intro.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden="true" className="select-none text-accent">
              •
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Round icon buttons. aria-label tells screen readers what each icon means. */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {introSocials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank" // open in a new tab
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={iconButton}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
        <a href={`mailto:${content.email}`} aria-label="Email" title="Email" className={iconButton}>
          <LuMail className="h-4 w-4" />
        </a>

        {content.resume && (
          <a
            href={content.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <LuFileText className="h-4 w-4" />
            Resume
          </a>
        )}
      </div>
    </section>
  );
}

// Shared style for the round icon buttons
const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent";

// Your profile picture. If public/avatar.png doesn't exist yet, shows a placeholder circle.
function Avatar() {
  // This runs on the server, so it can check whether the file is in the public/ folder
  const hasAvatar = content.avatar !== "" && existsSync(path.join(process.cwd(), "public", content.avatar));

  // ring-4 ring-background draws a thick border in the page color, so it stands out on the banner
  const circle = "h-20 w-20 shrink-0 rounded-full ring-4 ring-background sm:h-24 sm:w-24";

  if (!hasAvatar) {
    return (
      <div
        title="Add your picture at public/avatar.png"
        className={`${circle} flex items-center justify-center border-2 border-dashed border-border bg-card text-3xl font-bold text-muted`}
      >
        {content.firstName[0]}
      </div>
    );
  }

  return (
    <Image
      src={content.avatar}
      alt={`Profile picture of ${content.firstName}`}
      width={96}
      height={96}
      loading="eager"
      // A thin border and a soft purple glow keep a dark picture visible on a dark page
      className={`${circle} border-2 border-border object-cover shadow-[0_0_28px_rgba(139,92,246,0.35)]`}
    />
  );
}
