---
title: EventClientOutput_t
index: true
order: 2
category:
  - Guide
---

# EventClientOutput_t

::: tabs
@tab Lua
# Constructor
```lua
--- @param ptr string
EventClientOutput_t(ptr)
```
# Properties
## LoopState (Read-Only)
```lua
--- @type EngineLoopState_t
Read: eventclientoutput_t.LoopState
```
## RenderTime 
```lua
--- @type number
Read: eventclientoutput_t.RenderTime
Write: eventclientoutput_t.RenderTime = value
```
## RealTime 
```lua
--- @type number
Read: eventclientoutput_t.RealTime
Write: eventclientoutput_t.RealTime = value
```
## RenderFrameTimeUnbounded 
```lua
--- @type number
Read: eventclientoutput_t.RenderFrameTimeUnbounded
Write: eventclientoutput_t.RenderFrameTimeUnbounded = value
```
## RenderOnly 
```lua
--- @type boolean
Read: eventclientoutput_t.RenderOnly
Write: eventclientoutput_t.RenderOnly = value
```
# Functions
## ToPtr
```lua
--- @return string
eventclientoutput_t:ToPtr()
```
## IsValid
```lua
--- @return bool
eventclientoutput_t:IsValid()
```

:::