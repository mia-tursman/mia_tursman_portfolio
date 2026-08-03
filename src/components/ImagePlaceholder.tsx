export default function ImagePlaceholder({
  alt,
  className = "aspect-video w-full",
}: {
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={`flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-olive/30 bg-sand-light px-6 py-10 text-center shadow-inner shadow-olive/5 ${className}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-olive/40"
      >
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <path
          d="M3.5 16.5L9 11L13 15L16.5 11.5L20.5 16.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <figcaption className="max-w-md text-sm leading-relaxed text-olive-soft">
        {alt}
      </figcaption>
    </figure>
  );
}
