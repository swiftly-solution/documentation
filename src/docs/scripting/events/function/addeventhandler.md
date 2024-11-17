---
title: AddEventHandler
index: true
order: 2
category:
  - Guide
---

# AddEventHandler
Adds a new event handler for the specified event.
::: tabs
@tab Lua
```lua
--- @param eventName string
--- @param callback function
--- @return number EventHandler
AddEventHandler(eventName, callback)
```
The callback has the following arguments:
```lua
-- @param event Event
--- @return number|nil EventResult
cb(event, ...)
```
The callback may return a value of EventResult.
:::