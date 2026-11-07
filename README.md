# Slot to Survive — Story Room

An internal story bible and editable mock-forum workspace for the fictional *Slot to Survive* documentary / NSRC ARG.

## What's inside

- **Characters** — 21 dossiers, including ages, team affiliations, backstories, goals, fatal flaws and relationships; editable in the browser.
- **Teams & alliances** — Mercer Racing, Voss Competition, independents and supporting characters.
- **Chronology** — foundational events from Frank's basement in 1987 through the strip mall era and 2026 championship.
- **Scandals** — canonical truth versus public claims, evidence to fabricate for the ARG, and season-story purpose.
- **Forum archive** — seven seeded threads with character posts. Add fictional replies or new threads locally.
- **Manufacturers** — Speedster US, MRZ, SlotTime and Speed Slot.

## View the site

Open `index.html` from a local web server, or serve the repository with GitHub Pages:

**GitHub → Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save.**

GitHub Pages hosting is public. This project is a **writer's room**, not the fictional public-facing league website.

## Editing and keeping your changes

Character edits, writer notes and forum drafts persist in your **current browser's localStorage**. They do **not** automatically sync to GitHub or other devices. Use the sidebar's **Export backup** feature regularly, and **Import backup** to restore the saved JSON in another browser.

To make canonical changes persist for everyone, update `data.js` in the repository. Browser overrides may temporarily take precedence over newer `data.js` facts until reset/imported.

## Production approach

Keep this site internal as the continuity tool. Eventually build two separate audience-facing experiences:
1. The cinematic *Slot to Survive* documentary site.
2. The old-school NSRC league site containing race results, announcements and an in-universe forum.

All characters, businesses and events here are fictional satire. Do not confuse fictional allegations with real people or real manufacturers.

## Current scope

Static front end; no database, no login and no shared server-side writing. This makes the first version inexpensive to host and easy to iterate. A future shared-authored version can add a database.
