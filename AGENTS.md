# AGENTS.md

Personal portfolio: a static single-page site plus project detail pages. Next.js 16 (App Router), React 19, Tailwind CSS v4, framer-motion. No backend, database, or API routes.

## Commands

- `npm install` — npm is the package manager (`package-lock.json`); no workspace or monorepo.
- `npm run dev` — dev server at http://localhost:3000.
- `npm run lint` — ESLint flat config, lints the whole repo.
- `npm run build` — production build and the only compile check.
- There are no test or typecheck scripts. Verify changes with `npm run lint && npm run build` and a browser check of the affected section.

## Where things live

- `src/app/page.js` composes Hero/About/Skills/Projects/Contact. `src/app/layout.js` owns fonts, metadata, Navbar/Footer, and ThemeProvider.
- `src/data/*.js` is the content layer (profile, social, navigation, about, skills, projects). Edit copy and links there rather than hardcoding them in components.
- `src/data/projects.js` feeds both the home grid and `/projects/[slug]`. Each entry needs `slug`, `features`, `technologies`, and `learned` — the detail page maps them without guards — plus an `image` path under `public/images/projects/`. `generateStaticParams` pre-renders from this array, so adding a project needs no route changes.
- Imports use the `@/*` → `src/*` alias from `jsconfig.json`.
- Contact has no backend: `src/lib/contact.js` builds a `mailto:` URL. To add a real endpoint, change only that function.

## Conventions and gotchas

- Plain JavaScript, no TypeScript. `.jsx` for JSX components, `.js` for data/routes.
- Dynamic route `params` are async in Next 16: `const { slug } = await params` in both `generateMetadata` and the page.
- Tailwind v4 is CSS-first; there is no `tailwind.config`. Theme tokens live in `src/app/globals.css` under `@theme inline`. Use semantic utilities (`bg-card`, `text-muted`, `border-border`, `bg-accent`, `text-accent-foreground`) instead of raw palette colors.
- Dark mode is class-based (`@custom-variant dark`) via next-themes; default is dark and system detection is disabled. `<html suppressHydrationWarning>` is intentional.
- framer-motion requires `"use client"`. Keep presentational components as server components, and wrap new page sections in `Reveal` for the standard in-view animation.
- React Compiler is enabled in `next.config.mjs`; don't add manual memoization by default.
- Icons: `lucide-react` for UI icons, `react-icons` for brand logos.
- Fonts are Inter and JetBrains Mono, set in `layout.js`. The README is the stale create-next-app template (mentions Geist and `app/page.js`); trust the code.
