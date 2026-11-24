"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

let latest: Promise<string> | null = null;

/** GutterSetup.exe for the newest release listed in version.json (the file the app's updater reads). */
function latestInstaller(): Promise<string> {
  latest ??= fetch(site.versionJson, { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((j: { version?: string }) => {
      const v = (j.version ?? "").replace(/^v/i, "");
      return v ? `https://raw.githubusercontent.com/blackberryggames/Gutter/main/releases/v${v}/GutterSetup.exe` : site.installer;
    })
    .catch(() => site.installer);
  return latest;
}

export function DownloadButton({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const [href, setHref] = useState(site.installer);
  useEffect(() => {
    let alive = true;
    latestInstaller().then((u) => alive && setHref(u));
    return () => { alive = false; };
  }, []);
  const pad = size === "lg" ? "h-12 px-6 text-[15px]" : size === "sm" ? "h-8 px-3 text-[13px]" : "h-10 px-5 text-sm";
  return (
    <a
      href={href}
      download="GutterSetup.exe"
      className={`group inline-flex items-center gap-2.5 rounded-[var(--radius-ctl)] bg-paper font-semibold text-ink-0 transition-[transform,background-color] duration-150 hover:bg-[#e2e1db] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper ${pad} ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
        <path d="M8 1.5v9m0 0L4.5 7M8 10.5 11.5 7M2 13.5h12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Install for Windows
    </a>
  );
}