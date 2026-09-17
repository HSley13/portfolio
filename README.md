# Sley Hortes — Portfolio

Personal portfolio: education, experience, projects, and a resume that's
generated from this repo's own data (`src/portfolio.js`) rather than
uploaded by hand — see `scripts/generate-resume.js`.

**Live:** https://hsley13.github.io/portfolio/

## Running locally

```bash
npm install
npm start
```

## Building

```bash
npm run build
```

Both `npm start` and `npm run build` regenerate the resume PDF first
(`prestart`/`prebuild` in `package.json`), so it's always in sync with the
site.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages
automatically on every push to `main`.

## Stack

React, React Router, styled-components.

---

Originally based on the [masterPortfolio](https://github.com/ashutosh1919/masterPortfolio)
template by Ashutosh Hathidara.
