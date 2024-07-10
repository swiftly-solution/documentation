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
CountdownTimer(ptr --[[ string ]])
```
# Properties
## Duration 
```lua
@type number
Read: countdowntimer.Duration
Write: countdowntimer.Duration = value
```
## Timestamp 
```lua
@type number
Read: countdowntimer.Timestamp
Write: countdowntimer.Timestamp = value
```
## Timescale 
```lua
@type number
Read: countdowntimer.Timescale
Write: countdowntimer.Timescale = value
```
## WorldGroupId 
```lua
@type string
Read: countdowntimer.WorldGroupId
Write: countdowntimer.WorldGroupId = value
```
# Functions
## ToPtr
```lua
@returns string
countdowntimer:ToPtr()
```
## IsValid
```lua
@returns bool
countdowntimer:IsValid()
```

:::