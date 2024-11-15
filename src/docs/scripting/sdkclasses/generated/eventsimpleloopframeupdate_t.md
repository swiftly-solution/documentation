---
title: EventSimpleLoopFrameUpdate_t
index: true
order: 2
category:
  - Guide
---

# EventSimpleLoopFrameUpdate_t

::: tabs
@tab Lua
# Constructor
```lua
EventSimpleLoopFrameUpdate_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventsimpleloopframeupdate_t.LoopState
```
## RealTime 
```lua
--- @type number
Read: eventsimpleloopframeupdate_t.RealTime
Write: eventsimpleloopframeupdate_t.RealTime = value
```
## FrameTime 
```lua
--- @type number
Read: eventsimpleloopframeupdate_t.FrameTime
Write: eventsimpleloopframeupdate_t.FrameTime = value
```
# Functions
## ToPtr
```lua
@returns string
eventsimpleloopframeupdate_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventsimpleloopframeupdate_t:IsValid()
```

:::