---
title: SDKGetPropPtr
index: true
order: 2
category:
  - Guide
---

# SDKGetPropPtr

Returns the prop pointer from the specified pointer, class name and field name.

The class names, field names and types can be provided from [GameTracking-CS2/DumpSource2/schemas](https://github.com/SteamDatabase/GameTracking-CS2/tree/master/DumpSource2/schemas) which is being maintained by [SteamDatabase](https://github.com/SteamDatabase).

```cpp
T* SDKGetPropPtr<T>(void* ptr, const char* className, const char* fieldName);
```