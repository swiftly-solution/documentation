---
title: EventSetTime_t
index: true
order: 2
category:
  - Guide
---

# EventSetTime_t

::: tabs
@tab Lua
# Constructor
```lua
EventSetTime_t(ptr --[[ string ]])
```
# Properties
## LoopState (Read-Only)
```lua
@type EngineLoopState_t
Read: eventsettime_t.LoopState
```
## ClientOutputFrames 
```lua
@type number
Read: eventsettime_t.ClientOutputFrames
Write: eventsettime_t.ClientOutputFrames = value
```
## RealTime 
```lua
@type number
Read: eventsettime_t.RealTime
Write: eventsettime_t.RealTime = value
```
## RenderTime 
```lua
@type number
Read: eventsettime_t.RenderTime
Write: eventsettime_t.RenderTime = value
```
## RenderFrameTime 
```lua
@type number
Read: eventsettime_t.RenderFrameTime
Write: eventsettime_t.RenderFrameTime = value
```
## RenderFrameTimeUnbounded 
```lua
@type number
Read: eventsettime_t.RenderFrameTimeUnbounded
Write: eventsettime_t.RenderFrameTimeUnbounded = value
```
## RenderFrameTimeUnscaled 
```lua
@type number
Read: eventsettime_t.RenderFrameTimeUnscaled
Write: eventsettime_t.RenderFrameTimeUnscaled = value
```
## TickRemainder 
```lua
@type number
Read: eventsettime_t.TickRemainder
Write: eventsettime_t.TickRemainder = value
```
# Functions
## ToPtr
```lua
@returns string
eventsettime_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventsettime_t:IsValid()
```

:::