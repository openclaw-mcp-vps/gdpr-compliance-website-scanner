import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Scanner – Scan websites for GDPR violations before regulators do",
  description: "Crawl your website to identify GDPR compliance gaps, cookie violations, and data collection issues with actionable fix recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d69eb271-6dda-4e1c-b056-34797993dd45"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
