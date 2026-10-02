# Sanat Bogenbaev — personal portfolio

A fast, responsive, English-language static portfolio. No framework or build step is needed.

## Add verified details

Edit `dist/portfolio.config.js`:

- `internshipEndDate`: actual end month and year. Until supplied, the site clearly shows an end-date placeholder and “Completed internship”.
- `githubUrl` and `linkedinUrl`: real profile URLs. Empty fields remain labeled placeholders with no fabricated destination.
- Project `githubUrl` and `demoUrl`: real repository and live-demo URLs.
- Project `screenshot`: put an image in `dist/images/`, then enter its relative path, such as `images/avicenna.webp`. Set `screenshotAlt` to describe the actual image. Missing or invalid images leave the screenshot placeholder visible.

Project descriptions and other text can be edited directly in `dist/index.html`. Styling is in `dist/styles.css`; navigation and motion are in `dist/script.js`. Republish after changing files to update the online site.

## Local preview

From this directory, run:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173 in your browser. Email and phone links use mailto and tel; other destinations become links only after you add them.

Animations respect reduced-motion preferences. Content remains available without JavaScript. The internship is completed; “Present” appears only in the ongoing university education entry.

## Brand images

Eight recognizable technology logos are local optimized PNG files in `dist/images/`. Their display boxes are consistent, and every logo has a readable text label and alt text. `dist/images/aitu-logo.png` is the actual white logo linked from the university’s official website, rasterized without redrawing or changing its aspect ratio. See `ASSETS.md` for exact source URLs. Replace files in this folder with other genuine brand images if needed; retain their aspect ratios.

The reference-inspired restyle uses a flat dark slate background, restrained turquoise accents, Poppins typography, compact section headings, and three project cards on desktop. Mobile stacks the content, with a four-column technology grid and an expandable menu. Scroll animation is a brief opacity fade and respects reduced-motion settings.
