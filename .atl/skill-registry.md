# Skill Registry — arepa-portafolio-2

Generated: 2026-05-13

## User Skills

| Skill | Trigger | Path |
|-------|---------|------|
| branch-pr | Creating/opening PRs | `~/.gemini/antigravity/skills/branch-pr/SKILL.md` |
| chained-pr | PRs over 400 lines, stacked PRs | `~/.gemini/antigravity/skills/chained-pr/SKILL.md` |
| cognitive-doc-design | Writing guides, READMEs, RFCs | `~/.gemini/antigravity/skills/cognitive-doc-design/SKILL.md` |
| comment-writer | PR feedback, issue replies | `~/.gemini/antigravity/skills/comment-writer/SKILL.md` |
| issue-creation | Creating GitHub issues | `~/.gemini/antigravity/skills/issue-creation/SKILL.md` |
| judgment-day | Dual review, adversarial review | `~/.gemini/antigravity/skills/judgment-day/SKILL.md` |
| skill-creator | New skills, documenting AI patterns | `~/.gemini/antigravity/skills/skill-creator/SKILL.md` |
| skill-registry | Update skills, skill registry | `~/.gemini/antigravity/skills/skill-registry/SKILL.md` |
| work-unit-commits | Implementation, commit splitting | `~/.gemini/antigravity/skills/work-unit-commits/SKILL.md` |

## Project Skills

None detected.

## Project Conventions

| File | Path |
|------|------|
| GEMINI.md | `f:\PROYECTOS\arepa-portafolio-2\GEMINI.md` |

## Compact Rules

### GEMINI.md
- Framework: Astro 6.3+ (pure .astro, NO React)
- CSS: Tailwind 4+ via @theme block in global.css
- Animations: GSAP via CDN, data-animate attributes
- i18n: JSON files in src/data/ (es.json, en.json)
- Package manager: pnpm (pnpm dev, pnpm build)
- All components in src/components/ as .astro files
- Custom design tokens: primary, secondary, accent, highlight, glow-text, card-base
- Custom utilities: section-container, btn-primary, glow-text
- Run `pnpm approve-builds` before first dev
