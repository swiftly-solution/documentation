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
--- @param ptr string
TimedEvent(ptr)
```
# Properties
## TimeBetweenEvents 
```lua
--- @type number
Read: timedevent.TimeBetweenEvents
Write: timedevent.TimeBetweenEvents = value
```
## NextEvent 
```lua
--- @type number
Read: timedevent.NextEvent
Write: timedevent.NextEvent = value
```
# Functions
## ToPtr
```lua
--- @return string
timedevent:ToPtr()
```
## IsValid
```lua
--- @return bool
timedevent:IsValid()
```

:::