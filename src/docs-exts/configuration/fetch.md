---
title: Fetch
index: true
order: 2
category:
  - Guide
---

# Fetch

Returns the configuration value for the specified key.

```cpp
T FetchConfigValue<T>(const char* key);
```

> [!info]
> If the key is invalid or the key is not an array key, it returns 0 casted to the specified type.

> [!warning]
> If the casting fails, it will throw an std::bad_any_cast exception which can be handled with a try-catch clause.