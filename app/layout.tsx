import type { Metadata } from "next";
import Script from "next/script";
import { getHolmesScriptUrl } from "@aurora-studio/sdk";
import "./globals.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME ?? "Aurora Storefront",
  description: "Custom storefront built with Aurora Studio SDK",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white antialiased">
        {children}
        {process.env.NEXT_PUBLIC_AURORA_API_URL && process.env.NEXT_PUBLIC_TENANT_SLUG && (
          <Script
            src={getHolmesScriptUrl(
              process.env.NEXT_PUBLIC_AURORA_API_URL,
              process.env.NEXT_PUBLIC_TENANT_SLUG
            )}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
