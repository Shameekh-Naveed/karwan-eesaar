---
name: new-feature
description: Scaffolds a new feature end-to-end — types, API, hooks, page, components, and wiring. Use when scaffolding a new feature or adding a new user-facing capability.
---

# New feature scaffold

Follow these steps in order so every dev or the AI follows the same process.

## 1. Define data

- **Types**: Add or extend interfaces in `frontend/src/types/index.ts`. Keep naming consistent with existing types (e.g. `Customer`, `Task`).
- **Schema**: If the feature needs new tables or columns, add a migration in `frontend/supabase/migrations/` with a timestamped filename (e.g. `YYYYMMDDHHMMSS_short_description.sql`). Update `ai-docs/DATABASE_SCHEMA.md` (and `frontend/supabase/schema/README.md` when schema objects change).

## 2. API layer

- **Supabase / app data**: Add functions in `frontend/src/api/supabaseApi.ts` for reads/writes. Use the Supabase client from `frontend/src/lib/supabase.ts`; respect RLS and existing patterns (e.g. `.range()` for large lists).
- **Stripe or GHL**: If the feature needs Stripe or GHL, add or use functions in `frontend/src/api/stripeApi.ts` or `frontend/src/api/ghlApi.ts`. Do not add new direct third-party API calls from the client; use existing Edge Functions or add one under `frontend/supabase/functions/` and invoke via `supabase.functions.invoke()`, or call the Nest API if that is the established pattern for the flow (see `ai-docs/ARCHITECTURE.md`).
- **Transformers**: If DB shape differs from app types, add or extend mappers in `frontend/src/lib/transformers.ts`.

## 3. Hooks

- Add or reuse hooks in `src/hooks/` (e.g. `useData.ts` for tasks/customers, or a new file for feature-specific data). Expose loading, error, and mutation APIs (e.g. React Query `useQuery` / `useMutation`) so components stay thin.
- Keep data-fetching and mutation logic in hooks, not in pages or components.

## 4. UI

- **Page**: Add a new file in `frontend/src/pages/` for the main screen (e.g. `NewFeature.tsx`). Keep it under the line limits in `.cursor/rules/components.mdc`; decompose into components as needed.
- **Route**: Register the route in `frontend/src/App.tsx` (wouter `Route` inside the existing `Switch`).
- **Components**: Add components under `frontend/src/components/` — use `shared/` for cross-feature pieces, or a feature subfolder (e.g. `admin/`, `customer/`) when scoped. Prefer `frontend/src/components/ui/` primitives (button, dialog, form, etc.).
- **Nav**: If the feature needs a nav entry, add a link or item in `frontend/src/components/Layout.tsx` (or the relevant sidebar/nav component).

## 5. Wire

- Connect page → hooks → API. Ensure the page uses hooks for all data and mutations; pass props/callbacks to child components. No direct `supabase` or `fetch` calls in the page component unless documented (e.g. a one-off Edge Function invoke).
- Verify permissions: use `hasPermission()` from `useAuth()` where the feature is restricted by role (see `frontend/src/contexts/AuthContext.tsx`).
- Run lint and fix any issues; confirm the new route and nav work in the app.

## Checklist

- [ ] Types in `frontend/src/types/index.ts` (and migration + `ai-docs/DATABASE_SCHEMA.md` if schema changed)
- [ ] API in `frontend/src/api/` (and Edge Function or backend route if needed)
- [ ] Hooks in `frontend/src/hooks/`
- [ ] Page in `frontend/src/pages/` and route in `frontend/src/App.tsx`
- [ ] Components under `frontend/src/components/` (shared or feature subfolder)
- [ ] Nav/link in `frontend/src/components/Layout.tsx` if needed
- [ ] Lint passes; no stray console or debug code
