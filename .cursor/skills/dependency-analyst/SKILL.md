---
name: dependency-analyst
description: >-
  Analyzes the current branch diff for contract breakage across the monorepo:
  maps changed exported symbols and types to callers; verifies NestJS controllers,
  DTOs, and injectable services; audits Edge Function consumers (browser and
  backend fetch/invoke); traces backend→Edge hybrid calls; flags frontend/backend
  domain drift. Use before PRs, after refactors, for dependency or contract
  analysis, or when reviewing API, Edge Function, or backend changes.
---

# Dependency analyst

Act as a **dependency and contract analyst**. Work from the **current branch diff** (not the whole repo at random).

## 1. Capture the diff

- Run against the merge base with the default branch, e.g.  
  `git merge-base HEAD origin/main` then `git diff <merge-base>...HEAD`  
  (or `main` / `develop` if that is the integration branch for this repo).
- If the user scoped to specific files or commits, honor that scope.
- List **touched paths** grouped by **monorepo bucket** (narrow scope to `frontend/` or `backend/` if the user only cares about one side):

| Bucket | Paths to group |
|--------|----------------|
| **Frontend app** | `frontend/src/**` — e.g. `api/`, `types/`, `hooks/`, `pages/`, `components/` |
| **Backend** | `backend/src/**` — e.g. `modules/`, `shared/` |
| **Edge Functions** | `frontend/supabase/functions/**` |
| **DB / types docs** | `frontend/supabase/migrations/**`, `ai-docs/DATABASE_SCHEMA.md` if in diff |

## 2. Build a change inventory

From the diff, extract **every modified or removed** contract-relevant item:

| Category | What to track |
|----------|----------------|
| **Exported functions** | `export function`, `export async function`, `export const foo = (` |
| **Exported types** | `export type`, `export interface`, enums used as contracts |
| **API surface (TS)** | New/removed/renamed params, optional → required, return type narrowing/widening |
| **Nest controllers & routes** | `@Controller('path')`, `@Get` / `@Post` / `@Patch` / `@Delete`, `@Param` / `@Query` / `@Body`, route string changes |
| **DTOs / request bodies** | Classes with `ValidationPipe`, `@ApiProperty`, field renames, optional → required |
| **Injectable public API** | `export class XService` methods called from **other modules** (not only private helpers) |
| **Shared module surface** | New/removed providers or exports in `backend/src/shared/shared.module.ts` (or shared barrels) |
| **Edge Functions** | Folder name under `frontend/supabase/functions/<name>/` when `index.ts` or shared handlers change |

Ignore purely internal (non-exported) helpers unless the diff shows they are now used differently by exported APIs.

## 3. Find callers and consumers

For **each** changed or removed exported symbol, DTO field, route, or Edge function:

### Frontend (`frontend/src/**`)

1. **Search** with ripgrep for the **exact export name** (imports: `from '.../file'`, re-exports).
2. For types: who imports the type or uses fields you renamed/removed.
3. **Classify** each site: hook, page, component, another API module, test.

### Backend (`backend/src/**`)

1. **Injection**: Search for constructor parameters typed as `XService` (or renamed class), imports from affected module paths.
2. **HTTP**: Search for **route path fragments** and **controller class** names in `backend/test/**/*.e2e-spec.ts` and any HTTP client code.
3. **Cross-package**: If only `frontend/` or only `backend/` changed types for the same domain, flag **drift or intentional duplication** (no shared types package today).

**Do not assume** — only report sites found by search; say "no references found" if grep is clean (still flag **removed exports** as breaking for external/unknown consumers).

## 4. Verify contracts

For each caller or consumer:

- **Function calls**: Argument count and shapes still match; callers not relying on removed return fields.
- **Types**: If a property was removed/renamed, list every file that still references the old shape.
- **Nest HTTP**: Status codes, JSON body shape, and validation errors still match what callers expect.
- **Breaking changes**: Flag 🔴 **broken contract** with file path and line context; 🟡 **risky** (e.g. wider union, looser typing that hides errors).

## 5. Edge Functions (`frontend/supabase/functions/`)

If **any** file under `frontend/supabase/functions/<functionName>/` changed:

1. Note **functionName** (folder name = invoke name).
2. Search **all** consumer classes:
   - **Browser (`frontend/`)**: `supabase.functions.invoke('functionName'` / `invoke("functionName"`; `functions/v1/functionName` in `fetch(` or URL strings.
   - **Backend (`backend/src/`)**: `functions/v1/<functionName>`, `${supabaseUrl}/functions/v1/<functionName>`, or similar in cron, webhooks, services.
3. For each call site, compare **request body keys** and **expected response shape** to the updated handler (parse errors, status codes, JSON fields).
4. Flag stale consumers on either side (handler behavior changed but SPA or Nest not updated).

## 6. NestJS HTTP and internal contracts

When controllers, DTOs, or route params change:

- **Swagger**: Backend serves OpenAPI at `api-docs` (`backend/src/main.ts`). Note if DTO or route changes should be visible to API consumers; flag ad-hoc bodies that bypass DTOs.
- **Shared services**: When a service in `backend/src/shared/**` or a feature module changes its **public** methods, list other modules’ services/controllers that **inject** it (constructors + `Module` imports).

## 7. Shared domain shapes (cross-layer)

When `frontend/src/api/*`, `frontend/src/types/index.ts`, backend DTOs, or Edge payloads relate to the same tables or events:

- Trace field usage from API/hook/DTO return shapes to **pages, components, and Nest handlers** that destructure or map those fields.
- Flag UI or server code that assumes old field names, optional vs required, or error shapes.
- If `frontend/supabase/migrations/**` or schema docs are in the diff, align analysis with **`ai-docs/DATABASE_SCHEMA.md`** and shared types where relevant.
- If contract or layer changes warrant doc updates, point to **`ai-docs/ARCHITECTURE.md`** (bridge) and **`ai-docs/ARCHITECTURE_FRONTEND.md`** / **`ai-docs/ARCHITECTURE_BACKEND.md`** as appropriate.

## 8. Report format

Deliver a structured report:

```markdown
## Dependency / contract analysis

**Diff scope**: [branch vs base, commit range, or files]

### Summary
- [ ] No broken contracts / [ ] N issues

### Changed symbols → callers
| Symbol | File | Change | Callers OK? | Notes |

### Nest routes / DTOs
| Route / DTO | Change | Consumers (e2e, docs, external) | OK? |

### Internal services (Nest)
| Service / method | Injectors / callers | OK? |

### Edge Function wiring (browser + backend)
| Function | Client sites (frontend + backend) | Contract OK? |

### Backend → Edge calls
| Backend file | Edge function | Contract OK? |

### Broken or risky contracts
1. 🔴/🟡 **Issue** — file:line — fix suggestion

### Gaps / follow-ups
- Tests to add, docs to update (`ai-docs/`, `docs/`)
```

## 9. Project conventions (this repo)

- **Monorepo**: `frontend/` (Vite SPA), `backend/` (NestJS). Edge Functions live under **`frontend/supabase/functions/`** (not repo-root `supabase/functions/`).
- **Frontend**: Browser → Supabase client + `frontend/src/api/*`; Edge via `supabase.functions.invoke` (see `frontend/src/lib/supabase.ts`). Do not invent new integration URLs without checking existing patterns — see `.cursor/rules/standards.mdc`.
- **Backend**: Implementation style → `.cursor/skills/nestjs-best-practices/SKILL.md`. **This skill** owns **contract tracing**, not coding style.
- **Hybrid migration**: Logic may still exist in Edge Functions while Nest grows; treat **backend `fetch` to `functions/v1/*`** and **browser invoke** as dual consumers of the same Edge contract.

---

## Using this as a Task / subagent prompt

To run in isolation (e.g. Cursor **Task** or a fresh chat), paste:

> Follow the project skill **dependency-analyst** in `.cursor/skills/dependency-analyst/SKILL.md`. Use the current branch diff against `origin/main` (or ask for base branch). Include **`backend/src/**` and `frontend/supabase/functions/**` in analysis scope whenever the diff touches those trees. Search **`frontend/`** and **`backend/`** for all Edge Function consumers (`invoke`, `functions/v1/`). Produce the full report. Read-only: do not change code unless the user asks for fixes.

**Future client → Nest**: If the diff adds env-based backend URLs (`VITE_*`), `fetch(` to a dedicated API host, or generated OpenAPI clients, apply the same caller tracing and contract checks to those sites.
