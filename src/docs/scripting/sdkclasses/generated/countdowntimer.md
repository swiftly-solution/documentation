---
title: CountdownTimer
index: true
order: 2
category:
  - Guide
---

# CountdownTimer

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
CountdownTimer(ptr)
```
# Properties
## Duration 
```lua
--- @type number
Read: countdowntimer.Duration
Write: countdowntimer.Duration = value
```
## Timestamp 
```lua
--- @type number
Read: countdowntimer.Timestamp
Write: countdowntimer.Timestamp = value
```
## Timescale 
```lua
--- @type number
Read: countdowntimer.Timescale
Write: countdowntimer.Timescale = value
```
## WorldGroupId 
```lua
--- @type number
Read: countdowntimer.WorldGroupId
Write: countdowntimer.WorldGroupId = value
```
# Functions
## ToPtr
```lua
--- @return string
countdowntimer:ToPtr()
```
## IsValid
```lua
--- @return bool
countdowntimer:IsValid()
```

:::