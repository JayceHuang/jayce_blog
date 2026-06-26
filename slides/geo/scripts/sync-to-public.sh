#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SLIDES_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
REPO_ROOT="$(cd "$SLIDES_DIR/../.." && pwd)"

mkdir -p "$REPO_ROOT/public/geo" "$REPO_ROOT/public/geo-assets/screenshots" "$REPO_ROOT/public/geo-assets/evidence"

cp "$SLIDES_DIR/index.html" "$REPO_ROOT/public/geo/index.html"
cp "$SLIDES_DIR"/assets/screenshots/* "$REPO_ROOT/public/geo-assets/screenshots/"
if compgen -G "$SLIDES_DIR/assets/evidence/*" > /dev/null; then
  cp "$SLIDES_DIR"/assets/evidence/* "$REPO_ROOT/public/geo-assets/evidence/"
fi

perl -0pi -e 's#(?<!/)assets/screenshots/#/geo-assets/screenshots/#g' "$REPO_ROOT/public/geo/index.html"
perl -0pi -e 's#(?<!/)assets/evidence/#/geo-assets/evidence/#g' "$REPO_ROOT/public/geo/index.html"

echo "Synced GEO slides to public/geo/index.html"
