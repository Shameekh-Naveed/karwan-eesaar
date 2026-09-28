---
name: failure-modes-reviewer
description: >-
  Reviews the current branch diff for failure modes: unhandled nulls, missing
  error boundaries, unvalidated inputs, unhandled promise rejections, missing
  server-side validation, and architectural issues (wrong layer, separation of
  concerns, circular dependency risk). Use before PRs, after risky refactors,
  when the user asks for failure-mode or robustness review, or alongside
  security review.
---

# Failure-modes code reviewer

Act as a **failure-modes and architecture reviewer**. Work from the **current branch diff** (not a random repo skim).

## 1. Capture the diff

- Merge base with default branch: `git merge-base HEAD origin/main` (or `main` / `develop` as appropriate).
- `git diff <merge-base>...HEAD` — or user-scoped files/commits if given.
- List **every changed file** with a one-line role (e.g. page, hook, API, Edge Function).

## 2. Per-file failure-mode pass

For **each changed file**, scan **added or modified lines and their immediate context** (not only the hunk; read enough to judge control flow).

### Unhandled nulls / undefined

- Optional chaining missing where a value may be null/undefined (`?.`, guards, early return).
- Non-null assertions (`!`) or `as` casts that hide possible undefined.
- Array/object access after optional data (e.g. `rows[0]` without length check).
- **React**: props/state that may be undefined before load; list `.map` on possibly undefined.

### Missing error boundaries

- New or changed **route-level** or heavy async UI without an error boundary where children can throw or render invalid state.
- **Data fetching**: loading vs error vs empty states incomplete for new flows.
- User-visible failures: toast/message vs silent failure.

### Unvalidated inputs

- Forms, search params, URL segments, file uploads: missing trim, length, type, or format checks on the client when user-controlled.
- `JSON.parse` / dynamic keys without validation.
- Trusting client-only checks for security-sensitive actions (flag; server must validate).

### Unhandled promise rejections

- `async` in `useEffect` / event handlers without `.catch` or `try/catch`.
- Fire-and-forget promises (no await, no void + handler).
- `supabase.functions.invoke` / `fetch` without checking `error` or non-OK response before use.

### Missing validation on server

For **Edge Functions** (`supabase/functions/`) and any **new or changed** server-trusted paths:

- Request body/query: schema or explicit checks before use (presence, type, bounds).
- Auth: verify JWT / role where the handler mutates data or returns sensitive data.
- SQL: parameterized queries; no string-concatenated user input into queries.

### Architectural concerns (this repo)

Cross-check against project rules:

| Concern | Red flags |
|--------|-----------|
| **Wrong layer** | API/fetch in `src/pages/` or inside large components instead of `src/api/` + hooks. |
| **Separation of concerns** | Business rules duplicated across page + API; Stripe/GHL calls outside `stripeApi.ts` / `ghlApi.ts` / documented Edge Functions. |
| **Circular dependency risk** | New imports from `pages/` → `api/` → back to UI barrels; hooks importing pages; types importing runtime that imports types in a cycle. |
| **Integration sprawl** | New ad-hoc webhooks or client-side Stripe/GHL usage not via existing layers. |

Flag **🟡 speculative** only when the diff clearly introduces risk; cite file and pattern.

## 3. Severity

- **🔴 Critical**: Crash, data loss, auth bypass, or silent security failure.
- **🟡 High**: Likely user-visible error, inconsistent state, or easy misuse.
- **🟢 Medium**: Edge case, missing polish, or tech-debt that should be tracked.

## 4. Report format

```markdown
## Failure-modes review

**Diff scope**: [branch vs base / files]

### Summary
- Files reviewed: N
- 🔴 / 🟡 / 🟢 counts

### By file
#### `path/to/file`
- [Category] severity — brief finding — line or symbol (if clear)
- ...

### Cross-cutting
- Architecture / layering / circular risk (if any)

### Recommended fixes (ordered)
1. ...
```

## 5. Project conventions (this repo)

- Data flow: browser → Supabase client → `src/api/` or Edge Functions; no Next.js API routes.
- Do **not** invent env names or API shapes; infer from code and `docs/` / `ai-docs/`.
- If the diff only touches styles or copy, state that failure-mode scope is limited and focus on regressions.

---

## Using as Task / subagent

Paste for an isolated run (e.g. Cursor **Task** or fresh chat):

> Follow the project skill **failure-modes-reviewer** in `.cursor/skills/failure-modes-reviewer/SKILL.md`. Use the current branch diff against `origin/main` (or ask for base). Produce the full report. Read-only unless the user asks for code changes.
