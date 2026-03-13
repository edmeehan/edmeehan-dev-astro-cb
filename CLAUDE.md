# CLAUDE.md — Personal Portfolio/Blog

## Project
Astro + CloudCannon portfolio site using the astro-component-starter.
Node >= 24 required. Run `npm run dev` to start at localhost:4321.

## Critical: The Three-File Component Pattern
Every component MUST ship with three files or CloudCannon visual editing breaks:

src/components/.../my-component/
├── MyComponent.astro                           # The component
├── my-component.cloudcannon.inputs.yml         # Editor field definitions
└── my-component.cloudcannon.structure-value.yml # Defaults + picker metadata

Never create a .astro component without the two accompanying .yml files.

## Theming — CSS Variables Only
All visual restyling happens via CSS variables. NEVER hardcode colors or fonts.
- Design tokens: src/styles/variables/
- Light/dark themes: src/styles/themes/
- To rebrand the whole site, only touch these files.

## Content
- Pages live in: src/content/pages/ (Markdown/MDX)
- Blog posts live in: src/content/blog/ (Markdown/MDX)
- Frontmatter drives CloudCannon field bindings — don't remove existing keys

## CloudCannon Config
- cloudcannon.config.yml controls the CMS editor UI — edit carefully
- .cloudcannon/ contains collection and schema definitions
- Use `data-cms-bind` attributes in .astro files for live preview binding

## Component Docs (dev only)
- Browse all 40+ components at localhost:4321/component-docs/
- Excluded from `npm run build` (only in `npm run build:with-library`)

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run build:with-library` — includes component docs

## Portfolio-Specific Notes
- Prefer page-sections/ components for hero, about, work sections
- Use building-blocks/ for reusable UI (buttons, cards, headings)
- Blog is already wired up — just add .md files to src/content/blog/