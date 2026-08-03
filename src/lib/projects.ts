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
    slug: "takanock-assistant-hub",
    title: "Takanock Assistant Hub",
    tagline:
      "A conversational AI hub that helps project teams find answers, surface schedule risk, and act on project data without digging through spreadsheets.",
    tags: ["AI / UX", "Enterprise", "Design Systems"],
    role: "Lead Product Designer",
    timeline: "2026 — Ongoing",
    team: "2 designers, 4 engineers, 1 PM",
    color: "bg-rust",
    overview:
      "Placeholder overview — a short summary of the Assistant Hub, who it's for, and what problem it solves for project teams.",
    challenge:
      "Placeholder challenge — describe the core problem: project data was scattered across tools, and teams had no fast way to ask questions and get trustworthy answers.",
    process:
      "Placeholder process — outline discovery, stakeholder interviews, workflow mapping, and how the conversational interaction model was validated.",
    solution:
      "Placeholder solution — describe the final experience: chat-first interface, contextual data surfacing, and how it fits into existing project workflows.",
    outcome:
      "Placeholder outcome — add adoption metrics, time saved, or qualitative feedback once available.",
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
  {
    slug: "dublin-accessibility-audit",
    title: "Dublin Accessibility Audit",
    tagline:
      "A city-wide accessibility audit uncovering barriers in Dublin's public digital services for people using assistive technology.",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// Slugs with their own bespoke page under src/app/work/<slug>/page.tsx,
// which takes routing priority over the generic [slug] template.
export const customCaseStudySlugs = ["ai-onboarding-learning-hub"];
