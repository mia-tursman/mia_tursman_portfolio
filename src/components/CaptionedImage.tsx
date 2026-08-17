import Image from "next/image";

export default function CaptionedImage({
  src,
  alt,
  caption,
  width,
  height,
  rounded = "rounded-3xl",
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  rounded?: string;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col gap-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full ${rounded} shadow-lg shadow-olive/10`}
      />
      <figcaption className="text-center text-xs font-medium tracking-wide text-olive-soft uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
