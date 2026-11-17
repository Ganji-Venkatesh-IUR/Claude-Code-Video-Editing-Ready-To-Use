import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const useSec = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return f / fps;
};

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

/** 0→1 progress starting at `a` (seconds) lasting `d` seconds, eased. */
export const prog = (t: number, a: number, d: number, ease = easeOut) =>
  interpolate(t, [a, a + d], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/** Quick pop (overshoot) 0→1 */
export const pop = (t: number, a: number, d = 0.35) =>
  interpolate(t, [a, a + d * 0.6, a + d], [0, 1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

/**
 * A visual scene that lives between `from` and `to` (seconds, global time).
 * Fast, sharp in/out — no blur.
 */
export const Scene: React.FC<{
  from: number;
  to: number;
  children: React.ReactNode;
}> = ({ from, to, children }) => {
  const t = useSec();
  if (t < from - 0.02 || t > to + 0.02) return null;
  const inP = prog(t, from, 0.32);
  const outP = prog(t, to - 0.16, 0.16, Easing.in(Easing.quad));
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: inP * (1 - outP),
        transform: `translateY(${(1 - inP) * 36 - outP * 16}px) scale(${0.97 + 0.03 * inP})`,
      }}
    >
      {children}
    </div>
  );
};
