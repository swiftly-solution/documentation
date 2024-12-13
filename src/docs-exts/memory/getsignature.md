---
title: GetSignature
index: true
order: 2
category:
  - Guide
---

# GetSignature

Returns the pointer from the memory for the signature with the provided name from `gamedata/*/signatures.json` for the current platform which the server is running on (Windows / Linux).

```cpp
void* GetSignature(const char* name);
```

> [!info]
> If the key is invalid, it returns a null pointer (nullptr / NULL / 0x0).