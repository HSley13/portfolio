# Sley HORTES — Portfolio

Personal portfolio: education, experience, projects, and a resume that's
generated from this repo's own data rather than uploaded by hand — see
`scripts/generate-resume.js`. Available in English, Traditional Chinese,
and Spanish (`src/i18n/`) via the language switcher in the header; the
resume PDF itself is generated from the English data only.

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
