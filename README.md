# Agent Handoff Kit

Markdown workflows for long-running AI coding agents.

Language: English | [Traditional Chinese](README.zh-TW.md)

Agent Handoff Kit helps maintainers keep AI-assisted work continuous across
issues, pull requests, sessions, and agent handoffs. It is intentionally small:
plain Markdown templates, one synthetic example, and a local validation script.

## The Problem

AI coding agents can move quickly, but long tasks still fail in familiar ways:

- a new session does not know what the previous agent already checked
- source assumptions drift into confident claims
- work stops at alignment instead of leaving the next executable step
- important decisions stay in chat and never reach the repo
- private project context gets mixed with public maintainable workflow

This kit gives a lightweight file structure for keeping that work legible.

## What This Includes

- `templates/START_HERE.md`: the first file an agent should read
- `templates/AGENT_CARD.md`: role, scope, boundaries, and startup order
- `templates/TASK_BOARD.md`: current work, blockers, and definition of done
- `templates/HANDOFF_PACKET.md`: a bounded transfer note for the next agent
- `templates/SOURCE_GATE.md`: source checks before high-impact claims
- `templates/WRITEBACK_LOG.md`: durable notes for what changed and why
- `examples/fictional-web-maintainer/`: a complete synthetic example
- `docs/adoption-playbook.md`: a small loop for finding first users
- `docs/launch-posts.md`: public-safe launch copy for maintainers
- `docs/codex-for-oss-application-draft.md`: draft answers and checklist
- `scripts/check-kit.mjs`: local validation for required files and privacy leaks

## Quick Start

Copy the templates into a repository that uses AI coding agents:

```sh
mkdir -p .agent-handoff
cp templates/*.md .agent-handoff/
```

Then tell your agent:

```text
Before making changes, read .agent-handoff/START_HERE.md,
.agent-handoff/TASK_BOARD.md, and the latest handoff packet.
After completing work, update TASK_BOARD.md and WRITEBACK_LOG.md.
```

Run the validation script:

```sh
npm test
```

No external package install is required.

## Try The Synthetic Example

Use the included fictional maintainer case to test the workflow without touching
private project history:

```text
Use examples/fictional-web-maintainer as your handoff workspace.
Read START_HERE.md and continue TASK-0001.
```

If you try the kit in another repository, open an adoption report and describe
which workflow you tested.

## Who It Is For

- open-source maintainers using Codex or other coding agents
- teams that split work across several AI sessions
- maintainers who need safer source checks before agent-generated changes
- projects that want lightweight continuity without a database

## Design Rules

1. Keep the current task visible.
2. Keep source checks separate from interpretation.
3. Write back only what future maintainers need.
4. Use synthetic examples in public repos.
5. Never publish private chats, credentials, customer data, or raw logs.

## Recommended Repository Layout

```text
.agent-handoff/
  START_HERE.md
  AGENT_CARD.md
  TASK_BOARD.md
  SOURCE_GATE.md
  WRITEBACK_LOG.md
  handoffs/
    HANDOFF_PACKET_YYYYMMDD.md
```

The files can live anywhere. The important part is that the agent has one
stable entry point and one stable write-back path.

## What This Is Not

This is not an agent framework, database, vector store, or prompt manifesto.
It is the minimum operating surface for making agent work resumable.

## Public Safety

The public repository must contain only method, templates, and synthetic data.
Do not commit private project history and then redact it later. Start clean.

See `docs/public-private-boundary.md` before adapting this kit to a real repo.

## Adoption Loop

This kit is only useful if maintainers can try it and report what happened.
The initial adoption loop is intentionally small:

1. Publish the repo with the synthetic example.
2. Ask maintainers to try one workflow in `.agent-handoff/`.
3. Collect feedback through the adoption report and workflow request issues.
4. Turn repeated confusion into template changes.
5. Keep private project context out of the public repository.

See `docs/adoption-playbook.md` for the first seven days after launch and
`docs/launch-posts.md` for copy that can be adapted to public channels.
Use `docs/first-catcher-readiness-review.md` before the first outreach pass.

## Status

This is an early starter kit. The first goal is to make the workflow easy to
understand, fork, and test in real maintainer work.
