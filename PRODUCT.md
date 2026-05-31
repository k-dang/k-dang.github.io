# Product

## Register

brand

## Users

Two audiences, equal weight:

1. **Hiring managers and recruiters** — skimming for seniority signals. They want to quickly confirm: this person is senior, trustworthy, and polished. They spend 30–60 seconds on the page before deciding to read deeper.
2. **Technical peers and collaborators** — evaluating craft and curiosity. They read the projects, notice the design choices, and form an opinion about taste and judgment.

Both audiences judge the portfolio itself as evidence. A badly designed portfolio is a disqualifier regardless of the resume content.

## Product Purpose

Kevin Dang's personal site and portfolio. Exists to establish credibility as a Senior Software Engineer and communicate a sense of the person behind the work. Success means: a hiring manager gets confident enough to reach out, and a technical peer walks away impressed by both the work and the design choices.

## Brand Personality

Sharp, minimal, confident. Premium restraint. The silence between elements communicates as much as the elements themselves.

Reference: Linear, Raycast — ultra-clean, strong type hierarchy, dark-first, color used deliberately not decoratively.

## Anti-references

- Generic shadcn/Tailwind default themes — slate-gray, default radius, looks like a starter kit, no design intent
- Dark + neon / cyberpunk — glowing text, heavy gradients, heavy-handed dev-portfolio clichés
- White CV site — a formatted resume dropped onto a white page, no designed intent, no personality

## Design Principles

1. **Premium restraint** — Every element must justify its presence. Confidence comes from what is removed, not what is added. When in doubt, remove it.
2. **The portfolio is the proof** — Design choices are themselves evidence of engineering judgment. Generic or default-looking output is a disqualifier. The site should demonstrate taste.
3. **Dark-first authority** — The dark theme is the designed experience; light is a supported, respected variant. Don't design light and invert — design dark and adapt.
4. **Technical confidence without hype** — No empty superlatives in copy or decoration. Work speaks through clarity and precision of presentation, not through adjectives or marketing language.
5. **One allowed personality beat** — The site is sharp and minimal. The sprite cursor follower is the single allowed moment of playfulness. It earns its place by being technically interesting. Resist adding more.

## Accessibility & Inclusion

WCAG AA minimum. Dark default, light mode available via toggle. Both themes fully polished. Respect `prefers-reduced-motion` for any animation (the sprite includes motion — offer a pause state for reduced-motion). Color choices must maintain sufficient contrast in both themes.
