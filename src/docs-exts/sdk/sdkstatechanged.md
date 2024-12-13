---
title: SDKSetStateChanged
index: true
order: 2
category:
  - Guide
---

# SDKSetStateChanged

Notifies the game that the state has been changed for the specified field name.

The class names and field names can be provided from [GameTracking-CS2/DumpSource2/schemas](https://github.com/SteamDatabase/GameTracking-CS2/tree/master/DumpSource2/schemas) which is being maintained by [SteamDatabase](https://github.com/SteamDatabase).

```cpp
// In most use cases, the extraOffset value is being 0.
void SDKSetStateChanged(void* ptr, const char* className, const char* fieldName, int extraOffset);
```