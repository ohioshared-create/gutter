import type { Metadata } from "next";
import { DownloadButton } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Docs · Gutter", description: "Install Gutter and make your first narration video." };

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "install",
    title: "Install",
    body: (
      <>
        <p>Download <code>GutterSetup.exe</code> and run it. It installs just for you into <code>AppData\Local\Programs\Gutter</code> (no admin prompt), adds Desktop and Start menu shortcuts, and lists Gutter in Windows Installed apps, where you can uninstall it. Your projects stay in <code>Documents\Gutter</code>.</p>
        <p>Prefer no installer? The portable <code>Gutter.exe</code> runs on its own. Either way Gutter updates itself: when a new version is out it shows a card with what changed and a single Download now button.</p>
      </>
    ),
  },
  {
    id: "setup",
    title: "First run",
    body: (
      <>
        <p>A short walkthrough opens the first time:</p>
        <ol>
          <li><b>Groq key</b> (free): it links you to the Groq console, checks the key and picks a model that can read images. Or choose <i>Use my Claude app instead</i>.</li>
          <li><b>ElevenLabs key</b>: paste it and pick a narrator (Adam by default).</li>
          <li><b>FFmpeg</b>: nothing to do. Gutter finds an up-to-date copy or installs its own, and replaces outdated ones.</li>
        </ol>
        <p>Run it again any time from Settings → Run setup.</p>
      </>
    ),
  },
  {
    id: "import",
    title: "Import a chapter",
    body: (
      <>
        <p>On <b>Source</b>, pick Webtoons or MangaDex and search, or paste a link. An episode link imports straight away. Select several chapters to combine them into one video. Long strips are cut into panels at the white gaps; tall panels are framed to scroll.</p>
        <p>Have your own images? Choose <i>Local files</i>, or drop images onto the editor&apos;s Media bin.</p>
      </>
    ),
  },
  {
    id: "script",
    title: "Write the script",
    body: (
      <>
        <p><b>Story</b> first (optional): the main character, cast, world and notes the AI should always know, plus an intro and outro said word for word (&ldquo;Welcome back, make sure to subscribe&rdquo;).</p>
        <p>Then <b>Write script</b>. If some panels already have lines it offers to continue where it stopped, fill only empty panels, or rewrite everything. Groq sends 3 panels per request and keeps the story going between them.</p>
      </>
    ),
  },
  {
    id: "voice",
    title: "Voice and Sync",
    body: (
      <>
        <p><b>Voice lines</b> reads every line with ElevenLabs; clip lengths follow the audio. To redo specific lines, Ctrl+click them on the timeline, then <i>Re-voice selected</i>.</p>
        <p><b>Sync</b> checks every clip against its voice: it lengthens clips that would cut a line off, re-voices lines you edited, and voices missing ones. Clips are never shortened.</p>
      </>
    ),
  },
  {
    id: "edit",
    title: "Edit",
    body: (
      <>
        <ul>
          <li><b>Timeline</b>: drag clips to reorder, drag an edge to change length, <kbd>S</kbd> splits at the playhead, <kbd>Del</kbd> deletes, <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes. Right-click anything for more.</li>
          <li><b>Transitions</b>: Mix on every cut by default; pick from 14 per cut in the inspector or by clicking the marker between clips.</li>
          <li><b>Background</b>: the blurred panel (default), a custom image, or a looping video (MP4, MKV, MOV, WebM, AVI), blurred or sharp.</li>
          <li><b>Captions</b>: any installed font or your own .ttf/.otf; the spoken word can be highlighted.</li>
        </ul>
      </>
    ),
  },
  {
    id: "export",
    title: "Export",
    body: (
      <>
        <p><b>Export</b> renders an MP4 at 1920×1080, 1280×720 or 1080×1920 (Shorts), 30 or 60 fps, with narration and captions burned in. If FFmpeg crashes on a step, Gutter retries it; a transition that keeps crashing is exported as a crossfade instead.</p>
        <p>If an export still fails, Gutter can send the developer a diagnostic report (error, FFmpeg log, Windows version, memory, graphics card; never keys, scripts or images). Turn it off in Settings → Reports.</p>
      </>
    ),
  },
  {
    id: "mcp",
    title: "Claude app (no API key)",
    body: (
      <>
        <p>The <a href={site.mcpRepo} target="_blank" rel="noreferrer">Script Generator MCP</a> lets Claude Desktop or Claude Code write your script with its own model. In Gutter: Settings → AI apps → <i>Set up Claude app</i> installs it and connects Claude Desktop. For Claude Code:</p>
        <pre>{`claude mcp add gutter-script-generator -- "C:\\path\\to\\ScriptGeneratorMcp.exe"`}</pre>
        <p>Keep the project open in Gutter, then ask Claude: <i>&ldquo;Use the Gutter tools to write the narration for my open project.&rdquo;</i></p>
      </>
    ),
  },
  {
    id: "help",
    title: "Troubleshooting",
    body: (
      <ul>
        <li><b>SmartScreen warning</b>: the files aren&apos;t code-signed. Click More info → Run anyway.</li>
        <li><b>Export failed</b>: make sure there&apos;s free disk space (long videos need a few GB), then try again. Copy details on the failure screen gives the full log.</li>
        <li><b>Script writer says the model is invalid</b>: Settings → Script writer → Load models, and pick one that reads images.</li>
        <li><b>A line still sounds cut off</b>: press Sync.</li>
      </ul>
    ),
  },
];

export default function Docs() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[200px_1fr]">
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">Docs</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[13.5px] lg:flex-col lg:gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-muted transition-colors hover:text-text">{s.title}</a>
          ))}
        </nav>
        <div className="mt-8 hidden lg:block"><DownloadButton size="sm" /></div>
      </aside>

      <article className="max-w-[44rem]">
        <h1 className="rise font-display text-[40px] font-semibold leading-tight">Gutter docs</h1>
        <p className="rise d1 mt-3 text-[16px] text-muted">From install to your first exported video in about ten minutes.</p>
        <div className="mt-12 flex flex-col gap-14">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-mono text-[12px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-[24px] font-semibold">{s.title}</h2>
              </div>
              <div className="docs-body flex flex-col gap-3 text-[15px] leading-relaxed text-[#cfcfcf]">{s.body}</div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
