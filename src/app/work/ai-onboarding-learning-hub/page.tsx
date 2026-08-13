import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const project = getProject("ai-onboarding-learning-hub")!;
const currentIndex = projects.findIndex(
  (p) => p.slug === "ai-onboarding-learning-hub",
);
const nextProject = projects[(currentIndex + 1) % projects.length];

export const metadata: Metadata = {
  title: project.title,
  description: project.tagline,
};

const listClass = "list-disc space-y-3 pl-5 marker:text-rust-text";
const liClass = "leading-relaxed text-olive-soft";

export default function AiOnboardingLearningHubPage() {
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
          AI Onboarding Learning Hub
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-olive-soft italic">
          A guided, AI-assisted learning experience that walks new hires
          through Takanock&rsquo;s Claude tools
        </p>
        <p className="max-w-2xl leading-relaxed text-olive-soft">
          During the summer of 2026, I interned at a startup called
          &ldquo;Takanock.&rdquo; This company is a renewable energy and data
          center infrastructure company based out of offices in Michigan,
          Maryland, and Texas. As the industry scales fast, teams at Takanock
          often grow faster than their internal tools and processes — which
          is exactly the gap this project addressed.
        </p>
      </header>

      <ImagePlaceholder
        alt="Homepage screenshot of the live AI Onboarding Learning Hub site"
        className="aspect-video w-full rounded-[2.5rem]"
      />

      <div className="flex flex-col gap-12 pt-14">
        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Overview
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Takanock&rsquo;s onboarding process relied heavily on
            overwhelming documents — PDFs new hires were expected to read
            through on their own, with no easy way to ask questions and no
            way to track what people actually understood versus what
            confused them. As part of my internship, I designed and built the
            AI Onboarding Learning Hub: a guided web-based learning
            experience that walks new hires through Claude tools and how
            they are implemented into the company, with a built-in chatbot
            to answer questions in real time and surface recurring pain
            points to the team.
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-6 rounded-3xl bg-sand-light p-6 shadow-inner shadow-olive/5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Role
              </dt>
              <dd className="mt-1 text-sm text-olive">
                UX Design, Research, Vibe-coded Front-end Development
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-olive">4 weeks</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Tools
              </dt>
              <dd className="mt-1 text-sm text-olive">
                HTML/CSS/JS, Airtable, Claude Code, Vercel serverless
                functions, Claude API
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Live Site
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href="https://takanock-ai-onboarding-101.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust-text transition-colors hover:text-rust-text-hover"
                >
                  takanock-ai-onboarding-101.vercel.app
                </a>
              </dd>
            </div>
          </dl>

          <div className="flex flex-col gap-2 rounded-3xl border border-olive/10 bg-sand-light p-6">
            <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
              At a Glance
            </span>
            <p className="text-base leading-relaxed text-olive sm:text-lg">
              New hires at Takanock were handed dense PDFs about AI tools
              with no structure and no way to ask questions. I built a
              guided, chatbot-driven learning hub that walks people through
              Claude tools step by step — and logs every question asked,
              turning onboarding into something that keeps improving
              instead of a one-time document dump.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            The Problem
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Employees and new hires at Takanock were handed documents about
            AI implementation with no clear guideline of where to start and
            how to fit this learning into their incredibly busy schedules.
            This created a few specific issues:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "No way to ask a clarifying question without interrupting a coworker",
              "No visibility into which parts of onboarding were actually confusing people",
              "No clear guidance or visual elements to aid with learning AI in the workplace",
              "People are busy with their jobs and are unsure of where to begin learning Claude",
            ].map((issue) => (
              <div
                key={issue}
                className="flex gap-3 rounded-2xl bg-sand-light p-5 shadow-inner shadow-olive/5"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-rust-text"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M12 7.5v5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="16.25" r="1" fill="currentColor" />
                </svg>
                <p className="text-sm leading-relaxed text-olive-soft">
                  {issue}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Research
          </h2>
          <div className="flex flex-col items-start gap-2 rounded-3xl bg-sand-light px-6 py-5 shadow-inner shadow-olive/5 sm:w-fit">
            <span className="font-serif text-5xl font-medium tracking-tight text-rust-text sm:text-6xl">
              16
            </span>
            <span className="max-w-xs text-sm leading-snug text-olive-soft">
              discovery interviews across Commercial, Development, Finance,
              Legal, and Operations
            </span>
          </div>

          <p className="leading-relaxed text-olive-soft">
            To understand the real pain points across this company before
            designing a solution, I conducted 16 semi-structured discovery
            interviews across departments — Commercial, Development,
            Finance, Legal, and Operations. Each interview explored current
            tool usage, workflow efficiency and pain points, and comfort
            level with AI tools like Claude.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Synthesizing across interviews, one insight stood out as a clear
            signal: employees were expected to adopt Claude into their busy
            schedules with no structured onboarding or training materials.
            This wasn&rsquo;t just a training gap — it was a mismatch between
            the pace of the tool rollout and the support employees needed to
            actually use it. As Stephanie, our HR lead, described it,
          </p>
          <blockquote className="border-l-4 border-lilac bg-lilac-tint py-4 pr-6 pl-6 text-lg leading-relaxed text-olive italic">
            &ldquo;Just tell AI to do it&rdquo; had become a common phrase
            among the AI-forward team members, but there was no roadmap and
            no one accountable for making it work.
          </blockquote>
          <p className="leading-relaxed text-olive-soft">
            This finding reframed the problem for me: the issue wasn&rsquo;t
            that Claude was hard to use — I learned the essentials within my
            summer here — it was that the adoption expectations were moving
            faster than the onboarding process. That distinction shaped the
            Learning Hub&rsquo;s design; instead of another static FAQ page,
            it needed to be a guided, ongoing support system that could keep
            pace with how the tool was actually being rolled out.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Design Process
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Given the short timeline for solving the AI implementation
            problem, I moved quickly from research into prototyping. I used
            Claude Code to help me iterate on a front-end design; this
            medium allowed me to test design decisions in real time on a
            working model, rather than a static mockup. A few decisions that
            shaped the build:
          </p>

          <ImagePlaceholder alt="Photo of rough early sketches and planning notes for the Learning Hub" />

          <div className="flex flex-col gap-4 rounded-3xl border border-olive/10 bg-sand-light p-6">
            <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
              Decisions I made
            </span>
            <ul className={listClass}>
              <li className={liClass}>
                <strong className="text-olive">
                  Step-by-step over document dump:
                </strong>{" "}
                Given the research finding that employees didn&rsquo;t lack the
                ability to learn Claude, just the structure to fit it into
                their schedule, I designed the hub as a guided sequence rather
                than a long reference document. This layout provided
                instructions on what to do next, rather than a large dump of
                knowledge with no clear roadmap.
              </li>
              <li className={liClass}>
                <strong className="text-olive">An interactive chatbot:</strong>{" "}
                Since the research showed people had no easy way to ask a
                clarifying question without pulling a coworker away from their
                own work, I added a running chatbot to work as the main
                mechanism for surfacing confusion in real time.
              </li>
              <li className={liClass}>
                <strong className="text-olive">Building visibility:</strong> I
                decided to back the chatbot with Airtable, creating a database
                that collected the major themes users asked the chatbot about.
                This design decision allows the research and AI team to truly
                understand where there are learning disconnects.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  Examples make abstractions concrete:
                </strong>{" "}
                Rather than just describing Claude tools conceptually, I added
                concrete examples of what TKN teams were actually using them
                for — a small change, but it turned an abstract &ldquo;here&rsquo;s
                a tool&rdquo; into &ldquo;here&rsquo;s how someone on your team
                already uses it.&rdquo;
              </li>
            </ul>
          </div>

          <ImagePlaceholder alt="Screenshot of the Airtable table logging FAQ themes and questions collected from the chatbot" />

          <ImagePlaceholder alt="Screenshot of the Learning Hub chatbot answering a user's question in action" />

          <p className="leading-relaxed text-olive-soft">
            Following the initial design, we shipped a version one to be
            used company-wide and offered a chance for users to send
            feedback. This process surfaced several structural gaps I
            hadn&rsquo;t caught on my own:
          </p>

          <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-lilac/50 bg-lilac-tint p-6">
            <span className="text-xs font-medium tracking-wide text-lilac uppercase">
              Feedback I received
            </span>
            <ul className={listClass}>
              <li className={liClass}>
                <strong className="text-olive">
                  A responsive layout bug:
                </strong>{" "}
                Camden Brown (Chief Development Officer) pointed out that the
                site wasn&rsquo;t adapting properly to wide screens —
                something I&rsquo;d missed while focused on optimizing for
                smaller screens. It was a good check on my own blind spot:
                I&rsquo;d been testing on one end of the responsive spectrum
                and assumed the other end was fine.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  Skills needed grouping, not just listing:
                </strong>{" "}
                Camden pointed out that company skills should be organized by
                software (PowerPoint vs. Word vs. Outlook, etc.) rather than
                as a flat list — which pushed me to think about tagging or
                subgrouping as a way to make the hub organized and
                understandable.
              </li>
            </ul>
          </div>

          <p className="leading-relaxed text-olive-soft">
            Through this design process, I also ran into an encoding issue
            during deployment that corrupted various symbols — including
            garbled character strings like &quot;&acirc;&euro;&rdquo;&quot;
            instead of an em dash. This was a good reminder that
            &ldquo;vibe-coded&rdquo;
            doesn&rsquo;t mean untested, and that I always need to have a
            solid understanding of the basics of HTML in order to review
            Claude Code&rsquo;s work.
          </p>

          <ImagePlaceholder alt="Screenshot (or recreated mockup) of the garbled character encoding bug, e.g. â€” appearing instead of an em dash" />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            The Solution
          </h2>
          <p className="leading-relaxed text-olive-soft">
            I built a plain HTML/CSS/JS site structured as a step-by-step
            walkthrough of Claude tools, paired with an embedded
            FAQ-tracking chatbot backed by Airtable. The code is stored in
            GitHub and hosted through Vercel.
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            What I Learned
          </h2>
          <p className="leading-relaxed text-olive-soft">
            A major takeaway I had throughout this process was the
            disconnect between employees and their superiors. It is easy for
            a company to throw onboarding material at individuals without
            realizing how disorganized and complicated the information is.
            I was excited to speak firsthand with employees and bridge the
            gaps in the AI learning process. It is easy to assume that
            everyone learns the same way, which is why it is crucial to
            receive feedback and build an understanding of how to share
            important company teaching materials.
          </p>
          <p className="leading-relaxed text-olive-soft">
            That belief showed up directly in how I approached the build.
            Building the FAQ-tracking chatbot changed how I thought about
            &ldquo;finishing&rdquo; a design; it would have been easy to
            treat the hub as done once the walkthrough and chatbot were
            live, but logging every question meant it kept generating its
            own research after launch, which reframed the project less as a
            one-time deliverable and more as a system I needed to keep
            tending.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Moving fast with Claude Code rather than formal
            wireframes let me test real interaction patterns sooner than a
            traditional design process would have, but it came with real
            trade-offs, like fixing bugs after they&rsquo;d already shipped
            rather than catching them earlier on paper. If I did this
            again, I&rsquo;d build in a lightweight review step before
            deployment rather than relying entirely on stakeholders to
            catch what I&rsquo;d missed — not to slow down the process, but
            to make the feedback loop something I designed for rather than
            something that happened to me.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Because my internship ended shortly after v1 shipped, I
            didn&rsquo;t get to see longer-term outcomes like adoption rates
            or FAQ trends over time — which is its own lesson in designing
            for handoff: making sure the Airtable logging and documentation
            were clear enough that Ivan and the team could keep learning
            from the tool without me there to interpret it.
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
