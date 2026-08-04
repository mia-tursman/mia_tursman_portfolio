import type { Metadata } from "next";
import { contact } from "@/lib/contact";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: `About — ${contact.name}`,
  description: `A little more about ${contact.name}.`,
};

type AboutSection = {
  heading: string;
  paragraphs: string[];
  photoAlt: string;
  photoAspect: string;
  imageOnRight: boolean;
};

const sections: AboutSection[] = [
  {
    heading: "Hi! So glad you're here!",
    paragraphs: [
      "My name is Mia Tursman, and I'm a junior at the University of Michigan pursuing a Bachelor of Science in Information, with a concentration in User Experience Design and Research. I'll graduate with minors in Quantitative Methods in Social Science (QMSS) and Environmental Studies. I believe UX is nothing if not an interdisciplinary field — and I'm excited to explore the connections between that belief, my analytical skills, and my passion for sustainability.",
    ],
    photoAlt: "Placeholder headshot photo of Mia Tursman",
    photoAspect: "aspect-[3/4] w-full sm:w-2/5",
    imageOnRight: true,
  },
  {
    heading: "Background",
    paragraphs: [
      "I grew up in Traverse City, Michigan, and have always been drawn to science, sociology, and creative fields; for a long time, I wasn't sure how to find a career path that felt like a true intersection of those interests. Discovering UX was the answer: a field where I could combine my curiosity about human behavior with design and research. I especially enjoy the connection between user research and data analysis, viewed through a creative lens.",
    ],
    photoAlt: "Placeholder photo of Traverse City, Michigan",
    photoAspect: "aspect-[4/3] w-full sm:w-2/5",
    imageOnRight: false,
  },
  {
    heading: "Goals",
    paragraphs: [
      "What I'm specifically drawn to within UX is accessibility — both in the physical world and online — and how it intersects with everything else I'm learning in this field. Every person experiences the world differently, and design should account for that.",
      "One moment that made me confident in choosing UX was visiting Google's Dublin headquarters and touring their Accessible Technology Lab. I remember being struck by a racing game designed for people with mobility impairments. This game was controlled entirely by eye movement rather than hands. It might be easy to dismiss a racing game as a small thing to spend design resources on, but that game is one step toward giving someone an experience their peers already take for granted. That's when I understood what designing for everyone's varying experiences actually means in practice, not just in theory. Design for people with disabilities should still be exciting — not just meeting basic needs, but building in the same daily enjoyment that many designers overlook.",
    ],
    photoAlt:
      "Placeholder photo from visiting Google Dublin's Accessible Technology Lab",
    photoAspect: "aspect-[4/3] w-full sm:w-2/5",
    imageOnRight: true,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 sm:px-8">
      <header className="py-16 sm:py-20">
        <h1 className="font-serif text-4xl font-medium tracking-tight text-olive sm:text-5xl">
          About
        </h1>
      </header>

      <div className="flex flex-col gap-20 sm:gap-24">
        {sections.map((section) => (
          <section
            key={section.heading}
            className={`flex flex-col gap-8 sm:items-center sm:gap-12 ${
              section.imageOnRight ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <ImagePlaceholder
              alt={section.photoAlt}
              className={`${section.photoAspect} rounded-[2rem] shadow-lg shadow-olive/10`}
            />
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-olive-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-24 flex flex-col items-center gap-4 rounded-3xl bg-sand-light p-10 text-center shadow-inner shadow-olive/5">
        <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
          Let&rsquo;s connect
        </h2>
        <p className="max-w-md leading-relaxed text-olive-soft">
          Want to know more about my work, or just say hi? Grab my resume or
          reach out directly.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={contact.resume}
            download
            className="rounded-full bg-marigold px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-marigold-dark"
          >
            Download Resume
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium text-rust-text transition-colors hover:text-rust-text-hover"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-rust-text transition-colors hover:text-rust-text-hover"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
