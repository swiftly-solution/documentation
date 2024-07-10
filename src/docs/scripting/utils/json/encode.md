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
@returns string
json.encode(value --[[ Any* any ]], options --[[ table (optional) ]])
```
#### Options
The options table can have the following fields:
```lua
{
    indent, --[[ number ]]
}
```
:::