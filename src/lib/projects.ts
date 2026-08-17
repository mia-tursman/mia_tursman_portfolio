export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  color: string;
};

// Every project has its own bespoke page under src/app/work/<slug>/page.tsx.
// Add a new page there (following an existing one as a template) when adding
// a project here.
export const projects: Project[] = [
  {
    slug: "takanock-intake-hub",
    title: "Takanock Intake Hub",
    tagline:
      "One front door for IT, GIS, and Automation requests — with AI-driven routing and status tracking.",
    tags: ["UX Design", "Workflow Redesign", "Next.js"],
    role: "UX Design, Research, Front-end Development, Workflow Design",
    timeline: "Summer 2026",
    team: "Independent build, in partnership with IT and GIS stakeholders",
    color: "bg-lilac",
  },
  {
    slug: "dublin-accessibility-audit",
    title: "Experiencing Accessible UX in Dublin, Ireland",
    tagline:
      "A three-week Dublin intensive connecting real-world accessibility research to accessible code.",
    tags: ["Accessibility Audit", "WCAG 2.2", "Field Research"],
    role: "Accessibility Researcher",
    timeline: "2025",
    team: "Independent audit, in partnership with local advocacy group",
    color: "bg-marigold",
  },
  {
    slug: "ai-onboarding-learning-hub",
    title: "AI Onboarding Learning Hub",
    tagline:
      "A guided, AI-assisted learning experience that walks new hires through Takanock's Claude tools.",
    tags: ["Onboarding", "AI Learning", "UX"],
    role: "UX Designer",
    timeline: "2025 — 2026",
    team: "1 designer, 3 engineers, 1 L&D partner",
    color: "bg-olive",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
