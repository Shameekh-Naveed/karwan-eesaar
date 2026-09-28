---
name: backend-scripts-safe-runner
description: Runs and authors one-off backend Node scripts against Supabase, GHL, Stripe, and other services using backend/.env safely. Enforces read-first analysis, dry-run previews with counts and mutation plans, explicit user approval before writes, and verified API documentation. Use when the user asks to run, write, or debug scripts under backend/scripts, backfills, reconnaissance, data fixes, or one-off integrations from the shell.
disable-model-invocation: false
---

# Backend scripts (safe runner)

## User policy (verbatim)

Remember to never read any env key or output or log it in any way, just use it in the script. Never make any write operations without explicitly asking. Always run analysis first then present reprots to help anaalyze the problem and then after we've decided the problem and soltuin, first perform dry run on whatever you're going to do to see how many records will be afffected in what ways report those and after that is approved only then you can execute those. You should be able to find documentations for all APIs on the internet you also have access to MCP servers that you can use, if you can not find documentation for something do not start making stuff up instead confirm for me.

> Note (2026-08-27): no DB MCP is configured for this repo. Schema discovery = `frontend/supabase/schema/README.md` + migrations, and live inspection = `lib/agent-db.mjs` (see `never-assume.mdc`).

## How to interpret the policy

- **Secrets**: Use `process.env.*` inside script code only. Do not paste keys, token values, or `.env` lines into chat, transcripts, PRs, or logs. Do not `console.log` full headers that embed bearer tokens. Prefer messages like `configured: yes/no` or `key present: STRIPE_SECRET_KEY`.
- **Writes**: No `insert`/`update`/`delete`, Stripe mutations, GHL mutations, or other side effects until the user has explicitly approved **that** operation after seeing a dry-run report.
- **Order of operations**: (1) Read-only analysis and recon → (2) structured report → (3) agree on problem and approach → (4) dry-run with counts and per-action summary → (5) user approves → (6) execute. Skip ahead only if the user clearly states they are only doing read-only work.
- **Documentation**: Prefer official docs (web fetch/search) or MCP tool schemas. If an endpoint, field name, or behavior is uncertain, **stop and ask the user**—do not invent API shapes.

## Repo conventions (`backend/scripts`)

Existing scripts are **ESM** (`.mjs`), run with **Node** from the **`backend/`** directory:

```bash
cd backend
node scripts/<name>.mjs [args]
```

Some entries are wrapped in `backend/package.json` as `npm run script:*` (with `:dry` variants where present).

**Read-only default (prod)**: recon and analysis scripts connect with the `agent_ro` Postgres role via
`import { agentQuery, withAgentDb } from './lib/agent-db.mjs'` (`AGENT_RO_DATABASE_URL`, SELECT-only,
every query in a `READ ONLY` transaction). Reach for `SUPABASE_SERVICE_ROLE_KEY` / `@supabase/supabase-js`
only in a write script that has passed the dry-run → approval flow below. If a recon needs a table that
RLS hides from `agent_ro`, say so — do not switch to the service role to get around it.

**Environment loading**: Recon scripts get it for free by importing `./lib/agent-db.mjs` (it loads `backend/.env` itself). Approved write scripts resolve `backend/.env` via `import.meta.url` and a small parser (see `inspect-subscription.mjs`); keep that pattern so running from `backend/` is consistent.

**Common env families** (names only—never echo values):

- Supabase: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — client `@supabase/supabase-js`.
- GHL: `GHL_API_BASE_URL` (optional), `GHL_LOCATION_ID`, `GHL_STONESYSTEMS_PIT` or `GHL_API_KEY_V2`; requests use `fetch` + `Authorization: Bearer` and header `Version: 2021-07-28` where applicable.
- Stripe: `STRIPE_SECRET_KEY` — `stripe` package; scripts often note test vs live from key prefix.

**CLI patterns in this repo**:

- `--dry-run` — no writes; print planned actions and/or counts.
- `--limit=N` — cap work for testing.
- `--phase=N` — phased backfills (e.g. GHL leads).
- `DRY_RUN=1` — used in some scripts alongside `--dry-run`.

**Script flavors**:

- **Recon** (`recon-*.mjs`): stats and samples only; header often states no writes.
- **Backfill / cleanup**: always implement or use existing `--dry-run`; summarize inserts/updates/deletes and affected record keys/ids without leaking secrets.

## Agent workflow when asked to “run a script” or fix data

1. **Discover**: Read the target script’s header comment and argv handling; grep for `dry-run`, `DRY_RUN`, `upsert`, `delete`, `stripe.`, `fetch(`.
2. **Analyze (read-only)**: Prefer recon scripts or read-only queries first. If none exists, run or add a read-only path before any mutation.
3. **Report**: Summarize findings (counts, anomalies, sample **non-sensitive** identifiers only). Do not dump full rows containing PII unless the user explicitly needs it—aggregate when possible.
4. **Dry-run**: Run with `--dry-run` / `DRY_RUN=1` / `:dry` npm script when available. Capture planned operation counts and types (e.g. “would update N rows in `foo`”).
5. **Approval gate**: Present the dry-run summary and ask for explicit approval to run without `--dry-run`.
6. **Execute**: Only after approval; use `--limit` for first live slice if the script supports it.

## Authoring new scripts

- Match existing **`.mjs`**, **`fetch`**, and **manual `.env` load** patterns unless the repo already uses a shared helper.
- Default **safe**: dry-run mode on, or require `--execute` to mutate (choose one pattern and document it in the file header).
- Truncate error bodies in thrown messages (existing scripts often use `.slice(0, 300)` on API error text)—avoid printing full responses that might contain tokens.

## MCP and external services

- Use Supabase MCP (or project docs) for schema discovery when relevant.
- For Stripe/GHL/n8n/Twilio behavior, consult official docs or existing **backend `src/shared/services/`** clients for canonical URLs and patterns before duplicating logic.

When this skill conflicts with a direct user command, the stricter safety rule wins unless the user explicitly overrides (e.g. “run live now, I accept the risk”).
