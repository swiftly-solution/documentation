---
title: EventAdvanceTick_t
index: true
order: 2
category:
  - Guide
---

# EventAdvanceTick_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EventAdvanceTick_t(ptr)
```
# Properties
## CurrentTick 
```lua
--- @type number
Read: eventadvancetick_t.CurrentTick
Write: eventadvancetick_t.CurrentTick = value
```
## CurrentTickThisFrame 
```lua
--- @type number
Read: eventadvancetick_t.CurrentTickThisFrame
Write: eventadvancetick_t.CurrentTickThisFrame = value
```
## TotalTicksThisFrame 
```lua
--- @type number
Read: eventadvancetick_t.TotalTicksThisFrame
Write: eventadvancetick_t.TotalTicksThisFrame = value
```
## TotalTicks 
```lua
--- @type number
Read: eventadvancetick_t.TotalTicks
Write: eventadvancetick_t.TotalTicks = value
```
## Parent (Read-Only)
```lua
--- @type EventSimulate_t
Read: eventadvancetick_t.Parent
```
# Functions
## ToPtr
```lua
--- @return string
eventadvancetick_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventadvancetick_t:IsValid()
```

:::