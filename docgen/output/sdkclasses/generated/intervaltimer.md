---
title: IntervalTimer
index: true
order: 2
category:
  - Guide
---

# IntervalTimer

::: tabs
@tab Lua
# Constructor
```lua
IntervalTimer(ptr --[[ string ]])
```
# Properties
## Timestamp 
```lua
@type number
Read: intervaltimer.Timestamp
Write: intervaltimer.Timestamp = value
```
## WorldGroupId 
```lua
@type number
Read: intervaltimer.WorldGroupId
Write: intervaltimer.WorldGroupId = value
```
# Functions
## ToPtr
```lua
@returns string
intervaltimer:ToPtr()
```
## IsValid
```lua
@returns bool
intervaltimer:IsValid()
```

:::