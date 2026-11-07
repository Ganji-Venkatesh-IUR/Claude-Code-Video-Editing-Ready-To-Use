#!/usr/bin/env bash
set -euo pipefail

ZIP="${1:?Usage: bash run-video.sh filename.zip}"

if [ ! -f "$ZIP" ]; then
  echo "ZIP not found: $ZIP"
  exit 1
fi

NAME="$(basename "$ZIP" .zip)"
DEST="video-packages/$NAME"

if [ -e "$DEST" ]; then
  echo "Folder already exists: $DEST"
  echo "Choose a different ZIP filename or remove that package first."
  exit 1
fi

mkdir -p "$DEST"
unzip -q "$ZIP" -d "$DEST"

PACKAGE="$(find "$DEST" -name package.json \
  -not -path '*/node_modules/*' -print -quit)"

if [ -z "$PACKAGE" ]; then
  echo "No package.json found inside ZIP."
  exit 1
fi

PROJECT="$(dirname "$PACKAGE")"

echo "Project found: $PROJECT"
cd "$PROJECT"

npm install --no-audit --no-fund
npm run dev
