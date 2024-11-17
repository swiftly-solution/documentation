---
title: AddPreHookListener
index: true
order: 2
category:
  - Guide
---

# AddPreHookListener
Adds a new hook listener before the hook is executed.
::: tabs
@tab Lua
```lua
--- @param hookHandle number HookHandle
--- @param callback function
--- @return number EventHandler
AddPreHookListener(hookHandle, callback)
```
The callback has the following arguments:
```lua
-- @param event Event
--- @return number|nil EventResult
cb(event)
```
The callback may return a value of EventResult.
:::