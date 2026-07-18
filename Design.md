# Jerry'Studio — Design System

The single source of truth for the visual language of this project. Every component must conform to what's here. Update this file whenever a design decision changes.

---

## Design Direction

**Aesthetic: Cinematic Gallery.** Dark, editorial, gold-accented. The site behaves like a dim gallery room — near-black walls, generous space between frames, and the photographs as the only saturated objects on the page. Type is oversized serif for headlines (editorial magazine feel), quiet sans-serif for reading. Motion is slow and subtle, like a camera settling.

The feeling to evoke: *"this person treats moments as precious."* Quality is communicated before a single word is read — through spacing, restraint, and letting the work dominate.

Inspiration references (researched 2026-07):
- Fine-art wedding sites with full-bleed imagery and serif editorial type — [StyleCloud fine-art wedding examples](https://stylecloud.co/fine-art-wedding-photography-websites/)
- Dark cinematic portfolio presentation — [Sitebuilder Report photography portfolios](https://www.sitebuilderreport.com/inspiration/photography-portfolios)
- Oversized viewport-relative typography letting imagery breathe — [Sitebuilder Report wedding photography sites](https://www.sitebuilderreport.com/inspiration/wedding-photography-websites)

---

## Color Palette

Client-specified. Defined as CSS variables in `app/globals.css` and mapped to Tailwind utilities via `@theme inline`.

| Token | Value | Usage |
|---|---|---|
| `--background` | `#0B0B0B` | Page background |
| `--surface` | `#171717` | Cards, panels, accordion bodies |
| `--foreground` | `#FFFFFF` | Primary text, headings |
| `--muted` | `#CFCFCF` | Secondary/body text |
| `--accent` | `#D4AF37` | Gold — CTAs, icons, eyebrows, focus rings |
| `--accent-hover` | `#E6C76A` | Gold hover state |
| `--border` | `rgba(255,255,255,.08)` | Hairline borders, dividers |

Rules:
- Gold is **scarce**. It marks actions and moments of emphasis (buttons, icons, eyebrow labels, active states) — never large fills or backgrounds.
- Pure white only for headings and key text; body copy uses `--muted`.
- No other hues. Color on the page comes from the photographs.

```css
:root {
  --background: #0b0b0b;
  --surface: #171717;
  --foreground: #ffffff;
  --muted: #cfcfcf;
  --accent: #d4af37;
  --accent-hover: #e6c76a;
  --border: rgba(255, 255, 255, 0.08);
}
```

## Typography

| Role | Font | Weights | Loaded via |
|---|---|---|---|
| Display / headings | Playfair Display | 400, 500, 600 (+ italic 400) | `next/font/google`, variable `--font-playfair` |
| Body / UI | Inter | 400, 500, 600 | `next/font/google`, variable `--font-inter` |

Type scale (mobile → desktop, Tailwind classes):

| Element | Classes | Notes |
|---|---|---|
| Hero headline | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` Playfair 500 | `leading-[1.08]`, `tracking-tight` |
| Section heading (h2) | `text-3xl sm:text-4xl md:text-5xl` Playfair 500 | `leading-[1.15]` |
| Card title (h3) | `text-lg` Inter 600 | |
| Eyebrow label | `text-xs` Inter 600, `tracking-[0.25em] uppercase`, gold | Precedes every section heading |
| Body large (hero sub) | `text-base md:text-lg` Inter 400, `--muted` | `leading-relaxed`, `max-w-2xl` |
| Body | `text-sm md:text-base` Inter 400, `--muted` | `leading-relaxed` |
| Small / caption | `text-xs`–`text-sm` Inter 400/500 | |
| Button label | `text-sm` Inter 600, `tracking-wide` | |

Hierarchy rule: exactly one `h1` (hero). Section headings are `h2`, card titles `h3`. No skipped levels.

## Spacing & Layout

- Base unit: 4px (Tailwind default scale).
- Section vertical rhythm: `py-24 md:py-32` (96px → 128px). Hero is `min-h-svh`.
- Container: `mx-auto max-w-6xl px-6 lg:px-8` (max 1152px). Gallery may stretch to `max-w-7xl`.
- Grids: services `sm:grid-cols-2 lg:grid-cols-3`, why-us `sm:grid-cols-2 lg:grid-cols-4`, gallery CSS columns (`columns-1 sm:columns-2 lg:columns-3`, `gap-4`).
- Section header block (eyebrow + heading + sub) is centered, `mb-14 md:mb-16`.

## Border Radius & Shadows

| Token | Value | Use |
|---|---|---|
| `rounded-lg` | 8px | Buttons, inputs |
| `rounded-xl` | 12px | Cards, accordion items |
| `rounded-2xl` | 16px | Gallery images, large media |
| `rounded-full` | — | Pills, icon chips, scroll indicator |

Shadows are nearly invisible on near-black; **depth comes from surface color + hairline borders**, not shadows. The only glow: gold CTA hover `shadow-[0_0_40px_rgba(212,175,55,0.18)]`.

## Components

**Button — primary**: gold bg, black text (`#0B0B0B`), `px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide`, hover `--accent-hover` + subtle gold glow, `transition-all duration-300`. Focus: `focus-visible:outline-2 outline-offset-2 outline-[--accent]`.

**Button — secondary**: transparent bg, `border border-white/20`, white text, hover `bg-white/10 border-white/40`. Same padding/focus as primary.

**Card** (services, why-us, testimonials): `bg-[--surface] border border-[--border] rounded-xl p-8`, hover `border-white/15` + gold tint on icon, `transition-colors duration-300`. Icon chip: `size-12 rounded-full bg-[#D4AF37]/10 text-[--accent]` containing a 20px Lucide icon.

**Navbar**: fixed, transparent at top; after 8px scroll → `bg-[#0B0B0B]/80 backdrop-blur-md border-b border-[--border]`. Links: `text-sm text-[--muted] hover:text-white`. Mobile: hamburger → full-screen overlay menu.

**Accordion (FAQ)**: surface card per item, question row is a `<button>` with chevron rotating 180°, answer animates height. One open at a time.

**Lightbox**: `fixed inset-0 bg-black/95`, centered image, prev/next arrows, close button, Esc/arrow-key support, focus trapped while open.

## Motion

Library: Framer Motion. Understated, cinematic.

| Token | Value |
|---|---|
| Easing | `[0.22, 1, 0.36, 1]` (ease-out-quint feel) |
| Duration base | 0.7s (reveals) / 0.3s (hovers) |
| Reveal pattern | fade-in-up: `opacity 0→1`, `y 24→0`, triggered at `once: true`, `margin: "-80px"` |
| Stagger | 0.08–0.12s between siblings (cards, trust items) |

Rules: no parallax, no scale-bounce, no flashy effects. Image hover: `scale-[1.03]` over 700ms + soft gradient overlay. **All motion gated on `useReducedMotion()`** — reduced motion gets opacity-only or nothing.

## Imagery & Iconography

- Photography: Jerry's real work, in `public/images/`. Filenames are kebab-case slugs describing the shot. Each image is registered in `lib/portfolio.ts` with `src`, `alt`, `width`, `height`, `category`.
- Current assets are WhatsApp-compressed (~720–1080px). Replace with full-res exports when available — same filenames, no code change.
- Hero image: the B&W traditional wedding couple (landscape, emotional) with `bg-black/60`-style gradient overlay for text legibility.
- Treatment: `rounded-2xl` in gallery, full-bleed in hero/CTA. No filters — Jerry's grading stands.
- Icons: Lucide React, default stroke, 20px inside chips, 16px inline. Lucide has removed brand icons — the Instagram glyph is a local drop-in (`components/ui/InstagramIcon.tsx`) drawn to Lucide conventions (24×24 viewBox, 2px round stroke).

## Accessibility

- Contrast: body text `#CFCFCF` on `#0B0B0B` ≈ 13.7:1; gold `#D4AF37` on `#0B0B0B` ≈ 9.4:1; black on gold ≈ 9.4:1 — all pass WCAG AA (most AAA).
- Focus: every interactive element shows `focus-visible` ring in gold, `outline-offset-2`.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`; real `<button>`s everywhere.
- Every image has meaningful `alt`. Decorative flourishes use `aria-hidden`.
- `prefers-reduced-motion` respected globally (see Motion).
- Headings nest in order; sections labelled via `aria-labelledby` where useful.
