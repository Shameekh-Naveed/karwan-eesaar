---
name: documentation-maintainer
description: >-
  Audits the current branch diff against .cursor/rules and ai-docs for missing
  rules, contradictions, and stale architecture or database documentation.
  Use before PRs, after significant refactors, when the user asks to sync docs
  with code, or when adding integrations, Edge Functions, or schema changes.
---

# Documentation maintainer

Act as a **documentation and rules maintainer**. Work from the **current branch diff** plus **existing** `.cursor/rules/` and `ai-docs/`. Do not invent new project facts—only compare code changes to what the rules and docs already claim.

## 1. Capture the diff

- Prefer diff against the integration branch merge base, e.g.  
  `git merge-base HEAD origin/main` then `git diff <merge-base>...HEAD`  
  (use `main` / `develop` if that is the repo default).
- If the user scoped commits, files, or a different base, honor that scope.
- Produce a **touched path list** grouped by area: `frontend/src/App.tsx`, `frontend/src/api/`, `frontend/src/types/`, `frontend/supabase/functions/`, `frontend/supabase/migrations/`, `frontend/supabase/schema/`, `backend/src/`, `docs/`, `.cursor/rules/`, config (`frontend/vite.config.ts`, `package.json`), etc.

## 2. Load governance and canonical docs

Read **all** rule files under `.cursor/rules/` (e.g. `standards.mdc`, `directory-structure.mdc`, `git-workflow.mdc`, `components.mdc` — list whatever exists).

Read at minimum:

- `ai-docs/ARCHITECTURE.md` — bridge: system context, Stripe–GHL linking, Edge vs Nest migration note, links to split docs, maintenance table.
- `ai-docs/ARCHITECTURE_FRONTEND.md` — Vite SPA, auth, data flow, Edge Function inventory, Vite/Edge env names.
- `ai-docs/ARCHITECTURE_BACKEND.md` — NestJS modules, HTTP routes, guards, backend env names.
- `ai-docs/DATABASE_SCHEMA.md` — source of truth pointers (`frontend/supabase/schema/`, migrations, types).

If the diff touches integration or webhook behavior described in `docs/`, skim the **referenced** doc paths (e.g. `docs/GHL_AUTOMATION_SETUP.md`, `docs/UNIFIED_COMMUNICATIONS_SETUP.md`) only as needed to see whether architecture cross-references still match.

## 3. Analyze the diff against rules

For each **meaningful** change (new files, new patterns, moved responsibilities, new deps, new routes, new API layers):

| Check | What to flag |
|-------|----------------|
| **Uncovered pattern** | Introduces a repeatable convention (e.g. new folder, new client call pattern, new integration entry) that **no** `.cursor/rules/` file mentions. |
| **Contradiction** | Violates an explicit rule (wrong layer for API logic, new styling stack, Next.js/App Router, routes outside `src/App.tsx`, direct Stripe/GHL from client, etc.). List rule file + bullet vs what the diff does. |
| **Rule gap (non-blocking)** | Pattern is acceptable but should be **documented** in rules for future agents — suggest **which** `.mdc` to extend and a one-line addition idea. |

Ignore pure renames/format-only unless they affect documented structure.

## 4. Analyze the diff against ai-docs

### `ai-docs/ARCHITECTURE.md` (bridge)

Flag updates when the diff changes **cross-cutting** behavior: Stripe–GHL linking assumptions, **who calls what** (browser vs Edge vs Nest), migration story between Edge and Nest, or links to other ai-docs.

### `ai-docs/ARCHITECTURE_FRONTEND.md`

Flag updates when the diff:

- Adds/removes/renames **routes** (wouter / `frontend/src/App.tsx`).
- Adds/removes **Edge Functions** under `frontend/supabase/functions/<name>/` or changes their **role** (sync, webhook, cron).
- Changes **data flow** (new `supabase.functions.invoke` targets, new direct table access patterns, new integration from the browser).
- Adds/changes **Vite or Edge** environment variables documented (or that should be listed).
- Changes **auth**, **Stripe**, **GHL**, or **unified comms** flows described for the SPA.

### `ai-docs/ARCHITECTURE_BACKEND.md`

Flag updates when the diff:

- Adds/removes/renames **Nest modules**, **controllers**, **routes**, **guards**, or **shared services** under `backend/src/`.
- Adds/changes **backend** env vars in `backend/.env.example` or config usage.
- Changes **Swagger** (`/api-docs`) or global API prefix behavior.

Point to **specific sections** or bullet lists that are now wrong or incomplete.

### `ai-docs/DATABASE_SCHEMA.md`

Flag updates when the diff:

- Adds/renames/drops tables, columns, triggers, RPCs, RLS patterns, or migration **conventions**.
- Touches `frontend/supabase/migrations/` or `frontend/supabase/schema/` without a matching doc update (per DATABASE_SCHEMA and `frontend/supabase/schema/README.md` — cite the README if migrations/schema changed).

If only `frontend/src/types/index.ts` changed to match schema, note whether **DATABASE_SCHEMA** “app types in sync” expectation is still satisfied.

## 5. Other doc touchpoints (only if relevant)

- **`docs/`** — If standards or Architecture tell contributors to update a setup doc for new webhooks or env vars, list **`docs/...`** files that should be updated in lockstep.
- **`.cursor/rules/`** — If the code change is **intentionally** new policy (e.g. new allowed stack piece), the **rule files** may need edits, not only `ai-docs/`.

## 6. Output format (required)

Deliver a **precise, actionable** list. Use this structure:

```markdown
## Documentation / rules audit

**Diff scope**: [branch vs merge-base, commit range, or user scope]

### Summary
- Rules: [ ] no gaps / [ ] N gaps | Contradictions: [ ] none / [ ] N
- ARCHITECTURE.md (bridge): [ ] current / [ ] stale — [sections or bullets]
- ARCHITECTURE_FRONTEND.md: [ ] current / [ ] stale — [sections or bullets]
- ARCHITECTURE_BACKEND.md: [ ] current / [ ] stale — [sections or bullets]
- DATABASE_SCHEMA.md (and schema README if applicable): [ ] current / [ ] stale

### .cursor/rules/ — gaps and contradictions
| Rule file | Issue | Evidence in diff (path / behavior) | Suggested update |

### ai-docs/ARCHITECTURE.md (bridge)
| Location (section or heading) | Stale or missing detail | What changed in code |

### ai-docs/ARCHITECTURE_FRONTEND.md
| Location (section or heading) | Stale or missing detail | What changed in code |

### ai-docs/ARCHITECTURE_BACKEND.md
| Location (section or heading) | Stale or missing detail | What changed in code |

### ai-docs/DATABASE_SCHEMA.md (+ frontend/supabase/schema/README.md if needed)
| Topic | Stale or missing detail | What changed in code |

### docs/ and other (if any)
| File | Why update |

### Priority
1. … (contradictions and wrong public docs first)
2. …
```

If nothing needs updating, say so explicitly: **“No documentation or rule updates required for this diff.”** Still briefly list what you compared.

## 7. Project conventions (this repo)

- Stack and layers are fixed in `standards.mdc` and `directory-structure.mdc` — use them as the contract.
- Architecture maintenance: **bridge** table in `ai-docs/ARCHITECTURE.md`; per-area lists in `ai-docs/ARCHITECTURE_FRONTEND.md` and `ai-docs/ARCHITECTURE_BACKEND.md`; database doc maintenance in `ai-docs/DATABASE_SCHEMA.md`.

---

## Using this as a Task / subagent prompt

To run in isolation (e.g. Cursor **Task** or a fresh chat), paste:

> Follow the project skill **documentation-maintainer** in `.cursor/skills/documentation-maintainer/SKILL.md`. Use the current branch diff against `origin/main` (or ask for the base branch). Read `.cursor/rules/` and `ai-docs/ARCHITECTURE.md`, `ai-docs/ARCHITECTURE_FRONTEND.md`, `ai-docs/ARCHITECTURE_BACKEND.md`, and `ai-docs/DATABASE_SCHEMA.md`. Output only the structured audit from section 6; do not change files unless the user asks for edits.
