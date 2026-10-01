"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  label: string;
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Treat a band near the top of the viewport as "current" so the
      // active link updates a little before a section's heading reaches
      // the very top (which would be hidden under the sticky nav anyway).
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-44 shrink-0 flex-col gap-1 self-start overflow-y-auto pb-10 lg:flex"
    >
      <span className="mb-2 px-3 text-xs font-medium tracking-wide text-olive-soft/70 uppercase">
        On this page
      </span>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`rounded-lg border-l-2 px-3 py-1.5 text-sm leading-snug transition-colors ${
              isActive
                ? "border-rust-text font-medium text-rust-text"
                : "border-transparent text-olive-soft hover:border-olive/30 hover:text-olive"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
