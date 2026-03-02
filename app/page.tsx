import Link from "next/link";
import { HeroBlock } from "@/components/blocks";

export default function HomePage() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Aurora Store";

  return (
    <div className="min-h-screen">
      <HeroBlock
        headline={`Welcome to ${siteName}`}
        subheadline="Empty starter kit with Aurora SDK. Add blocks from components/blocks."
      />
      <div className="max-w-2xl mx-auto px-6 text-center space-y-4">
        <Link
          href="/catalogue"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-medium hover:opacity-90"
        >
          View catalogue
        </Link>
        <div data-holmes="recommendations">
          <Link
            href="/catalogue"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Browse products →
          </Link>
        </div>
      </div>
    </div>
  );
}
