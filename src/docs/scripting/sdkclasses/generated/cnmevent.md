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
CNmEvent(ptr)
```
# Properties
## StartTimeSeconds 
```lua
--- @type number
Read: cnmevent.StartTimeSeconds
Write: cnmevent.StartTimeSeconds = value
```
## DurationSeconds 
```lua
--- @type number
Read: cnmevent.DurationSeconds
Write: cnmevent.DurationSeconds = value
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