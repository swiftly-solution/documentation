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
@returns HookHandle
AddHook(memory --[[ Memory ]], args_list --[[ string ]], return_type --[[ string ]])
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