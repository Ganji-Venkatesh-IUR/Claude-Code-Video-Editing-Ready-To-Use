import React from "react";
import { C, F, ZONE } from "./theme";
import { easeOut, useSec } from "./motion";

/** [startSec, endSec, "text with *highlight* words"] */
export type Cap = [number, number, string];

const parse = (s: string) => {
  const out: { w: string; hi: boolean }[] = [];
  let hi = false;
  s.split(/(\*)/).forEach((chunk) => {
    if (chunk === "*") {
      hi = !hi;
      return;
    }
    chunk
      .split(" ")
      .filter(Boolean)
      .forEach((w) => out.push({ w, hi }));
  });
  return out;
};

const fontFor = (plain: string) => {
  const n = plain.length;
  if (n <= 12) return 104;
  if (n <= 22) return 90;
  if (n <= 32) return 78;
  return 68;
};

/**
 * ENGLISH CAPTIONS — locked for every reel.
 * Basic, simple English; phrase-level sync to the voice-over; word-by-word pop.
 */
export const Captions: React.FC<{ caps: Cap[] }> = ({ caps }) => {
  const t = useSec();
  const idx = caps.findIndex(([s, e], i) => {
    const next = caps[i + 1]?.[0] ?? Infinity;
    const hold = Math.min(e + 0.15, next);
    return t >= s - 0.01 && t < hold;
  });
  if (idx < 0) return null;
  const [start, end, text] = caps[idx];
  const words = parse(text);
  const plain = words.map((x) => x.w).join(" ");
  const dur = Math.max(0.3, end - start);
  const stagger = Math.min(0.075, (dur * 0.45) / Math.max(1, words.length));
  const size = fontFor(plain);

  return (
    <div
      style={{
        position: "absolute",
        left: ZONE.sideMargin,
        right: ZONE.sideMargin,
        top: ZONE.captionTop,
        height: ZONE.captionH,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: F.head,
          fontWeight: 700,
          fontSize: size,
          lineHeight: 1.12,
          letterSpacing: -1,
          color: C.text,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: size * 0.26,
          rowGap: size * 0.04,
        }}
      >
        {words.map((x, i) => {
          const a = Math.max(0, Math.min(1, (t - start - i * stagger) / 0.22));
          const e = easeOut(a);
          return (
            <span
              key={`${idx}-${i}`}
              style={{
                display: "inline-block",
                opacity: e,
                transform: `translateY(${(1 - e) * 28}px) scale(${0.84 + 0.16 * e})`,
                color: x.hi ? C.accent : C.text,
                textShadow: x.hi
                  ? `0 0 44px ${C.accentGlow}, 0 6px 26px rgba(0,0,0,0.65)`
                  : "0 6px 26px rgba(0,0,0,0.65)",
              }}
            >
              {x.w}
            </span>
          );
        })}
      </div>
    </div>
  );
};
