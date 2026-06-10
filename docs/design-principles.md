# Design Principles

## 1. Entry Before Memory

Do not ask a new agent to read everything. Give it a stable first file and a
small current working set.

## 2. Handoff Before History

A useful handoff packet is not a diary. It tells the next agent:

- what is active
- what is already done
- what is blocked
- what not to touch
- the next single action

## 3. Source Before Interpretation

For high-impact claims, require source checks before analysis. If the source is
missing, the agent should stop or mark the gap instead of filling it from
memory.

## 4. Write Back the Decision, Not the Whole Conversation

Write back:

- decisions
- verified source links
- blockers
- next actions
- changes that future maintainers must know

Do not write back:

- raw chat transcripts
- private logs
- speculative notes
- unrelated background detail

## 5. Bound Follow-Up

Prefer event-return handoffs: the receiver reports back when finished, blocked,
or needing human judgment. Avoid endless interval polling.

