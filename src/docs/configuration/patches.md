---
title: Patches
icon: memory
order: 1
index: true
category:
  - Guide
---

# Patches

To enable specific patches from `addons/swiftly/gamedata/patches.json` on your server you need to add it's key to `patches_to_perform` in `addons/swiftly/configs/core.json`;

```json title="core.json"
{
    ...
    "patches_to_perform": [...]
}
```

## Example

If you want to enable ServerMovementUnlocker, you need to add `ServerMovementUnlocker` at `patches_to_perform`:

```json title="core.json"
{
    ...
    "patches_to_perform": ["ServerMovementUnlocker"]
}
```