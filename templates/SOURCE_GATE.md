# Source Gate

Purpose: prevent unsupported claims from entering maintainer workflows.

## When To Use

Use this gate when the answer or change depends on:

- version-specific behavior
- security guidance
- legal, medical, financial, or safety-sensitive claims
- user-provided private data
- external documentation that may have changed
- production behavior that must be verified

## Gate

Before making the claim or change, record:

- source name
- source URL or file path
- date checked
- what was verified
- what remains unknown

## If Source Is Missing

Do not fill the gap from memory. Say what is missing and stop, or propose the
smallest safe next check.

## Source Check Record

```text
source:
url_or_path:
checked_at:
verified:
unknown:
impact:
```

