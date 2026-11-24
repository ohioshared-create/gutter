import Link from "next/link";
import { asset } from "@/lib/base";
import { site } from "@/lib/site";
import { DownloadButton } from "@/components/latest";

export { DownloadButton };

export function GhostLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex h-10 items-center gap-2 rounded-[var(--radius-ctl)] border border-line-strong px-4 text-sm text-text transition-colors duration-150 hover:bg-white/5";
  return external
    ? <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}

export function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{children}</p>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink-0/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-8 px-6">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo.png")} alt="" width={30} height={30} />
          <span className="font-display text-[18px] font-semibold">Gutter</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] text-muted sm:flex">
          <Link href="/#why" className="transition-colors hover:text-text">Why Gutter</Link>
          <Link href="/#how" className="transition-colors hover:text-text">How it works</Link>
          <Link href="/docs" className="transition-colors hover:text-text">Docs</Link>
          <a href={site.repo} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">GitHub</a>
        </nav>
        <div className="ml-auto"><DownloadButton size="sm" /></div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-8 text-[13px] text-muted">
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo.png")} alt="" width={20} height={20} />
          <span className="font-display font-semibold text-text">Gutter</span>
          <span className="font-mono text-[12px]">v{site.version}</span>
        </span>
        <Link href="/docs" className="hover:text-text">Docs</Link>
        <a href={site.repo} target="_blank" rel="noreferrer" className="hover:text-text">Releases</a>
        <a href={site.mcpRepo} target="_blank" rel="noreferrer" className="hover:text-text">Script Generator MCP</a>
        <span className="ml-auto text-faint">Use chapters you have the rights to use.</span>
      </div>
    </footer>
  );
}
