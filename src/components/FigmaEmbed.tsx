// Interactive Figma file or prototype, styled to sit alongside CaptionedImage.
// `src` is the iframe src from Figma's Share → "Get embed code". The fixed
// aspect ratio reserves space so the page doesn't jump while Figma loads.
export default function FigmaEmbed({
  src,
  title,
  caption,
  openUrl,
  aspect = "aspect-[4/5] sm:aspect-video",
}: {
  src: string;
  title: string;
  caption: string;
  openUrl: string;
  aspect?: string;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`w-full overflow-hidden rounded-3xl border border-olive/10 bg-sand-light shadow-lg shadow-olive/10 ${aspect}`}
      >
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <figcaption className="text-center text-xs font-medium tracking-wide text-olive-soft uppercase">
        {caption}
        <span className="text-olive/60 normal-case">
          {" "}
          —{" "}
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust-text transition-colors hover:text-rust-text-hover"
          >
            open in Figma
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
