---
title: EventSimulate_t
index: true
order: 2
category:
  - Guide
---

# EventSimulate_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EventSimulate_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventsimulate_t.LoopState
```
## FirstTick 
```lua
--- @type boolean
Read: eventsimulate_t.FirstTick
Write: eventsimulate_t.FirstTick = value
```
## LastTick 
```lua
--- @type boolean
Read: eventsimulate_t.LastTick
Write: eventsimulate_t.LastTick = value
```
# Functions
## ToPtr
```lua
--- @return string
eventsimulate_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventsimulate_t:IsValid()
```

:::