---
title: Register
index: true
order: 2
category:
  - Guide
---

# Register
Registers a new command through Swiftly Commands.
::: tabs
@tab Lua
```lua
@returns void
commands:Register(commandName --[[ string ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
cb(playerid --[[ number ]], args --[[ table ]], argsCount --[[ number ]], silent --[[ boolean ]], prefix --[[ string ]])
```
:::