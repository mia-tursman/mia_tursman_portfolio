import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import CaptionedImage from "@/components/CaptionedImage";
import FigmaEmbed from "@/components/FigmaEmbed";
import TableOfContents, { type TocItem } from "@/components/TableOfContents";

const project = getProject("lasso-loop-photo-app")!;
const currentIndex = projects.findIndex(
  (p) => p.slug === "lasso-loop-photo-app",
);
const nextProject = projects[(currentIndex + 1) % projects.length];

export const metadata: Metadata = {
  title: project.title,
  description: project.tagline,
};

const subheadingClass =
  "font-serif text-xl font-medium tracking-tight text-olive";

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "personas", label: "Users and personas" },
  { id: "design-process", label: "Design process" },
  { id: "current-design", label: "Where the design is now" },
  { id: "learned", label: "What I've learned so far" },
  { id: "next-steps", label: "Open questions and next steps" },
];

const details = [
  {
    term: "Course",
    value: "SI 307, University of Michigan School of Information",
  },
  { term: "Client", value: "Lasso Loop" },
  { term: "Timeline", value: "Fall 2026 (in progress)" },
  { term: "Role", value: "Solo UX Design Student" },
  {
    term: "Tools",
    value: "Figma (Figma Design, Figma Make, Auto Layout, components)",
  },
];

const personas = [
  {
    name: "Jennifer",
    type: "Primary persona",
    bio: "50, San Diego. Owns home appliances and is the core user the app is built around.",
    wants:
      "To do the right thing, with clear and simple steps. She worries about guessing wrong.",
    shaped:
      "Plain-language material cards and optional “Learn more” explanations that teach without blocking the flow.",
  },
  {
    name: "Rob",
    type: "Secondary persona",
    bio: "52, a Sacramento suburb. An appliance owner who is reluctant and skeptical.",
    wants:
      "An app that feels quick and worthwhile. He is wary of effort that doesn’t pay off.",
    shaped:
      "A short one-photo flow, a “Not sure? That’s okay.” line on the material screen, and a thank-you screen that shows his contribution count right away.",
  },
];

export default function LassoLoopPhotoAppPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-8">
      <div className="lg:grid lg:grid-cols-[200px_1fr] lg:items-start lg:gap-16">
        <TableOfContents items={toc} />
        <article className="mx-auto max-w-3xl pb-24 lg:mx-0">
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
              Designing a photo-contribution app for Lasso Loop
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-olive-soft italic">
              A semester-long product design project: from PRD to a 15-frame
              mobile flow in Figma
            </p>
          </header>

          <dl className="mb-10 grid grid-cols-1 gap-6 rounded-3xl bg-sand-light p-6 shadow-inner shadow-olive/5 sm:grid-cols-2">
            {details.map((detail) => (
              <div
                key={detail.term}
                className={detail.term === "Tools" ? "sm:col-span-2" : ""}
              >
                <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                  {detail.term}
                </dt>
                <dd className="mt-1 text-sm text-olive">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2 rounded-3xl border border-olive/10 bg-sand-light p-6">
            <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
              At a Glance
            </span>
            <p className="text-base leading-relaxed text-olive sm:text-lg">
              For a UMSI design course, I&rsquo;m designing a mobile app flow
              for Lasso Loop&rsquo;s home recycling appliance, aimed at people
              who want to recycle correctly but can&rsquo;t tell whether a
              container is recyclable. So far I&rsquo;ve built a 15-screen
              prototype in which users photograph a container, choose its
              material with reference photos and optional &ldquo;Learn
              more&rdquo; explanations, and get quick feedback as they
              contribute photos that help improve Lasso&rsquo;s AI.
            </p>
            <p className="text-base leading-relaxed text-olive sm:text-lg">
              This is a work in progress; the flow is built in Figma with Auto
              Layout and reusable components and designed with accessibility in
              mind, but it hasn&rsquo;t been tested with users yet, and I plan
              to refine it based on feedback.
            </p>
          </div>

          <CaptionedImage
            src="/lassoHero.webp"
            alt="The first four screens of the Lasso app: a yellow home screen with the Lasso logo and a Photograph a container button, a camera screen with a framing guide around a water bottle, a photo review screen with Confirm Photo and Retake buttons, and a Choose a material screen with Plastic PET selected"
            caption="Home, camera, review, and material selection"
            width={2000}
            height={990}
            className="mt-10"
          />
          <div className="flex flex-col gap-12 pt-14">
            <section id="overview" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                Overview
              </h2>
              <p className="leading-relaxed text-olive-soft">
                SI 307 is a semester-long project where each student works from
                a real client brief. Lasso Loop offered two options: the Lasso
                Cube (a public smartbin) and the Lasso Basic App (a mobile app
                for material-ID photo contributions). I chose the app brief. Its
                core task, helping everyday people learn to recycle correctly,
                connects to my Environmental Studies minor, and designing for
                people with little recycling background is the kind of UX
                problem I wanted to work on.
              </p>
              <p className="leading-relaxed text-olive-soft">
                I worked through it in stages, starting with a product
                requirements document (PRD) and ending with a high-fidelity,
                15-frame flow built in Figma.
              </p>
            </section>

            <section id="personas" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                Users and personas
              </h2>
              <p className="leading-relaxed text-olive-soft">
                I defined two personas to anchor the design. They come from the
                client brief and my PRD&rsquo;s assumptions about who would buy
                a home recycling appliance: environmentally conscious homeowners
                who care about recycling but find the system confusing. I
                haven&rsquo;t validated them with real users yet.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {personas.map((persona) => (
                  <div
                    key={persona.name}
                    className="flex flex-col gap-3 rounded-2xl bg-sand-light p-5 shadow-inner shadow-olive/5"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
                        {persona.type}
                      </span>
                      <h3 className={subheadingClass}>{persona.name}</h3>
                      <p className="text-sm leading-relaxed text-olive-soft">
                        {persona.bio}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-olive-soft">
                      <strong className="text-olive">Wants:</strong>{" "}
                      {persona.wants}
                    </p>
                    <p className="text-sm leading-relaxed text-olive-soft">
                      <strong className="text-olive">Shaped:</strong>{" "}
                      {persona.shaped}
                    </p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed text-olive-soft">
                Designing for Rob pushed me to keep the flow simple and
                low-pressure, while Jennifer kept me focused on teaching without
                getting in the way.
              </p>
            </section>

            <section
              id="design-process"
              className="flex scroll-mt-24 flex-col gap-8"
            >
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                Design process
              </h2>

              <div className="flex flex-col gap-4">
                <h3 className={subheadingClass}>PRD and early concepts</h3>
                <p className="leading-relaxed text-olive-soft">
                  The PRD defined the user problem (who, what, where, when, and
                  why) and the two personas, and it scoped the work around the
                  brief&rsquo;s single feature: contributing a photo and
                  labeling its material. My early wireframes explored three
                  different ways to capture a container: a guided single photo
                  with voice and haptic help, a &ldquo;pile mode&rdquo; for
                  photographing several containers in one sitting and reviewing
                  them one at a time, and a material-first flow where users
                  choose the material before the camera opens.
                </p>
                <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
                  <CaptionedImage
                    src="/lassoSketches.webp"
                    alt="Hand-drawn phone sketches for scanning a container, choosing the correct material, a material info screen, a Did you know education screen, a thank-you screen, editing past entries, personal impact stats, and network statistics, annotated with notes"
                    caption="Early sketches"
                    width={1188}
                    height={1870}
                    href="/lassoSketches.webp"
                  />
                  <CaptionedImage
                    src="/lassoTaskFlow.webp"
                    alt="A sketched task flow for submitting a contribution, with arrows connecting the home page, scan container, review, choose material, info pop-up, submitting, thank-you, and daily fact screens"
                    caption="Task flow for submitting a contribution"
                    width={1972}
                    height={1798}
                    href="/lassoTaskFlow.webp"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className={subheadingClass}>Brand and voice</h3>
                <p className="leading-relaxed text-olive-soft">
                  In the PRD stage, the app featured a friendly robot mascot
                  named &ldquo;Lasso&rdquo; (&ldquo;Hey, I&rsquo;m
                  Lasso!&rdquo;) in onboarding and feedback screens. In the
                  current flow, I replaced the mascot with the client&rsquo;s own
                  Lasso logo in the header so the design stayed faithful to the
                  brand. I wasn&rsquo;t happy with how the generated robot
                  looked, and using the client&rsquo;s logo avoided inventing a
                  character the client never asked for. The short, friendly
                  speech-bubble messages stayed, so the voice carried over.
                </p>
                <CaptionedImage
                  src="/lassoMascotVersion.png"
                  alt="An earlier grayscale version of the scan, review, and material screens, each with a small robot mascot giving instructions in a speech bubble"
                  caption="Earlier version with the robot mascot"
                  width={1476}
                  height={1048}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className={subheadingClass}>Narrowing to one flow</h3>
                <p className="leading-relaxed text-olive-soft">
                  For Assignment 4, I took one wireframe idea and built it into
                  a 15-frame colored flow using Figma Design, Auto Layout, and
                  5+ reusable components. The flow as it stands has the user
                  photograph the item, then self-identify the material.
                </p>
                <p className="leading-relaxed text-olive-soft">
                  I dropped an earlier barcode-scan idea because it added a step
                  before the photo and label, which are the contribution Lasso
                  actually needs. It would have slowed down a user like Rob,
                  many containers have no usable barcode, and it relied on a
                  product database the brief never mentions.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className={subheadingClass}>Designing for things going wrong</h3>
                <p className="leading-relaxed text-olive-soft">
                  I designed two non-happy states rather than just the ideal
                  path: photo not accepted and upload failed.
                </p>
                <ul className="list-disc space-y-3 pl-5 marker:text-rust-text">
                  <li className="leading-relaxed text-olive-soft">
                    <strong className="text-olive">Photo not accepted:</strong>{" "}
                    The screen shows the blurry photo with a banner that says
                    what happened and what to try (&ldquo;The photo looks
                    blurry. Try more light and hold steady.&rdquo;), with a
                    clear &ldquo;Retake photo&rdquo; button.
                  </li>
                  <li className="leading-relaxed text-olive-soft">
                    <strong className="text-olive">Upload failed:</strong> The
                    screen says the photo is saved on the phone and to check the
                    connection, with a &ldquo;Try again&rdquo; button.
                  </li>
                </ul>
                <p className="leading-relaxed text-olive-soft">
                  Both use an icon and words, not color alone, and neither
                  blames the user.
                </p>
                <CaptionedImage
                  src="/lassoErrorStates.png"
                  alt="Two error screens side by side. Left: Your photo didn't upload, with a crossed-out Wi-Fi icon, a warning banner saying the photo is saved on the phone and to check the connection, and a Try again button. Right: We couldn't use that photo, showing a blurry bottle with a warning banner saying to try more light and hold steady, and a Retake photo button. Both screens have a Cancel link."
                  caption="Non-happy states: upload failed and photo not accepted"
                  width={1332}
                  height={1354}
                  href="/lassoErrorStates.png"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className={subheadingClass}>Build process</h3>
                <p className="leading-relaxed text-olive-soft">
                  I first built the 15 frames in Figma Make, then rebuilt them
                  in Figma Design so the file used proper Auto Layout and
                  components instead of generated output. The generated frames
                  came in with nested fixed-width layouts, icons that showed up
                  as text, and layers that didn&rsquo;t stretch. I learned to
                  build the shared components first, set widths to Fill
                  container from the outside in, and test by dragging a frame
                  wider and narrower.
                </p>
                <CaptionedImage
                  src="/lassoComponents.png"
                  alt="The Figma component board: header variants with the Lasso logo, primary and secondary buttons, Learn more buttons, the bottom navigation bar, an icon set, material cards in default and selected states, and radio rows for editing a material"
                  caption="Reusable component library"
                  width={1866}
                  height={1754}
                  href="/lassoComponents.png"
                />
              </div>
            </section>

            <section
              id="current-design"
              className="flex scroll-mt-24 flex-col gap-4"
            >
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                Where the design is now
              </h2>
              <p className="leading-relaxed text-olive-soft">
                This is the first walkthrough for 15 stages of the flow, not a
                finished solution. It shows the direction I&rsquo;ve chosen and
                the decisions I&rsquo;m still testing for future iterations.
              </p>
              <p className="leading-relaxed text-olive-soft">
                A user opens the app on a home screen that explains in one line
                what it does and offers one clear action, &ldquo;Photograph a
                container,&rdquo; with &ldquo;Learn about recycling&rdquo; as a
                quieter option. The camera screen shows a framing guide, short
                written tips, and voice and flash controls beside the shutter.
                After the photo, the user reviews it and either uses it or
                retakes it.
              </p>
              <p className="leading-relaxed text-olive-soft">
                Next, they choose the material from a list of cards, each with a
                reference photo, a plain name, and a one-line description.
                &ldquo;Learn more&rdquo; opens a short explanation with example
                photos, and &ldquo;Unknown/other&rdquo; is a normal choice. The
                user confirms the material and gets immediate feedback on
                recyclability, then sends the contribution.
              </p>
              <p className="leading-relaxed text-olive-soft">
                A thank-you screen shows how many containers they have shared and
                a &ldquo;Did you know?&rdquo; fact. My Contributions lets them
                review past photos, edit a material, or delete a contribution,
                and deleting asks for confirmation with &ldquo;Keep photo&rdquo;
                as the main button. I expect parts of this to change once I can
                put it in front of users.
              </p>
              <p className="leading-relaxed text-olive-soft">
                You can explore the full Figma file below. Drag to pan, and
                scroll or pinch to zoom.
              </p>
              <FigmaEmbed
                src="https://embed.figma.com/design/RHYxlkSr6HM6N1kqvbSeNF/SI-307--Assignment-4-Mia-Tursman--Copy-?node-id=0-1&embed-host=share"
                title="Interactive Figma file for the Lasso photo-contribution app, showing all screens, the flow between them, and the component library"
                caption="The Figma file"
                openUrl="https://www.figma.com/design/RHYxlkSr6HM6N1kqvbSeNF/SI-307--Assignment-4-Mia-Tursman--Copy-?node-id=0-1"
              />
            </section>

            <section id="learned" className="flex scroll-mt-24 flex-col gap-8">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                What I&rsquo;ve learned so far
              </h2>
              <p className="leading-relaxed text-olive-soft">
                Designing for the persona Rob has led most of my decisions so
                far. A skeptical user judges an app by how much it asks of them,
                so I cut out the barcode step I originally considered, kept the
                flow to one photo, and made &ldquo;Unknown/other&rdquo; a
                possible answer for users unsure of what to choose. I&rsquo;ve
                also learned to design error states to be part of the
                experience: someone who hits a failed upload decides whether to
                trust the app, so what that screen says matters as much as the
                happy path.
              </p>
              <p className="leading-relaxed text-olive-soft">
                Rebuilding the generated frames by hand showed me the gap
                between output that looks finished and a file that actually
                works. The initial frames generated with Figma Make fell apart
                when I resized them, so I built the shared components first
                (button, header, navigation bar, material card, and contribution
                row) and converted every item to the correct Auto Layout format
                by hand. It is clear that AI tools cannot recreate the same
                formats and styles that humans can, so I have learned it is
                necessary that I understand how to use Figma tools and design
                principles.
              </p>
            </section>

            <section
              id="next-steps"
              className="flex scroll-mt-24 flex-col gap-8"
            >
              <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
                Open questions and next steps
              </h2>
              <p className="leading-relaxed text-olive-soft">
                This design hasn&rsquo;t been tested with users, so the biggest
                open question is whether choosing a material from photos and
                short descriptions actually helps people decide correctly. Other
                questions I&rsquo;m still working through: whether the voice
                guidance (shown as a control, not built) is worth building for
                accessibility standards, whether the &ldquo;Did you know?&rdquo;
                and recyclability messages teach anything or just add steps, and
                whether there is any friction throughout the flow.
              </p>
              <p className="leading-relaxed text-olive-soft">
                Next, I plan to iterate new designs in Figma until I reach a
                final fully designed flow for the app. Currently, there are only
                15 screens; by the end of the semester I will have every
                possible screen for the application designed. The final step is
                to create a slide deck walking through my design process and
                presenting the final files to the stakeholder, Lasso Loop.
              </p>
            </section>
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-dashed border-olive/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </div>
  );
}
