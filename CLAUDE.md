# CLAUDE.md — ct-mass-surveillance

## Concurrent-session safety (read this before editing)

Multiple Claude Code sessions (interactive and background) work across the
CT mass-surveillance repos at the same time -- this is normal, not a bug.
This directory is a single shared checkout, not one-per-session.

**Before making any code change here**: use the `EnterWorktree` tool first
(unless your cwd is already under `.claude/worktrees/`, meaning you're
already isolated). This has bitten `ct-alpr-audit` twice already
(2026-07-27, 2026-08-23) -- another session's uncommitted work sitting in
the shared checkout got mistaken for abandoned scratch state, or had to be
manually reconciled with what had shipped to `main` in the meantime. See
that repo's incident history (life_os memory:
`feedback_background_job_shared_checkout`) for the full story.

Work in your worktree: branch, commit, push, `gh pr create`, merge once
verified (per this repo's existing autonomy grant -- it's Scott's own
repo). The shared checkout here should stay on `main`, clean, unless
you're doing quick read-only inspection.

If you find this checkout already dirty or on a non-main branch when you
arrive: don't assume it's stale garbage. Check the file mtimes and the
`ListAgents` peer-session list first -- it may be another session's live
work in progress.
