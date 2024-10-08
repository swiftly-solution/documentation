---
title: Custom Offsets
icon: laptop-file
order: 2
index: true
category:
  - Guide
---

# Adding Custom Offsets

To add a custom offset, we need to create a folder inside `gamedata` with any name you want to use, and inside of it create the file `offsets.json` with the following structure:

```json title="offsets.json"
{
    "OFFSET_NAME": {
        "windows": WINDOWS_OFFSET,
        "linux": LINUX_OFFSET
    }
}
```

After we create the `offsets.json`, we need to replace `WINDOWS_OFFSET` with the Windows Offset and `LINUX_OFFSET` with the Linux Offset.

## Example

```json title="offsets.json"
{
    "GameEntitySystem": {
        "windows": 88,
        "linux": 80
    }
}
```

**(!)** The offsets provided above may not be updated.