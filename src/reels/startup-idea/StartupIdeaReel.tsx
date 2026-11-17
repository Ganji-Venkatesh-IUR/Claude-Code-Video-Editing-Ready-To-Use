import React from "react";
import { ReelShell } from "../../brand/ReelShell";
import { CAPS, SFX } from "./captions";
import { Visuals } from "./Visuals";

export const StartupIdeaReel: React.FC = () => (
  <ReelShell tag="STARTUP" voice="reels/startup-idea/voiceover.mp3" caps={CAPS} sfx={SFX}>
    <Visuals />
  </ReelShell>
);
