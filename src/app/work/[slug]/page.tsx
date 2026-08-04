import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject, customCaseStudySlugs } from "@/lib/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => !customCaseStudySlugs.includes(project.slug))
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.tagline,
  };
}

const sections = [
  { key: "overview", label: "Overview" },
  { key: "challenge", label: "The Challenge" },
  { key: "process", label: "Process" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || customCaseStudySlugs.includes(slug)) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 sm:px-8">
      <div className="py-10">
        <Link
          href="/#work"
          className="text-sm font-medium text-rust-text transition-colors hover:text-rust-text-hover"
        >
          ← Back to work
        </Link>
      </div>

      <header className="flex flex-col gap-5 pb-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-lilac-tint px-2.5 py-1 text-xs font-medium text-olive"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-olive sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-olive-soft">
          {project.tagline}
        </p>

        <dl className="mt-4 grid grid-cols-1 gap-6 rounded-3xl bg-sand-light p-6 shadow-inner shadow-olive/5 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
              Role
            </dt>
            <dd className="mt-1 text-sm text-olive">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
              Timeline
            </dt>
            <dd className="mt-1 text-sm text-olive">{project.timeline}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
              Team
            </dt>
            <dd className="mt-1 text-sm text-olive">{project.team}</dd>
          </div>
        </dl>
      </header>

      <div
        className={`h-64 w-full rounded-[2.5rem] shadow-lg shadow-olive/15 sm:h-80 ${project.color}`}
      />

      <div className="flex flex-col gap-12 pt-14">
        {sections.map((section) => (
          <section key={section.key} className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
              {section.label}
            </h2>
            <p className="leading-relaxed text-olive-soft">
              {project[section.key]}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-between border-t border-dashed border-olive/20 pt-8">
        <Link
          href="/#work"
          className="text-sm font-medium text-rust-text transition-colors hover:text-rust-text-hover"
        >
          ← Back to work
        </Link>
        <Link
          href={`/work/${nextProject.slug}`}
          className="text-sm font-medium text-rust-text transition-colors hover:text-rust-text-hover"
        >
          Next case study: {nextProject.title} →
        </Link>
      </div>
    </article>
  );
}
