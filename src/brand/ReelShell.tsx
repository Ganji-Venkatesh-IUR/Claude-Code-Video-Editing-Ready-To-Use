import React, { useEffect } from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { Background } from "./Background";
import { Captions, Cap } from "./Captions";
import { ProgressBar, TagChip, Watermark } from "./TopBar";
import { loadBrandFonts } from "./fonts";
import { AUDIO, Tag } from "./theme";

export type Sfx = [number, string, number?]; // [timeSec, fileName, volume]

/**
 * The locked reel frame. Every reel = <ReelShell> + its own visuals.
 *  - dark-reality background, grain, vignette
 *  - topic tag chip + photo watermark + progress bar
 *  - English captions (always)
 *  - voice-over, low ambient BGM, SFX
 */
export const ReelShell: React.FC<{
  tag: Tag;
  voice: string; // path inside /public
  caps: Cap[];
  sfx?: Sfx[];
  children?: React.ReactNode;
}> = ({ tag, voice, caps, sfx = [], children }) => {
  const { fps, durationInFrames } = useVideoConfig();
  useEffect(() => {
    loadBrandFonts();
  }, []);
  // fonts must be requested before first paint: call synchronously too
  loadBrandFonts();

  return (
    <AbsoluteFill style={{ background: "#0B0B0F" }}>
      <Background />
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
      <TagChip tag={tag} />
      <Watermark />
      <ProgressBar />
      <Captions caps={caps} />

      <Audio src={staticFile(voice)} volume={1} />
      <Audio
        src={staticFile(AUDIO.bgm)}
        volume={(f) => {
          const fadeIn = Math.min(1, f / 20);
          const fadeOut = Math.min(1, (durationInFrames - f) / 45);
          return AUDIO.bgmVolume * fadeIn * Math.max(0, fadeOut);
        }}
      />
      {sfx.map(([t, name, vol], i) => (
        <Sequence key={i} from={Math.max(0, Math.round(t * fps))} durationInFrames={90}>
          <Audio src={staticFile(AUDIO.sfx(name))} volume={vol ?? 0.55} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
