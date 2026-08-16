#!/usr/bin/env python3
"""Build DougFit: concatenate the data files into app-shell.html -> index.html

Usage:  python3 build.py
Then upload the generated index.html to the repo root (or commit and push).

Edit the source parts, never index.html directly:
  app-shell.html  UI + logic. Contains the /*__DATA__*/ placeholder.
                  Bump BUILD near the top of the <script> on every release.
  data-core.js    stretches, warm-ups, Doug's standing rules
  data-p1.js      Program 1, weeks 1-10   (20 workouts)
  data-p2.js      Program 2 + Program 3   (21 + 1 workouts)
  data-ghosts.js  pre-built generated session 3s, one per week
"""
import pathlib, re, sys

HERE = pathlib.Path(__file__).parent
PARTS = ["data-core.js", "data-p1.js", "data-p2.js", "data-ghosts.js"]

shell = (HERE / "app-shell.html").read_text()
if "/*__DATA__*/" not in shell:
    sys.exit("app-shell.html is missing the /*__DATA__*/ placeholder")

data = "\n".join((HERE / p).read_text() for p in PARTS)
out = shell.replace("/*__DATA__*/", data)
(HERE / "index.html").write_text(out)

build = re.search(r'const BUILD="([^"]*)"', out)
workouts = len(re.findall(r'\bid:\s*"p\d+w\d+[ab]"', out))
ghosts = out.count('"ghost":true')
print(f"index.html written — {len(out):,} bytes")
print(f"  build:    {build.group(1) if build else 'UNSET — bump BUILD before release'}")
print(f"  workouts: {workouts}")
print(f"  session3: {ghosts}")
