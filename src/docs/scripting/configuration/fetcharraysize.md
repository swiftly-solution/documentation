---
title: FetchArraySize
index: true
order: 2
category:
  - Guide
---

# FetchArraySize
Returns the array size of a config value.
::: tabs
@tab Lua
```lua
--- @param key string
--- @return number
config:FetchArraySize(key)
```
> [!info]
> If the key is invalid or the key is not an array key, it returns 0.

:::