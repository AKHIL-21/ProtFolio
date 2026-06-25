# Akhil Muthyala Portfolio

Personal portfolio for Akhil Muthyala, Full Stack Software Development Engineer (.NET / Angular).

## Tech Stack

- HTML5
- CSS3
- JavaScript
- jQuery
- Particle.js
- Typed.js
- Vanilla Tilt
- ScrollReveal
- JSON-driven skills and projects

## Local Run

Open `index.html` directly or serve the folder:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Content Data

- `skills.json` drives the skills section.
- `projects/projects.json` drives the homepage work cards and the projects page.
- `index.html`, `experience/index.html`, and `404.html` contain the static page content and footers.

## Deploy (Vercel)

This is a static site with **no build step**. `vercel.json` already configures it:

- Framework preset: **Other** (`"framework": null`)
- Build command: none
- Output directory: project root (`"outputDirectory": "."`)
- `cleanUrls` is on, so `/projects` and `/experience` resolve to their folder `index.html`.

To deploy: push to the connected Git repo (Vercel auto-deploys), or run `vercel --prod`
from this directory. In the Vercel dashboard the Root Directory must be the repo root
(where this `index.html` lives).

## Project Structure

```
index.html            # single-page site (Hero, About, Skills, Education, Work, Experience, Contact)
skills.json           # JSON-driven skills section
404.html              # custom not-found page
vercel.json           # static deploy config (preset = Other, no build)
assets/
  css/                # style.css, 404.css
  js/                 # particles.min.js, app.js (particles), script.js (typed/tilt/scrollreveal)
  images/             # akhil-profile.png + section/project images
  resume.pdf          # downloadable resume
projects/             # /projects subpage + projects.json (work cards)
experience/           # /experience subpage (full timeline)
_old-portfolio/       # previous React/Vite portfolio, kept as a backup (not deployed)
```

## TODO

- Add LinkedIn URL if you want it shown publicly (placeholders left in the hero + footers).
- Add public project demos or repository links when available (`projects/projects.json`).
- Replace neutral project placeholder screenshots with real project screenshots when allowed.
