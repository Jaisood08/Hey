# Jay Sood | Portfolio (React + TypeScript)

A rebuild of the original static Webflow/jQuery portfolio as a React 18 + TypeScript + Vite single-page app. The design and features are identical to the original site:

- **Home** — loading screen, auto-playing full-screen fade slider (Intro / Projects / Music), typewriter role rotation, animated stat counters, slide tracker with links, hamburger overlay menu.
- **About** — profile hero, Education / Experience / Achievements / Positions timelines with scroll fade-up animation, skills grid, filterable project portfolio (Machine Learning / Apps / Website / Graphics).
- **Projects** — project cards with GitHub / website / video links.

## Develop

```bash
npm install
npm run dev
```

## Build static files

```bash
npm run build
```

The deployable static site is emitted to `dist/`. Because Vite is configured with `base: './'` and the router uses hash-based URLs, the contents of `dist/` work from any path.

## Deploy

Just push to `main` — the workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages automatically.

One-time setup: in the GitHub repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Manual alternative: `npm run deploy` (publishes `dist/` to a `gh-pages` branch using the `gh-pages` package).

## Editing content

All project cards, categories, links, and social URLs live in [src/data/site.ts](src/data/site.ts).
