---
title: Custom Patches
icon: bezier-curve
order: 2
index: true
category:
  - Guide
---

# Adding Custom Patches

To add a custom offset, we need to create a folder inside `gamedata` with any name you want to use, and inside of it create the file `patches.json` with the following structure:

```json title="patches.json"
{
    "PATCH_NAME": {
        "signature": "SIGNATURE_NAME",
        "windows": "WINDOWS_PATCH",
        "linux": "LINUX_PATCH"
    }
}
```

After we create the `patches.json`, we need to replace `SIGNATURE_NAME` with the signature name from `signatures.json`.
We also need to replace `WINDOWS_PATCH` with the patch for the function on Windows, and `LINUX_PATCH` with the patch for the function on Linux.

## Example

```json title="patches.json"
{
    "ServerMovementUnlock": {
        "signature": "ServerMovementUnlock",
        "windows": "EB",
        "linux": "90 90 90 90 90 90"
    }
}
```

**(!)** The patches provided above may not be updated.