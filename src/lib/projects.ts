export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  color: string;
  overview: string;
  challenge: string;
  process: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "takanock-intake-hub",
    title: "Takanock Intake Hub",
    tagline:
      "One front door for IT, GIS, and Automation requests — with AI-driven routing and status tracking.",
    tags: ["Internal Tools", "AI / UX", "Workflow Design"],
    role: "UX Design, Research, Front-end Development, Workflow Design",
    timeline: "Summer 2026",
    team: "Independent build, in partnership with IT and GIS stakeholders",
    color: "bg-lilac",
    overview:
      "A single deployed web app that replaced untracked Slack requests and a hard-to-adopt Claude skill with one place to submit IT, GIS, and Automation requests, backed by an AI assistant and Airtable-driven status tracking.",
    challenge:
      "IT and GIS requests arrived as untracked Slack messages and verbal asks with no central log, no assignment workflow, and no status visibility, a gap that was only growing as Takanock scaled from roughly 33 to 50+ people.",
    process:
      "The project moved through three iterations — an internal Claude skill, a standalone IT Help Desk app, and finally a unified hub — after discovery interviews showed the setup burden of a Claude-based tool, not lack of interest, was the real adoption barrier.",
    solution:
      "A Next.js app with an AI Assistant for plain-language routing, a multi-category request form, and a Check My Ticket status lookup, each writing to its own Airtable base.",
    outcome:
      "Delivered as this internship's capstone project, with a full SOP so the system could keep running after the internship ended.",
  },
  {
    slug: "dublin-accessibility-audit",
    title: "Experiencing Accessible UX in Dublin, Ireland",
    tagline:
      "A Dublin intensive on web design, connecting real-world observation to accessible code.",
    tags: ["Accessibility", "Research", "Audit"],
    role: "Accessibility Researcher",
    timeline: "2025",
    team: "Independent audit, in partnership with local advocacy group",
    color: "bg-marigold",
    overview:
      "Placeholder overview — a short summary of the audit's scope, the services reviewed, and the standard evaluated against (e.g. WCAG 2.2 AA).",
    challenge:
      "Placeholder challenge — describe why the audit was needed: reports of residents being unable to complete essential tasks using assistive technology.",
    process:
      "Placeholder process — outline the audit methodology: heuristic review, screen reader testing, and sessions with residents who use assistive tech.",
    solution:
      "Placeholder solution — describe the deliverables: a prioritized findings report, severity ratings, and remediation recommendations.",
    outcome:
      "Placeholder outcome — add how many issues were resolved, policy changes influenced, or resident feedback once available.",
  },
  {
    slug: "ai-onboarding-learning-hub",
    title: "AI Onboarding Learning Hub",
    tagline:
      "A guided, AI-assisted learning experience for new hire onboarding.",
    tags: ["Onboarding", "Learning Design", "AI / UX"],
    role: "UX Designer",
    timeline: "2025 — 2026",
    team: "1 designer, 3 engineers, 1 L&D partner",
    color: "bg-olive",
    overview:
      "Placeholder overview — a short summary of the Learning Hub, the audience (new hires), and the shift from passive to guided onboarding.",
    challenge:
      "Placeholder challenge — describe why traditional onboarding materials weren't working: low completion, inconsistent knowledge, no feedback loop.",
    process:
      "Placeholder process — outline research with recent hires and managers, content audits, and prototyping the AI-guided learning flow.",
    solution:
      "Placeholder solution — describe the final experience: adaptive learning paths, an AI assistant for questions, and progress tracking.",
    outcome:
      "Placeholder outcome — add completion rate improvements, time-to-productivity, or survey results once available.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Slugs with their own bespoke page under src/app/work/<slug>/page.tsx,
// which takes routing priority over the generic [slug] template.
export const customCaseStudySlugs = [
  "ai-onboarding-learning-hub",
  "dublin-accessibility-audit",
  "takanock-intake-hub",
];
