// All the text on your site lives here. Edit this file to update the portfolio.

// ---- Types: describe the shape of each piece of content ----
// (If you forget a required field, your editor will underline it in red.)

export type Link = {
  label: string; // text shown on the page, e.g. "GitHub"
  href: string; // full URL
};

// A social profile. "icon" picks the logo; "showInIntro" puts it in the intro's icon row.
export type Social = Link & {
  icon: "github" | "x" | "linkedin" | "leetcode";
  showInIntro: boolean;
};

export type Project = {
  title: string;
  description: string;
  tech: string[]; // tools used, shown as small tags
  links: Link[]; // any number of links: code, frontend, backend, live demo...
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string; // e.g. "Jan 2026 – Present"
  points: string[]; // what you did, one sentence each
  tech: string[];
  logo?: string; // optional company logo inside public/, e.g. "/logos/quloi.png" (else the first letter shows)
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  href?: string; // optional link to the credential
};

// The shape of the whole content object below
type Content = {
  name: string;
  firstName: string;
  age: number;
  role: string;
  intro: string[];
  bio: string;
  banner: string;
  avatar: string;
  email: string;
  resume: string;
  socials: Social[];
  projects: Project[];
  skills: SkillGroup[];
  experience: Job[];
  certifications: Certification[];
  contactNote: string;
};

// ---- Your content ----

export const content: Content = {
  name: "Yousuf Sayyed", // full name: used in the browser tab, navbar and footer
  firstName: "Yousuf", // shown big in the intro
  age: 19, // shown as a small badge next to your first name (remember to update it!)
  role: "Full-Stack Developer",

  // The 3 bullet points in the intro: who you are, what you're doing, what you want to become
  intro: [
    "Backend developer intern at Quloi, building APIs for the logistics & supply chain industry.",
    "Pursuing a B.Tech in Computer Engineering (2023–2027) while shipping real-world backend systems.",
    "Aiming to become an engineer who designs distributed systems and DevOps pipelines that hold up under real-world load.",
  ],

  // Not shown on the page: this is the description search engines and link previews use
  bio: "Backend developer building scalable APIs and services for the logistics & supply chain industry. B.Tech Computer Engineering student interested in distributed systems and DevOps.",

  // Banner image at the top of the page (inside the public/ folder). Set to "" to hide it.
  banner: "/banner.png",

  // Profile picture inside the public/ folder. Until the file exists, a placeholder circle shows.
  avatar: "/avatar.png",

  email: "yousufsayyed.work@gmail.com",

  // Path to your resume inside the public/ folder. Set to "" to hide the Resume button.
  resume: "/resume.pdf",

  // All socials appear in the Contact section. The intro shows those with showInIntro: true,
  // plus an email button.
  socials: [
    { label: "GitHub", href: "https://github.com/yousuff22", icon: "github", showInIntro: true },
    { label: "X / Twitter", href: "https://x.com/Yousuffv1", icon: "x", showInIntro: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yousuf22/", icon: "linkedin", showInIntro: true },
    { label: "LeetCode", href: "https://leetcode.com/u/yousuf22/", icon: "leetcode", showInIntro: false },
  ],

  projects: [
    {
      title: "TinDev",
      description:
        "A Tinder-style matching platform for developers. Connect based on skills and goals, send and accept connection requests, and chat in real time.",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "AWS EC2"],
      links: [
        { label: "Frontend", href: "https://github.com/yousuff22/TinDev-FEnd" },
        { label: "Backend", href: "https://github.com/yousuff22/Tindev-BEnd" },
      ],
    },
    {
      title: "AlgoSphere",
      description:
        "A collaborative platform where students join rooms to solve DSA problems together, with a real-time shared code editor and voice chat.",
      tech: ["React", "Node.js", "Express", "Socket.io", "Monaco Editor", "Tailwind CSS"],
      links: [{ label: "Code", href: "https://github.com/yousuff22/AlgoSphere" }],
    },
    {
      title: "DeepFlix",
      description:
        "An AI-powered movie recommender. Describe what you're in the mood for and get personalized suggestions, with secure Firebase login.",
      tech: ["React", "Redux", "Tailwind CSS", "Firebase", "AI API"],
      links: [
        { label: "Code", href: "https://github.com/yousuff22/DeepFlix" },
        { label: "Live demo", href: "https://deep-flix-wyeg.vercel.app/" },
      ],
    },
    {
      title: "YouTube Clone",
      description:
        "A mini YouTube built to learn debouncing (search), API polling (simulated live chat) and YouTube Data API integration.",
      tech: ["React", "Redux", "Tailwind CSS", "YouTube API"],
      links: [
        { label: "Code", href: "https://github.com/yousuff22/YouTube" },
        { label: "Live demo", href: "https://youtube-navy-rho.vercel.app/" },
      ],
    },
  ],

  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Java", "C/C++"] },
    { category: "Backend", items: ["Node.js", "Express.js", "GraphQL", "Spring Boot", "Spring MVC", "Hibernate / JPA"] },
    { category: "Frontend", items: ["React", "Next.js", "Redux", "Tailwind CSS", "HTML"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "Docker", "CI/CD", "Linux", "NGINX", "RabbitMQ", "Microservices"] },
    { category: "Tools", items: ["Git", "Postman", "Maven", "Bash", "Vim", "Claude Code"] },
  ],

  // Shown in the Experience section, most recent job first. Copy a { ... } block to add a job.
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Quloi Pvt. Ltd.",
      location: "Pune, Maharashtra",
      period: "Jan 2026 – Present",
      points: [
        "Building the core backend of an enterprise logistics platform with Node.js, GraphQL and MongoDB.",
        "Designed REST APIs and GraphQL resolvers with a focus on payload optimization and reliable cross-service communication.",
        "Developed Operational Performance APIs for On-Time Rate, Responsiveness, Lead Time and Document Consolidation metrics.",
        "Wrote complex multi-collection MongoDB aggregation pipelines for logistics and performance data.",
        "Implemented role-based access control for AI Inbox using AWS Cognito authorization.",
      ],
      tech: ["Node.js", "Express.js", "GraphQL", "MongoDB", "Mongoose", "AWS Cognito"],
      logo: "/logos/quloi.png",
    },
  ],

  certifications: [
    { name: "Building with the Claude API", issuer: "Anthropic Academy", date: "2026" },
    { name: "Introduction to Model Context Protocol (MCP)", issuer: "Anthropic Academy", date: "2026" },
    { name: "Google Cloud Facilitator Program", issuer: "Google Cloud", date: "Dec 2024" },
    { name: "Problem Solving", issuer: "HackerRank", date: "Nov 2024" },
  ],

  contactNote: "Open to internships and backend work. The best way to reach me is by email.",
};

// The links shown in the navbar, in order.
// "id" must match the id of the section on the page.
// A section can be on the page without being listed here (like Certifications and Contact).
export const navSections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];
