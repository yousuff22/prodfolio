// Matches each skill name in content.ts to a logo and its brand color.
// To add a logo for a new skill: find it at https://react-icons.github.io/react-icons
// (the "Si" set has most tech logos), import it, and add a line below.
// Skills without an entry here still show, just with a small dot instead of a logo.
import type { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiCplusplus, SiNodedotjs, SiExpress, SiGraphql,
  SiSpringboot, SiSpring, SiHibernate, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiHtml5, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDocker, SiGithubactions,
  SiLinux, SiNginx, SiRabbitmq, SiGit, SiPostman, SiApachemaven, SiGnubash, SiVim, SiClaude,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";

type SkillIcon = {
  icon: IconType;
  color?: string; // brand color of the logo; leave out for black logos (they'd vanish in dark mode)
};

export const skillIcons: Record<string, SkillIcon> = {
  // Languages
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Java: { icon: FaJava, color: "#ED8B00" },
  "C/C++": { icon: SiCplusplus, color: "#00599C" },
  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Spring MVC": { icon: SiSpring, color: "#6DB33F" },
  "Hibernate / JPA": { icon: SiHibernate, color: "#BCAE79" },
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  // Databases
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  // Cloud & DevOps
  "AWS EC2": { icon: FaAws, color: "#FF9900" },
  "AWS S3": { icon: FaAws, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  NGINX: { icon: SiNginx, color: "#009639" },
  RabbitMQ: { icon: SiRabbitmq, color: "#FF6600" },
  Microservices: { icon: LuNetwork, color: "#14B8A6" },
  // Tools
  Git: { icon: SiGit, color: "#F05032" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Maven: { icon: SiApachemaven, color: "#C71A36" },
  Bash: { icon: SiGnubash, color: "#4EAA25" },
  Vim: { icon: SiVim, color: "#019733" },
  "Claude Code": { icon: SiClaude, color: "#D97757" },
};
