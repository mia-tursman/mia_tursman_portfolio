import { projects } from "@/lib/projects";
import { contact } from "@/lib/contact";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8">
      <section className="flex flex-col gap-6 py-20 sm:py-28">
        <p className="font-sans text-sm font-semibold tracking-widest text-rust-text uppercase">
          {contact.role}
        </p>
        <h1 className="max-w-2xl font-serif text-5xl font-medium tracking-tight text-olive sm:text-6xl">
          {contact.name}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-olive-soft">
          I am a junior at the University of Michigan School of Information,
          obtaining a Bachelor of Science in Information with a concentration
          in User Experience Design. I am also receiving dual minors in
          Quantitative Methods for Social Science and Environmental Studies.
          I focus on accessible UX in the real world, AI-assisted workflows,
          non-profit UX research, and much more!
        </p>
      </section>

      <section id="work" className="scroll-mt-24 pb-24">
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-olive">
            Selected Work
          </h2>
          <svg
            width="120"
            height="16"
            viewBox="0 0 120 16"
            fill="none"
            aria-hidden="true"
            className="mt-1 ml-0.5 text-rust"
          >
            <path
              d="M2 8C10 2 18 2 26 8C34 14 42 14 50 8C58 2 66 2 74 8C82 14 90 14 98 8C104 4 110 2 118 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
