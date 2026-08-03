import Link from "next/link";
import { contact } from "@/lib/contact";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-sand shadow-md shadow-olive/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-olive"
        >
          {contact.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-olive-soft">
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
            href={`mailto:${contact.email}`}
            className="rounded-full bg-marigold px-4 py-1.5 font-medium text-ink transition-colors hover:bg-marigold-dark"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
