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

Changes are saved locally as drafts. Click **Save to GitHub** in the sidebar to commit the edits, notes, new forum threads and replies to `data.js` on `main`. Cloudflare Pages then rebuilds the site. To prevent accidentally overwriting a concurrent edit, publishing checks the GitHub file revision and blocks stale saves. If blocked, **Export backup** before reloading.

**Required Cloudflare Pages secrets** (never commit these to GitHub):

1. In GitHub, create a **fine-grained personal access token** with repository access only to `itsapola/Slot-to-survive` and **Contents: Read and write** permission. Do not paste that token into this website or a public file.
2. In the **Cloudflare Pages project**, open **Settings → Variables and Secrets** (sometimes under **Environment variables**), and add `GITHUB_TOKEN` as a **secret** containing that token.
3. Add `STORY_ADMIN_PASSWORD` as a **secret** with a long unique editor password. It should not match your GitHub password.
4. Make sure both secrets are set in the **Production** environment. Redeploy the latest commit so Cloudflare Pages Functions pick up the values.
5. In the deployed Story Room, edit a character or create a forum post, then click **Save to GitHub**. Enter the editor password when prompted. The browser remembers the password only until the tab closes, not in localStorage.
6. Confirm the resulting commit in GitHub and let Cloudflare redeploy. Refresh other devices to load it.

**Important:** This is a public repository. Even if the editor is password protected, your characters, scandals and spoilers in `data.js` are publicly readable. For truly private story development, make the repository private and protect the Cloudflare site with Cloudflare Access. Consider Cloudflare rate limiting or Access for the write endpoint.

The site's API lives in `functions/api/story.js`, and uses the token server-side. Static deployments that don't execute Cloudflare Pages Functions will not support GitHub saving.

## Production approach

Keep this site internal as the continuity tool. Eventually build two separate audience-facing experiences:
1. The cinematic *Slot to Survive* documentary site.
2. The old-school NSRC league site containing race results, announcements and an in-universe forum.

All characters, businesses and events here are fictional satire. Do not confuse fictional allegations with real people or real manufacturers.

## Current scope

Static front end plus a Cloudflare Pages Function. No database is required; GitHub is the canonical store. Editing is protected by a server-side editor password, but the overall site and repository remain public until you explicitly restrict them.


## Character portrait assets (one-time upload)

The Story Room now expects photographs at `portraits/<character-id>.jpg`. Each portrait appears automatically in character cards and the full biography. Until images are uploaded, an initials placeholder remains visible, without broken-image symbols.

The 21 headshots have been cropped from the approved three ensemble sheets. Download and **unzip** the character-photos archive supplied in the conversation. On GitHub, select **Add file → Upload files**, drag in the **portraits** folder's JPG files, ensuring they are saved under the repository's `portraits/` directory, and commit. In GitHub's web uploader, the easiest method is to enter/create the `portraits` folder first so the paths remain correct. Cloudflare will then redeploy them automatically.

Names: `jake, richard, gary, martin, terry, brent, dennis, val, gordon, elaine, neil, frank, dale, simon, pam, elliot, al, deborah, linda, stanley, susan` — each with a `.jpg` extension.

The cast photography is fictional and AI-created. The older Valerie visual remains assigned to Valerie Chen (now canonically “Neil's Wife”), while Elaine's own portrait appears on her racer profile.
