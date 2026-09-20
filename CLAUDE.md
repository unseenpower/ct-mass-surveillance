# CLAUDE.md — ct-mass-surveillance

## This repository is PUBLIC. Read the next two sections before committing.

Everything here is world-readable the moment it is pushed, and merging to
`main` publishes it to a live site. There is no staging step inside this repo —
staging happens in the private `ct-mass-surveillance-drafts` repo.

Treat this file the same way. It is committed to the public repo, so it must
never name a person, a personal email, or anything else that is meant to stay
private. Operational guidance only.

## Commit identity is pseudonymous, and nothing here enforces it

Commits are authored as:

```
Shoot the Singer (1 Sick Verse) <unseenpower@users.noreply.github.com>
```

That is set **only** in this checkout's local git config
(`.git/config`), which is not part of the repository. It is not in any file,
not a hook, and not inherited.

So: **a fresh `git clone` of this repo commits under whatever global git
identity the machine happens to have, in public, with no warning.** Nothing
will stop it. Same for a worktree created with `--no-local-config`, for any CI
that commits here, and for an agent session working from its own checkout.

Check before your first commit in a new checkout:

```bash
git config user.name    # must be exactly the pseudonym below
git config user.email   # must be unseenpower@users.noreply.github.com
```

and if it is wrong:

```bash
git config --local user.name  "Shoot the Singer (1 Sick Verse)"
git config --local user.email "unseenpower@users.noreply.github.com"
```

Commit attribution cannot be rewritten after a public push without a history
rewrite, which is a hard stop in these repos. Getting it right the first time
is the only fix.

Do not add Claude co-authorship trailers to commits here either — the private
repos carry those; this one stays clean.

## Publishing is a deliberate act

`.github/workflows/deploy-docs.yml` deploys on push to `main`, but only when
`docs/**`, `mkdocs.yml`, `requirements-docs.txt` or the workflow itself
changes. A change outside those paths (this file, for instance) does not
publish anything.

Content arrives through `ct-mass-surveillance-drafts/promote.sh`, which opens
a **draft PR** here and never merges. Merging that PR is the maintainer's
call, not an agent's. Do not merge a promote PR unless they have asked for it
in that session.

`promote.sh` also refuses to run against a dirty checkout here, so leave this
directory clean.

## Third-party names in `docs/` are source material, not personal data

The transcripts, findings and reports under `docs/` quote people speaking on
the record at public municipal meetings — officials, officers, vendors,
residents. Those names are the substance of the project and are governed by
the redaction policy in `docs/data/`. Do not bulk-scrub names from `docs/` to
satisfy a privacy concern about the maintainer; a plain-text search for any
common given name will match this source material, and stripping it corrupts
the dataset. Personal-data concerns about the maintainer apply to repo
scaffolding — this file, README, workflows — not to the record.

## Interactive HTML pages

MkDocs copies non-Markdown files under `docs/` through verbatim, which is what
makes `docs/analysis/*.html` work as standalone pages.

Two rules, both learned the hard way:

- **Keep each page self-contained** — inline CSS and JS, no external requests.
  The theme's `navigation.instant` swaps page content over XHR and does **not**
  re-run inline `<script>`, so a page reached by clicking a link from another
  page will render wrong even though it looks fine on a hard reload. Never
  inline these into a Markdown page.
- **Never promote `docs/.nav.yml` wholesale.** It breaks the `--strict` build
  here. Edit the nav in this repo deliberately.

Artifact HTML from claude.ai is a *fragment* (no `<!doctype>`/`<html>`/`<head>`).
Wrap it with `ct-mass-surveillance-drafts/scripts/artifact_wrap.py` before
promoting, or it will not render standalone.

## Concurrent-session safety

Multiple Claude Code sessions work across the CT mass-surveillance repos at
the same time — this is normal. The local working directory is a single shared
checkout, not one-per-session.

Before making a change there, isolate with `EnterWorktree` (unless your cwd is
already under `.claude/worktrees/`). If you find that checkout dirty or on a
non-main branch, do not assume it is stale: check file mtimes and the
`ListAgents` peer-session list first — it may be live work, or a promote in
progress. A worktree needs its pseudonymous identity set explicitly; see above.

---

## Guardrails

@~/life_os/.claude/protected/GUARDRAILS.md

The guardrails above are imported, not summarised, and they bind work in this
repo exactly as they do in the maintainer's other repos. The import resolves
only in the maintainer's own environment; in a fresh clone elsewhere it is a
no-op, so do not rely on the gate being present — apply the rules regardless.

**Enforcement is not on the honour system.** A `PreToolUse` hook registers the
gate, so it runs in this repo too:

- **Hard-blocked**, always: piping a downloaded script straight into a shell,
  force-push (including `--force-with-lease`), `git reset --hard` or any
  history rewrite, `gh repo delete`, recursive deletes aimed at a protected
  path, and Microsoft Edge in any mode.
- **Gated** until an independent review is recorded: containers and compose
  files, systemd units, host and network config, software installs,
  `tailscale serve` / `funnel`, and any change to an agent definition, a slash
  command, or Claude Code settings.

When the gate denies you, launch the **`deploy-reviewer`** subagent, then
record its verdict with the `guardrails approve` command, citing
`--by deploy-reviewer`.

Do not reword a blocked command to slip past the pattern, and **never approve
your own work** — that invariant is what the whole layer rests on. If you are
stuck, say so and let the maintainer decide.

The **`log-auditor`** subagent reviews the audit trail itself on a weekly
cadence; `guardrails report` shows what the gate has seen.
