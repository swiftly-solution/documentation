---
title: EventPostAdvanceTick_t
index: true
order: 2
category:
  - Guide
---

# EventPostAdvanceTick_t

::: tabs
@tab Lua
# Constructor
```lua
EventPostAdvanceTick_t(ptr --[[ string ]])
```
# Properties
## CurrentTick 
```lua
@type number
Read: eventpostadvancetick_t.CurrentTick
Write: eventpostadvancetick_t.CurrentTick = value
```
## CurrentTickThisFrame 
```lua
@type number
Read: eventpostadvancetick_t.CurrentTickThisFrame
Write: eventpostadvancetick_t.CurrentTickThisFrame = value
```
## TotalTicksThisFrame 
```lua
@type number
Read: eventpostadvancetick_t.TotalTicksThisFrame
Write: eventpostadvancetick_t.TotalTicksThisFrame = value
```
## TotalTicks 
```lua
@type number
Read: eventpostadvancetick_t.TotalTicks
Write: eventpostadvancetick_t.TotalTicks = value
```
## Parent (Read-Only)
```lua
@type EventSimulate_t
Read: eventpostadvancetick_t.Parent
```
# Functions
## ToPtr
```lua
@returns string
eventpostadvancetick_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventpostadvancetick_t:IsValid()
```

:::