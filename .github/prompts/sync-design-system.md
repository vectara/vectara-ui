# Sync the VUI design system reference

A new version of `@vectara/vectara-ui` just landed on `main`. Update `DESIGN_SYSTEM.md`
so it reflects the current code, then leave the changes in the working tree (do **not**
commit or push — a later workflow step opens the PR).

## Steps

1. Read the `<!-- design-system-sync: <commit> -->` marker near the top of
   `DESIGN_SYSTEM.md`. That commit is the last point the doc was verified against.
2. Run `git diff <that-commit> HEAD -- src/lib/components src/lib/sassUtils src/lib/styles`
   to see every component and token change since then. Use
   `git log --oneline <that-commit>..HEAD` for context on why each change was made.
3. For each change, decide **critically** whether it affects what `DESIGN_SYSTEM.md`
   documents — visual appearance, design tokens, component props, states, or layout.
   Not every code change is doc-worthy; judge each one.

## What to update

- Edit only the affected component entries and token tables.
- Match the existing tone, structure, and table formatting of the file exactly.
- Keep edits proportional to the code change — do not rewrite unrelated sections.
- A prop or variant that changes rendered output is doc-worthy; an internal rename
  that does not is not.

## What to ignore

- Files under `src/docs/` — playground examples, not part of the design contract.
- `package.json` / `package-lock.json` version or dependency bumps.
- Internal refactors, test-only changes, and renames with no rendered effect.

## Finish

- Update the human-readable **Last synced** line: today's date, `main`, the current
  short commit (`git rev-parse --short HEAD`), the new version, and the most
  significant change reviewed.
- Update the `<!-- design-system-sync: ... -->` marker to that same short commit.
- If, after review, nothing in the diff is doc-worthy, make no other edits — just
  advance the **Last synced** line and the marker so the next run starts from here.
