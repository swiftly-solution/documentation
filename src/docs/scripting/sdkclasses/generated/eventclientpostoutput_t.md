---
title: EventClientPostOutput_t
index: true
order: 2
category:
  - Guide
---

# EventClientPostOutput_t

::: tabs
@tab Lua
# Constructor
```lua
EventClientPostOutput_t(ptr --[[ string ]])
```
# Properties
## LoopState (Read-Only)
```lua
@type EngineLoopState_t
Read: eventclientpostoutput_t.LoopState
```
## RenderTime 
```lua
@type number
Read: eventclientpostoutput_t.RenderTime
Write: eventclientpostoutput_t.RenderTime = value
```
## RenderFrameTime 
```lua
@type number
Read: eventclientpostoutput_t.RenderFrameTime
Write: eventclientpostoutput_t.RenderFrameTime = value
```
## RenderFrameTimeUnbounded 
```lua
@type number
Read: eventclientpostoutput_t.RenderFrameTimeUnbounded
Write: eventclientpostoutput_t.RenderFrameTimeUnbounded = value
```
## RenderOnly 
```lua
@type boolean
Read: eventclientpostoutput_t.RenderOnly
Write: eventclientpostoutput_t.RenderOnly = value
```
# Functions
## ToPtr
```lua
@returns string
eventclientpostoutput_t:ToPtr()
```
## IsValid
```lua
@returns bool
eventclientpostoutput_t:IsValid()
```

:::