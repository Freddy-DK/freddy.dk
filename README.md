# freddy.dk — Astro

An [Astro](https://astro.build) rebuild of [freddy.dk](https://freddy.dk), migrated from
WordPress (Astra + Elementor) to a fast, static, dependency-light site.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |

## Structure

```
public/images/        Logo, favicon, service icons, profile photo
src/
  data/nav.ts         Navigation, social links, and contact details (single source of truth)
  layouts/Layout.astro  Base HTML shell — <head>, fonts, header, footer, SEO/OG tags
  components/
    Header.astro      Sticky nav with responsive mobile menu
    Footer.astro      Footer with quick links, contact, socials
    PageHero.astro    Reusable navy hero for interior pages
    CtaBand.astro     Reusable call-to-action band
    SocialLinks.astro Inline SVG social icons
  pages/
    index.astro                Home
    freddy-in-your-corner.astro
    motivational-speaker.astro
    devops.astro
    about.astro
    contact.astro
  styles/global.css   Design tokens (brand colors, fonts) + base styles
```

## Design

- **Fonts:** Poppins (headings) + Inter (body), loaded from Google Fonts.
- **Palette:** navy `#1C224B`, purple `#6A0DAD`, accent `#8E63FF`, lavender `#EEF1FF` —
  extracted from the original Elementor theme. All defined as CSS variables in
  `src/styles/global.css`.

## Contact form

`src/pages/contact.astro` includes a form wired for **Netlify Forms** (works automatically
when deployed to Netlify). For other hosts, point the form `action` at a
[Formspree](https://formspree.io) endpoint (or your own handler) and remove the
`data-netlify` attributes. The page also lists direct email/phone, which always work.

## Deployment

Builds to fully static HTML in `./dist/`. Deploy to GitHub Pages, Netlify, or Vercel.
For a GitHub Pages **project** site (served from a subpath), set `base` in `astro.config.mjs`.
