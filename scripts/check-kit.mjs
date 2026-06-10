import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();

const requiredFiles = [
  "README.md",
  "README.zh-TW.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "templates/START_HERE.md",
  "templates/AGENT_CARD.md",
  "templates/TASK_BOARD.md",
  "templates/HANDOFF_PACKET.md",
  "templates/SOURCE_GATE.md",
  "templates/WRITEBACK_LOG.md",
  "examples/fictional-web-maintainer/README.md",
  "docs/public-private-boundary.md",
  "docs/design-principles.md",
  "docs/adoption-playbook.md",
  "docs/launch-posts.md",
  "docs/first-catcher-readiness-review.md",
  "docs/codex-for-oss-application-draft.md",
  "docs/codex-for-oss-submission-packet.md",
  "ROADMAP.md",
  ".github/ISSUE_TEMPLATE/adoption-report.md",
  ".github/ISSUE_TEMPLATE/workflow-request.md"
];

const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /ghp_[A-Za-z0-9_]{20,}/,
  /github_pat_[A-Za-z0-9_]{20,}/,
  /AKIA[0-9A-Z]{16}/,
  /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /password\s*[:=]\s*["'][^"']+["']/i,
  /api[_-]?key\s*[:=]\s*["'][^"']+["']/i
];

function walk(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    if ([".git", "node_modules"].includes(name)) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

for (const file of walk(root)) {
  const rel = relative(root, file);
  if (!/\.(md|json|mjs|txt|gitignore)$/.test(rel) && rel !== "LICENSE") {
    continue;
  }

  const text = readFileSync(file, "utf8");

  for (const pattern of secretPatterns) {
    if (pattern.test(text)) {
      errors.push(`Possible secret pattern ${pattern} found in ${rel}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Agent Handoff Kit validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Agent Handoff Kit validation passed.");
