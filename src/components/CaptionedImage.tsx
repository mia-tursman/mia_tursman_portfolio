import Image from "next/image";

export default function CaptionedImage({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full rounded-2xl shadow-lg shadow-olive/10"
      />
      <figcaption className="text-center text-xs font-medium tracking-wide text-olive-soft uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
