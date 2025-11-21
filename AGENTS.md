# AGENTS.md

## Setup commands

- Install deps: `pnpm install`
- Start dev server: `pnpm dev`

## Code style

### TypeScript

- Use strict TypeScript (`astro/tsconfigs/strict`)
- Use TypeScript interfaces for component props
- Prefer type imports: `import { type CollectionEntry } from "astro:content"`

### Formatting

- Use Prettier with `prettier-plugin-astro`
- Print width: 100 characters
- Use double quotes for strings

### Imports

- Use path aliases: `@/components`, `@/lib`, `@/layouts`, etc.
- Group imports: Astro imports, then external packages, then internal imports
- Separate groups with blank lines

### Astro files

- Use `class` instead of `className` (Astro convention)
- Use frontmatter (`---`) for component logic
- Use TypeScript interfaces for Props
- Destructure props: `const { prop1, prop2 } = Astro.props`

### File naming

- Use PascalCase for component files: `ComponentName.tsx` or `ComponentName.astro`
- Use camelCase for utility files: `utils.ts`
