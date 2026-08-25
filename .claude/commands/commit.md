---
description: Pull latest changes, then create one-liner commit(s) for staged/unstaged work
---

Follow these steps when this command is invoked:

1. Run `git pull` first to bring the local branch up to date with the remote before doing anything else. If there are conflicts, stop and surface them to the user instead of resolving automatically.
2. Run `git status` and `git diff` (staged and unstaged) to see what changed.
3. Group the changes logically. If the changes touch clearly distinct concerns (e.g. different features, unrelated fixes, docs vs code), split them into **separate commits** rather than one big commit.
4. **Before staging anything**, check every new/modified file for secrets or files that should never be committed:
   - Env/secret files: `.env`, `.env.*` (e.g. `.env.local`, `.env.production`), `*.pem`, `*.key`, `credentials.json`, `secrets.yml`, etc.
   - File contents that look like API keys, tokens, passwords, private keys, or connection strings with embedded credentials — even in files with innocuous-looking names.
   - If anything like this shows up in `git status`/`git diff`, **exclude it from staging** and warn the user instead of committing it. If it isn't already in `.gitignore`, suggest adding it.
   - If a suspicious file is already tracked/staged from before, flag it to the user and ask before including it — do not silently commit it.
5. For each commit:
   - Stage only the relevant files for that logical change (never `git add -A`/`git add .` blindly — add files explicitly).
   - Write a commit message that is a **single line only** — no body, no bullet points, no multi-paragraph explanation. Keep it concise and descriptive of the "why" when possible.
   - Do **not** include any co-author line (e.g. no "Co-Authored-By: Claude..." or similar) in the commit message under any circumstances.
6. After committing, run `git status` to confirm a clean working tree (or show what's left if intentionally not committed).
7. Do not push unless the user explicitly asks to push. If pushing, re-run the secret check on the commits about to be pushed before pushing.
