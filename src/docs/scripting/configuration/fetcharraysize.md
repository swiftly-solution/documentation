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
@returns number
config:FetchArraySize(key --[[ string ]])
```
> [!info]
> If the key is invalid or the key is not an array key, it returns 0.

:::