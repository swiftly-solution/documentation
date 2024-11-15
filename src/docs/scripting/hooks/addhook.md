---
title: AddHook
index: true
order: 2
category:
  - Guide
---

# AddHook
Creates a function hook.
::: tabs
@tab Lua
```lua
--- @param memory Memory
--- @param args_list string
--- @param return_type string
--- @return number HookHandle
AddHook(memory, args_list, return_type)
```
Below will be listed a table for all the data types for args list and return type:

|         Data Types        | Value |
|:-------------------------:|:-----:|
|         `Pointer`         |  `p`  |
|          `Float`          |  `f`  |
|         `Boolean`         |  `b`  |
|          `Double`         |  `d`  |
|         `Integer`         |  `i`  |
|     `Unsigned Integer`    |  `u`  |
|       `string`       |  `s`  |
|      `64-bit Integer`     |  `I`  |
| `64-bit Unsigned Integer` |  `U`  |
|           `Void`          |  `v`  |
:::