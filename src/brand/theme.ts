// ─────────────────────────────────────────────────────────────
//  DARK REALITY — locked brand theme for ALL reels
//  Topics: Startup · IT · Business · Students · Money · AI · Reality
//  Do not change per-reel. Only the TAG chip text changes.
// ─────────────────────────────────────────────────────────────
export const C = {
  bg: "#0B0B0F",
  panel: "#14141B",
  panel2: "#1B1B24",
  line: "#2A2A35",
  text: "#F5F5F7",
  dim: "#9A9AA8",
  accent: "#FFB020", // electric amber — the ONLY accent colour
  accentSoft: "rgba(255,176,32,0.14)",
  accentGlow: "rgba(255,176,32,0.45)",
  red: "#FF5C5C",
  green: "#3DDC97",
};

export const F = {
  head: "'Poppins', 'Inter', system-ui, sans-serif",
  body: "'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

export const SIZE = { w: 1080, h: 1920, fps: 30 };

// Instagram-safe layout (top header + bottom caption/buttons stay clear)
export const ZONE = {
  topRowY: 250, // tag chip + watermark row
  progressY: 352,
  visualTop: 440, // visuals live between 440 and ~1060
  captionTop: 1100, // english captions live between 1100 and ~1420
  captionH: 320,
  sideMargin: 110,
};

export const BRAND = {
  handle: "@ganji.venkatesh.ai",
  handleShort: "ganji.venkatesh.ai",
  name: "GANJI VENKATESH",
  tagline: "Reality for builders & students",
  endLine: "Follow for reality, not motivation",
};

export type Tag =
  | "STARTUP"
  | "IT"
  | "BUSINESS"
  | "STUDENTS"
  | "MONEY"
  | "AI"
  | "REALITY";

export const AUDIO = {
  bgm: "brand/audio/bgm.mp3",
  bgmVolume: 0.12,
  sfx: (n: string) => `brand/audio/${n}.mp3`,
};
