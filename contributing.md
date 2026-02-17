# Contributing / Workflow

## Branch + PR rules
- Do not push directly to `main` (DevOps/PM merge only).
- Create a branch for each task:
  - `feature/<short-name>`
  - `fix/<short-name>`
  - `docs/<short-name>`
- Open a Pull Request (PR) into `main`.
- PR must:
  - pass GitHub Actions (CI)
  - be reviewed by DevOps or PM before merge

## Commit message style
Use clear messages:
- "Add CI workflow"
- "Start requirements document"
- "Fix navbar layout"

## For developers with read-only upstream access
If you cannot push to the upstream repo:
1. Fork the repo on GitHub
2. Clone your fork
3. Create a branch
4. Push to your fork
5. Open a PR from your fork branch into upstream `main`
