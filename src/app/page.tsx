import { EditorMock, TransitionTiles } from "@/components/EditorMock";
import { asset } from "@/lib/base";
import { Reveal } from "@/components/Reveal";
import { DownloadButton, GhostLink, Label } from "@/components/ui";
import { changelog, site } from "@/lib/site";

const before = [
  ["Screenshot every panel by hand", "Paste a Webtoons link; panels are cut at the gutters, in order"],
  ["Build a blurred background per image", "Blurred backdrop is automatic and scrolls with tall panels"],
  ["Keyframe long panels to scroll", "Tall panels zoom to width and pan down, eased"],
  ["Write the script in another tab", "AI writes one line per panel, silent panels included"],
  ["Generate voices one by one", "ElevenLabs voices every line; clips fit the audio"],
  ["Time captions to the audio", "Captions come from the script, timed word by word"],
];

const steps = [
  { t: "00:00", title: "Import", body: "Search Webtoons or MangaDex, or drop your own images. Long strips are cut into panels at the white gaps." },
  { t: "00:40", title: "Write", body: "Claude, ChatGPT, Grok, Gemini, Groq or a local model reads the panels and writes the narration. Or use your Claude app with no API key." },
  { t: "01:30", title: "Voice", body: "ElevenLabs reads each line in a narrator voice. Sync makes sure no line gets cut off." },
  { t: "02:10", title: "Polish", body: "Captions in your font, transitions on every cut, a custom image or looping video behind the panels." },
  { t: "03:00", title: "Export", body: "One click to a 1080p or Shorts MP4, with the narration and captions burned in." },
];

export default function Home() {
  return (
    <main>
      {/* ───── hero ───── */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_1.05fr] lg:pt-24">
        <div>
          <p className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-[11.5px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-paper" /> v{site.version} · free for Windows
          </p>
          <h1 className="rise d1 font-display text-[42px] font-semibold leading-[1.03] tracking-[-0.015em] sm:text-[52px]">
            A chapter in.<br />A narrated video out.
          </h1>
          <p className="rise d2 mt-5 max-w-[34rem] text-[16.5px] leading-relaxed text-muted">
            Gutter does the boring half of manhwa and manga recaps: cutting panels, framing them, writing the
            script, voicing it, timing captions. You spend your time on the story.
          </p>
          <div className="rise d3 mt-8 flex flex-wrap items-center gap-3">
            <DownloadButton size="lg" />
            <GhostLink href="/docs">Read the docs</GhostLink>
          </div>
          <p className="rise d4 mt-4 font-mono text-[12px] text-faint">
            GutterSetup.exe · {site.installerSizeMb} MB · {site.requirements} · updates itself
          </p>
        </div>
        <div className="rise d5"><EditorMock /></div>
      </section>

      {/* ───── why ───── */}
      <section id="why" className="border-t border-line bg-ink-1/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Label>Why install it</Label>
            <h2 className="font-display text-[32px] font-semibold leading-tight">Hours of busywork per chapter, gone.</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              A recap of one chapter used to mean a hundred screenshots, a background per panel, a script in another
              tab and voices generated one at a time. Here&apos;s what changes.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[var(--radius-pane)] border border-line">
              <div className="grid grid-cols-2 border-b border-line bg-ink-1 text-[12px] font-semibold text-muted">
                <span className="px-4 py-2.5">Before</span>
                <span className="border-l border-line px-4 py-2.5 text-text">With Gutter</span>
              </div>
              {before.map(([a, b], i) => (
                <div key={i} className="grid grid-cols-2 border-b border-line text-[14px] last:border-0">
                  <span className="px-4 py-3 text-muted line-through decoration-faint">{a}</span>
                  <span className="border-l border-line px-4 py-3">{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── how it works: a timeline, like the editor ───── */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Label>How it works</Label>
          <h2 className="font-display text-[32px] font-semibold">Five steps, one timeline.</h2>
        </Reveal>
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line-strong md:block" />
          <ol className="grid gap-8 md:grid-cols-5 md:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} as="li" className="relative">
                <div>
                  <span className="relative z-10 block h-[15px] w-[15px] rounded-[3px] border border-paper bg-ink-0" />
                  <p className="mt-4 font-mono text-[11.5px] text-faint">{s.t}</p>
                  <h3 className="mt-1 font-display text-[19px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── details ───── */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Label>Transitions</Label>
            <h3 className="font-display text-[26px] font-semibold">Smooth cuts by default.</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-muted">
              Every cut gets a soft Mix unless you pick another of the 14. Tiles preview themselves, and transitions
              never shift the narration.
            </p>
            <div className="mt-7"><TransitionTiles /></div>
          </Reveal>
          <div className="mt-14 flex flex-col gap-10 lg:mt-0">
            <Reveal delay={60}>
              <Label>No API key? Fine.</Label>
              <h3 className="font-display text-[22px] font-semibold">Write scripts with your Claude app.</h3>
              <p className="mt-2 leading-relaxed text-muted">
                The Script Generator MCP lets Claude Desktop or Claude Code look at your panels and write the lines
                straight into Gutter.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-[var(--radius-pane)] border border-line bg-ink-1 p-4 font-mono text-[12.5px] leading-relaxed text-text">
{`claude mcp add gutter-script-generator \\
  -- "ScriptGeneratorMcp.exe"`}
              </pre>
            </Reveal>
            <Reveal delay={120}>
              <Label>Sync</Label>
              <h3 className="font-display text-[22px] font-semibold">No line gets cut off.</h3>
              <p className="mt-2 leading-relaxed text-muted">
                One button checks every clip against its voice line, lengthens the ones that end early and re-voices
                lines you edited.
              </p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="fill relative h-full rounded-full bg-paper">
                  <span className="shine absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── changelog + download ───── */}
      <section id="download" className="border-t border-line bg-ink-1/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo.png")} alt="Gutter logo" width={112} height={112} className="mb-6" />
            <h2 className="font-display text-[34px] font-semibold leading-tight">Get Gutter</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              The installer adds shortcuts and an entry in Installed apps, with no admin prompt. After that, Gutter
              updates itself and sets up FFmpeg on its own.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <DownloadButton size="lg" />
              <GhostLink href={site.portable} external>Portable .exe</GhostLink>
            </div>
            <p className="mt-4 text-[12.5px] text-faint">
              Windows may show SmartScreen because the app isn&apos;t code-signed: More info → Run anyway.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Label>What&apos;s new</Label>
            <div className="flex flex-col gap-6">
              {changelog.map((c) => (
                <div key={c.version} className="grid grid-cols-[56px_1fr] gap-4">
                  <span className="pt-0.5 font-mono text-[13px] text-text">v{c.version}</span>
                  <ul className="flex flex-col gap-1.5 text-[14px] text-muted">
                    {c.notes.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
