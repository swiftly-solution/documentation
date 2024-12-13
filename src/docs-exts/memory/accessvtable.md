---
title: AccessVTable
index: true
order: 2
category:
  - Guide
---

# AccessVTable

Returns the pointer from the memory for the specified module and VTable name.

```cpp
void* AccessVTable(const char* module, const char* vTableName);
```

> [!info]
> If the accessing fails, it returns a null pointer (nullptr / NULL / 0x0).