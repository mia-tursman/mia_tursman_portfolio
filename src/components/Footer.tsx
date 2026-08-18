import { contact } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="mt-24 bg-sand-dark shadow-[0_-8px_28px_-16px_rgba(92,110,78,0.35)]">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 px-6 py-8 text-sm text-olive-soft sm:px-8">
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
    </footer>
  );
}
