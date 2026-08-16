# DougFit

A mobile web app for Alex's DougFit training programs, transcribed from his trainer's
weekly workout PDFs. Single self-contained HTML file, no dependencies, works offline,
installed to the iPhone Home Screen from GitHub Pages.

Live: `https://<username>.github.io/dougfit/`

## What's in it

- **42 workouts** across three programs, in chronological order
  - Program 1 — Foundation (weeks 1–10, 20 workouts)
  - Program 2 — Enter The Drop Set (weeks 1–11, 21 workouts)
  - Program 3 — Train Like An Athlete (week 1, 1 workout)
- **22 generated "session 3s"** — one per week, filling the slot that used to be an
  in-person trainer session. Built only from exercises that appear in the real PDFs.
  Clearly labelled `GENERATED`, individually skippable, never block program progress.
- Completion tracking by date, per-set checkboxes, weight/rep logging
- Last-time weights shown inline for progressive overload
- Rest timer that honours the trainer's own rest instructions where he gives them
- 34 flagged data issues from the source PDFs — surfaced, never silently "corrected"
- JSON export/import with a backup prompt

## Build

Edit the source parts, never `index.html` directly:

| File | Contents |
|---|---|
| `app-shell.html` | UI + all logic. Contains the `/*__DATA__*/` placeholder. |
| `data-core.js` | Stretches, warm-ups, standing rules |
| `data-p1.js` | Program 1 |
| `data-p2.js` | Programs 2 and 3 |
| `data-ghosts.js` | Pre-built generated session 3s |

```bash
python3 build.py      # -> index.html
```

Bump `const BUILD` near the top of the `<script>` in `app-shell.html` on every release.
The value is displayed in the app under **More → Updating the app**, so you can confirm
which version is actually live on the phone.

## Deploy

Commit `index.html` to the repo root. GitHub Pages redeploys automatically in ~1 minute.
On the phone: close the app from the app switcher and reopen. GitHub caches HTML for up
to 10 minutes.

## Adding workouts

Append to `P1` / `P2` / `P3`, then rebuild.

```js
{
  id: "p3w2a",              // permanent — never reuse or change an id
  program: 3, week: 2, slot: 1,
  title: "Posterior",
  focus: ["back","hamstrings","core"],
  source: "Program 3 Week 2.pdf",
  warmup: "run" | "cardio5" | "none",
  sched: "Day 1 ... | Day 2 ...",          // optional
  note: "Session-level instruction",        // optional
  flags: ["data issue surfaced in-app"],    // optional
  groups: [
    { name: "Group 1", ex: [
      { n: "Exercise name", sr: "3 / 10", no: "Trainer's notes",
        v: "https://youtu.be/...", flags: ["ambiguity note"],
        kind: "text" }        // kind:"text" for circuit / freeform blocks
    ]}
  ]
}
```

After adding workouts, consider re-baking `data-ghosts.js` so the generated sessions
account for the new coverage.

## Data durability

Progress lives in `localStorage` on the phone, keyed to the site's origin — **not** to the
file. Replacing `index.html` never touches it. Guaranteed by:

1. Progress keyed to permanent workout IDs, never filenames or list positions
2. Saved state merged over defaults, so new fields never wipe an old save
3. Schema changes handled by an additive `migrate()` keyed on `state.v`, writing a
   pre-migration snapshot first
4. Import merges rather than replaces — a stale backup can't delete newer completions

**Changing the URL does reset it**, since storage is per-origin. Export first, import after.

## Runtime extension points

```js
DougFit.addWorkouts([...])              // add workouts at runtime
DougFit.health.register(name, asyncFn)  // Oura / Apple Health providers (unused)
DougFit.health.snapshot(date)           // fans out to registered providers
DougFit.logActivity({...})              // capoeira, runs — persists + exports, no UI yet
```

## Tests

Playwright scripts in this directory, run against a local server:

```bash
python3 -m http.server 8899 &
python3 t10.py    # upgrade path: old save migrates without data loss
python3 t14.py    # baked session 3s, skip behaviour, non-blocking progression
```

`t10.py` is the important one — run it against any new build before deploying.
