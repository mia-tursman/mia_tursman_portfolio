import Image from "next/image";

export default function CaptionedImage({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div
        className={`relative w-full overflow-hidden rounded-2xl shadow-lg shadow-olive/10 ${aspect}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <figcaption className="text-center text-xs font-medium tracking-wide text-olive-soft uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
