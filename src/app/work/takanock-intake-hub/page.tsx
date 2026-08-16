import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import CaptionedImage from "@/components/CaptionedImage";

const project = getProject("takanock-intake-hub")!;
const currentIndex = projects.findIndex(
  (p) => p.slug === "takanock-intake-hub",
);
const nextProject = projects[(currentIndex + 1) % projects.length];

export const metadata: Metadata = {
  title: project.title,
  description: project.tagline,
};

const listClass = "list-disc space-y-3 pl-5 marker:text-rust-text";
const olClass = "list-decimal space-y-3 pl-5 marker:font-medium marker:text-rust-text";
const liClass = "leading-relaxed text-olive-soft";

export default function TakanockIntakeHubPage() {
  return (
    <article className="mx-auto max-w-3xl overflow-x-hidden px-6 pb-24 sm:px-8">
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
          Takanock Intake Hub
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-olive-soft italic">
          One front door for IT, GIS, and Automation requests — with
          AI-driven routing and status tracking
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

      <div className="mb-10 flex flex-col gap-2 rounded-3xl border border-olive/10 bg-sand-light p-6">
        <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
          At a Glance
        </span>
        <p className="text-base leading-relaxed text-olive sm:text-lg">
          IT and GIS requests at Takanock were untracked, scattered
          across Slack and email, with no visibility for the people
          submitting them or the people fulfilling them. I built a
          unified intake app that moved the entire experience off
          Claude entirely — removing the setup barrier that discovery
          interviews showed was stopping people from using automation
          tools in the first place.
        </p>
      </div>

      <Image
        src="/intakeHome.jpeg"
        alt="The Takanock Intake Hub homepage, showing the Assistant tab alongside Submit a Request and Check My Ticket"
        width={2756}
        height={1892}
        className="h-auto w-full rounded-[2.5rem] shadow-lg shadow-olive/10"
      />

      <div className="flex flex-col gap-12 pt-14">
        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Overview
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Before this project, IT and GIS (Geographic Information System)
            requests at Takanock arrived as untracked Slack messages or word
            of mouth, and automation ideas were submitted through a complex
            Claude skill. As the company scales from roughly 33 to 50+
            people, that fragmentation can become a problem fast. I built the
            Takanock Intake Hub: a single deployed web app that gives every
            employee one place to submit IT, GIS, and Automation requests;
            this application also includes an AI assistant that can tell you
            who to contact if your issue doesn&rsquo;t fit any of those
            categories. This was my official capstone project of my
            internship at Takanock, and the one where I made the strongest
            independent decisions about how it should be built.
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-6 rounded-3xl bg-sand-light p-6 shadow-inner shadow-olive/5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Role
              </dt>
              <dd className="mt-1 text-sm text-olive">
                UX Design, Research, Front-end Development, Workflow Design
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-olive">
                Summer 2026 internship (evolved across the full internship)
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Tools
              </dt>
              <dd className="mt-1 text-sm text-olive">
                Next.js (migrated from vanilla HTML/CSS), Airtable, Vercel,
                Claude API
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-olive-soft uppercase">
                Live Site
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href="https://takanock-hub-mia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust-text transition-colors hover:text-rust-text-hover"
                >
                  takanock-hub-mia.vercel.app
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            The Problem
          </h2>
          <p className="leading-relaxed text-olive-soft">
            There was no standard way to raise a request, track it, or know
            who owned it. Two specific gaps, both flagged directly by Jacob
            Paul (Senior Manager, GIS and Data Systems), began the process of
            understanding this problem:
          </p>

          <div className="flex flex-col gap-4 rounded-3xl border border-olive/10 bg-sand-light p-6">
            <span className="text-xs font-medium tracking-wide text-rust-text uppercase">
              Two specific gaps
            </span>
            <ul className={listClass}>
              <li className={liClass}>
                <strong className="text-olive">
                  IT and data requests:
                </strong>{" "}
                15–25 requests per week arrived through unstructured channels
                — Slack DMs, email, verbal asks — with no central log, no
                assignment workflow, and no status tracking. Jacob was
                fielding these requests personally, and they were getting
                lost across Slack and Outlook notifications without him
                having time to catalog them. Takanock had also just brought
                on a new IT hire, Charles, and there was no system in place
                to smoothly route requests to him either.
              </li>
              <li className={liClass}>
                <strong className="text-olive">
                  GIS requests from Development:
                </strong>{" "}
                these came in the same way as IT requests — with no standard
                format. This caused duplicate submissions and unclear scope.
                There was no routing and no way to categorize work for
                prioritization and action tracking.
              </li>
            </ul>
          </div>

          <Image
            src="/intakeProblem.jpeg"
            alt="An original IT Helpdesk & Data Request Intake Form submission from Jacob Paul describing the unstructured, untracked request problem this project was built to solve"
            width={1612}
            height={1696}
            className="h-auto w-full rounded-2xl shadow-lg shadow-olive/10"
          />

          <p className="leading-relaxed text-olive-soft">
            As Takanock scales from roughly 33 to 50+ people, these problems
            become more apparent — more people meant more untracked
            requests, with no system to organize, share, and complete the
            tasks. Further, there was no transparency in the status of open
            requests for the submitter to view.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Research
          </h2>
          <p className="leading-relaxed text-olive-soft">
            This project didn&rsquo;t start as a usable application, it grew
            directly out of a request from Jacob: build an intake system
            that collects both IT and GIS requests into Airtable for his
            review, so he could better organize incoming work, smooth
            Charles&rsquo;s onboarding into IT support, and stop losing
            track of requests in Slack and Outlook notifications.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Jacob&rsquo;s original vision was for this to live inside Claude
            as an internal skill. I made the call to build it as a separate
            application instead; this decision came from a broader pattern
            I&rsquo;d noticed over the internship, backed by real evidence
            from my discovery interviews. I specifically asked employees
            whether they&rsquo;d used the existing automation intake skill in
            Claude to submit AI requests, and many hadn&rsquo;t — some
            didn&rsquo;t know it existed, some knew about it but
            didn&rsquo;t know how to set it up, and others said they simply
            didn&rsquo;t have time to figure out the setup even if they
            wanted to. It wasn&rsquo;t that people lacked automation ideas
            worth submitting; it was that the tool asking them to open
            Claude and configure a skill was the barrier itself.
          </p>
          <p className="leading-relaxed text-olive-soft">
            That pattern confirmed what I suspected: it isn&rsquo;t actually
            useful for us to build tools that require employees to open
            Claude, connect the right integrations, and figure out an
            unfamiliar interface before they can use them. Our job is to
            bridge the gap between employees and the tools, not hand people a
            new tool and a learning curve at the same time. If the Intake Hub
            had stayed inside Claude, someone would&rsquo;ve had to connect
            their own Airtable, navigate Claude&rsquo;s interface, and
            install the skill correctly just to submit an IT ticket — the
            same setup barrier my interviews had already shown was stopping
            people from using the automation intake skill. Instead, I did
            that technical work once, up front, so nobody using the Hub ever
            has to.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Seeing Jacob&rsquo;s IT and GIS requests come in through the same
            underlying pattern was what caused this to be a single project
            instead of two separate fixes. That&rsquo;s also when I pitched
            it as my main capstone project: merging the existing Claude
            skills into one flow would have just reorganized work I&rsquo;d
            already done. The version worth building moved the entire
            interaction off Claude and onto a deployed web app anyone at the
            company could use without needing a Claude seat — with Claude
            still doing the actual processing, just in the background
            instead of at the front door. It is unfair to require employees
            to learn new skills just to submit a request to IT, which was the
            exact reason I was there to help with designing for a better
            user experience.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            Design Process
          </h2>
          <p className="leading-relaxed text-olive-soft">
            From Claude skill, to standalone app, to unified hub; this
            project went through three iterations before reaching the final
            application:
          </p>

          <ol className={olClass} start={1}>
            <li className={liClass}>
              <strong className="text-olive">
                IT-Help-Desk Claude skill:
              </strong>{" "}
              The earliest version lived entirely inside Claude and was
              modeled after an existing intake project where users submit AI
              automation ideas to be reviewed. While this was functional, it
              was only reachable by people who had an active Claude seat, had
              the time to set up the Airtable integration manually, and knew
              how to download the skill.
            </li>
          </ol>

          <ol className={olClass} start={2}>
            <li className={liClass}>
              <strong className="text-olive">
                Standalone IT Help Desk Vercel app:
              </strong>{" "}
              I rebuilt it as its own deployed tool (tak-it-help.vercel.app),
              so any employee could submit a request through a normal web
              page with no Claude account required. This version alone
              handled real requests, with a working Airtable backend and an
              automated weekly report to stakeholders. However, it was
              extremely limited as a standalone tool, which proved to be a
              barrier in widespread usage — the company does not want to
              implement many standalone, disorganized tools.
            </li>
          </ol>

          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <div className="mx-auto max-w-5xl px-6 sm:px-8">
              <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
                <CaptionedImage
                  src="/intakeSkill.jpeg"
                  alt="The original it-help-desk Claude skill configuration, showing its description and Airtable field mapping"
                  caption="v1 — Claude skill"
                  width={3116}
                  height={1968}
                />
                <CaptionedImage
                  src="/originalIntake.jpeg"
                  alt="The earlier standalone Takanock IT Help Desk web app, showing its chat-style support request form"
                  caption="v2 — Standalone app"
                  width={2336}
                  height={1834}
                />
              </div>
            </div>
          </div>

          <ol className={olClass} start={3}>
            <li className={liClass}>
              <strong className="text-olive">
                The unified Takanock Intake Hub:
              </strong>{" "}
              After creating the IT help desk application, I started the GIS
              intake form, and realized the similarities between them. This
              gave me the idea to merge them into one app with the option to
              submit IT, GIS, and even Automation requests. This app also
              contains an option to chat with an assistant about which
              category is best for the request, or who to contact if there
              is not a designated form. Finally, I added a status checker
              that allows an employee to type in their email address and
              view the status of tickets they have submitted within the
              past ten days.
            </li>
          </ol>

          <p className="leading-relaxed text-olive-soft">
            A few decisions that were applied to the final build:
          </p>

          <ul className={listClass}>
            <li className={liClass}>
              <strong className="text-olive">Chat-based routing:</strong> The
              Assistant tab lets someone describe their issue in plain
              language rather than picking a category first. This mattered
              because the whole point of moving off Claude was accessibility;
              if people still had to correctly guess &ldquo;is this IT, GIS,
              or Automation&rdquo; before they could even start, the tool
              would fail the people it was meant to help. The Assistant can
              also tell someone who to contact directly if their issue
              doesn&rsquo;t fit any of the three intake types at all — for
              example, routing a project budget question to the right
              project director and finance contact instead of forcing it
              into a form that doesn&rsquo;t apply.
            </li>
          </ul>

          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 sm:px-8">
              <div className="overflow-hidden rounded-[2rem] border border-olive/15 bg-sand-light shadow-lg shadow-olive/15">
                <div className="flex items-center gap-1.5 border-b border-olive/10 px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rust/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-marigold/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lilac/50" />
                  <span className="ml-2 text-xs font-medium tracking-wide text-olive-soft uppercase">
                    Assistant — Live Conversation
                  </span>
                </div>
                <div className="h-[min(85vh,900px)] overflow-y-auto overscroll-contain">
                  <Image
                    src="/intakeWalkthrough1.jpeg"
                    alt="Screenshot of the Takanock Assistant chat: a user reporting they can't access their Slack account and providing their name and department to start a support ticket"
                    width={1290}
                    height={1274}
                    sizes="100vw"
                    className="block h-auto w-full"
                  />
                  <Image
                    src="/intakeWalkthrough2.jpeg"
                    alt="Screenshot of the Takanock Assistant chat: the assistant asking clarifying questions about which app the issue is happening on and when it started"
                    width={1278}
                    height={868}
                    sizes="100vw"
                    className="block h-auto w-full"
                  />
                  <Image
                    src="/intakeWalkthrough3.jpeg"
                    alt="Screenshot of the Takanock Assistant chat: the assistant summarizing the ticket details and confirming submission after the user replies yes"
                    width={1290}
                    height={1340}
                    sizes="100vw"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
              <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-olive-soft">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M12 5v13m0 0l-5-5m5 5l5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Scroll within the window to see the full conversation
              </p>
            </div>
          </div>

          <ul className={listClass}>
            <li className={liClass}>
              <strong className="text-olive">Status checks:</strong> I added
              the Check My Ticket feature specifically to create
              transparency between the person requesting help and the team
              fulfilling it. When discussing the idea with Jacob, we decided
              it would be helpful for individuals to receive a notification
              when their request was marked complete; while the notification
              does still happen, I decided to take this a step further and
              created a page that pulls the ticket information from Airtable
              and provides the person the current status of their request.
              Entering an email surfaces the request&rsquo;s category, date,
              description, and current status — this implementation closes
              the loop that used to end the moment someone sent a Slack
              message into the void, with no idea whether anyone had even
              seen it.
            </li>
          </ul>

          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <div className="mx-auto max-w-5xl px-6 sm:px-8">
              <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
                <CaptionedImage
                  src="/intakeBase.jpeg"
                  alt="An Airtable record in the Takanock Intake Hub Database showing Mia Tursman's Slack access request, with status, department, and description fields"
                  caption="Airtable record"
                  width={2742}
                  height={1886}
                />
                <CaptionedImage
                  src="/intakeTicket.jpeg"
                  alt="The Check My Ticket page listing an employee's submitted IT, GIS, and Automation requests with their current status"
                  caption="Check My Ticket page"
                  width={2746}
                  height={1886}
                />
              </div>
            </div>
          </div>

          <ul className={listClass}>
            <li className={liClass}>
              <strong className="text-olive">
                Migrating from vanilla HTML/CSS to Next.js:
              </strong>{" "}
              The original IT Help Desk app was plain HTML/CSS/JS. As the
              project grew into a multi-intake hub, I researched what the
              industry standard was for a maintainable, scalable front end,
              and Next.js&rsquo;s component-based structure made it far
              easier for myself and future editors to adjust and extend
              individual pieces without touching everything else. I brought
              this recommendation to my supervisor Ivan Benavides, and he
              agreed it was the right call before I made the switch.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            The Solution
          </h2>
          <p className="leading-relaxed text-olive-soft">
            The Takanock Intake Hub is a Next.js web app with three tabs: an
            AI Assistant that routes plain-language requests (or points
            people to the right contact directly), a Submit a Request form
            for IT Help Desk, GIS Requests, and Automation Ideas, and a Check
            My Ticket lookup by email. Each request type writes to its own
            Airtable base for the correct employee to review, track, and act
            on. It&rsquo;s installable as a desktop app directly from the
            browser, and documented with a full SOP so the system survives
            past my internship. It&rsquo;s also built to extend, and new
            request types beyond IT, GIS, and Automation can be added without
            redesigning the whole system.
          </p>

          <Image
            src="/IntakeOptions.jpeg"
            alt="The Submit a Request form's category dropdown, showing IT Help Desk, GIS Request, and Automation Idea as options"
            width={1354}
            height={1732}
            className="mx-auto h-auto w-full max-w-xs rounded-2xl shadow-lg shadow-olive/10 sm:max-w-sm"
          />
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl font-medium tracking-tight text-olive">
            What I Learned
          </h2>
          <p className="leading-relaxed text-olive-soft">
            Working on the Intake Hub, I learned that our job isn&rsquo;t to
            build things that require users to open Claude and figure out
            which connectors are necessary to make something work —
            it&rsquo;s to bridge the gap between employees and the tools.
            Users don&rsquo;t want to take the time to learn Claude; we
            should be building things that run without any learning curve
            for the people using them. That belief is why I made the call to
            separate the Intake Hub from the Claude desktop entirely, even
            though that wasn&rsquo;t the original ask.
          </p>
          <p className="leading-relaxed text-olive-soft">
            Had this stayed in Claude, people would have had to connect
            their own Airtable, figure out an often confusing interface, and
            download the skill correctly. Instead, I did that technical work
            myself, building an independent application with no learning
            curve required to use it. I think that&rsquo;s a different kind
            of ownership than just building what was asked for; it meant
            trusting my own read of the actual problem over the first
            proposed solution.
          </p>
          <p className="leading-relaxed text-olive-soft">
            I also really enjoyed learning the ins and outs of developing
            software using Claude Code through this project. I&rsquo;m happy
            I was able to take a fairly simple original task and expand it
            into something more user-friendly. This was not just functional,
            but something Jacob and the team could actually rely on to solve
            the problem they came to me with in the first place.
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
