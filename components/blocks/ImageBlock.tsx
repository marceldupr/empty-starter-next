/**
 * Drop-in Image block for Aurora storefronts.
 * Usage: <ImageBlock src="..." alt="..." />
 */

interface ImageBlockProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ImageBlock({ src, alt = "", className = "" }: ImageBlockProps) {
  return (
    <section className={`py-8 sm:py-12 px-4 sm:px-6 ${className}`}>
      <img src={src} alt={alt} className="w-full rounded-lg object-cover" />
    </section>
  );
}
