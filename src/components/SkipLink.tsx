"use client";

import { usePathname } from "next/navigation";

export default function SkipLink() {
  const pathname = usePathname();
  const href = pathname === "/" ? "#work" : "#main-content";

  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-marigold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lg focus:shadow-olive/20"
    >
      Skip to main content
    </a>
  );
}
