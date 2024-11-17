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
--- @param ptr string
EventClientFrameSimulate_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientframesimulate_t.LoopState
```
## RealTime 
```lua
--- @type number
Read: eventclientframesimulate_t.RealTime
Write: eventclientframesimulate_t.RealTime = value
```
## FrameTime 
```lua
--- @type number
Read: eventclientframesimulate_t.FrameTime
Write: eventclientframesimulate_t.FrameTime = value
```
## ScheduleSendTickPacket 
```lua
--- @type boolean
Read: eventclientframesimulate_t.ScheduleSendTickPacket
Write: eventclientframesimulate_t.ScheduleSendTickPacket = value
```
# Functions
## ToPtr
```lua
--- @return string
eventclientframesimulate_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventclientframesimulate_t:IsValid()
```

:::