import { continueRender, delayRender, staticFile } from "remotion";

const FACES: [string, string, string][] = [
  ["Poppins", "brand/fonts/Poppins-Bold.ttf", "700"],
  ["Inter", "brand/fonts/Inter-Medium.otf", "500"],
  ["Inter", "brand/fonts/Inter-SemiBold.otf", "600"],
  ["JetBrains Mono", "brand/fonts/JetBrainsMono-Regular.ttf", "400"],
  ["JetBrains Mono", "brand/fonts/JetBrainsMono-Bold.ttf", "700"],
];

let started = false;

/** Loads the bundled brand fonts (offline, no network needed). */
export const loadBrandFonts = () => {
  if (started) return;
  started = true;
  const handle = delayRender("Loading brand fonts");
  Promise.all(
    FACES.map(([family, file, weight]) =>
      new FontFace(family, `url(${staticFile(file)})`, { weight })
        .load()
        .then((f) => {
          document.fonts.add(f);
        }),
    ),
  )
    .catch((e) => console.error("Font load failed", e))
    .then(() => continueRender(handle));
};
