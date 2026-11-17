import React from "react";
import { staticFile, useCurrentFrame } from "remotion";
import { C } from "./theme";

export const Background: React.FC = () => {
  const f = useCurrentFrame();
  const drift = Math.sin(f / 70) * 40;
  return (
    <div style={{ position: "absolute", inset: 0, background: C.bg, overflow: "hidden" }}>
      {/* soft amber glow, top-right */}
      <div
        style={{
          position: "absolute",
          right: -300 + drift,
          top: -200,
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,176,32,0.10) 0%, rgba(255,176,32,0) 65%)",
        }}
      />
      {/* cool glow, bottom-left */}
      <div
        style={{
          position: "absolute",
          left: -350,
          bottom: -250 - drift,
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,130,255,0.07) 0%, rgba(120,130,255,0) 65%)",
        }}
      />
      {/* faint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 20%, transparent 75%)",
          maskImage: "radial-gradient(ellipse at center, #000 20%, transparent 75%)",
        }}
      />
      {/* film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${staticFile("brand/grain.png")})`,
          backgroundSize: "256px 256px",
          backgroundPosition: `${(f * 37) % 256}px ${(f * 91) % 256}px`,
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />
      {/* vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
};
