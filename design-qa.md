# Reference adaptation — design QA

final result: passed

## Evidence and comparison scope

- Source visual truth: `/var/folders/z_/14_ks9592jg5j45f2d5lqlqh0000gn/T/codex-clipboard-9c474af7-7794-4747-89cc-156260877103.png` (2048 × 1280 pixels).
- Source is a Dribbble presentation containing overlapping desktop page crops; browser chrome and presentation framing are not part of the requested website.
- Content crop: `work/reference-content.jpg` (720 × 540, from source rectangle x=477, y=289, width=1093, height=819).
- Implementation home capture: `outputs/portfolio-desktop.jpg` (1440 × 1000 pixels / CSS viewport, 1:1 density), home at scrollY=0.
- Implementation skills capture: `outputs/portfolio-skills-desktop.jpg` (1280 × 720 pixels / CSS viewport, 1:1 density), Skills anchor.
- Mobile captures: `outputs/portfolio-mobile.jpg` and `outputs/portfolio-education-mobile.jpg` (390 × 844 pixels / CSS viewport, 1:1 density).
- Full-view normalized side-by-side comparison: `work/design-comparison.jpg`. Source content crop and implementation are shown together at 720 pixels wide each. This is a style/composition comparison, not a claim of pixel-identical viewport matching.
- Focused Skills / Projects comparison: `work/design-comparison-skills.jpg`. Source right-hand content region and browser-rendered implementation appear in a single composite. Logo alignment, centered headings, dark surfaces, and cyan card tops are readable at this scale.

## Required fidelity surfaces

- **Fonts and typography:** Poppins matches the reference's geometric sans-serif character. Compact 40px desktop hero, restrained 20px section headings, normal 16px body copy, and 14px readable technology labels. No cropped headings or overlapping characters at tested widths. The user's real descriptions are longer than the reference's sample text and reflow naturally.
- **Spacing / layout rhythm:** Compact navigation; two-column hero; centered section headings; identity and biography columns; aligned technology grid; three project cards on desktop; two-column contact content. Small 3–4px radii and flat surfaces replace the previous large rounded profile card. Mobile uses a single content column and a four-column logo grid (two columns at 320px).
- **Colors / tokens:** Flat slate #202833 background, #293340 panels, #5de1de accents, #f0f3f7 primary text and #b8c1cd secondary text. No gradients, heavy shadows, decorative scenery, or oversized marketing slogans. The reference's restrained turquoise palette and dark developer-portfolio tone are preserved.
- **Image quality / fidelity:** Eight recognizable Devicon original brand assets are rasterized to 96×96 transparent PNGs and rendered uniformly at 32×32. White 48×48 wells make black GitHub details visible and keep all technologies aligned. AITU uses the actual white logo linked from the official university footer; original 132:70 ratio is preserved at 264×140 source pixels and 158.4×84 display pixels. Nine images total 24,676 bytes. No logo was generated, redrawn, recolored, cropped, or distorted. Each has alt text, dimensions and lazy decoding/loading.
- **Copy / content:** Only Sanat's supplied identity, experience, education, courses, technologies and projects are used. Avicenna describes redesign/frontend contribution, without claiming system/API/patient-data/role implementation. Internship remains completed; unknown end date remains explicit. Unknown profile/repository/demo URLs remain labeled placeholders.

## Intentional adaptations

- No borrowed portrait, third-party name or personal information is copied. The reference's personal portrait/illustration and pixel scenery are omitted in favour of a clean text-led layout, matching the user's request for minimalism and avoiding fictitious personal assets.
- No skill proficiency meters are invented. The requested eight technologies replace the reference's four unrelated technologies.
- Education, courses and internship are included because they are required by Sanat's brief; the source mockup does not show these sections.
- Real project screenshot slots remain clearly marked because the user requested places to add screenshots and supplied none.

## Findings and comparison history

- Initial full-view and focused comparisons found no actionable P0/P1 layout or style mismatch within the requested adaptation scope.
- [P2, fixed] Mobile skill labels were initially 12px. Increased them to 14px, also raising compact brand text to 14px. Recaptured `portfolio-mobile.jpg`; TypeScript and all other labels fit their columns. No horizontal overflow at 320, 390 or 768px after the correction.
- Anchor transitions were simplified to immediate navigation; only a short opacity reveal remains. This avoids excessive motion and keeps navigation responsive. Reduced-motion preferences disable the reveal.
- Final mobile Education capture confirms the AITU logo is readable, proportionate and fully loaded, with no clipping of course details.

## Functional / responsive checks

- Logo network and rendered image checks: all eight skill PNGs loaded, each 32×32; AITU loaded at original 264×140 dimensions.
- Mobile menu expands, exposes all navigation links, and closes on section selection. Existing Escape handler restores focus to the menu button.
- Home, Skills and Education anchors were exercised; active navigation updates with the viewed section.
- Rendered widths checked: 320, 390, 768 and 1440px; document width equals viewport width (no horizontal overflow). Desktop Skills captured in an isolated 1280px preview.
- Local browser error log: no console errors.
- Semantic headings, skip link, visible focus outlines, alt text, email/phone links and reduced-motion rule retained.
- JavaScript syntax, internal anchors and local asset references verified.

## Remaining scope

- No mobile source mockup was supplied, so mobile is verified as a responsive adaptation rather than a 1:1 source clone.
- Profile URLs, demo URLs, project screenshots and the internship end date remain pending user-provided facts.

## Implementation checklist

- [x] Reference-inspired compact dark composition.
- [x] Eight genuine recognizable technology PNGs, readable labels and consistent geometry.
- [x] Official AITU logo with intact proportions.
- [x] Mobile navigation and reflow; no overflow at tested widths.
- [x] No invented facts or URLs; no AI-generated logos.
- [x] Required comparison evidence and post-fix capture.
