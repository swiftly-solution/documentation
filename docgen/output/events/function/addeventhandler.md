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
@returns EventHandler
AddEventHandler(eventName --[[ string ]], callback --[[ function ]])
```
The callback has the following arguments:
```lua
cb(event --[[ Event ]], ... --[[ Any* any ]])
```
The callback may return a value of EventResult.
:::