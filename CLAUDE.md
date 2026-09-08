# CLAUDE.md — ct-mass-surveillance

## This repository is PUBLIC. Read the next two sections before committing.

Everything here is world-readable the moment it is pushed, and merging to
`main` publishes it to a live site. There is no staging step inside this repo —
staging happens in the private `ct-mass-surveillance-drafts` repo.

## Commit identity is pseudonymous, and nothing here enforces it

Commits are authored as:

```
Shoot the Singer (1 Sick Verse) <unseenpower@users.noreply.github.com>
```

That is set **only** in this checkout's local git config
(`.git/config`), which is not part of the repository. It is not in any file,
not a hook, and not inherited. The global identity on this machine is Scott's
real name and personal email.

So: **a fresh `git clone` of this repo commits under Scott's real identity, in
public, with no warning.** Nothing will stop it. Same for a worktree created
with `--no-local-config`, or any CI that commits here.

Check before your first commit in a new checkout:

```bash
git config user.name    # must be the pseudonym, not "Scott Gamester"
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
a **draft PR** here and never merges. Merging that PR is Scott's call, not an
agent's. Do not merge a promote PR unless he has asked for it in that session.

`promote.sh` also refuses to run against a dirty checkout here, so leave this
directory clean.

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
the same time — this is normal. This directory is a single shared checkout,
not one-per-session.

Before making a change here, isolate with `EnterWorktree` (unless your cwd is
already under `.claude/worktrees/`). If you find this checkout dirty or on a
non-main branch, do not assume it is stale: check file mtimes and the
`ListAgents` peer-session list first — it may be live work, or a promote in
progress. A worktree here needs its pseudonymous identity set explicitly; see
above.
