# Sanat Bogenbaev — personal portfolio

A fast, responsive, English-language static portfolio. No framework or build step is needed.

## Add verified details

Edit `dist/portfolio.config.js`:

- `internshipEndDate`: currently `Jul 2026`, as supplied by Sanat. The internship date range is Apr 2026 – Jul 2026, and its status is “Completed internship”.
- `githubUrl` and `linkedinUrl`: the supplied real GitHub and LinkedIn profile URLs. Editing these values updates their contact links without removing icons or labels.
- Project `githubUrl` and `demoUrl`: real repository and live-demo URLs.
- Project `screenshot`: put an image in `dist/images/`, then enter its relative path, such as `images/avicenna.webp`. Set `screenshotAlt` to describe the actual image. Missing or invalid images leave the screenshot placeholder visible.

Project descriptions and other text can be edited directly in `dist/index.html`. Styling is in `dist/styles.css`; navigation and motion are in `dist/script.js`. Republish after changing files to update the online site.

## Local preview

From this directory, run:

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173 in your browser. Email and phone links use mailto and tel; the six supplied contacts are already linked. Project repository and demo links remain placeholders until supplied.

Animations respect reduced-motion preferences. Content remains available without JavaScript. The internship is completed; “Present” appears only in the ongoing university education entry.

## Brand images

The six active technology logos are local optimized PNG files in `dist/images/`. Their display boxes are consistent, and every logo has a readable text label and alt text. `dist/images/aitu-logo.png` is the actual white logo linked from the university’s official website, rasterized without redrawing or changing its aspect ratio. See `ASSETS.md` for exact source URLs. Replace files in this folder with other genuine brand images if needed; retain their aspect ratios.

The reference-inspired restyle uses a flat dark slate background, restrained turquoise accents, Poppins typography, compact section headings, and three project cards on desktop. Mobile stacks the content, with a three-column technology grid and an expandable menu. Scroll animation is a brief opacity fade and respects reduced-motion settings.

The hero includes an original isometric developer illustration with React, Go and Java text labels. About displays Sanat’s supplied portrait in a circular turquoise frame, with email, GitHub and LinkedIn links below. The image assets are optimized local WebP files; see `ASSETS.md` for provenance and the illustration prompt.

## Current contacts

- Phone: +7 776 270 0967 (`tel:+77762700967`)
- Email: bogenbaevsanat07@gmail.com (`mailto:bogenbaevsanat07@gmail.com`)
- Telegram: @jrdsta — https://t.me/jrdsta
- LinkedIn: bogenbaevjr — https://www.linkedin.com/in/bogenbaevjr/
- GitHub: juniorqazaq — https://github.com/juniorqazaq
- Instagram: bogenbaevjr — https://www.instagram.com/bogenbaevjr/

All external profiles have `target="_blank"` and `rel="noopener noreferrer"`. Skills contains only React, Go, Java, TypeScript, Figma and Angular; Backend/Foundations and the previous extra technologies were removed from this section. Historical project descriptions retain the originally supplied project facts.
