/**
 * Drop-in Hero block for Aurora storefronts.
 * Usage: <HeroBlock headline="Welcome" subheadline="..." />
 */

interface HeroBlockProps {
  headline: string;
  subheadline?: string;
  className?: string;
}

export function HeroBlock({ headline, subheadline, className = "" }: HeroBlockProps) {
  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 text-center ${className}`}
    >
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
        {headline}
      </h1>
      {subheadline && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subheadline}</p>
      )}
    </section>
  );
}
