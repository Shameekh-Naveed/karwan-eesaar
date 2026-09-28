---
name: phase-loop
description: Run ONE phase of a multi-phase sprint through the full build loop, then stop at the phase boundary. Use when building a phased sprint (reload rules → reload phase scope + user story → research gate → map real code → implement → UI loop → gate → parallel fresh-context reviews → update doc → re-read doc). Invoke as /phase-loop <sprint-doc-path> [phase]. Pairs with /loop for continuous self-paced execution.
argument-hint: <sprint-doc-path> [phase-number]
user_invocable: true
---

# Phase Loop

Run **exactly one phase** of a phased sprint, end to end, then stop. State lives in the sprint doc
on disk, not in this context window — each invocation re-grounds from the file. Do not carry
assumptions across phases; re-read.

**Input:** `$ARGUMENTS`
- Arg 0 = path to the sprint doc (the source of truth, e.g. `docs/sprints/<sprint>/00-OVERVIEW.md`).
- Arg 1 (optional) = a specific phase number. If omitted, the current phase is the **first phase in
  the doc not yet marked done** (no `CODE-COMPLETE`, unchecked `[ ]` items). The doc's checkbox state
  IS the loop counter.
- If EVERY phase is done and the doc has no `FINAL A-Z REVIEW` section yet, this invocation's job is
  the **Final A-Z pass** (see below) instead of a phase.
- If every phase is done AND the final pass is recorded, the sprint is finished — say so and stop.

If no sprint-doc path is given, ask which sprint (one line), then proceed.

---

## The loop (do these in order, once)

**1. Reload the rules.** Read the project's rule files fresh — do not review from memory:
- `.cursor/rules/never-assume.mdc` (verification is mandatory)
- `.cursor/rules/security-first.mdc` (always on; includes the SOC 2 / ISO 27001 self-review in §9)
- `.cursor/rules/architecture-file-size-guard.mdc` (file/function size limits)
- `.cursor/rules/production-code-review.mdc` (used in the review step)
- plus the other always-applied / scoped rules this repo has: `.cursor/rules/standards.mdc`
  (project constitution), `.cursor/rules/nestjs.mdc` (any `backend/**` work),
  `.cursor/rules/components.mdc` and `.cursor/rules/directory-structure.mdc` (any `frontend/**`
  work), and `.cursor/rules/ui-design.mdc` + `DESIGN.md` (any `.tsx` under `frontend/src/`).
  These override default behavior.

**2. Reload the phase scope.** Read the sprint doc. Identify the current phase and restate, in one
or two lines, its **"done means"**: the acceptance criteria and the explicit file list for this
phase. Then restate the **user story** the phase advances, from the doc's `## User stories`: the
role, where they enter from, what they do, where they land. Think in stories and architecture, not
variables. If the phase's scope OR its story is ambiguous in the doc, that's a **product question**
→ surface it to Michael, don't guess. (Code/schema/infra ambiguity is yours to resolve by reading;
product ambiguity is not.)

**2b. Research gate (runs once per sprint, before Phase 1 builds).** Read the doc's `Research:`
tier (`docs/sprints/README.md`, "Research tiers"). If it is missing, infer it from the phase file
lists — new page / API client / backend module ⇒ Tier 2, edits to existing `.tsx` ⇒ Tier 1,
otherwise Tier 0 — and state the inference in your summary so Michael can overrule it.
- **Tier 0:** write `n/a — <reason>` under `## Research` and continue.
- **Tier 1 / 2, `## Research` still empty:** this invocation does research INSTEAD of building.
  Every target is derived, never guessed — a blank you cannot derive becomes a numbered `❓ FLAG FOR
  Michael` at the top of the output, and building stays blocked until it is answered or waived.
  Write `docs/sprints/<sprint>/research/RESEARCH.md` with one section per item, screenshots
  alongside it, link it from `## Research`, then stop (this counts as the invocation).
  1. **Routes to screenshot** (Tier 1+): map each file in the phase lists to its route via
     `frontend/src/App.tsx`, add the routes that link into/out of it, screenshot each light + dark
     via Playwright against staging (see "Staging is the default target"). This is the baseline.
  2. **In-repo precedent** (Tier 1+): for every UI element the story implies (drawer, table,
     wizard, command palette, …) find where the app already does it and screenshot that too. New
     work must match the precedent unless `DESIGN.md` or a recorded decision says otherwise.
  3. **Vendor API + help docs** (Tier 2): derived from imports — if the phase touches an
     integration client (`frontend/src/api/*Api.ts`, `backend/src/modules/<integration>/`), fetch
     that vendor's API reference and help-center page for the feature. Start from the matching
     `ai-docs/` file; note the exact endpoints, limits, and webhooks the phase depends on.
  4. **Comparable products** (Tier 2): pick the row in `DESIGN.md` "Comparable products by job" by
     the story's job; study two or three screens per product; record ONE trait per product worth
     copying. No row ⇒ `❓ FLAG` with a proposed row, not an open web search. The doc's optional
     override line ("Comparable: …") wins over the table.
  5. **UX patterns** (Tier 2): for each element with no in-repo precedent, query
     `.cursor/skills/ui-ux-pro-max/` guideline data, then at most one bounded web search per
     element; record the chosen pattern and why.
  6. **Reference designs** (Tier 1+): read `docs/design/references/README.md`, pick the screenshots
     whose listed traits apply, and name them.
- **Tier 1 / 2, `## Research` already filled:** read `RESEARCH.md` and its screenshots before step 3,
  and treat its recorded patterns and precedents as constraints.

**3. Map the real code.** Before editing anything, read the actual files this phase touches — the
functions, the schema (`frontend/supabase/schema/README.md` + the relevant migrations in
`frontend/supabase/migrations/`), existing utilities and patterns (`backend/src/shared/**`,
`frontend/src/lib/**`, `frontend/src/api/**`). Trace the data flow end to end. Never assume a
column name, index, RLS policy, or API shape you can verify by reading.

**4. Implement the phase, surgically.** One purpose. No drive-by refactors, no cosmetic renames —
every diff line is a regression risk. While implementing, hold these lines:
- **Hot paths stay hot.** No new synchronous queries or writes on high-frequency request paths —
  `POST /webhook/*`, `/voice/webhooks/*`, inbound message → draft enqueue,
  `/web-push/on-follower-unread`, `@Cron` jobs, the `ai-draft` / `ai-autosend` BullMQ processors.
  Defer to a BullMQ job if the work isn't required inline.
- **Every WHERE clause is index-covered.** Confirm against the migrations, don't assume.
- **No counts or aggregates over large tables** (`messages`, `tasks`, `customers`,
  `llm_traces`, `wallet_ledger`) in a request path.
- **No unbounded result sets** — every list query has an explicit `.limit()` / `.range()`.
- **Respect the size limits** in `architecture-file-size-guard.mdc`.
- **Write out the SOC 2 / ISO 27001 self-review** from `security-first.mdc` §9 for the diff.

**5. Gate — all or nothing.** Run the full cold typecheck and the tests. Pass/fail, no partial credit:

```
# Backend (must be clean — it is clean today)
cd backend && npx tsc --noEmit -p tsconfig.json

# Frontend — legacy type-error baseline is enforced by the RATCHET (fails only if the count rises;
# baseline lives in frontend/scripts/typecheck-ratchet.mjs — 227 as of 2026-09-03). The gate is:
# ratchet passes AND zero errors in files touched this phase.
cd frontend && node scripts/typecheck-ratchet.mjs
cd frontend && npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "<files touched this phase>"   # must be empty

# Tests — touched files first, then the full suite
cd backend && npx jest <spec files touched this phase>
cd backend && npx jest            # FULLY GREEN since 2026-09-03 (51 suites / 319 tests) — any
                                  # failure is yours to fix; CI gates on it (no continue-on-error).
cd frontend && npx vitest run     # green (14 files / 124 tests as of 2026-09-03)

# Lint + format (oxlint since 2026-09-04; errors fail the job, warnings allowed)
cd backend && npm run lint && npm run format:check
cd frontend && npm run lint && npm run format:check
```

Do NOT declare the phase done until the typecheck is clean AND the relevant tests are green.

**If a test fails, fix the code — do not weaken the test.** If you find yourself editing an
assertion to match wrong output, deleting a case, or adding a skip, stop: that is reward-hacking and
it fails this gate outright.

*Exception:* if a test is blocked ONLY by a pending schema change (see Guardrails), don't weaken it —
defer it to the end-of-run full test pass. Every non-schema test still gates all-or-nothing, per phase.

**6. Review in a FRESH context — not yourself.** Do not grade your own diff. Launch a subagent
(Claude Code: the `Agent` tool with `subagent_type: general-purpose`; Cursor: a fresh subagent /
background agent with no prior context) and give it this EXACT brief. The reviewer starts blank, so
if you don't name the rules, it reviews against nothing:

> You are reviewing a code diff. FIRST read these rule files in full and use them as your criteria —
> do not review from memory:
> - `.cursor/rules/production-code-review.mdc` (your red-flag / green-flag checklist and approval bar)
> - `.cursor/rules/never-assume.mdc` (nothing is verified until you've read it)
> - `.cursor/rules/security-first.mdc` (secrets, ownership scoping, auth, fail-closed, injection,
>   and the SOC 2 / ISO 27001 control table in §9 — re-walk it yourself)
> - `.cursor/rules/architecture-file-size-guard.mdc` (file/function size limits)
>
> Then review this diff STRICTLY against those rules: `<git diff for this phase>`
>
> Hunt for: unverified data-shape assumptions; missing null checks on external data (webhooks, APIs,
> Supabase `{ data, error }` results); queries with no index coverage or on hot paths; happy-path-only
> logic; mixed bugfix + refactor; race conditions; unscoped service-role queries on user-owned data;
> routes with no named guard; fail-open guards; new tables without RLS; files or functions over the
> size limits.
>
> Report findings ONLY — file:line + severity + the specific fix. Do not edit anything.
>
> Apply the rule's approval standard: would you stake your reputation on this running flawlessly
> under full production load for 6 months?

**For a UI phase, launch TWO MORE reviewers in the same message, in parallel** (each a fresh
`general-purpose` subagent, each with its own question list — one reviewer answering one broad
question misses what three reviewers answering focused questions catch):

> **Design reviewer.** FIRST read `DESIGN.md`, `docs/design/references/README.md`,
> `.cursor/rules/ui-design.mdc`, and `.cursor/skills/apple-design/SKILL.md` (load its HIG references
> for accessibility, color, dark-mode, typography, layout, modality, entering-data, feedback,
> loading). Then look at these screenshots `<paths, light + dark>` and this diff `<tsx diff>`.
> You are the lead UI engineer at Apple. You must present this screen to the entire company and
> your career depends on how it lands. Grade it as that person. Answer each in writing: (1) Does
> every view have one primary action and detail one click deeper? (2) Is anything scattered —
> peer cards, competing emphasis, controls spread across the page? (3) What would you REMOVE
> first — duplicate items, unnecessary tabs/buttons/sections, any label or helper text that
> exists because the UI is not self-explanatory? (4) Could someone understand every element with
> zero text explanation? (5) Is every colour/radius/shadow/font a token from
> `frontend/src/app.css` and every control a primitive from `frontend/src/components/ui/`?
> (6) Accessibility: contrast both themes, focus rings, accessible names, keyboard. (7) Which
> reference-design traits were copied, which were missed? (8) Final line, verbatim: `passes the
> Apple bar: yes` (you would present it) or `passes the Apple bar: no — <the one thing that would
> embarrass you>`. Findings only, file:line + severity + fix. Do not edit.

> **Journey reviewer.** You know nothing about this feature. Read ONLY this user story `<story
> from the sprint doc>` and these screenshots in order `<paths>`. Walk the story cold: where do you
> enter, what do you click, where do you land, what do you have to remember between screens? Answer:
> (1) Can you complete the story without instructions and without reading any help text or
> tooltip — where did you hesitate? (2) Is the next action obvious on every screen? (2b) What on
> each screen did you never need — could it be removed without you noticing? (3) Is there an explicit way back / out? (4) What feedback did each
> action give? (5) What would a setter/CSM on their hundredth visit find slow? Findings only. Do not
> edit.

Then YOU fix what they flag and re-run step 5 (and the UI loop's exit condition for UI phases). The
reviewers having none of your blind spots — grading against the real rules, not vibes — is the
highest-leverage step in this loop.

**7. Record what actually shipped.** Update the sprint doc: mark the phase `CODE-COMPLETE <date>`
with the passing test count and what the review caught, tick the `[x]` items, and add any
`❓ FLAG FOR Michael` entries for open product questions. If the phase touched schema, RPCs, routes,
or integrations, also update `frontend/supabase/schema/README.md` and the relevant `ai-docs/`
architecture file per `standards.mdc`. For a UI phase, also fill `## Design decisions` (step 5 of
the UI section) and the pass count / final verdict. The doc is the living source of truth for the
next invocation — if it's wrong, the loop drifts.

**7b. Re-read the doc you just wrote.** Open the sprint doc again, top to bottom, and check: the
phase heading carries `CODE-COMPLETE <date>`; every `[x]` you ticked actually shipped and nothing
shipped is left `[ ]`; `## Locked decisions` and `## Design decisions` do not contradict what you
built; every open question is a `❓ FLAG FOR Michael` line; the next phase's `Done means` and file
list still make sense given what you changed. Fix any drift now — the next invocation trusts this
file blindly.

**8. Stop at the boundary.** Give a tight summary: what changed in **system behavior** (not a file
changelog), gate status, review verdict, and the next phase's name. For a UI phase, add a
`👀 EYEBALL FOR Michael` entry to the sprint doc (routes + screenshot paths, light + dark) and say
so in the summary — the subagent reviewers gate the loop, Michael gates the merge; a UI change is
never merged on the reviewers' verdict alone. Then **stop**, so context can reset before the next
phase.

---

## Staging is the default target for anything that writes or runs the app

Production is read-only for the agent (`agent_ro`, see `never-assume.mdc`). Everything that mutates
data, boots the app, or drives a browser happens against **staging** (Supabase branch
`yutdhuaoxjrbkyczzhcy`, backend `https://stage.api.stonesystems.io`, frontend `https://stage.stonesystems.dev`):
- **Migrations:** `cd frontend && npm run db:link` links the CLI to staging (default). `npm run
  db:push` is a guarded wrapper (`scripts/db-push.mjs`) that refuses unless the link is staging —
  the agent MAY run it (and CI re-applies it on push to `staging`). Prod gets the same file on
  merge to `main` via CI; there is no prod link — `ALLOW_PROD_PUSH=1` is a Michael-only emergency
  hatch the agent never sets. After a prod migration, merge `main` → `staging`.
- **Backend:** run locally with `ENV_FILE=.env.stage APP_ENV=staging npm run start:dev` (needs a
  filled `backend/.env.stage`; the env-safety guard refuses a prod-wired file) or use the deployed
  stage API. Never point a running process at prod credentials.
- **Frontend / visual loop:** `cd frontend && npx vite --mode stage` reads `frontend/.env.stage`
  (gitignored). Create it once with `node scripts/make-env-stage.mjs` (copies `STAGING_SUPABASE_URL` /
  `STAGING_SUPABASE_ANON_KEY` from `backend/.env` into `VITE_*`, sets `VITE_APP_ENV=Stage` and
  `VITE_CSP_API_URL=https://stage.api.stonesystems.io`) — never copy values by hand or print them.
  Log in with any seeded staff account (`<name>.<id6>@staging.stonesystems.test`, password
  `STAGING_STAFF_PASSWORD` from `backend/.env`). The stage API is https (Caddy / Let's Encrypt).
- **Data recon on prod:** read-only via `backend/scripts/lib/agent-db.mjs`. Refresh staging from prod
  with `npm run db:refresh-staging:ci` (CI) when it drifts.

## MANDATORY for any UI phase (touches `.tsx` under `frontend/src/` or anything a user sees)

Runs after step 4, before the gate. You cannot judge UI you have never seen. This is a required step,
not an afterthought.

1. **Load the design criteria:** `DESIGN.md` first (the feel, the nesting and journey rules,
   and "The bar": you are Apple's lead UI engineer presenting this to the whole company with your
   career on the line — would you present it?), then the relevant routes for every role in
   `docs/design/screenshots/INDEX.md` (what exists today; regenerate with `cd e2e && doppler run
   -- npm run screenshots` if stale), then `.cursor/skills/impeccable/SKILL.md` and
   `.cursor/skills/frontend-design/SKILL.md` for taste, composition, and accessibility,
   `.cursor/skills/apple-design/SKILL.md` (HIG-derived review checklist — load only the
   `references/hig/*.md` files relevant to the route, per its `hig-lookup.md`), plus
   `PRODUCT.md` for brand voice (calm, guided, WCAG AA), and `frontend/src/app.css` for this repo's
   actual colour / spacing / radius / shadow tokens (shadcn "new-york" CSS variables, Tailwind 4,
   `.dark` variant). Apply taste from the general guidance but express it ONLY through this repo's
   tokens — never reskin the app with a skill's generic palette or default fonts. The existing brand
   stays the brand.
2. **Drive a REAL browser** via Playwright against **staging** (see above): start the dev server
   (`cd frontend && npx vite --mode stage` — reads `.env.stage` from `make-env-stage.mjs`; backend
   `ENV_FILE=.env.stage APP_ENV=staging npm run start:dev` if the route needs it), then drive the route via the
   **Playwright MCP server** (configured repo-wide in `.mcp.json` — prefer it), or write a spec in
   the **`e2e/` workspace** (`cd e2e && npx playwright test`; config targets staging, login helper
   in `e2e/helpers/` reads creds from env — **never hardcode credentials**; the old root
   `playwright-*.mjs` scripts are deleted). Navigate to the exact route you changed and EXERCISE
   it — open the modal, click the drill-down, toggle light AND dark, hover, tab-focus, check the
   empty state and the long-content state. Screenshot each to the scratchpad. Desktop widths only
   (1440×900) for staff routes — the app is not meant for phones except the Inbox PWA; do not
   build or grade phone layouts elsewhere.
3. **Run the design loop — minimum THREE passes, every UI phase.** One pass is not a loop. Each
   pass is: screenshot (light + dark, empty + long content, hover + focus) → review → fix →
   re-screenshot. The review inside each pass is the `apple-design` skill (Claude Code: `Skill`
   tool → `apple-design`; Cursor: read `.cursor/skills/apple-design/SKILL.md` and follow it) in
   **Design Review** mode against the current screenshots plus the changed `.tsx` files, judged
   against `DESIGN.md` (nesting rule, journey rule, feel) and the traits in
   `docs/design/references/README.md`. Let the skill pick its reference files via
   `references/hig-lookup.md`; for this web SPA the ones that matter are accessibility, color,
   dark-mode, typography, layout, modality, entering-data, feedback, and loading — skip the
   native-only docs. **High** findings block (fix before the gate), **Medium** fix-if-in-scope,
   **Low** becomes a `❓ FLAG` note. Express every fix through this repo's tokens from step 1 —
   the review finds problems, it does not restyle the app.
   **Prove it ran.** Paste the skill's Design Review output (summary, findings, severity) into
   the sprint doc under the phase, per pass, with the screenshot paths it looked at. No sprint doc
   before 2026-09-11 records a single apple-design review even though this step has been in the
   skill since 2026-08-27 — an unrecorded review did not happen, and the Final A-Z pass checks.
   **Subtraction pass, every pass.** Before fixing anything, list what could be REMOVED: duplicate
   items, unnecessary tabs/buttons/sections, labels and helper text that exist because the UI is
   not clear enough on its own. Remove first, then fix. Michael's rule: if it is not necessary,
   it is not there.
4. **Exit condition — written down, all six must hold** before the gate: (a) no High findings;
   (b) no open nesting-rule or journey-rule violation from `DESIGN.md`; (c) the design reviewer in
   step 6 answers "passes the Apple bar: yes" in writing — they would present it to all of Apple
   with their career on the line; (d) the journey reviewer in step 6 completes the user story cold
   without reading any help text; (e) the subtraction pass has nothing left to remove; (f) every
   pass's apple-design output is recorded in the doc. Record the pass count and the final verdict.
   "It compiles" is not done; neither is "one review said fine".
5. **Record design decisions.** Every non-obvious choice (why this layout, which precedent or
   reference it copies, what was rejected) goes to the sprint doc's `## Design decisions` so it
   survives the sprint — the Final A-Z pass copies it into `DESIGN.md`.
6. **Fallback — never silently skip.** If you cannot drive a browser, still run step 3 as a
   static review of the `.tsx` diff (the skill supports code-only review), then add
   `❓ FLAG FOR Michael: visual loop skipped — eyeball this route in a browser (light + dark)`
   to the sprint doc.

---

## The Final A-Z pass (once, after the ENTIRE doc is complete)

Per-phase reviews see one diff at a time; nobody has yet judged the sprint as ONE system. So after the
LAST phase is CODE-COMPLETE, one more invocation runs a zoomed-out production review of everything the
sprint built. This is not optional and it is not a repeat of step 6 — it is the only review that can
catch cross-phase bugs, drift between phases, and "each piece is fine, the whole is not" problems.

1. **Zoom out: re-read the ENTIRE sprint doc, top to bottom.** It is a living document — every phase
   wrote into it (locked decisions, what shipped, what reviews caught, accepted risks, ❓ flags).
   Reconstruct from it: the full file list the sprint touched, every invariant the sprint promised,
   every accepted risk, and every deviation from the original plan.
2. **Assemble the WHOLE sprint's code against `main`:** `git diff main...HEAD --stat` then the
   full `git diff main...HEAD`, plus every new file (tests included), a-z — not one phase's slice.
   Compare the `--stat` file list against the union of the phases' `Files:` lists: every file
   touched that NO phase listed is **collateral** — name each one and have the reviewer judge it
   explicitly.
3. **Launch ONE fresh-context reviewer** with the step-6 rule brief, plus these additional instructions:
   - read the ENTIRE sprint doc first and treat its locked decisions and promised invariants as the
     spec to verify against;
   - review the sprint END TO END as one system: cross-phase interactions, the complete data flow,
     race windows BETWEEN features that separate phase reviews could not see;
   - re-check every "accepted risk" recorded in the doc — does it still hold now that all phases exist?
   - judge every collateral file from step 2: intended and safe, or drift to revert?
   - for every UI phase, confirm the doc records ≥3 design-loop passes WITH pasted apple-design
     output and a written "passes the Apple bar" verdict — a UI phase missing this is NOT
     complete and goes back to the loop;
   - for a sprint with UI phases: re-run the design and journey reviewers from step 6 of the loop
     against the FULL journey across all phases (screenshots of every touched route, light + dark),
     not one phase's screen;
   - verify the per-phase review fixes didn't regress each other;
   - re-walk the SOC 2 / ISO 27001 control table (`security-first.mdc` §9) against the whole sprint;
   - apply the same approval bar: production-ready under full load for 6 months, yes or no.
4. **Fix what it flags, then re-run the FULL gate:** both typechecks cold + EVERY test suite the
   sprint created or touched (not just the last phase's) + lint. All green, no partial credit.
5. **Record it in the doc:** add a `## FINAL A-Z REVIEW — <date>` section with the verdict, findings +
   fixes, final test count, collateral files and their disposition, and anything left ❓ for Michael.
   Update the doc's Status line. Copy the sprint's `## Design decisions` into the log at the bottom of
   `DESIGN.md` (append-only, dated, sprint-named). This section is the marker that stops the pass
   from ever re-running.
6. **Stop.** Summarize verdict + fixes. The sprint is done only after this section exists in the doc.

---

## Hard guardrails (never cross)

- **Schema changes (never hard-block the run):** if a phase needs a schema change, write a new
  timestamped migration `frontend/supabase/migrations/YYYYMMDDHHMMSS_short_snake_description.sql`
  (RLS policies included, per `ai-docs/DATABASE_SCHEMA.md`) and update
  `frontend/supabase/schema/README.md`. Never execute raw SQL against any database. Apply it like this:
  1. `cd frontend && npm run db:push:dry` to prove it is pending and parses, then `npm run db:push`
     — the wrapper only ever targets **staging** (`db:link` links nothing else). Test against staging.
  2. Pushing the branch to `staging` applies it again via CI (`migrate-staging` job, a no-op if you
     already did); merging `staging` → `main` applies it to **production** via the `migrate` job.
     The agent never applies anything to prod by hand, and never sets `ALLOW_PROD_PUSH`.
  3. If the staging push fails, fix the migration (a new file if the broken one already applied
     anywhere) — never edit an applied migration. Run the FULL test suite once the schema is live.
     (Workflow: `ai-docs/DATABASE_SCHEMA.md` → "How migrations are applied".)
- **Never write to production data** from a script without the recon → dry-run → explicit approval
  flow in `.cursor/skills/backend-scripts-safe-runner/SKILL.md`.
- **Never bypass pre-commit hooks** (`--no-verify` and equivalents are banned). If a hook blocks,
  follow the rule it points at; never guess your way past it — ask.
- **Don't commit or push** unless Michael asks. (Pushing `backend/**` to `main` auto-deploys to
  the production VPS via `.github/workflows/backend-deploy.yml`.)
- **One phase per invocation.** Do not roll into the next phase in the same context.

---

## Compaction (the one thing this skill can't do itself)

The agent **cannot** run `/compact` — it's a client command. So between phases, one of:

- **Manual (recommended for big phases):** stop at step 8; Michael runs `/compact`; then re-invoke
  `/phase-loop <doc>` for the next phase with a clean window.
- **Continuous:** wrap it — `/loop /phase-loop <doc>`. The loop self-paces and re-enters with the
  sprint doc as state; the harness auto-compacts as the window fills. Confirm this mode with Michael
  at sprint start.

Either way, memory lives in the sprint doc, not this conversation.

---

## Appendix: the minimum viable sprint doc

This skill is useless without a sprint doc, because the doc is the loop's state. Sprint docs live in
`docs/sprints/<sprint-name>/00-OVERVIEW.md` (template: `docs/sprints/README.md`). Minimum shape:

```markdown
# <Sprint Name>
Status: IN PROGRESS
Research: <0 | 1 | 2>

## User stories
- As a <role>, I <enter from …>, <do …>, and <land on …>. — <phases>

## Research
<"n/a — reason" for Tier 0, else link to research/RESEARCH.md>

## Locked decisions
- <decisions that must not be relitigated mid-sprint>

## Invariants this sprint promises
- <things that must still be true when the sprint is done>

## Phase 1 — <name>
Done means: <acceptance criteria, in one or two testable sentences>
Files: <explicit list>
- [ ] <task>
- [ ] <task>

## Phase 2 — <name>
...

## Design decisions
- <date> — <decision> — <why / precedent / reference>

## Open questions
- ❓ FLAG FOR Michael: <question>
```

Each phase gets `CODE-COMPLETE <date>` appended to its heading, plus a short note of the test count
and what the review caught, when the loop finishes it.
