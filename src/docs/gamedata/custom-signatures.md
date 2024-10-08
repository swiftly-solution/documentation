---
title: Custom Signatures
icon: signature
order: 2
index: true
category:
  - Guide
---

# Adding Custom Signatures

To add a custom signature, we need to create a folder inside `gamedata` with any name you want to use, and inside of it create the file `signatures.json` with the following structure:

```json title="signatures.json"
{
    "SIGNATURE_NAME": {
        "lib": "LIB_NAME",
        "windows": "WINDOWS_SIGNATURE",
        "linux": "LINUX_SIGNATURE"
    }
}
```

After we create the `signatures.json`, we need to replace `LIB_NAME` the library from where the signature is coming from. For example: `server`, `engine2`, `tier0`, `networksystem`, etc.
We also need to replace `WINDOWS_SIGNATURE` with the signature of the function for Windows, and `LINUX_SIGNATURE` with the signature of the function for Linux.

## Example

```json title="signatures.json"
{
    "ServerMovementUnlock": {
        "lib": "server",
        "windows": "76 ? F2 0F 10 4F ? 41 0F 28 C1 0F 28 D1 F3 0F 59 C0",
        "linux": "0F 87 ? ? ? ? 49 8B 7C 24 ? E8 ? ? ? ? 66 0F EF ED"
    }
}
```

**(!)** The signatures provided above may not be updated.