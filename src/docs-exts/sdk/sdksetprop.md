---
title: SDKSetProp
index: true
order: 2
category:
  - Guide
---

# SDKSetProp

Sets the prop value from the specified pointer, class name and field name.

The class names, field names and types can be provided from [GameTracking-CS2/DumpSource2/schemas](https://github.com/SteamDatabase/GameTracking-CS2/tree/master/DumpSource2/schemas) which is being maintained by [SteamDatabase](https://github.com/SteamDatabase).

```cpp
// Usually the T value is being automatically filled if you already have a variable provided inside value.
void SDKSetProp<T>(void* ptr, const char* className, const char* fieldName, T value);
```

> [!warning]
> If the casting fails, it will crash the server.