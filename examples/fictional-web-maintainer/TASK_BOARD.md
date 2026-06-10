# Task Board

## Active Tasks

### TASK-0001

status: `active`
owner: `web-maintenance-agent`
created: `2026-06-11`

## Goal

Theme preference should persist after refreshing the settings page.

## Done

- reproduced the issue with a synthetic local profile
- identified that the preference is written to state but not saved to storage

## In Progress

- prepare a small patch that writes the theme preference to local storage

## Blocked

- none

## Definition of Done

- local test or manual repro shows theme persists after refresh
- no production data is used
- write-back log records the storage decision

## Next Single Action

Patch the settings save handler to write the selected theme to local storage.

## Do Not Touch

- production auth
- deployment settings
- real user data

