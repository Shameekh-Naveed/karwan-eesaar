# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Karwan-Eesaar is a Next.js 16 web application using React 19, TypeScript (strict mode), and Tailwind CSS v4. The UI component library is built on shadcn/ui with Radix UI primitives.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (flat config, ESLint 9+)

## Architecture

- **App Router** (`app/`): Next.js App Router with React Server Components enabled by default. Client components are marked with `"use client"`.
- **UI Components** (`components/ui/`): shadcn/ui components wrapping Radix UI primitives. Configured via `components.json` with style `radix-nova`, base color `neutral`, and `lucide` icons.
- **Shared Components** (`components/`): Application-level components that compose UI primitives.
- **Utilities** (`lib/utils.ts`): Exports `cn()` which combines `clsx` and `tailwind-merge` for class merging.

## Key Patterns

- **Path alias**: `@/*` maps to the project root (e.g., `@/components/ui/button`).
- **Component variants**: Use `class-variance-authority` (CVA) for variant props (see `button.tsx`).
- **Data attributes**: Components use `data-slot` for identification and styling hooks.
- **Theming**: OKLCH color space with CSS custom properties in `app/globals.css`. Light and dark mode via `:root` and `.dark` selectors.
- **Fonts**: Geist Sans, Geist Mono, and Inter loaded via `next/font/google` with CSS variables.

## Adding shadcn/ui Components

Use the shadcn CLI: `npx shadcn@latest add <component-name>`. Configuration lives in `components.json`.
