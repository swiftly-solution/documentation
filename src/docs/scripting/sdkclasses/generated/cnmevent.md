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
--- @param ptr string
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
--- @return string
cnmevent:ToPtr()
```
## IsValid
```lua
--- @return bool
cnmevent:IsValid()
```

:::