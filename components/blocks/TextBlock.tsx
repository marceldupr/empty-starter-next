/**
 * Drop-in Text block for Aurora storefronts.
 * Usage: <TextBlock content="..." />
 */

interface TextBlockProps {
  content: string;
  className?: string;
}

export function TextBlock({ content, className = "" }: TextBlockProps) {
  return (
    <section className={`py-8 sm:py-12 px-4 sm:px-6 max-w-3xl mx-auto ${className}`}>
      <div className="prose prose-invert prose-p:text-slate-400 whitespace-pre-wrap">
        {content.split("\n").map((line, i) => (
          <p key={i}>{line || "\u00A0"}</p>
        ))}
      </div>
    </section>
  );
}
