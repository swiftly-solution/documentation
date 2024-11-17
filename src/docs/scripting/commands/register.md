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
--- @param commandName string
--- @param callback function
--- @return nil
commands:Register(commandName, callback)
```
The callback has the following arguments:
```lua
--- @param playerid number
--- @param args table
--- @param argsCount number
--- @param silent boolean
--- @param prefix string
--- @return void
cb(playerid, args, argsCount, silent, prefix)
```
:::