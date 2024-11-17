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
--- @param ptr string
IntervalTimer(ptr)
```
# Properties
## Timestamp 
```lua
--- @type number
Read: intervaltimer.Timestamp
Write: intervaltimer.Timestamp = value
```
## WorldGroupId 
```lua
--- @type number
Read: intervaltimer.WorldGroupId
Write: intervaltimer.WorldGroupId = value
```
# Functions
## ToPtr
```lua
--- @return string
intervaltimer:ToPtr()
```
## IsValid
```lua
--- @return bool
intervaltimer:IsValid()
```

:::