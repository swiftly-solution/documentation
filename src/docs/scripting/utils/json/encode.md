---
title: Encode
index: true
order: 2
category:
  - Guide
---

# Encode
Encodes a value into a json string.
::: tabs
@tab Lua
```lua
--- @param value any
--- @param options table (optional)
--- @return string
json.encode(value, options)
```
#### Options
The options table can have the following fields:
```lua
{
    indent, --[[ number ]]
}
```
:::