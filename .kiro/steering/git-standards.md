---
inclusion: always
---

# Git Commit & Branch Naming Standards

Follow these conventions for all git operations in this project.

## Commit Messages

- Use lowercase, present tense (e.g., "add logo to header" not "Added logo to header")
- Keep the subject line under 50 characters
- Format: `<type>: <short description>`
- Types:
  - `feat:` — new feature or addition
  - `fix:` — bug fix
  - `style:` — styling/CSS changes (no logic change)
  - `refactor:` — code restructuring (no feature change)
  - `chore:` — config, dependencies, tooling, cleanup
  - `docs:` — documentation only
  - `perf:` — performance improvement
- Examples:
  - `feat: add logo to navigation header`
  - `fix: resolve mobile menu z-index issue`
  - `style: update hero section spacing`
  - `chore: add .gitattributes for line endings`

## Branch Names

- Use lowercase kebab-case
- Format: `<type>/<short-description>`
- Types: `feat/`, `fix/`, `style/`, `chore/`, `refactor/`
- Examples:
  - `feat/add-booking-page`
  - `fix/nav-scroll-bug`
  - `style/responsive-gallery`

## Rules

- One logical change per commit — don't bundle unrelated changes
- Never commit secrets, .env files, or node_modules
- Push to a feature branch unless explicitly told to push to main
