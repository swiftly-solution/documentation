---
title: Command Prefixes
icon: code
order: 1
index: true
category:
  - Guide
---

# Command Prefixes

You can add Command Prefixes in `addons/swiftly/configs/core.json`:

```json title="core.json"
{
    ...
    "commandPrefixes": ["!"],
    "commandSilentPrefixes": ["/"],
    ...
}
```

## Example

You want to add the `.` prefix for the commands. That prefix you want to be silent.

```json title="core.json"
{
    ...
    "commandPrefixes": ["!"],
    "commandSilentPrefixes": ["/", "."],
    ...
}
```