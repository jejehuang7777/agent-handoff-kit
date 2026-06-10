# Start Here

Purpose: give each agent the same safe startup path.

## Read Order

1. `AGENT_CARD.md`
2. `TASK_BOARD.md`
3. `SOURCE_GATE.md`
4. latest file in `handoffs/`
5. `WRITEBACK_LOG.md`

## Startup Checkpoint

Reply with:

- current main task
- completed work that should not be repeated
- active blocker
- next single action

Then continue the requested work if the next action is low risk.

## Stop Lines

Do not touch:

- secrets or credentials
- production data
- payment, medical, legal, or financial-risk decisions
- private logs or raw user data
- provider, runtime, or deployment settings without explicit approval

## Write-Back Rule

Before finishing, update:

- `TASK_BOARD.md` for task state
- `WRITEBACK_LOG.md` for decisions and lessons
- a new handoff packet if another agent must continue

