# Gutter website

Homepage and short docs for [Gutter](https://github.com/blackberryggames/Gutter), built with Next.js 16, React 19 and Tailwind CSS 4, in the app's own ink-and-paper style. The **Install for Windows** button downloads `public/download/GutterSetup.exe`.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```
npm run build
```

This is a static export: the finished site lands in `out/` and can be hosted anywhere (GitHub Pages, Vercel, Netlify, Cloudflare Pages, any web server).

## Builds on GitHub

Push the repo and it builds by itself: `.github/workflows/pages.yml` runs `npm ci`, `npm run lint` and `npm run build` on every push and pull request. Nothing to set up.

- The built site is attached to each run (Actions tab → the run → Artifacts).
- If GitHub Pages can be turned on for the repo, the workflow enables it and deploys to `https://<user>.github.io/<repo>/`. If it can't (or you'd rather not), that step is skipped and the run still passes. To publish later, enable Pages with source "GitHub Actions" in the repo settings and re-run the workflow.
- Paths are prefixed with `/<repo>` automatically (none for a `<user>.github.io` repo). For a custom domain, add a repository variable `PAGES_BASE_PATH` set to `/`.

## New Gutter release

Nothing to do for downloads: the Install button reads `version.json` from the Gutter repo and downloads `releases/v<latest>/GutterSetup.exe`. Optionally update `changelog` in `src/lib/site.ts`.

## Where things are

- `src/app/page.tsx`: homepage (why install, how it works, transitions, MCP, Sync, download, what's new)
- `src/app/docs/page.tsx`: docs
- `src/components/EditorMock.tsx`: the animated editor preview and transition tiles (pure CSS animation)
- `src/components/ui.tsx`: header, footer, download button
- `src/app/globals.css`: colours, fonts and animations (same tokens as the app); respects reduced motion
