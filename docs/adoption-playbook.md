# Adoption Playbook

This playbook keeps launch work small and testable. The goal is not to go
viral. The goal is to find the first maintainers who can try the kit and tell
us what failed.

## First-Catcher Definition

A first catcher is a maintainer who does at least one of these:

- opens an adoption report issue
- forks the repo and keeps the templates
- uses the example to set up `.agent-handoff/` in another project
- asks for a workflow template that the kit does not yet cover
- points out confusing naming, missing guardrails, or weak documentation

Stars are useful, but a real adoption report is more valuable than a quiet
star.

## Launch Readiness

Before sharing publicly, confirm:

- the README explains the problem in three minutes or less
- `npm test` passes
- the example is fully synthetic
- no private chat logs, customer data, credentials, or internal notes are in the
  repo
- the issue templates are enabled
- the maintainer can answer what problem this solves in one sentence

## First Seven Days

Day 0: Publish the repo and create the first release note or launch issue.

Day 1: Share the short launch post with one maintainer-focused community.

Day 2: Ask two maintainers to try one workflow only, such as bug fix handoff or
pull request review.

Day 3: Convert any repeated confusion into a documentation issue.

Day 4: Add or revise one example based on feedback.

Day 5: Share a concrete before/after: what an agent forgot before the kit, and
what stayed visible after the kit.

Day 6: Review open adoption reports and tag them by workflow.

Day 7: Decide whether the next version needs a new template, a clearer example,
or a smaller quick start.

## Metrics That Matter

- adoption reports opened
- workflow requests opened
- forks that keep the template structure
- issues that mention a real agent handoff failure
- repeated phrases that show where maintainers get confused

Avoid over-scoring documentation polish. The kit is succeeding when someone
outside the project can use it without a private explanation.

## Response Loop

For each adoption report:

1. Thank the reporter.
2. Identify the workflow they tried.
3. Mark whether the issue is about naming, setup, source gates, write-back, or
   handoff shape.
4. Create one follow-up issue if the feedback needs work.
5. Close the loop after the docs or template change lands.

Do not turn every report into a new feature. Repeated pain beats isolated
preference.

