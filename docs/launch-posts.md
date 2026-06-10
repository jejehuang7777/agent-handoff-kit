# Launch Posts

Use these drafts as public-safe starting points. Edit the repository URL,
maintainer name, and any channel-specific wording before posting.

## Short Post

I built Agent Handoff Kit: a small set of Markdown templates for long-running
AI coding agent work.

It gives agents a stable startup file, task board, source gate, handoff packet,
and write-back log so work can continue across sessions without private project
history being dumped into the repo.

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

I am looking for maintainers willing to try one workflow and report what breaks:
issue triage, PR review, bug fix handoff, or release prep.

## 短版中文貼文

我做了一個 Agent Handoff Kit：給長任務 AI coding agent 用的 Markdown 交接模板。

它提供固定啟動入口、任務板、source gate、handoff packet 和 write-back log，讓 AI 工作可以跨 session 接續，又不需要把私密專案歷史丟進公開 repo。

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

我想找願意試一個 workflow 的維護者回報哪裡卡住：issue triage、PR review、bug fix handoff 或 release prep 都可以。

## Maintainer Community Post

AI coding agents are fast, but long maintainer workflows still break in simple
ways: the next session forgets what was checked, source assumptions drift, and
decisions stay buried in chat.

Agent Handoff Kit is a lightweight Markdown operating surface for that problem.
It is not a framework or database. It is a repo-friendly way to keep current
task state, source checks, handoffs, and write-back notes visible.

What is included:

- startup and agent role templates
- task board and handoff packet templates
- source gate and write-back log templates
- one fully synthetic example
- a local validation script

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

I am especially looking for feedback from maintainers using Codex or other
coding agents in real issue, PR, review, or release workflows.

## 中文維護者社群貼文

AI coding agent 很快，但長任務維護流程還是常在幾個地方斷掉：下一個 session 不知道前面查過什麼、推測變成確認、重要決策留在聊天裡。

Agent Handoff Kit 是一個很輕的 Markdown 操作表面，不是 framework，也不是資料庫。它讓任務狀態、來源檢查、交接包和寫回紀錄留在 repo 裡，方便下一輪 agent 或維護者接手。

目前包含：

- startup / agent role templates
- task board / handoff packet templates
- source gate / write-back log templates
- 完整合成範例
- 本地 validation script

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

我特別想找正在用 Codex 或其他 coding agents 做 issue、PR、review、release 流程的人試用，回報哪裡有用、哪裡礙手。

## Direct Maintainer Ask

I am testing a small open-source kit for AI agent handoffs. It is plain
Markdown, no service or database.

Would you be willing to try it on one workflow in your repo, such as bug fix
handoff or PR review, and open an adoption report with what was confusing?

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

The useful feedback is not praise. The useful feedback is where the template
made the next agent clearer, and where it still got in your way.

## 中文直接邀請

我在測一個很小的 open-source kit，目標是讓 AI agent handoff 更穩。它只是 Markdown，沒有服務、資料庫或額外平台。

你願不願意在你的 repo 裡挑一個 workflow 試一下，例如 bug fix handoff 或 PR review，然後開一張 adoption report 說哪裡不清楚？

Repo: `https://github.com/jejehuang7777/agent-handoff-kit`

我最需要的不是稱讚，而是：哪一個模板讓下一個 agent 更清楚？哪一個地方反而造成負擔？

## Release Note

Agent Handoff Kit v0.1 starts with the minimum workflow surface:

- reusable Markdown templates
- a synthetic maintainer example
- a validation script
- public/private boundary guidance
- adoption and workflow request issue templates

The next milestone is not more templates by default. The next milestone is
first-catcher feedback from maintainers using the kit in real or synthetic
agent workflows.
