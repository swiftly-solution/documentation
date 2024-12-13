---
title: SDKGetProp
index: true
order: 2
category:
  - Guide
---

# SDKGetProp

Returns the prop value from the specified pointer, class name and field name.

The class names, field names and types can be provided from [GameTracking-CS2/DumpSource2/schemas](https://github.com/SteamDatabase/GameTracking-CS2/tree/master/DumpSource2/schemas) which is being maintained by [SteamDatabase](https://github.com/SteamDatabase).

```cpp
T SDKGetProp<T>(void* ptr, const char* className, const char* fieldName);
```

> [!warning]
> If the casting fails, it will crash the server.