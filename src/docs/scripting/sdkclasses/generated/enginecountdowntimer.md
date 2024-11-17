---
title: EngineCountdownTimer
index: true
order: 2
category:
  - Guide
---

# EngineCountdownTimer

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EngineCountdownTimer(ptr)
```
# Properties
## Duration 
```lua
--- @type number
Read: enginecountdowntimer.Duration
Write: enginecountdowntimer.Duration = value
```
## Timestamp 
```lua
--- @type number
Read: enginecountdowntimer.Timestamp
Write: enginecountdowntimer.Timestamp = value
```
## Timescale 
```lua
--- @type number
Read: enginecountdowntimer.Timescale
Write: enginecountdowntimer.Timescale = value
```
# Functions
## ToPtr
```lua
--- @return string
enginecountdowntimer:ToPtr()
```
## IsValid
```lua
--- @return bool
enginecountdowntimer:IsValid()
```

:::