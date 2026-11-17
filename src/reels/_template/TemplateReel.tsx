import React from "react";
import { Cap } from "../../brand/Captions";
import { ReelShell, Sfx } from "../../brand/ReelShell";
import { Scene } from "../../brand/motion";

// 1) Copy this folder → src/reels/<new-reel>/   2) put voiceover in public/reels/<new-reel>/
// 3) fill CAPS (English, simple, synced to voice)  4) build visuals  5) register in src/Root.tsx
export const TEMPLATE_CAPS: Cap[] = [
  [0.2, 2.0, "Your *first line* here"],
  [2.1, 4.0, "Second line"],
];

export const TEMPLATE_SFX: Sfx[] = [[0.2, "whoosh", 0.4]];

export const TemplateReel: React.FC = () => (
  <ReelShell tag="STARTUP" voice="reels/_template/voiceover.mp3" caps={TEMPLATE_CAPS} sfx={TEMPLATE_SFX}>
    <Scene from={0.1} to={4}>
      {/* visuals go here — use panel cards, amber accent, mono labels */}
      <div />
    </Scene>
  </ReelShell>
);
