# Agent Handoff Kit

長任務 AI coding agent 的 Markdown 交接工作流。

語言：[English](README.md) | 繁體中文

Agent Handoff Kit 幫助開源維護者把 AI 輔助工作維持在可接續、可驗證、可回寫的狀態。它刻意保持很小：一組 Markdown 模板、一個合成範例，以及一個本地驗證腳本。

## 它解決什麼問題

AI coding agent 可以很快，但長任務常在幾個地方斷掉：

- 新 session 不知道前一輪已經查過什麼
- 推測被講成確認
- 工作停在對齊，沒有留下下一個可執行步驟
- 重要決策留在聊天裡，沒有寫回 repo
- 私密專案脈絡混進公開維護流程

這個 kit 提供一個輕量檔案結構，讓 agent 工作可以被下一輪接住。

## 內容包含

- `templates/START_HERE.md`：agent 第一個要讀的入口
- `templates/AGENT_CARD.md`：角色、範圍、邊界與啟動順序
- `templates/TASK_BOARD.md`：目前任務、卡點與完成定義
- `templates/HANDOFF_PACKET.md`：給下一個 agent 的有限交接包
- `templates/SOURCE_GATE.md`：高影響回答前的來源檢查
- `templates/WRITEBACK_LOG.md`：記錄改了什麼、為什麼改
- `examples/fictional-web-maintainer/`：完整合成範例
- `docs/adoption-playbook.md`：找到第一批使用者的採用迴路
- `docs/launch-posts.md`：可改寫的公開發布文案
- `docs/codex-for-oss-application-draft.md`：申請材料草稿
- `scripts/check-kit.mjs`：檢查必要檔案與常見 secret pattern

## 快速開始

把模板複製到使用 AI coding agent 的 repo：

```sh
mkdir -p .agent-handoff
cp templates/*.md .agent-handoff/
```

然後告訴你的 agent：

```text
Before making changes, read .agent-handoff/START_HERE.md,
.agent-handoff/TASK_BOARD.md, and the latest handoff packet.
After completing work, update TASK_BOARD.md and WRITEBACK_LOG.md.
```

執行驗證：

```sh
npm test
```

不需要安裝外部 npm package。

## 試用合成範例

可以先用內建的虛構維護者案例測試流程，不碰任何私密專案歷史：

```text
Use examples/fictional-web-maintainer as your handoff workspace.
Read START_HERE.md and continue TASK-0001.
```

如果你把這個 kit 試在其他 repo，請開一張 adoption report，說明你測的是哪一種 workflow。

## 適合誰

- 使用 Codex 或其他 coding agents 的開源維護者
- 需要把工作拆到多個 AI session 的團隊
- 需要在 agent 產生高影響變更前先做來源檢查的專案
- 想要 continuity，但不想先導入資料庫或大型框架的專案

## 設計規則

1. 讓目前任務一直可見。
2. 把來源檢查和解讀分開。
3. 只寫回下一位維護者真的需要的內容。
4. 公開 repo 只放合成範例。
5. 不公開私密聊天、憑證、客戶資料或原始 log。

## 建議檔案結構

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

檔案可以放在其他位置。真正重要的是：agent 有穩定入口，也有穩定寫回位置。

## 它不是什麼

它不是 agent framework、資料庫、向量庫，也不是 prompt 宣言。

它是讓 agent 工作可以被下一輪接住的最小操作表面。

## 公開安全邊界

公開 repo 只能包含方法、模板與合成資料。

不要先 commit 私密專案歷史，再想辦法 redaction。請從乾淨 repo 開始。

正式導入真實專案前，先讀 `docs/public-private-boundary.md`。

## 採用迴路

這個 kit 只有在維護者真的能試用並回報時才算有用。初始採用迴路刻意保持很小：

1. 發布 repo 與合成範例。
2. 請維護者只試一個 workflow。
3. 用 adoption report 和 workflow request issues 收回饋。
4. 把重複出現的混亂點改成模板更新。
5. 私密專案脈絡留在私密 repo，不放進公開 repo。

第一次對外分享前，先讀 `docs/first-catcher-readiness-review.md`。

## 狀態

這是早期 starter kit。第一個目標是讓陌生維護者能看懂、fork，並在真實或合成維護工作裡試用。
