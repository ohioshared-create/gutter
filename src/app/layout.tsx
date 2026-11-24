import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/ui";
import { asset } from "@/lib/base";

export const metadata: Metadata = {
  title: "Gutter: manhwa & manga narration videos, faster",
  description:
    "Import a chapter from Webtoons or MangaDex, let AI write the narration, voice it with ElevenLabs, add captions and transitions, and export the video. Free for Windows.",
  icons: { icon: asset("/logo.png") },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
