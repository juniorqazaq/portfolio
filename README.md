# Sanat Bogenbaev Portfolio

Modern personal portfolio website for Sanat Bogenbaev, Frontend Developer and Software Engineering student at Astana IT University.

This is a static website. It does not need React, Vite, Next.js, npm install, or a build step. You can edit the HTML, CSS, JavaScript, images, and configuration files directly.

## Project Structure

```text
portfolio/
├── README.md
├── ASSETS.md
├── design-qa.md
└── dist/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── portfolio.config.js
    └── images/
        ├── developer-hero.webp
        ├── sanat-portrait.webp
        ├── aitu-logo.png
        ├── react.png
        ├── go.png
        ├── java.png
        ├── typescript.png
        ├── figma.png
        ├── angular.png
        └── contact icons...
```

Main files:

- `dist/index.html` - website sections and text.
- `dist/styles.css` - layout, colors, spacing, responsive design.
- `dist/script.js` - mobile menu, scroll animation, project rendering.
- `dist/portfolio.config.js` - project screenshots, demo links, repository links, internship date.
- `dist/images/` - all images, screenshots, and logos.

## Open Locally

From the `portfolio` folder, run:

```sh
python3 -m http.server 4173 --directory dist
```

Then open:

```text
http://localhost:4173
```

Section links:

```text
http://localhost:4173/#home
http://localhost:4173/#about
http://localhost:4173/#skills
http://localhost:4173/#projects
http://localhost:4173/#experience
http://localhost:4173/#education
http://localhost:4173/#contact
```

## Published Site

Current published website:

```text
https://sanat-bogenbaev-portfolio.sanatpodpiska.chatgpt.site
```

After editing local files, publish the site again to update the online version.

## How To Edit Each Section

### Hero

File:

```text
dist/index.html
```

Find the `home` section. You can edit:

- name
- position
- short description
- button text

The hero image is:

```text
dist/images/developer-hero.webp
```

### About

File:

```text
dist/index.html
```

Find the `about` section and edit the paragraph under `About Me`.

Current portrait image:

```text
dist/images/sanat-portrait.webp
```

To replace the photo, add a new image into `dist/images/`, then update the `src` in `index.html`.

Example:

```html
<img src="images/sanat-portrait.webp" alt="Portrait of Sanat Bogenbaev">
```

Keep the `alt` text clear and descriptive.

### Skills

File:

```text
dist/index.html
```

Current skills:

- React
- Go
- Java
- TypeScript
- Figma
- Angular

Skill logos:

```text
dist/images/react.png
dist/images/go.png
dist/images/java.png
dist/images/typescript.png
dist/images/figma.png
dist/images/angular.png
```

If you replace logos, use official or recognizable logos. Keep the same file names unless you also update `index.html`.

### Projects

Project screenshots and project links are controlled from:

```text
dist/portfolio.config.js
```

Each project can have:

- `screenshot`
- `screenshotAlt`
- `githubUrl`
- `demoUrl`

Example:

```js
{
  id: 'avicenna',
  screenshot: 'images/avicenna.webp',
  screenshotAlt: 'Avicenna 2.0 hospital website redesign preview',
  githubUrl: '',
  demoUrl: ''
}
```

If `screenshot` is empty, the site shows a clean placeholder instead of an image.

## How To Add Project Screenshots

Put screenshots inside:

```text
dist/images/
```

Recommended file names:

```text
dist/images/avicenna.webp
dist/images/zaman-ai.webp
dist/images/epl-system.webp
```

Recommended screenshot size:

```text
1200 x 750 px
```

Recommended format:

```text
.webp
```

PNG or JPG also works, but WebP is usually lighter and faster.

### Add Avicenna 2.0 Screenshot

1. Save the screenshot here:

```text
dist/images/avicenna.webp
```

2. Open:

```text
dist/portfolio.config.js
```

3. Find the Avicenna project and set:

```js
screenshot: 'images/avicenna.webp',
screenshotAlt: 'Avicenna 2.0 hospital website redesign preview',
```

4. Add real links only if they exist:

```js
githubUrl: '',
demoUrl: '',
```

### Add Zaman AI Screenshot

1. Save the screenshot here:

```text
dist/images/zaman-ai.webp
```

2. In `dist/portfolio.config.js`, find the Zaman AI project and set:

```js
screenshot: 'images/zaman-ai.webp',
screenshotAlt: 'Zaman AI Islamic banking platform preview',
```

3. Add real links only if they exist:

```js
githubUrl: '',
demoUrl: '',
```

### Add English Premier League System Screenshot

1. Save the screenshot here:

```text
dist/images/epl-system.webp
```

2. In `dist/portfolio.config.js`, find the English Premier League project and set:

```js
screenshot: 'images/epl-system.webp',
screenshotAlt: 'English Premier League information system dashboard preview',
```

3. Add real links only if they exist:

```js
githubUrl: '',
demoUrl: '',
```

## Image Rules

Use real project screenshots.

Good screenshots:

- show the actual project interface
- have readable UI
- use the same aspect ratio for all project cards
- are optimized before adding
- have descriptive `alt` text

Avoid:

- blurry screenshots
- images with private data
- random stock images
- fake logos
- fake demo or GitHub links

## Experience

File:

```text
dist/index.html
```

Internship end date:

```text
dist/portfolio.config.js
```

Current value:

```js
internshipEndDate: 'Jul 2026'
```

Visible range:

```text
Apr 2026 - Jul 2026
```

The internship is completed. Do not use `Present` for this role.

## Education

File:

```text
dist/index.html
```

Astana IT University logo:

```text
dist/images/aitu-logo.png
```

If you replace it, use the real university logo and keep the proportions.

## Contact Links

Contacts are in:

```text
dist/index.html
```

Current links:

- Phone: `tel:+77762700967`
- Email: `mailto:bogenbaevsanat07@gmail.com`
- Telegram: `https://t.me/jrdsta`
- LinkedIn: `https://www.linkedin.com/in/bogenbaevjr/`
- GitHub: `https://github.com/juniorqazaq`
- Instagram: `https://www.instagram.com/bogenbaevjr/`

External profile links should keep:

```html
target="_blank" rel="noopener noreferrer"
```

## Before Publishing

Check the site locally:

- desktop width
- mobile width
- menu open and close
- project screenshots load correctly
- contact links are correct
- no fake links are added
- no private data appears in screenshots

Use:

```sh
python3 -m http.server 4173 --directory dist
```

Then open:

```text
http://localhost:4173
```

## Asset Sources

See:

```text
ASSETS.md
```

It contains source notes for logos and generated/local images.
