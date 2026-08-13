import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const tags = project.tags.slice(0, 3);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-sand-light shadow-lg shadow-olive/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-lilac/25"
    >
      <div className="h-40 w-full shrink-0 overflow-hidden">
        <div
          className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${project.color}`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-lg font-semibold tracking-tight text-olive">
          {project.title}
        </h3>
        <p className="line-clamp-3 min-h-[4.875em] text-sm leading-relaxed text-olive-soft">
          {project.tagline}
        </p>
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex min-h-[3.5rem] flex-wrap content-start items-start gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-lilac-tint px-2.5 py-1 text-xs font-medium text-olive"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-rust-text transition-colors group-hover:text-rust-text-hover">
            View case study{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
