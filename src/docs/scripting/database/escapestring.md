---
title: Escape String
index: true
order: 2
category:
  - Guide
---

# Escape String
Returns a safe string which can be used in MySQL Query.
::: tabs
@tab Lua
```lua
--- @param value string
--- @return string
db:EscapeString(value)
```
> [!info]
> If database is not connected it will return the same value. 

:::