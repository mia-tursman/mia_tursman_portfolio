import Link from "next/link";
import type { Project } from "@/lib/projects";

const labelTextByColor: Record<string, string> = {
  "bg-olive": "text-sand-light",
  "bg-rust": "text-ink",
  "bg-marigold": "text-ink",
  "bg-lilac": "text-sand-light",
};

export default function ProjectCard({ project }: { project: Project }) {
  const labelText = labelTextByColor[project.color] ?? "text-ink";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[2rem] bg-sand-light shadow-lg shadow-olive/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-lilac/25"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <div
          className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${project.color}`}
        />
        <span
          className={`font-hand absolute top-3 right-4 rotate-3 text-lg ${labelText}`}
        >
          case study
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-lg font-semibold tracking-tight text-olive">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-olive-soft">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-lilac-tint px-2.5 py-1 text-xs font-medium text-olive"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="pt-2 text-sm font-medium text-rust-text transition-colors group-hover:text-rust-text-hover">
          View case study{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
