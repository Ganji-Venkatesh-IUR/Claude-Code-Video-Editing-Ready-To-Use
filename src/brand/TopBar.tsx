import React from "react";
import { staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BRAND, C, F, Tag, ZONE } from "./theme";
import { prog, useSec } from "./motion";

/** Topic chip — top-left. Only the text changes between reels. */
export const TagChip: React.FC<{ tag: Tag }> = ({ tag }) => {
  const t = useSec();
  const p = prog(t, 0.1, 0.4);
  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        top: ZONE.topRowY,
        height: 72,
        padding: "0 30px 0 26px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderRadius: 36,
        background: "rgba(20,20,27,0.85)",
        border: `1px solid ${C.line}`,
        opacity: p,
        transform: `translateX(${(1 - p) * -30}px)`,
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 7,
          background: C.accent,
          boxShadow: `0 0 18px ${C.accentGlow}`,
        }}
      />
      <span
        style={{
          fontFamily: F.mono,
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: 4,
          color: C.text,
        }}
      >
        {tag}
      </span>
    </div>
  );
};

/**
 * Brand watermark — top-right. Photo avatar with amber ring + handle.
 * Calm and small so it never fights the content; ring glow breathes slowly.
 */
export const Watermark: React.FC = () => {
  const t = useSec();
  const p = prog(t, 0.25, 0.45);
  const breathe = 0.5 + 0.5 * Math.sin(t * 1.6);
  return (
    <div
      style={{
        position: "absolute",
        right: 60,
        top: ZONE.topRowY - 6,
        height: 84,
        paddingRight: 30,
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderRadius: 42,
        background: "rgba(20,20,27,0.85)",
        border: `1px solid ${C.line}`,
        opacity: p,
        transform: `translateX(${(1 - p) * 30}px)`,
      }}
    >
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: 42,
          padding: 4,
          boxSizing: "border-box",
          background: `conic-gradient(from 200deg, ${C.accent}, #FFD27A, ${C.accent})`,
          boxShadow: `0 0 ${14 + breathe * 16}px rgba(255,176,32,${0.25 + breathe * 0.25})`,
        }}
      >
        <img
          src={staticFile("brand/avatar.png")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            border: `3px solid ${C.bg}`,
            boxSizing: "border-box",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: F.body,
          fontWeight: 600,
          fontSize: 27,
          color: C.text,
          letterSpacing: 0.3,
        }}
      >
        {BRAND.handleShort}
      </span>
    </div>
  );
};

/** Thin amber progress bar under the top row. */
export const ProgressBar: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = Math.min(1, f / (durationInFrames - 1));
  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        top: ZONE.progressY,
        height: 6,
        borderRadius: 3,
        background: "rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: `${p * 100}%`,
          height: "100%",
          borderRadius: 3,
          background: C.accent,
          boxShadow: `0 0 16px ${C.accentGlow}`,
        }}
      />
    </div>
  );
};
