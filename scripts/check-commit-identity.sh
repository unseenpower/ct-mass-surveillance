#!/usr/bin/env bash
#
# Verify that commits in a range were authored and committed under this
# project's pseudonymous identity.
#
# This repo is public, and commit attribution is the one kind of leak that
# cannot be cleaned up afterwards: file contents can be scrubbed in a later
# commit, but an author line is fixed in the object graph and only a history
# rewrite removes it. The identity is set in each checkout's local git config,
# which a clone does not inherit -- so a fresh clone, a worktree made with
# --no-local-config, CI, or an agent session will silently commit under
# whatever global identity the machine happens to carry.
#
# The pre-commit hook in .githooks/ catches that locally. This script is the
# backstop that runs in CI, where nothing depends on local configuration.
#
# Usage: check-commit-identity.sh [<base-ref>] [<head-ref>]
#
set -euo pipefail

ZERO='0000000000000000000000000000000000000000'

base="${1:-}"
head="${2:-HEAD}"

# Every identity that may legitimately appear. All are GitHub noreply
# addresses: none carries a personal name or a routable personal mailbox.
#
#   unseenpower@users.noreply.github.com    - commits made locally
#   7053365+unseenpower@users....           - commits made via the web UI/API
#   noreply@github.com                      - GitHub's own committer identity
#                                             on squash merges
ALLOWED=(
  'unseenpower@users.noreply.github.com'
  '7053365+unseenpower@users.noreply.github.com'
  'noreply@github.com'
)

is_allowed() {
  local candidate="$1" allowed
  for allowed in "${ALLOWED[@]}"; do
    [ "$candidate" = "$allowed" ] && return 0
  done
  return 1
}

# Work out which commits are new. A push to a fresh branch reports a base of
# all-zeros and a force-push can report a base that is no longer reachable, so
# fall back to whatever is not already on the default branch rather than
# walking -- and re-validating -- the entire history.
if [ -n "$base" ] && [ "$base" != "$ZERO" ] && git cat-file -e "${base}^{commit}" 2>/dev/null; then
  mapfile -t commits < <(git rev-list "${base}..${head}")
elif git rev-parse --verify --quiet origin/main >/dev/null; then
  mapfile -t commits < <(git rev-list "${head}" --not origin/main)
else
  mapfile -t commits < <(git rev-list -1 "${head}")
fi

if [ "${#commits[@]}" -eq 0 ]; then
  echo "No new commits to check."
  exit 0
fi

failed=0
for sha in "${commits[@]}"; do
  author_email=$(git log -1 --format='%ae' "$sha")
  committer_email=$(git log -1 --format='%ce' "$sha")
  subject=$(git log -1 --format='%s' "$sha")

  for role in author committer; do
    if [ "$role" = author ]; then email="$author_email"; else email="$committer_email"; fi
    if ! is_allowed "$email"; then
      # Report the commit, never the identity. CI logs and PR annotations on a
      # public repo are themselves public and are retained independently, so
      # echoing a leaked name or address here would publish it a second time,
      # in a place that scrubbing the commit would not reach.
      echo "::error::${sha:0:12} has a non-pseudonymous ${role} identity (${subject})"
      failed=1
    fi
  done
done

if [ "$failed" -ne 0 ]; then
  cat >&2 <<'MSG'

One or more commits carry an identity that is not this project's pseudonym.

The offending identity is deliberately not printed above: this log is public.
To see it, inspect the commit in a local checkout:

    git log -1 --format='%an <%ae> / %cn <%ce>' <sha>

This repository is public. Do not push these commits: once an author line is
public it cannot be corrected without rewriting history.

Fix the identity in the checkout that produced them:

    git config --local user.name  "Shoot the Singer (1 Sick Verse)"
    git config --local user.email "unseenpower@users.noreply.github.com"

Then re-author the commits that have not yet been pushed. For the most recent
commit:

    git commit --amend --reset-author --no-edit

If several commits are affected, rebase the unpushed range and reset the
author on each. If they have already been pushed, stop and treat it as an
incident rather than fixing it in place.
MSG
  exit 1
fi

echo "Checked ${#commits[@]} commit(s): all authored and committed pseudonymously."
