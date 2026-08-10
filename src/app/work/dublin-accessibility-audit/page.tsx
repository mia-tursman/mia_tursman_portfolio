import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const project = getProject("dublin-accessibility-audit")!;
const currentIndex = projects.findIndex(
  (p) => p.slug === "dublin-accessibility-audit",
);
const nextProject = projects[(currentIndex + 1) % projects.length];

export const metadata: Metadata = {
  title: project.title,
  description: project.tagline,
};

const listClass = "list-disc space-y-3 pl-5 marker:text-rust-text";
const liClass = "leading-relaxed text-olive-soft";

const guidelines = [
  {
    code: "1.4.3",
    name: "Contrast (Minimum)",
    description:
      "Text needed at least a 4.5:1 contrast ratio against its background — the same principle the museum mostly got right on labels, but missed inside display cases with glare and shadowing.",
    photoAlt:
      "Screenshot showing color contrast in use on my travel blog site — text meeting the 4.5:1 ratio against its background",
  },
  {
    code: "1.1.1",
    name: "Non-text Content",
    description: "Every image needed meaningful alt text.",
    photoAlt:
      "Screenshot of dev tools or code showing descriptive alt text applied to an image on my site, or the image it describes",
  },
  {
    code: "2.1.1",
    name: "Keyboard",
    description:
      "Every interactive element (including JavaScript lightboxes) had to be fully operable without a mouse.",
    photoAlt:
      "Screenshot showing a visible keyboard-focus state on an interactive element on my site",
  },
  {
    code: "2.3.3",
    name: "prefers-reduced-motion",
    description:
      "Respecting a user's OS-level motion preference, rather than assuming everyone tolerates animation equally.",
    photoAlt:
      "Screenshot or recording showing the site's reduced-motion behavior, or the OS-level prefers-reduced-motion setting",
  },
];

export default function DublinAccessibilityAuditPage() {
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
          Experiencing Accessible UX in Dublin, Ireland
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-olive-soft italic">
          A Dublin intensive on web design, connecting real-world
          observation to accessible code
        </p>
      </header>

      <ImagePlaceholder
        alt="Hero photo from the Dublin intensive — a scenic or campus shot representing the trip"
        className="aspect-video w-full rounded-[2.5rem]"
      />

      <div className="flex flex-col gap-12 pt-14">
        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Overview
          </h2>
          <p className="leading-relaxed text-olive-soft">
            During a three-week intensive with University of Michigan&rsquo;s
            School of Information, I joined a cohort of students in Dublin to
            study web design and accessibility in the field. Alongside
            exploring Ireland, we evaluated real-world accessibility and UX
            challenges at the sites we visited, then translated those
            observations directly into web design practice. The course
            paired a hands-on accessibility audit of a real physical space
            with an individual final project: a website built from scratch
            to meet WCAG standards.
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-6 rounded-3xl bg-sand-light p-6 shadow-inner shadow-olive/5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Course
              </dt>
              <dd className="mt-1 text-sm text-olive">
                SI 338: Web Design & Accessibility, Dublin Intensive
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-olive">May 4–27, 2026</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Role
              </dt>
              <dd className="mt-1 text-sm text-olive">
                Student, Solo front-end development and design, accessibility
                auditing, field research
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Tools
              </dt>
              <dd className="mt-1 text-sm text-olive">
                HTML5, CSS3 (Grid/Flexbox), JavaScript, WAVE, Axe DevTools,
                VSCode, GitHub Pages
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Live Site
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href="https://mia-tursman.github.io/ireland_travel_blog/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust-text transition-colors hover:text-rust-text-hover"
                >
                  mia-tursman.github.io/ireland_travel_blog
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Field Research: Experiencing real-world accessibility
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Most afternoons throughout the three weeks were spent exploring
            different sites around Dublin; at each one, a different student
            in the cohort took the lead conducting a structured accessibility
            audit, so that by the end of the program, we&rsquo;d collectively
            built a running record of accessibility across a wide range of
            real-world spaces, not just a single case study. These included
            the Cliffs of Moher, the EPIC Museum of Ireland, the Guinness
            Storehouse, and many more. We also had immersive tours of
            organizations working to improve both real-world and digital
            accessibility, including the Irish Wheelchair Society and
            Google&rsquo;s Dublin Accessibility Discovery Center.
          </p>
          <p className="leading-relaxed text-olive-soft">
            My turn came at the National History Museum of Ireland, where I
            worked with Tasnimah Uddin and Olivia Lombardo to audit the space
            using a checklist adapted from the Smithsonian Guidelines for
            Accessible Exhibition Design — covering audio/visual features,
            seating, exhibits, pathways, labels, and safety. Out of the items
            we rated, the museum met just 57% outright (26 met, 15 partial, 5
            not met, 5 not applicable).
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch">
            <ImagePlaceholder
              alt="Photo from auditing the National History Museum of Ireland, or a general Dublin trip photo"
              className="aspect-[4/3] w-full rounded-[2rem] shadow-lg shadow-olive/10 sm:w-1/2"
            />
            <div className="flex flex-col items-start justify-center gap-2 rounded-3xl bg-sand-light px-6 py-5 shadow-inner shadow-olive/5 sm:w-1/2">
              <span className="font-serif text-5xl font-medium tracking-tight text-rust-text sm:text-6xl">
                57%
              </span>
              <span className="max-w-xs text-sm leading-snug text-olive-soft">
                of accessibility criteria met outright at the National
                History Museum of Ireland (26 met, 15 partial, 5 not met, 5
                not applicable)
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-olive/10 bg-sand-light p-6">
            <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
              Key findings
            </span>
            <ul className={listClass}>
              <li className={liClass}>
                <strong className="text-olive">
                  Reading position mattered more than we expected:
                </strong>{" "}
                description cards laid flat in display cases were far harder
                to read for anyone at a lower eye level (for example, a
                wheelchair user) than cards tilted forward — an incredibly
                small and cheap fix (some cases in the museum already did
                this correctly) that was simply applied inconsistently.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  Navigation was difficult, especially when rooms got
                  smaller:
                </strong>{" "}
                main galleries comfortably met the recommended clearance
                width, but smaller specialized rooms narrowed sharply, with
                tight turns that would leave a wheelchair user with no room
                to reroute at a dead end. Most of this issue was on the
                second floor — which had no elevator, rendering the entire
                floor inaccessible to individuals with mobility impairments.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  Alternative formats were nearly absent:
                </strong>{" "}
                no braille or large-print signage existed anywhere except a
                single unrelated activity sign, and the audio guide only
                covered artifacts that already lacked written labels —
                meaning it functioned as a patch for a different problem, not
                as an accessible alternative to reading. Worse, selecting the
                correct audio guide number required reading a number printed
                behind glass, which defeated the purpose for the visually
                impaired visitors who needed the audio option most.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  Lighting created a significant barrier:
                </strong>{" "}
                the Egyptian room was dim enough (for artifact preservation)
                that even visitors with typical vision struggled to read
                labels; this room also had extremely uneven flooring,
                compounding the risk for anyone who couldn&rsquo;t see it
                clearly. Many other rooms were similarly dim, without
                adequate lighting for visitors with low vision.
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Design process: Building to WCAG 2.2
          </h2>
          <p className="leading-relaxed text-olive-soft">
            For my individual final project, I built a multi-page travel
            blog documenting my three weeks in Ireland — daily highlights, my
            favorite food, and an overview of the trip itself. The project
            let me put a full range of front-end skills to use: semantic
            HTML5 structure, CSS Grid and Flexbox for multi-column layouts
            and image galleries, responsive design (including breakpoints
            and OS-level preferences like{" "}
            <code className="rounded bg-sand-dark px-1.5 py-0.5 text-sm">
              prefers-reduced-motion
            </code>{" "}
            and{" "}
            <code className="rounded bg-sand-dark px-1.5 py-0.5 text-sm">
              prefers-color-scheme
            </code>
            ), and light JavaScript interactivity like image lightboxes.
            This was my first real experience in web development, and it was
            fascinating to apply what I was learning in class directly to
            documenting my own trip.
          </p>
          <p className="leading-relaxed text-olive-soft">
            The constraint that shaped every design decision was WCAG 2.2
            compliance, built in from the first line of code — not as a
            final check. I used WAVE and Axe DevTools throughout development
            to catch what I couldn&rsquo;t always see myself. Building for
            accessibility from the start ensures a site isn&rsquo;t gated by
            an ignorant design choice, and that everyone can actually enjoy
            the content, not just access it. A few of the specific
            guidelines I built around:
          </p>

          <div className="flex flex-col gap-10 pt-2">
            {guidelines.map((guideline, i) => (
              <div
                key={guideline.code}
                className={`flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 ${
                  i > 0 ? "border-t border-dashed border-olive/20 pt-10" : ""
                }`}
              >
                <div className="flex flex-1 flex-col gap-3">
                  <span className="inline-block w-fit rounded-full bg-lilac-tint px-2.5 py-1 text-xs font-medium text-olive">
                    {guideline.code}
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-olive">
                    {guideline.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-olive-soft">
                    {guideline.description}
                  </p>
                </div>
                <ImagePlaceholder
                  alt={guideline.photoAlt}
                  className="aspect-video w-full rounded-[2rem] shadow-lg shadow-olive/10 sm:w-2/5"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            What connects them
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Auditing a 19th-century museum building and coding a website feel
            like unrelated tasks until you notice they&rsquo;re graded on the
            same rubric. A flat description card and a missing alt attribute
            are the same failure: someone assumed that everyone experiences
            content the same way. Walking the museum with a checklist in
            hand let me see WCAG&rsquo;s more abstract guidelines —
            &ldquo;ensure sufficient contrast,&rdquo; &ldquo;support keyboard
            navigation&rdquo; — as directly connected to real physical
            barriers, not just digital ones. By examining physical UX
            failures firsthand, I could finally contextualize what digital
            accessibility design is actually protecting against.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            What I Learned
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Before this course, I had never considered the importance of
            digital accessibility. I understood the basics of physical
            accessible design — ramps, elevators, braille — but I&rsquo;d
            never noticed the connection between those and their digital
            equivalents: contrast errors, flashing content, missing
            alternative text. Three weeks of moving between real spaces and
            real code taught me how much exclusion these failures — and many
            others like them — actually cause.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Auditing the National History Museum was an eye-opening
            experience. Watching how a flat description card, a dim room, or
            a missing ramp quietly excluded someone — not through malice,
            just through a design choice nobody questioned — made every WCAG
            guideline I&rsquo;d previously seen as an abstract rule suddenly
            feel obvious and necessary. I couldn&rsquo;t read &ldquo;ensure
            sufficient color contrast&rdquo; the same way again after seeing
            what happened when a museum didn&rsquo;t.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Touring Google&rsquo;s Dublin Accessibility Discovery Center
            added another layer to that experience. Where the museum showed
            me what happens when accessibility is treated as an afterthought,
            Google&rsquo;s lab demonstrated the opposite end of the spectrum
            — teams actively designing for enjoyment, not just function, for
            people with disabilities. The Irish Wheelchair Society showed me
            that same commitment outside of a tech company entirely: they
            ran a wheelchair sport league, offered driving lessons in
            accessible cars, and held group sessions helping individuals
            adapt to life with a disability. Seeing both models — one in a
            corporate innovation lab, one in a community organization — in
            the same three weeks made the gap between &ldquo;afterthought&rdquo;
            and &ldquo;genuine commitment&rdquo; impossible to ignore.
          </p>

          <ImagePlaceholder alt="Photo from touring Google's Dublin Accessibility Discovery Center or visiting the Irish Wheelchair Society" />

          <p className="leading-relaxed text-olive-soft">
            That shift followed me directly into my own code. Building my
            travel blog, I started testing decisions against a new question:
            not &ldquo;does this technically comply,&rdquo; but &ldquo;who
            does this leave out if I get it wrong?&rdquo; That&rsquo;s a
            different design instinct than the one I walked into this course
            with, and it&rsquo;s one I don&rsquo;t think I could have
            developed from a textbook alone. It took seeing exclusion happen
            in a real room before I understood what I was actually building
            toward every time I wrote an alt tag or tested a page with a
            keyboard.
          </p>
          <p className="leading-relaxed text-olive-soft">
            This experience was especially meaningful to me as a student
            studying user-experience design. It reinforced that people do
            not all interact with spaces, information, and technology the
            same way — and that accessibility can&rsquo;t be treated as an
            afterthought. It&rsquo;s an essential part of creating
            thoughtful, inclusive experiences.
          </p>
        </section>
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
