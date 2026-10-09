---
name: Zprime Digital
description: Silver-gelatin studio site for a Pune performance-marketing practice.
colors:
  bg: "#FDF9FA"
  ink: "#160F11"
  accent: "#B2125F"
  muted: "#5A5455"
  line: "#160F111F"
  on-accent: "#FDF9FA"
typography:
  display:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "Host Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.14em"
  mono:
    fontFamily: "Fragment Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  2xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "10px 0"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Zprime Digital

## Overview

**Creative North Star: "The contact sheet."** A studio wall of silver-gelatin proofs next to a printed media mix — hairline rules, honest numbers, one oxblood mark on the page.

The site is a brand surface. Design *is* the product. A founder comparing agencies after dinner should feel precision, not pitch. Color strategy is **Restrained**: near-white paper, near-black ink, one darkroom-safelight accent used under 10% of any screen. Motion is responsive — feedback and a single hero entrance, not fade-on-scroll for every section.

**Key Characteristics:**
- Type-led hierarchy; headlines carry the room
- Hairline rules instead of cards-as-default
- Data readout, not icon metrics
- One named label system, used once per section

**The Contact-Sheet Rule.** If a move would look at home on a neon agency template, it is forbidden.

## Colors

Canonical values are OKLCH. Hex in the frontmatter is the sRGB approximation.

- **bg** — `oklch(0.985 0.004 0)` (`#FDF9FA`). Paper, not cream. Hue sits on the brand red, not the warm-sand band.
- **ink** — `oklch(0.18 0.012 0)` (`#160F11`). Body and headlines.
- **accent** — `oklch(0.50 0.194 0)` (`#B2125F`). Darkroom safelight. CTAs, links, active states only. White/paper text on fills.
- **muted** — `oklch(0.42 0.010 0)` (`#5A5455`). Secondary copy. Must hold ≥4.5:1 on bg.
- **line** — ink at 12% on rules, card edges, and the data readout.

**The Ten-Percent Rule.** Accent never becomes a wash, a gradient, or a decorative block. If you can see the pink from across the room, you used too much.

## Typography

Single grotesque plus a mono reserved for data.

- **Host Grotesk** for display and body. Display: `clamp(2.5rem, 6vw, 4.75rem)`, tracking −0.03em (floor −0.04em), `text-wrap: balance`. Body: 15–17px, line-height ~1.65, measure ≤75ch.
- **Fragment Mono** for stat numerals and `01`–`05` indexes only.
- **Studio Label** — the only tracked-caps treatment. 11px, 0.14em tracking, muted. One per section. Nowhere else.

**The Weight Rule.** Pairing is weight, not a second display face. Do not introduce Inter, Space Grotesk, or a decorative serif.

## Elevation

Flat. No drop shadows as structure. A 1px hairline, or nothing. Soft shadow is allowed only if it is nearly invisible (ink at ≤6% opacity) and never stacked.

**The Hairline Rule.** If you need a box to hold a thought, you have not given the type enough air.

## Components

### Buttons
- **Primary:** small solid accent fill, paper text, 2px radius, 10×16 padding. Hover: ink fill. Focus-visible: 2px accent ring, 2px offset.
- **Ghost / text:** ink, underline that grows from the left on hover. No pill outline.

### Cards / Containers
- Near-flat. Hairline border in `line`. No identical icon-card grid. Service and team blocks may use a rule; they must not all share one card recipe.

### Inputs / Fields
- Underline only. No boxed stroke. Label always visible above the field. Focus: accent underline, 2px. Error: accent (same hue, not a second red) plus text below, `aria-describedby`.

### Navigation
- Sticky, lots of horizontal air. Wordmark left. Links in body size, not caps. Small primary CTA right. Mobile: compact row or a simple disclosure — no hamburger theatre.

### Studio Label
- The named section kicker. Tracked caps, muted, once. If a designer adds a second tracked line under it, delete the second line.

### Data readout
- Thin vertical hairlines between stats. Mono value, Studio-Label-sized caption. No icons.

## Do's and Don'ts

### Do:
- **Do** keep accent under 10% of any screen and put paper-colored text on accent fills.
- **Do** use Studio Label once per section and Fragment Mono only on indexes and stats.
- **Do** leave proof honest: qualitative placeholders, never invented lift percentages.
- **Do** provide an instant or crossfade fallback for every motion under `prefers-reduced-motion`.

### Don't:
- **Don't** use neon purple/blue agency templates.
- **Don't** use rocket-ship icons and clip-art illustrations.
- **Don't** use gradient CTAs.
- **Don't** use hero-metric cards with invented percentages.
- **Don't** use stock-photo team energy.
- **Don't** use identical icon-plus-heading card grids.
- **Don't** use glassmorphism used as decoration.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent.
- **Don't** use gradient text.
