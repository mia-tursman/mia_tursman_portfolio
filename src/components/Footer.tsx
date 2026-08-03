import { contact } from "@/lib/contact";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="mt-24 bg-sand-dark shadow-[0_-8px_28px_-16px_rgba(92,110,78,0.35)]">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-4 px-6 py-8 text-sm text-olive-soft sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {contact.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
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
            className="transition-colors hover:text-ink"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
