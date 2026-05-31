---
name: Kevin Dang — Portfolio
description: Personal portfolio of Kevin Dang, Senior Software Engineer. Dark, minimal, precise.
colors:
  ink-well: "oklch(0.13 0.028 262)"
  surface-elevated: "oklch(0.21 0.034 265)"
  surface-secondary: "oklch(0.278 0.033 257)"
  text-primary: "oklch(0.985 0.002 248)"
  text-secondary: "oklch(0.707 0.022 261)"
  text-muted: "oklch(0.551 0.027 264)"
  accent-violet: "oklch(0.55 0.19 268)"
  accent-violet-hover: "oklch(0.50 0.19 268)"
  border-dark: "oklch(1 0 0 / 10%)"
  border-light: "oklch(0.928 0.006 265)"
  surface-light: "oklch(0.980 0.002 248)"
  surface-light-elevated: "oklch(1 0 0)"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.8vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter Variable, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.accent-violet-hover}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  badge:
    backgroundColor: "{colors.surface-secondary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.surface-elevated}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
---

# Design System: Kevin Dang — Portfolio

## 1. Overview

**Creative North Star: "The Quiet Authority"**

This is a portfolio where seniority is implied, never announced. The dark surface absorbs light and attention without reflecting it back — it exists to hold the work forward, not to perform confidence on its own behalf. Every element that remains has earned its place; everything decorative has been removed. The result is a surface that reads as premium the same way a well-machined tool does: through precision and the absence of excess.

The color strategy is restrained: a single cool blue-violet accent carries less than 10% of any surface. It appears on exactly one action — the Resume call-to-action button — plus interactive focus rings. Nowhere else: not on chips, not on employer names, not on section indices. Its restraint is the point. If the accent is everywhere, it is nowhere.

The register is brand. The portfolio itself is the proof of engineering judgment. A designer looking at this interface should be unable to pin the aesthetic to a generic category. It is not dark-mode SaaS cream. It is not cyberpunk. It is not a formatted white CV. It is a built object that demonstrates the same taste its owner applies to production code.

**Key Characteristics:**
- Dark-first: designed for dark mode, adapted for light
- Single accent: cool blue-violet, strictly rationed
- Flat surfaces with tonal depth — no shadow theater
- Two-family system: Schibsted Grotesk for structure (name, section headers, group labels), Inter for content. Hierarchy through scale, weight, and family role
- Numbered section index (`01 / 02 / 03`) as the structural signature
- One personality beat: the sprite cursor follower. No more.

## 2. Colors: The Ink Well Palette

A near-monochromatic dark palette with a single cool blue-violet accent. Every neutral leans slightly toward blue-slate (hue ~262–268) — they are never pure gray.

### Primary

- **Accent Violet** (`oklch(0.55 0.19 268)`): The signature accent. Used only on the primary CTA button (Resume) and interactive focus rings. Never used decoratively. Its rarity is non-negotiable.
- **Accent Violet Hover** (`oklch(0.50 0.19 268)`): Darker on hover/active states. Same hue and chroma, reduced lightness only.

### Neutral

- **Ink Well** (`oklch(0.13 0.028 262)`): The page background in dark mode. Deep blue-slate that reads as black with intent. Never pure `#000`.
- **Surface Elevated** (`oklch(0.21 0.034 265)`): Sidebar and content panel backgrounds. The primary card surface; anything that "lifts" from the page.
- **Surface Secondary** (`oklch(0.278 0.033 257)`): Project cards and secondary interactive surfaces. Lighter than Surface Elevated; used for items within a panel.
- **Text Primary** (`oklch(0.985 0.002 248)`): Near-white body and heading text. Has a barely-perceptible blue tint — never pure white.
- **Text Secondary** (`oklch(0.707 0.022 261)`): Secondary text, timestamps, location metadata.
- **Text Muted** (`oklch(0.551 0.027 264)`): Disabled states, helper text, least-important metadata.
- **Border Dark** (`oklch(1 0 0 / 10%)`): Dark mode borders. Transparent white over surface, not an opaque gray.
- **Surface Light** (`oklch(0.980 0.002 248)`): Light mode page background (gray-50 equivalent with blue tint).
- **Surface Light Elevated** (`oklch(1 0 0)`): Light mode panel backgrounds. Technically full white — acceptable in light mode only.
- **Border Light** (`oklch(0.928 0.006 265)`): Light mode borders and dividers.

### Badge chips (neutral, not color-coded)

- Skill chips are neutral in two tiers, distinguished by fill, never by color: **core** chips carry the `chip-core` fill (a dedicated token, ~0.93 in light / ~0.30 in dark, tuned to separate from the page in each theme); **secondary** chips are outline only (transparent fill, `border-border` hairline). Both keep full-contrast `text-primary` and a `border-border` hairline. Category is communicated by the group heading and grouping; proficiency tier by fill; nothing by hue.
- This is deliberate: color-per-category was rainbow confetti that diluted the single-accent thesis. With chips neutralized, Accent Violet is the only color on the page — exactly the One Voice Rule.

### Named Rules

**The One Voice Rule.** The Accent Violet appears on ≤10% of any given surface. It is a voice, not a wallpaper. Using it on two things simultaneously dilutes both.

**The Neutral Tint Rule.** Every neutral carries chroma 0.005–0.035 toward hue 260–268. Pure gray neutrals are prohibited; they flatten the surface and read as uncurated defaults.

## 3. Typography

**Display Font:** Schibsted Grotesk Variable — a contemporary grotesque with distinctive letterforms (single-story `a`/`g`, tight apertures). **Body Font:** Inter Variable. Both fall back to `sans-serif`.

**Character:** A two-family system with a strict role split. Schibsted Grotesk is the *structural voice*: the name, the section headers, the sidebar group labels. Inter is the *content voice*: everything you read. Pairing two grotesques means the contrast is cut and weight, not a family war. This breaks the Inter-only "tasteful default" lane the portfolio used to sit in and gives the page an authored signature.

### Hierarchy

- **Display** (Schibsted, 700, `clamp(2.25rem → 3rem)`, line-height 1.05, letter-spacing −0.02em): The name in the sidebar header. The single largest element; the focal anchor for a 30-second skim.
- **Headline** (Schibsted, 600, 1.5rem, line-height 1.3, letter-spacing −0.01em): Section titles (About, Work Experience, Projects), each paired with a numbered index. The structural signpost.
- **Section index** (Schibsted, 600, 0.875rem, tabular-nums): The `01 / 02 / 03` markers. Muted, never accent-colored — structural, not a second voice.
- **Group label** (Schibsted, 600, 0.875rem, tracking-tight, muted): Sidebar group headings (Education, skill categories). One size step above the 0.75rem chips so the heading wins the scan by size while core chips win by contrast. Sentence case, not the old uppercase-tracked kicker.
- **Title** (Inter, 600, 1rem, line-height 1.4): Job titles, project titles. Semi-bold; distinction without aggression.
- **Body** (Inter, 400, 0.875rem, line-height 1.6): All prose. 14px keeps information density appropriate for a professional context. Max line length: 65–75ch.

### Named Rules

**The Role-Split Rule.** Schibsted Grotesk is for structure (identity, section headers, group labels); Inter is for content. Never use the display face for body prose, and never reach for a third family. The scale carries hierarchy at a ≥1.25 ratio between steps — no flat scales.

## 4. Elevation

This system is flat by default, with tonal layering providing depth. Shadows are used only as a response to interactivity — they are a state signal, not a decoration.

The depth model has three tiers:

1. **Page** (`ink-well`): The ground plane.
2. **Surface Elevated** (`surface-elevated`): Sidebar and content panels. Lifted from the page by color alone — no shadow at rest.
3. **Surface Secondary** (`surface-secondary`): Project cards within panels. A second tonal step; slightly lighter than the panel.

Shadows appear only on project cards on hover (`0 8px 24px oklch(0 0 0 / 30%)`), and then only as a transient signal that the card is interactive. At rest, all surfaces are shadow-free.

### Named Rules

**The Flat-By-Default Rule.** No surface casts a shadow at rest. Shadows are reserved for hover states on interactive cards. If adding a shadow to a new component, first ask whether the component truly needs to communicate lift.

## 5. Components

### Buttons

Buttons are shape-confident but color-minimal. The primary action is distinct; everything else recedes.

- **Shape:** Gently rounded (6px radius). Not pill-shaped; not square. A working tool, not a consumer app.
- **Primary (Resume / main CTA):** Accent Violet background (`oklch(0.55 0.19 268)`), Text Primary foreground. 36px tall, 16px horizontal padding. This is the only button that carries the accent color.
- **Hover / Focus:** Background shifts to `oklch(0.50 0.19 268)`. Focus ring uses ring color at 50% opacity. No transform, no scale — state is communicated by color shift alone.
- **Outline:** Transparent background, 1px border (`border-dark` in dark, `border-light` in light), Text Primary foreground. Used for secondary actions (Visit Site, View on Github, social icon buttons). Hover fills to `surface-secondary`.
- **Icon (size-9):** Square 36px outline button. Used for social links (GitHub, LinkedIn, Email).

### Chips / Badges

Skill taxonomy chips. They are categorical markers, not interactive filters.

- **Style:** Compact pill (4px radius, 4px/8px padding). 0.75rem text. Two neutral tiers split by fill: **core** chips take the `chip-core` fill with `text-primary` and `font-medium`; **secondary** chips are outline only (transparent fill, `text-primary`, `font-normal`). Both carry the 1px `border-border` hairline. `chip-core` is its own token (not a reused surface token) with per-theme values (~0.93 light / ~0.30 dark) because a fixed `surface-secondary` fill collapsed into the near-white page in light mode, and an alpha tint on the foreground color is unreliable: `--color-foreground` indirects to a var, so Tailwind drops the opacity modifier and emits a full-opacity fill.
- **State:** Static. No hover, no selection state. They are labels, not controls.
- **The Neutral Chip Rule.** Chips are never color-coded. Tier is carried by fill (solid vs outline), not hue. The group heading names the category, the fill names the proficiency tier, and color stays rationed to the violet accent. Outline chips keep full-contrast `text-primary` so the demotion never costs legibility (WCAG AA).

### Cards / Containers

Two container types in use:

**Content Panel** (About, Work Experience, Projects, Sidebar):
- Background: `surface-elevated`
- Radius: 12px (xl)
- Shadow: none at rest
- Internal padding: 24px
- The primary surface above the page ground plane.

**Project Card**:
- Background: `surface-secondary` (within a content panel)
- Radius: 8px
- Shadow: hover only — `0 8px 24px oklch(0 0 0 / 30%)`
- Hover transform: `scale(1.02)` with `transition: all 200ms`
- Image area: 160px tall, `object-cover`
- Internal content: 16px padding, 8px gap between elements

### Navigation / Sidebar

The sidebar is the identity surface. It is sticky at desktop and collapses to inline at mobile.

- Background: `surface-elevated` (same token as content panels; reads as elevated by contrast with page bg)
- Width: 300px at md, 400px at lg
- Profile section: centered, portrait at 96×96 with `object-top` cropping, inside a 1px `ring-border` circle
- Skill section: grouped by category, each category a separate `SideBarContent` block
- Social icons: outline icon-size buttons in a horizontal cluster

### Signature Component: Sprite Cursor Follower

The one allowed personality beat. A walking sprite sheet follows the cursor. This component:
- Renders only when the cursor is within the sidebar
- Animates at 6 fps (deliberate low-fi)
- Carries no semantic content
- Must respect `prefers-reduced-motion`: hidden entirely when reduced-motion is set

**The One Personality Beat Rule.** The sprite cursor follower is the single moment of playfulness the system allows. Resist all other motion, delight, or decorative additions. Its scarcity is what makes it memorable.

## 6. Do's and Don'ts

### Do:

- **Do** use `accent-violet` (`oklch(0.55 0.19 268)`) as the accent — a cooler, more considered blue-violet than the previous purple-600. Update legacy purple-600 usages as surfaces are touched.
- **Do** keep every neutral surface tilted toward hue 260–268, even at near-zero chroma. Pure grays are prohibited.
- **Do** use tonal surface steps (`ink-well` → `surface-elevated` → `surface-secondary`) as the depth model. Shadows are hover-only.
- **Do** use Schibsted Grotesk for structural type (name, section headers, group labels) and Inter for content. Let the role split and weight carry hierarchy.
- **Do** respect `prefers-reduced-motion`: the sprite component must be hidden under reduced-motion preferences.
- **Do** keep line length to 65–75ch in body prose sections (About, work descriptions).
- **Do** keep skill chips neutral. The group heading names the category; color on chips is redundant and steals from the accent.

### Don't:

- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on list items, work entries, or cards. Work entries use a 1px `border-l` with a muted dot marker — that is the allowed pattern; never thicken it into a colored stripe.
- **Don't** make this look like a generic shadcn/Tailwind default theme. The slate-gray defaults, default `rounded-lg` everywhere, and unstyled component library output all read as "starter kit." Every surface must show a design decision.
- **Don't** use dark mode with purple gradients, neon accents, or glassmorphism. Dark + saturated color = cyberpunk cliché that this portfolio explicitly rejects.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). There are no decorative gradients in the system; the avatar uses a 1px `ring-border`, not a gradient fill. Keep it that way.
- **Don't** design a white CV with no visual intent. The light mode variant must be as considered as the dark mode.
- **Don't** add ambient glow effects, animated gradient backgrounds, or particle systems. None of them are the second personality beat — the sprite already has that seat.
- **Don't** use the accent color on more than one interactive element per visible screen area. It loses all meaning when it appears on badges, buttons, and highlights simultaneously.
- **Don't** reintroduce per-category badge colors, and don't carry the core/secondary tier with color either. Tier is fill (solid vs outline); color belongs to the single accent, not the skill taxonomy.
