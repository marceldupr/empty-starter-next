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
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Link
          href="/catalogue"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-medium hover:opacity-90"
        >
          View catalogue
        </Link>
      </div>
    </div>
  );
}
