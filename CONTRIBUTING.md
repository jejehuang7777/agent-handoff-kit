# Contributing

Thanks for helping improve Agent Handoff Kit.

## Good Contributions

- clearer templates
- better synthetic examples
- validation checks that catch unsafe public content
- maintainer workflow examples for issues, pull requests, releases, and triage
- docs that make the kit easier to adopt in real repositories

## Privacy Rules

Do not submit private chat exports, real customer data, credentials, logs,
screenshots, or private project notes. Use synthetic examples.

If an example requires a real incident to make sense, rewrite it as a fictional
maintainer case before opening a pull request.

## Development

Run:

```sh
npm test
```

The validation script checks required files and scans for common private-data
patterns.

