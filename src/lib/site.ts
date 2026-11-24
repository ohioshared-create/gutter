// Single place for release facts shown on the site. Update these with each Gutter release.
export const site = {
  name: "Gutter",
  version: "1.05",
  // the download button reads version.json and uses releases/v<latest>/GutterSetup.exe; this is the fallback
  installer: "https://raw.githubusercontent.com/blackberryggames/Gutter/main/releases/v1.05/GutterSetup.exe",
  versionJson: "https://raw.githubusercontent.com/blackberryggames/Gutter/main/version.json",
  installerSizeMb: 62.5,
  portable: "https://raw.githubusercontent.com/blackberryggames/Gutter/main/releases/v1.05/Gutter.exe",
  repo: "https://github.com/blackberryggames/Gutter",
  mcpRepo: "https://github.com/blackberryggames/Gutter-Script-Generator-MCP",
  requirements: "Windows 10 or 11, 64-bit",
};

export const changelog: { version: string; notes: string[] }[] = [
  {
    version: "1.05",
    notes: [
      "Fixed exports crashing at the end on PCs with an old FFmpeg from other apps",
      "Outdated FFmpeg is detected and replaced automatically",
      "Gutter's FFmpeg checks for a newer release weekly and updates in the background",
      "A transition that crashes FFmpeg is exported as a crossfade instead of failing",
    ],
  },
  {
    version: "1.04",
    notes: [
      "New installer with shortcuts and an Installed apps entry",
      "Crashed FFmpeg steps are retried automatically",
      "Optional failure reports with diagnostics",
    ],
  },
  {
    version: "1.03",
    notes: [
      "Write scripts with your Claude app through the Script Generator MCP, no API key",
      "FFmpeg installs itself",
    ],
  },
];
