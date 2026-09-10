# STEM Seeds website

Astro project scaffold matching the site design: **Home**, **Boxes**,
**Partners & Sponsors**, plus a persistent footer.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:4321`).

## Project structure

```
src/
  content/
    boxes/          ← one .md file per STEM box (add new ones here)
    partners/        ← one .md file per sponsor or partner
    config.ts         ← schema defining what fields each type needs
  components/
    ExpandableRow.astro   ← shared collapse/expand card used on Boxes page
  layouts/
    Layout.astro           ← header nav + persistent footer, wraps every page
  pages/
    index.astro    ← Home (Mission, About us, Partners, Boxes teaser, Get Involved)
    boxes.astro     ← STEM Boxes page (fully built out)
    partners.astro   ← Partners & Sponsors page (logo grid; expand-on-click still TODO)
```

## Adding a new STEM box

Create a new file in `src/content/boxes/`, e.g. `robotics-box.md`:

```markdown
---
title: "Robotics Box"
status: "available"      # or "coming-soon"
summary: "One-line summary shown in the collapsed row."
focus: "What STEM area this targets."
contents: "What's inside."
potentialUses: "Sample activities."
flagship: false            # true = starts expanded on page load
order: 4                   # controls sort position
---
```

No component code needs to change — the Boxes page pulls this in
automatically.

## Adding a new partner or sponsor

Same idea, in `src/content/partners/`:

```markdown
---
name: "Org Name"
kind: "sponsor"          # or "partner"
blurb: "How they support STEM Seeds."
website: "https://example.com"
order: 1
---
```

## Still to do

- **Zeffy embed**: paste your real embed snippet into `src/pages/index.astro`
  where the placeholder comment is, in the Get Involved section. Get the
  snippet from your Zeffy campaign's Sharing/Embed settings.
- **Partners page expand-on-click**: currently a static logo grid.
  Reuse the same interaction pattern as `ExpandableRow.astro` — the
  expanded state should show `blurb`, `website`, and social links.
- **Real content**: replace all placeholder text (Mission, About us,
  team captain bio/photo) and swap in real box/partner content
  as it comes in from your team and partner orgs.
- **Images**: `image` (boxes) and `logo` (partners) fields are
  optional strings — point them at files placed in `/public/`
  (e.g. `image: "/boxes/exploration.jpg"`) once you have real assets.
- **Deploy**: push this to GitHub and connect it to Vercel or Netlify
  for free hosting with automatic deploys on every push.
