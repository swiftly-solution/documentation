---
title: EventClientFrameSimulate_t
index: true
order: 2
category:
  - Guide
---

# EventClientFrameSimulate_t

::: tabs
@tab Lua
# Constructor
```lua
EventClientFrameSimulate_t(ptr --[[ string ]])
```
# Properties
## LoopState 
```lua
@type EngineLoopState_t
Read: eventclientframesimulate_t.LoopState
Write: eventclientframesimulate_t.LoopState = value
```
## RealTime 
```lua
@type number
Read: eventclientframesimulate_t.RealTime
Write: eventclientframesimulate_t.RealTime = value
```
## FrameTime 
```lua
@type number
Read: eventclientframesimulate_t.FrameTime
Write: eventclientframesimulate_t.FrameTime = value
```
## WhenScheduleSendTickPacket 
```lua
@type number
Read: eventclientframesimulate_t.WhenScheduleSendTickPacket
Write: eventclientframesimulate_t.WhenScheduleSendTickPacket = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientframesimulate_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientframesimulate_t:IsValid()
```

:::