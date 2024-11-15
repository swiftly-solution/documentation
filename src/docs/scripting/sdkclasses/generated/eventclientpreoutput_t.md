---
title: EventClientPreOutput_t
index: true
order: 2
category:
  - Guide
---

# EventClientPreOutput_t

::: tabs
@tab Lua
# Constructor
```lua
EventClientPreOutput_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientpreoutput_t.LoopState
```
## RenderTime 
```lua
--- @type number
Read: eventclientpreoutput_t.RenderTime
Write: eventclientpreoutput_t.RenderTime = value
```
## RenderFrameTime 
```lua
--- @type number
Read: eventclientpreoutput_t.RenderFrameTime
Write: eventclientpreoutput_t.RenderFrameTime = value
```
## RenderFrameTimeUnbounded 
```lua
--- @type number
Read: eventclientpreoutput_t.RenderFrameTimeUnbounded
Write: eventclientpreoutput_t.RenderFrameTimeUnbounded = value
```
## RealTime 
```lua
--- @type number
Read: eventclientpreoutput_t.RealTime
Write: eventclientpreoutput_t.RealTime = value
```
## RenderOnly 
```lua
--- @type boolean
Read: eventclientpreoutput_t.RenderOnly
Write: eventclientpreoutput_t.RenderOnly = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientpreoutput_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientpreoutput_t:IsValid()
```

:::