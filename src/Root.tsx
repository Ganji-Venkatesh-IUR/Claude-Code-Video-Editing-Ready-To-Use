import React from "react";
import { Composition } from "remotion";
import { SIZE } from "./brand/theme";
import { DURATION_SEC } from "./reels/startup-idea/captions";
import { StartupIdeaReel } from "./reels/startup-idea/StartupIdeaReel";

// Every reel = 1080x1920, 30fps, same locked "Dark Reality" theme.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StartupIdeaReel"
        component={StartupIdeaReel}
        durationInFrames={Math.round(DURATION_SEC * SIZE.fps)}
        fps={SIZE.fps}
        width={SIZE.w}
        height={SIZE.h}
      />
    </>
  );
};
