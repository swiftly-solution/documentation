---
title: CNmEvent
index: true
order: 2
category:
  - Guide
---

# CNmEvent

::: tabs
@tab Lua
# Constructor
```lua
CNmEvent(ptr --[[ string ]])
```
# Properties
## StartTime 
```lua
@type number
Read: cnmevent.StartTime
Write: cnmevent.StartTime = value
```
## Duration 
```lua
@type number
Read: cnmevent.Duration
Write: cnmevent.Duration = value
```
# Functions
## ToPtr
```lua
@returns string
cnmevent:ToPtr()
```
## IsValid
```lua
@returns bool
cnmevent:IsValid()
```

:::