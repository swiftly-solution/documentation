---
title: TimedEvent
index: true
order: 2
category:
  - Guide
---

# TimedEvent

::: tabs
@tab Lua
# Constructor
```lua
TimedEvent(ptr --[[ string ]])
```
# Properties
## TimeBetweenEvents 
```lua
@type number
Read: timedevent.TimeBetweenEvents
Write: timedevent.TimeBetweenEvents = value
```
## NextEvent 
```lua
@type number
Read: timedevent.NextEvent
Write: timedevent.NextEvent = value
```
# Functions
## ToPtr
```lua
@returns string
timedevent:ToPtr()
```
## IsValid
```lua
@returns bool
timedevent:IsValid()
```

:::