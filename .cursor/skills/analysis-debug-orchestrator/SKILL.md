---
name: analysis-debug-orchestrator
description: Runs analysis and debugging workflows using reliable API documentation first, routes Stripe cases to stripe-best-practices and Supabase cases to supabase docs/skill guidance, and produces detailed natural-language reports from script outputs. Use when the user asks for root-cause analysis, debugging, integration investigation, or script-based diagnostic reporting.
disable-model-invocation: true
---

# Analysis Debug Orchestrator

## Purpose

Use this skill for running agents for analysis and debugging with a docs-first process to reduce hallucinations.

## Core Rules

1. Always identify the integrations/providers first (Stripe, Supabase, GHL, Zoom, Fathom, or other).
2. Always find and use reliable API documentation before proposing fixes, schema assumptions, payload assumptions, or endpoint usage.
3. If reliable docs cannot be found, ask the user for documentation links or instructions before continuing.
4. Run scripts/tools to gather evidence, then explain results in natural language with a detailed report.
5. Never expose secrets. All keys and required variables are present in `backend/.env` and are for scripts/runtime only, never for the model to read, print, or echo.

## Script Authoring Reference

When creating new analysis/debug scripts, use `backend/scripts/` as the style reference so scripts are similarly useful and maintainable.

Target characteristics:

1. Runnable one-off scripts with clear usage comments and flags (for example `--dry-run`).
2. Strong input/env validation with actionable error messages.
3. Runtime env loading for script execution only; never print secret values.
4. Evidence-focused output (structured logs and/or JSON summaries) that is easy to parse into natural-language findings.
5. Safe re-run behavior where possible (idempotent or clearly scoped effects).

## Provider-Specific Routing

### Stripe Cases

- Use `/stripe-best-practices` for implementation guidance.
- Validate behavior against current Stripe documentation (API reference + product docs) before changes.
- Avoid legacy/obsolete integration patterns when current docs indicate better alternatives.

### Supabase Cases

- Use `/supabase` and relevant Supabase documentation before implementation.
- Prefer verified current Supabase docs/tooling for commands and feature behavior.
- Confirm fixes with evidence (query output, command output, or logs).

### GHL Cases

- Use this reference first: <https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact>
- Expand to closely related official GHL docs for adjacent endpoints/objects as needed.

### Zoom, Fathom, and Any Other APIs

- Find reliable official API docs first (vendor docs, official API references, official SDK docs).
- If confidence in documentation quality is low or coverage is incomplete, stop and ask the user for approved docs or constraints.

## Documentation Discovery Workflow

1. Determine target API/product and exact operation being debugged.
2. Locate official docs (prefer first-party docs over third-party posts).
3. Capture the exact endpoint/object/field/rate-limit/error semantics relevant to the issue.
4. Cross-check local code behavior against docs.
5. Implement/run verification steps using scripts/tools appropriate to the case.
6. Only then run or update scripts/commands for verification.
7. Produce a final detailed report grounded in evidence.

## Script Execution and Reporting Standard

When scripts are run for investigation:

1. Collect raw outputs (status codes, error payloads, logs, metrics, diffs, counts, timings).
2. Parse and translate outputs into clear natural language.
3. Present:
   - what issue occurred or what data state was observed,
   - why it happened (likely root cause),
   - what was changed or validated,
   - what evidence confirms the conclusion,
   - remaining risks or unknowns.
4. Keep the report highly explanatory and detailed, not just command output dumps.

## Secret Handling Policy (Mandatory)

- Do not read `backend/.env` directly for analysis content.
- Do not echo, print, or expose API keys/tokens/secrets.
- Scripts may consume environment variables at runtime, but secret values must remain hidden from model output.
- If a task appears to require displaying credentials, refuse and request a safe alternative.


## Quality Gate Before Completion

Before declaring success:

1. Confirm docs were used and cited in reasoning.
2. Confirm outputs were interpreted in natural language.
3. Confirm no secrets were exposed.
4. Confirm final report is detailed and evidence-based.
