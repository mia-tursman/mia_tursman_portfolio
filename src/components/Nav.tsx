"use client";

import { useState } from "react";
import Link from "next/link";
import { contact } from "@/lib/contact";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-sand shadow-md shadow-olive/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-olive"
        >
          {contact.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-olive-soft sm:flex">
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/#work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-marigold px-4 py-1.5 font-medium text-olive transition-colors hover:bg-marigold hover:text-ink"
          >
            Resume
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-marigold px-4 py-1.5 font-medium text-ink transition-colors hover:bg-marigold-dark"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-olive transition-colors hover:bg-sand-light sm:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-olive/10 px-6 pb-5 sm:hidden">
          <Link
            href="/about"
            onClick={close}
            className="rounded-lg px-2 py-2.5 text-base text-olive-soft transition-colors hover:bg-sand-light hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/#work"
            onClick={close}
            className="rounded-lg px-2 py-2.5 text-base text-olive-soft transition-colors hover:bg-sand-light hover:text-ink"
          >
            Work
          </Link>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="rounded-lg px-2 py-2.5 text-base text-olive-soft transition-colors hover:bg-sand-light hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-2 rounded-full border border-marigold px-4 py-2.5 text-center text-base font-medium text-olive transition-colors hover:bg-marigold hover:text-ink"
          >
            Resume
          </a>
          <a
            href={`mailto:${contact.email}`}
            onClick={close}
            className="mt-2 rounded-full bg-marigold px-4 py-2.5 text-center text-base font-medium text-ink transition-colors hover:bg-marigold-dark"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
