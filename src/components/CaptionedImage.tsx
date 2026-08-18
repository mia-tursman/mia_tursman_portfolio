import Image from "next/image";

export default function CaptionedImage({
  src,
  alt,
  caption,
  width,
  height,
  rounded = "rounded-3xl",
  className = "",
  href,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  rounded?: string;
  className?: string;
  href?: string;
}) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto w-full ${rounded} shadow-lg shadow-olive/10 ${
        href ? "transition-opacity group-hover:opacity-90" : ""
      }`}
    />
  );

  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {image}
        </a>
      ) : (
        image
      )}
      <figcaption className="text-center text-xs font-medium tracking-wide text-olive-soft uppercase">
        {caption}
        {href && (
          <span className="text-olive/60 normal-case"> — click to view full size</span>
        )}
      </figcaption>
    </figure>
  );
}
