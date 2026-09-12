# k-dang.github.io

Personal portfolio website built with [Astro](https://astro.build/) and hosted on github pages @ https://k-dang.github.io/

## 🚀 Project Structure

Inside of a Astro project, you'll see the following folders and files:

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [their guide on project structure](https://docs.astro.build/en/basics/project-structure/).

Shadcn components are located under the `src/components/ui` directory

```text
├── src/
│   ├── components/
│   │   └── ui/
|   |       └── button.tsx
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Deployment

Deployment to github pages is handled using github actions where deploys are triggered on every merge into the `main` branch

## TODOs

- [x] Add email button with copy to clipboard
- [x] Update profile picture
- [x] Modularize sections
- [x] Use random patterns for projects
- [x] Fix font on tablet view
- [x] Fix white flashing
- [x] preload font
- [x] Add new badge sections
- [x] Consolidate buttons
- [ ] Update icons
