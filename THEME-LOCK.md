# DARK REALITY — locked reel theme (all Instagram reels)

Topics: Startup · IT · Business · Students · Money · AI · Reality facts
Tagline: **Reality for builders & students**
Format: 1080×1920, 30 fps. Only the TAG chip text changes per reel.

## Locked rules
- Background `#0B0B0F` + grain + vignette. Text `#F5F5F7`. ONE accent: amber `#FFB020`.
- Fonts: Poppins Bold (headlines/captions), Inter (small text), JetBrains Mono (labels/numbers).
- Top row (y≈250): topic TAG chip (left) + photo WATERMARK pill with handle (right). Progress bar below.
- Visuals live at y 440–1060. English captions at y 1100–1420. Bottom 500px stays clear (Instagram UI).
- CAPTIONS: ALWAYS English, simple basic words, synced to voice, amber highlight on key words (`*word*`).
- Motion: fast cuts, word-by-word pop, quick scale/slide-in. No blur, no heavy bounce.
- Audio: voice-over + low ambient BGM (`brand/audio/bgm.mp3`) + soft SFX (pop, tick, whoosh, hit, check, chime, riser).
- End: sign-off card with photo, name, handle, "Follow for reality, not motivation".

## Make the next reel
1. Copy `src/reels/_template` → `src/reels/<name>/` (rename), voice mp3 → `public/reels/<name>/voiceover.mp3`.
2. Fill English captions `[start, end, "text with *highlight*"]` (seconds).
3. Build visuals with `Scene` + the same card style as `src/reels/startup-idea/Visuals.tsx`.
4. Register a `<Composition>` in `src/Root.tsx` (use `SIZE` from `brand/theme`).

## Render (Codespaces)
`npx remotion render StartupIdeaReel out/startup-idea-reel.mp4 --concurrency=2 --jpeg-quality=95`
