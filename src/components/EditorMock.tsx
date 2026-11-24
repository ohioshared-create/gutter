import { asset } from "@/lib/base";

/**
 * A live, CSS-animated miniature of Gutter's editor: a tall panel panning down over its blurred
 * backdrop, the caption's spoken word lighting up, and the playhead sweeping a timeline of
 * panels, voice and captions. The panel is an original illustration, not real comic art.
 */

function Panel() {
  // a tall webtoon-style panel: night sky, a tower, a speech bubble, a figure on a rooftop
  return (
    <svg viewBox="0 0 300 640" className="block h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1324" />
          <stop offset=".55" stopColor="#2a2350" />
          <stop offset="1" stopColor="#5b3e8c" />
        </linearGradient>
        <radialGradient id="moon" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#f6f3e6" />
          <stop offset="1" stopColor="#f6f3e6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="640" fill="url(#sky)" />
      <circle cx="215" cy="92" r="58" fill="url(#moon)" opacity=".5" />
      <circle cx="215" cy="92" r="22" fill="#f6f3e6" />
      {[[40, 60], [80, 140], [140, 40], [260, 190], [30, 230], [180, 250], [110, 300]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.4" fill="#e8e6ff" opacity=".8" />
      ))}
      {/* the tower */}
      <path d="M128 640 L138 210 L150 170 L162 210 L172 640 Z" fill="#0b0b14" />
      <path d="M150 170 L150 120" stroke="#0b0b14" strokeWidth="3" />
      <rect x="146" y="260" width="8" height="10" fill="#8e5cff" opacity=".9" />
      <rect x="146" y="330" width="8" height="10" fill="#8e5cff" opacity=".6" />
      {/* city */}
      <path d="M0 640 V470 h34 v-30 h30 v60 h26 v-90 h24 v120 h76 v-70 h28 v40 h30 v-110 h22 v80 h30 V640 Z" fill="#06060c" />
      {[[12, 500], [44, 470], [72, 520], [98, 450], [196, 520], [230, 480], [262, 450], [280, 530]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="5" height="6" fill="#f2c96b" opacity=".75" />
      ))}
      {/* speech bubble */}
      <ellipse cx="86" cy="392" rx="66" ry="34" fill="#fff" />
      <path d="M104 420 L122 446 L92 424 Z" fill="#fff" />
      <rect x="44" y="380" width="84" height="5" rx="2.5" fill="#1b1b1b" />
      <rect x="54" y="392" width="64" height="5" rx="2.5" fill="#1b1b1b" />
      {/* figure on the roof edge */}
      <path d="M210 560 q8 -36 2 -54 q-4 -10 6 -14 q10 -3 12 8 q2 12 -6 18 q10 18 6 42 Z" fill="#000" />
      <path d="M216 506 l-26 20" stroke="#000" strokeWidth="5" strokeLinecap="round" />
      <path d="M190 526 l-4 -10" stroke="#cfd3ff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const clips = [
  { w: 9, hue: "#2a2350" }, { w: 14, hue: "#5b3e8c" }, { w: 8, hue: "#1d2a3f" }, { w: 12, hue: "#3d2a4f" },
  { w: 10, hue: "#24324a" }, { w: 16, hue: "#4a3570" }, { w: 9, hue: "#2b2b38" }, { w: 13, hue: "#38275c" },
];

export function EditorMock() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-line-strong bg-ink-0 shadow-[0_30px_80px_-30px_rgba(0,0,0,.8)]">
      {/* title bar */}
      <div className="flex h-9 items-center gap-3 border-b border-line px-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/logo.png")} alt="" width={16} height={16} />
        <span className="rounded border border-line-strong px-2 py-0.5 text-[10px] text-muted">← Projects</span>
        <span className="text-[11px] font-semibold">The Tower · Ep. 1</span>
        <div className="ml-auto hidden gap-1.5 md:flex">
          {["Story", "Write script", "Voice lines", "Sync"].map((b) => (
            <span key={b} className="rounded border border-line-strong px-2 py-0.5 text-[10px] text-muted">{b}</span>
          ))}
          <span className="rounded bg-paper px-2 py-0.5 text-[10px] font-semibold text-ink-0">Export</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr] gap-2 p-2 md:grid-cols-[96px_1fr_150px]">
        {/* media bin */}
        <div className="hidden flex-col gap-1.5 rounded-[var(--radius-pane)] border border-line bg-ink-1 p-1.5 md:flex">
          <span className="px-0.5 text-[9px] font-semibold text-muted">MEDIA</span>
          <div className="grid grid-cols-2 gap-1">
            {clips.slice(0, 8).map((c, i) => (
              <div key={i} className="h-7 rounded-[3px]" style={{ background: `linear-gradient(180deg, ${c.hue}, #0b0b14)` }} />
            ))}
          </div>
        </div>

        {/* preview */}
        <div className="relative aspect-video overflow-hidden rounded-[var(--radius-pane)] bg-black">
          <div className="pan-bg absolute inset-0 blur-xl brightness-[.55]"><Panel /></div>
          <div className="absolute inset-y-0 left-1/2 w-[34%] -translate-x-1/2 overflow-hidden">
            <div className="pan"><Panel /></div>
          </div>
          <div className="absolute inset-x-0 bottom-[9%] text-center font-display text-[clamp(11px,1.9vw,20px)] font-bold tracking-wide [text-shadow:0_0_3px_#000,0_0_3px_#000,0_0_6px_#000]">
            <span className="word" style={{ animationDelay: "0s" }}>THE </span>
            <span className="word" style={{ animationDelay: "1s" }}>TOWER </span>
            <span className="word" style={{ animationDelay: "2s" }}>WAITS</span>
          </div>
        </div>

        {/* inspector */}
        <div className="hidden flex-col gap-2 rounded-[var(--radius-pane)] border border-line bg-ink-1 p-2 md:flex">
          <span className="text-[10px] font-semibold">Panel 02</span>
          {[["LENGTH", "62%", "4.20 s"], ["ZOOM", "48%", "180%"], ["PAN END", "100%", "100%"]].map(([l, w, v]) => (
            <div key={l}>
              <div className="flex justify-between text-[8px] text-muted"><span>{l}</span><span className="font-mono">{v}</span></div>
              <div className="mt-1 h-0.5 rounded bg-white/15"><div className="h-full rounded bg-paper" style={{ width: w }} /></div>
            </div>
          ))}
          <span className="mt-1 text-[8px] font-semibold text-muted">TRANSITION</span>
          <div className="grid grid-cols-3 gap-1">
            {["Mix", "Push", "Iris"].map((t, i) => (
              <span key={t} className={`rounded-[3px] border py-1 text-center text-[8px] ${i === 0 ? "border-paper text-text" : "border-line text-muted"}`}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="mx-2 mb-2 rounded-[var(--radius-pane)] border border-line bg-ink-1 px-2 pb-2 pt-1.5">
        <div className="relative">
          <div className="flex justify-between font-mono text-[8px] text-faint">
            {["0:00", "0:10", "0:20", "0:30", "0:40", "0:50", "1:00"].map((t) => <span key={t}>{t}</span>)}
          </div>
          <div className="mt-1 flex gap-[3px]">
            {clips.map((c, i) => (
              <div key={i} className="relative h-8 rounded-[3px] border border-line-strong" style={{ flexGrow: c.w, background: `linear-gradient(180deg, ${c.hue}, #0b0b14)` }}>
                <span className="absolute bottom-0.5 left-1 font-mono text-[7px] text-text/80">{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
          <div className="mt-[3px] flex h-4 items-center gap-[2px] overflow-hidden rounded-[3px] bg-[#1c1c1c] px-1">
            {Array.from({ length: 64 }).map((_, i) => (
              <span key={i} className="bar block w-[3px] shrink-0 rounded-sm bg-paper/60" style={{ height: `${30 + ((i * 37) % 60)}%`, animationDelay: `${(i % 9) * 0.12}s` }} />
            ))}
          </div>
          <div className="mt-[3px] flex gap-[3px]">
            {[18, 12, 22, 15, 20, 13].map((w, i) => (
              <span key={i} className="h-2.5 rounded-[2px] bg-ink-3" style={{ flexGrow: w }} />
            ))}
          </div>
          <div className="sweep absolute -top-0.5 bottom-0 w-px bg-paper">
            <span className="absolute -left-[4px] -top-0.5 h-2 w-[9px] rounded-[2px] bg-paper" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small A→B tiles, like the transition picker in the app. */
export function TransitionTiles() {
  const A = <div className="absolute inset-0 grid place-items-center bg-[#3a3a3a] font-display text-sm font-semibold text-[#ccc]">A</div>;
  const B = (cls: string, style: React.CSSProperties) => (
    <div className={`absolute inset-0 grid place-items-center bg-[#d9d8d2] font-display text-sm font-semibold text-ink-0 t-run ${cls}`} style={style}>B</div>
  );
  const tiles: { name: string; node: React.ReactNode }[] = [
    { name: "Mix", node: <>{A}{B("", { animationName: "t-mix" })}</> },
    { name: "Push up", node: <><div className="absolute inset-0 t-run" style={{ animationName: "t-push-a" }}>{A}</div>{B("", { animationName: "t-push-b" })}</> },
    { name: "Slide in", node: <>{A}{B("", { animationName: "t-slide" })}</> },
    { name: "Zoom in", node: <>{B("", { animationName: "none" })}<div className="absolute inset-0 t-run" style={{ animationName: "t-zoom-a" }}>{A}</div></> },
    { name: "Iris", node: <>{A}{B("", { animationName: "t-iris" })}</> },
    { name: "Flash", node: <>{A}{B("", { animationName: "t-swap" })}<div className="absolute inset-0 bg-white t-run" style={{ animationName: "t-flash" }} /></> },
  ];
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
      {tiles.map((t, i) => (
        <div key={t.name}>
          <div className="relative aspect-[66/38] overflow-hidden rounded-[4px] border border-line-strong [&_.t-run]:[animation-delay:var(--d)]" style={{ ["--d" as string]: `${i * 0.18}s` }}>
            {t.node}
          </div>
          <p className="mt-1.5 text-center text-[11.5px] text-muted">{t.name}</p>
        </div>
      ))}
    </div>
  );
}
