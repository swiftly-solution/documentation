---
title: Fetch
index: true
order: 2
category:
  - Guide
---

# Fetch
Returns the configuration value for the specified key.
::: tabs
@tab Lua
```lua
@returns string / number / boolean / table
config:Fetch(key --[[ string ]])
```
> [!info]
> If the key is invalid or the key is not an array key, it returns nil.

:::