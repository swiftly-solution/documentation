---
title: GetOffset
index: true
order: 2
category:
  - Guide
---

# GetOffset

Returns the offset value specified for the name provided from `gamedata/*/offsets.json` for the current platform which the server is running on (Windows / Linux).

```cpp
int GetOffset(const char* name);
```

> [!info]
> If the key is invalid, it returns -1.